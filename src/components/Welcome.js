import React, { useEffect, useMemo, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector }    from "@web3-react/walletlink-connector";

import ContractAbi from '../artifacts/contracts/Allymals.sol/Allymals.json';
import Modal from './Modal.js';
import "./Welcome.css";
import welcomeGif from '../images/welcomeGif.gif';

import { ethers } from 'ethers';
import EthereumSession from '../lib/eth-session.js';

const mainnetConfig = {
    'CONTRACT': '0x88f3a6c8cc165e513b3018e4f320c91662494fbc',
    'CHAIN_ID':  1,
    'RPC_URL':   process.env.INFURA_API_MAINNET_KEY,
    'ABI':       ContractAbi.abi
}

/*
const rinkebyConfig = {
    'CONTRACT': '0x91F9EA5939Cc707357808481b1B90ddaDa81bf33',
    'CHAIN_ID':  4,
    'RPC_URL':   process.env.INFURA_API_RINKEBY_KEY,
    'ABI':       ContractAbi.abi
}
*/

const config = mainnetConfig;

const CONNECTORS = {};
CONNECTORS.Walletlink = new WalletLinkConnector({
    url: config.RPC_URL,
    appLogoUrl: null,
    appName: "Allymals",
});

CONNECTORS.WalletConnect = new WalletConnectConnector({
    supportedChainIds: [config.CHAIN_ID],
    rpc: config.RPC_URL,
});

export default function Welcome () {
    const context = useWeb3React();
    
    const [walletAddress, setWalletAddress] = useState(null);

    const signedIn = !!walletAddress;

    const [contractWithSigner, setContractWithSigner] = useState(null);
    const [tokenPrice, setTokenPrice] = useState(0);
    const [howManyTokens, setHowManyTokens] = useState(20)
    const [totalSupply, setTotalSupply] = useState(0);

    const [modalShown, toggleModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const ethereumSession = useMemo(() => {
        if( window.ethereum ){
            const session = new EthereumSession({
                chain:           EthereumSession.COMMON_CHAINS[ config.CHAIN_ID ],
                contractAddress: config.CONTRACT,
                contractABI:     config.ABI
            });
            return session;
        }
        else{
            return null;
        }
    },[]);

    useEffect(() => { 
        if( window.ethereum ){
            ethereumSession.connectEthers()
                .then(() => loadContractData())
                .then(() => {
                    if( ethereumSession.hasAccounts() )
                        setWalletAddress( ethereumSession.wallet.accounts[0] );
                })
                .catch( err => {
                    if( err.code === "CALL_EXCEPTION" ){
                        //we're on the wrong chain
                    }
                    else{
                        debugger
                    }
                })
        }
    }, []);

    async function connectProvider( connector ){
        context.activate( connector, async (err) => {
          //other connectors
          if( err.code === 4001 ){
            //WalletLink: User denied account authorization
            console.debug( err.message );
            return;
          }
          else if( err.name === 'UserRejectedRequestError' ){
            //WalletConnect: The user rejected the request
            console.debug( err.message );
            return;
          }
          else{
            console.warn( err.message );
          }
        });
    }

    function redirect( to ){
        if( to === 'metamask' ){
            const link = 'https://metamask.app.link/dapp/'+ window.location.href.substr( 8 );
            window.location = link;
        }
        else if( to === 'trustwallet' ){
            const link = 'https://link.trustwallet.com/open_url?coin_id=60&url='+ window.location.href;
            window.location = link;
        }
    }

    async function signIn() { 
        if ( !window.ethereum ) {
            setErrorMessage(<div id="providers">
                <p>No Ethereum interface injected into browser.<br />Other providers:</p>
                <ul>
                    <li onClick={() => connectProvider( CONNECTORS.Walletlink )}>&bull; Coinbase Wallet</li>
                    <li onClick={() => redirect( 'metamask' )}>&bull; MetaMask</li>
                    <li onClick={() => redirect( 'trustwallet' )}>&bull; Trust Wallet</li>
                    <li onClick={() => connectProvider( CONNECTORS.WalletConnect )}>&bull; WalletConnect</li>
                </ul>
            </div>);
            toggleModal(true);
            return;
        }

        try{
            let curChain = await ethereumSession.getWalletChainID();
            await ethereumSession.connectEthers( true );
            if( curChain !== ethereumSession.chain.hex ){
                curChain = await ethereumSession.getWalletChainID();
                if( curChain === ethereumSession.chain.hex ){
                    //force the browser to switch to the new chain
                    window.location.reload();
                    return;
                } else {
                    setErrorMessage( `Switch network to the ${ethereumSession.chain.name} before continuing.`)
                    toggleModal(true);
                    return;
                }
            }

            if (ethereumSession.hasAccounts()) {
                setWalletAddress(ethereumSession.wallet.accounts[0])
                await loadContractData()
            }
        }
        catch( error ){
            if (error.code === 4001) {
                setErrorMessage("Sign in to mint Squiffys!")
                toggleModal(true);
            } else { 
                setErrorMessage(error)
                toggleModal(true);
            }
        }
    }

    async function signOut() {
        setWalletAddress(null)
    }

    async function loadContractData () {
        const contract = ethereumSession.contract;
        const signer = ethereumSession.ethersProvider.getSigner();
        const contractWithSigner = contract.connect(signer)
        const totalSupplyInit = await contract.totalSupply();
        let tokenPrice;
        if (totalSupplyInit.toNumber() < 500) {
            tokenPrice = await contract.getPresalePrice();
        } else { 
            tokenPrice = await contract.getPrice();
        }

        setContractWithSigner(contractWithSigner);
        setTokenPrice(tokenPrice);
        setTotalSupply(totalSupplyInit.toNumber())
    }

    async function mint () { 
        if (!signedIn || !contractWithSigner){
            setErrorMessage("Please connect wallet or reload the page!")
            toggleModal(true);
            return
        }

        const secondsSinceEpoch = Math.round(Date.now() / 1000);
        if( secondsSinceEpoch < 1634659200 ){
            setErrorMessage("Sale is not active yet.  Try again later!")
            toggleModal(true);
            return;
        }

        if( !(await ethereumSession.connectAccounts( true )) ){
            setErrorMessage("Please unlock your wallet and select an account.")
            toggleModal(true);
            return;
        }

        if( !(await ethereumSession.connectChain( true )) ){
            setErrorMessage(`Please open your wallet and select ${ethereumSession.chain.name}.`);
            toggleModal(true);
            return;
        }

        if ( ethereumSession.chain.hex !== await ethereumSession.getWalletChainID() ){
            window.location.reload();
            return;
        }

        //connected
        try{
            const price = String(tokenPrice * howManyTokens)

            const overrides = {
                from: walletAddress, 
                value: price
            }

            const gasBN = await ethereumSession.contract.estimateGas.mint(howManyTokens, overrides);
            const finalGasBN = gasBN.mul( ethers.BigNumber.from(11) ).div( ethers.BigNumber.from(10) );
            overrides.gasLimit = finalGasBN.toString();

            const txn = await contractWithSigner.mint(howManyTokens, overrides)
            await txn.wait();
            setMintingSuccess(howManyTokens)
        } catch (error) {
            if (error.error) {
                setMintingError(error.error.message)
            } 
        }
    }

    const setMintingSuccess = (howManyTokens) => {
        setErrorMessage("Congrats on minting " + howManyTokens + "  Squiffys!!");
        toggleModal(true);
    }

    const setMintingError = (error) => {
        setErrorMessage(error);
        toggleModal(true);
    }

    const mintOne = () => { 
        setErrorMessage("Must mint atleast one Squiffy!")
        toggleModal(true);
    }

    function checkHowMany (newNumber) { 
        if (newNumber > 20) {
            setHowManyTokens(20)
        } else if (newNumber < 1) { 
            setHowManyTokens("")
        } else { 
            setHowManyTokens(newNumber) 
        }
    }

    return (
        <div className="welcome" id="Welcome">
            <div className="welcome__wrapper">
                <div className="welcome__container">
                    <h1>Mint a Squiffy Badger Rabbit</h1> 
                    {signedIn ? <button className="welcome__button" onClick={() => signOut()}>Wallet Connected<br /> Click to Sign Out</button> : <button className="welcome__button" onClick={() => signIn()}>Connect Wallet</button>}
                    {signedIn ? <p>Number of Squiffy's Minted: {totalSupply} / 3210</p> : <p>Number of Squiffy's Minted: - / 3210</p>}
                    {totalSupply < 500 ? <p>Input number of Squiffy's to Mint:<br/><span>(Presale 0.02 ETH)</span></p> : <p>Input number of Squiffy's to Mint:<br/><span>(0.03 ETH)</span></p>}
                    <div className={signedIn ? "welcome__signIn-input" : "welcome__signIn-input-false"}>
                        <input 
                            type="number" 
                            min="1"
                            max={20}
                            value={howManyTokens}
                            onChange={ e => checkHowMany(e.target.value) }
                            name="" 
                        />
                    </div>
                    {howManyTokens > 0 ? <button className={signedIn ? "welcome__button" : "welcome__buttonInactive"} onClick={() => mint()}>Mint {howManyTokens} Squiffy's</button> : <button className={signedIn ? "welcome__button" : "welcome__buttonInactive"} onClick={() => mintOne()}>Mint {howManyTokens} Squiffys</button>}
                </div>
                <div className="welcome__imgContainer">
                    <img src={welcomeGif} alt="Squiffy Gif"/>
                </div>
            </div>
            <Modal
                shown={modalShown}
                close={() => {
                    toggleModal(false);
                }}
                message={errorMessage}
            ></Modal>
        </div>
    
    );
}

import React, { useState } from 'react';
import GemGrooveThumb from './GemGrooveThumb.jpg';

const LogoApp = () => {
  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);

  const handleClick = async () => {
    if (typeof window.ethereum === 'undefined') {
      alert('Please install MetaMask to connect to your wallet.');
      return;
    }

    try {
      await window.ethereum.enable();
      setIsMetaMaskConnected(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMintClick = () => {
    if (!isMetaMaskConnected) {
      alert("Please connect to MetaMask first.");
      return;
    }
    alert("Minting Jams soon...hang tight!");
  };

  return (
    <div style={{backgroundColor: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <img src={GemGrooveThumb} alt="GemGroove Thumb" />
      <button onClick={handleClick} style={{backgroundColor: 'orange', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '20px', position: 'fixed', bottom: '20px', left: '20px'}}>
        Connect Wallet
      </button>
      <button onClick={handleMintClick} style={{backgroundColor: 'orange', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', marginTop: '1px'}}>
        Mint My Jam</button>
        <button onClick={handleMintClick} style={{backgroundColor: 'orange', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '20px', marginTop: '20px', position: 'fixed',top:'90px'}}>
        Our Purpose</button>
      <a href="mailto:Hderek22@icloud.com">
        <button style={{backgroundColor: 'orange', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '20px', marginTop: '20px', position: 'fixed', bottom: '20px', right: '20px'}}>
          Contact GemGroove
        </button>
      </a>
    </div>
  );
};

export default LogoApp;

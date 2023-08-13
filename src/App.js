import React, { useEffect, useRef } from 'react';
import './App.css';
import Secondpart from './components/Secondpart/Secondpart';
import Button from './components/button/Button';
import Fourthsection from './components/fourth_section/Fourthsection';
import Navbar from "./components/navigation/Navbar"
import Thirdsection from './components/third_section/Thirdsection';
import eth from "./assets/ethLogo.png"
import BlockChain from "./assets/BlockChain_Capital.svg"
import Maven from "./assets/Maven11.png"
import KRI from "./assets/KRI.png"
import Tokonomy from "./assets/Tokonomy.png"
import JhonLilic from "./assets/JohnLilic-profile.jpg"
import K from "./assets/K.png"
import Footer from './components/footer/Footer';
import { motion } from 'framer-motion';


function App() {

  return (
    <>
      {/* This will Display the First section of page or the part of page which appear below the Navbar along with navbar  */}
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main className='flex justify-center items-center flex-col h-[85vh] '>
          <motion.div className="main-container flex items-center flex-col gap-2 w-[70%] text-center "
            initial={{ opacity: 0, y: 100 }} // Initial properties
            animate={{ opacity: 1, y: 0 }} // Animation properties
            transition={{ duration: 1, delay: 1 }} >
            <h1 className='text-[#e9d2c4] text-[4rem] opacity-100'>The Open Index Protocol</h1>
            <h3 className='text-[#fff] text-2xl w-[82%] mb-8'>By collecting and customising data in minutes, Superchain serves as the layer on top of which builders create applications, faster</h3>
            <Button padding="20px 50px" />
          </motion.div>
        </main >
      </div >
      {/* End of First Section of the page */}

      {/* Start of Second Section */}
      <div className="second-section">
        <Secondpart />
      </div>
      {/* End of Second Section */}

      {/* Start of Third Section */}

      <Thirdsection />

      {/* End of Third Section */}

      {/* Start of Fourth Section */}

      <Fourthsection />

      {/* End of Fourth Section */}


      {/* Start of Fifth Section */}

      <div className='fift-section flex justify-center items-center flex-col h-[85vh] '>
        <div className="main-container flex items-center flex-col gap-2 w-[70%] text-center " >
          <h1 className='text-[#e9d2c4] text-[4rem]'>Networks supported</h1>
          <p className='text-[#eaecf0] text-lg mb-8 font-normal'>Superchain currently supports common <span className='Ethereum'>Ethereum</span> (EVM) based chains and L2s</p>
          <img src={eth} alt="Eth" className='w-[50px] h-auto' />
        </div>
      </div>

      {/* End of Fifth Section */}

      {/* Start of Sixth section */}
      <div className="center flex justify-center items-center flex-col gap-8 h-[40rem]">
        <h1 className='text-4xl '>Backed by Web3 leaders</h1>
        <div className="logos flex gap-4">
          <img src={BlockChain} alt="BlockChain" className='w-30' />
          <img src={Maven} alt="BlockChain" className='w-28' />
          <img src={KRI} alt="BlockChain" className='w-28' />
          <img src={Tokonomy} alt="BlockChain" className='w-28' />
          <img src={JhonLilic} alt="BlockChain" className='w-16' />
          <img src={K} alt="BlockChain" className='w-20' />
        </div>
      </div>
      {/* End of Sixth section */}

      {/* Start of Footer */}

      <Footer />

      {/* End of Footer */}

    </>

  );
}

export default App;

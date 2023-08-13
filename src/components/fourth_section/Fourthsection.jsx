import React from "react";
import Profilephoto from "../profile_photo/Profilephoto";
import NickGardner from "../../assets/Nick Gardner.jpeg";
import BlockChain_Capital from "../../assets/BlockChain_Capital.svg";
import KinjalShah from "../../assets/KinjalShah.jpeg";
import JohnLilic from "../../assets/JohnLilic.png";
import JohnLilicProfile from "../../assets/JohnLilic-profile.jpg";

function Fourthsection() {
  return (
    <>
      <div className="center flex justify-center items-center align-middle text-[#0e1015] text-2xl font-medium flex-col gap-4 m-28 ">
        <h3>The protocol is purpose-built and enables four key features:</h3>
        <div className="point text-[#a8a2a2] text-xl flex gap-8 ">
          <div className="line h-auto bg-[#a8a2a2]">|</div>
          <ol className="flex flex-col gap-2">
            <li>1. The ability for users to become network operators</li>
            <li>2. Access to historical and real-time low-latency data</li>
            <li>3. Advanced analytics to improve utilization</li>
            <li>4. Customizable toolboxes for application-specific use</li>
          </ol>
        </div>
        <h3 className="text-center w-[55%]">
          "Instead of packaging all of these components into a Web2 API service,
          Superchain has built a Web3 business model for Web3 data. It is a
          crypto-native solution for on-chain analytics."
        </h3>
        <div className="gap-1">
          <Profilephoto
            src={NickGardner}
            name="Nick Gardner"
            about="Whisper"
            radius="100%"
          />
        </div>
        <hr className="bg-black w-full my-20" />
        <img src={BlockChain_Capital} alt="Blockchain" />
        <h3 className="text-center w-[75%]">
          "Superchain’s technology and focus on toolboxes positions it as the
          premier Open Index Protocol. Both James and Max have a steadfast
          vision of how an open, fast, and decentralized index protocol will win
          - which we are deeply aligned with."
        </h3>
        <div className="flex justify-center items-center flex-col">
          <Profilephoto
            src={KinjalShah}
            name="Kinjal Shah"
            about="General Partner at Blockchain Capital."
            radius="100%"
          />
        </div>
        <hr className="bg-black w-full my-20" />
        <img src={JohnLilic} alt="Blockchain" />
        <h3 className="text-center w-[75%]">
          "Superchain is the most based chain of them all"
        </h3>
        <div className="flex justify-center items-center flex-col">
          <Profilephoto
            src={JohnLilicProfile}
            name="John Lilic"
            about="Product development advisor and seed investor"
            radius="100%"
          />
        </div>
        <hr className="bg-black w-full mt-20" />
      </div>
    </>
  );
}

export default Fourthsection;

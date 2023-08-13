import React from "react";
import Third_Section from "../../assets/Third_Section.jpg";

function Thirdsection() {
  return (
    <>
      <div className="third-section flex justify-around px-10 py-40 ">
        <div className="left text-[#e9d2c4] text-5xl flex flex-col gap-4 px-10 w-[100%] mr-40">
          <h1 className="relative">
            <span className="text-red-500 font-extralight absolute top-[-4rem]">
              _
            </span>
            How Superchain works
          </h1>
        </div>

        <div className="right flex gap-16">
          <div className="straight-line w-1 bg-red-600 relative">
            <div className="circle bg-[#838383] absolute right-[-1.7rem] top-0 "></div>
            <div className="circle bg-[#838383] absolute right-[-1.7rem] top-[10rem] "></div>
            <div className="circle bg-[#838383] absolute right-[-1.7rem] top-[22rem] "></div>
            <div className="circle bg-[#838383] absolute right-[-1.7rem] top-[35rem] "></div>
          </div>
          <div className="right-part-two">
            <div className="heading flex flex-col gap-2 mb-16">
              <h1 className="text-[#e9d2c4] font-semibold text-xl">
                Shift in mindset
              </h1>
              <p className="text-[#838383] text-base ">
                Superchain's solution offers a shift in mindset from "Web2"
                centralised architectures to "Web3" decentralised architecture.
                Data indexes from Superchain are pushed out to users benefitting
                from low latency performance by processing locally.
              </p>
            </div>
            <div className="heading flex flex-col gap-2 mb-16">
              <h1 className="text-[#e9d2c4] font-semibold text-xl">
                Consistent and granular model
              </h1>
              <p className="text-[#838383] text-base ">
                Superchain unifies data into a consistent and granular model,
                rather than simply aggregating it due to the limitations of
                centralised architecture. This allows data to be fast,
                customisable and decentralised
              </p>
            </div>
            <div className="heading flex flex-col gap-2 mb-16">
              <h1 className="text-[#e9d2c4] font-semibold text-xl">
                Storage and Streaming
              </h1>
              <p className="text-[#838383] text-base ">
                Storage and Streaming Superchain has its own customised data
                storage platform and streaming capabilities. Developers interact
                with the indices via an SDK for on-the-wire speeds that avoid
                the use of slow presentation layers.
              </p>
            </div>
            <div className="heading flex flex-col gap-2 ">
              <h1 className="text-[#e9d2c4] font-semibold text-xl">
                Designed around users
              </h1>
              <p className="text-[#838383] text-base ">
                Superchain’s aim is to realise a fully decentralized data
                protocol designed around users, rather than computer
                limitations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={Third_Section} alt="SuperChain Network" />
      </div>
    </>
  );
}

export default Thirdsection;

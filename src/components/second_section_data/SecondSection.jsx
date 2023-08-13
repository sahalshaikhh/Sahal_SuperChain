import React from "react";

function SecondSection(props) {
  return (
    <>
      {/* justify-content: end;
    text-align: end; */}

      <div
        className="flex"
        style={{ justifyContent: props.justifyEnd, textAlign: props.text }}
      >
        <div className="second-main-section w-[70%] py-14 px-[9rem] flex flex-col gap-8">
          <h1 className="text-4xl font-semibold">{props.heading}</h1>
          <p className=" text-[#838383] text-2xl">{props.detail}</p>
        </div>
      </div>
    </>
  );
}

export default SecondSection;

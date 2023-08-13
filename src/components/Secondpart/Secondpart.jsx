import React from "react";
import SecondSection from "../second_section_data/SecondSection";
import Button from "../button/Button";

function Secondpart() {
  return (
    <>
      <SecondSection
        heading="Web3 data is broken"
        detail="Most indexes today are closed, siloed, or centralised, which leads to an unacceptable developer experience and users suffer. Specifically, we face:"
      />
      <SecondSection
        justifyEnd="end"
        text="end"
        heading="High Latency"
        detail="Latency for queries today is unacceptable. Some offer data in seconds, whereas others in hundreds of milliseconds. When it takes this long to load a dApp users switch off."
      />
      <SecondSection
        heading="Aggregated Data"
        detail="Indexes usually aggregate data to improve performance and operational experience. But this is far from ideal for many use cases because users miss valuable data."
      />
      <SecondSection
        justifyEnd="end"
        text="end"
        heading="Barriers to Entry"
        detail="Barriers to Entry Presently developers integrate with a fixed API or query interface which they find quickly limiting. They have to waste time building their own indexer. This is a major barrier to entry for the next wave of blockchain innovation."
      />

      <div className="w-[91%] pb-32">
        <div className="flex justify-end items-center">
          <Button padding="20px 50px" />
        </div>
      </div>
    </>
  );
}

export default Secondpart;

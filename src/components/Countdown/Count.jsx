import React from "react";

export const Count = () => {
  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max ">
      <div className="flex flex-col p-2 rounded-xl bg-white shadow-[0_2.133px_10.667px_0_rgba(9,43,94,0.16)]">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 15 }}></span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 rounded-xl bg-white shadow-[0_2.133px_10.667px_0_rgba(9,43,94,0.16)]">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 10 }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 rounded-xl bg-white shadow-[0_2.133px_10.667px_0_rgba(9,43,94,0.16)]">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 24 }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2  rounded-xl bg-white shadow-[0_2.133px_10.667px_0_rgba(9,43,94,0.16)]">
        <span className="countdown font-mono text-5xl">
          <span style={{ "--value": 10 }}></span>
        </span>
        sec
      </div>
    </div>
  );
};

import React from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

const CircularProgress = ({
  corHex,
  tema,
  porcentagem,
}: {
  corHex: string;
  tema: string;
  porcentagem: number;
}) => {
  return (
    <section className="flex flex-col items-center">
      <CircularProgressbarWithChildren
        className="w-28 h-28"
        value={porcentagem}
        strokeWidth={12}
        styles={buildStyles({
          pathColor: `${corHex}`,
          textColor: `${corHex}`,
          trailColor: "#d6d6d6",
        })}
      >
        <p className={`text-xl text-[${corHex}]`}>{porcentagem}%</p>
      </CircularProgressbarWithChildren>
      <p>{tema}</p>
    </section>
  );
};

export default CircularProgress;

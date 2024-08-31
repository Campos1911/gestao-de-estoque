import React from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

const CircularProgress = ({
  corHex,
  tema,
  porcentagem,
  width,
  height,
}: {
  corHex: string;
  tema: string;
  porcentagem: number;
  width: string;
  height: string;
}) => {
  return (
    <section className="flex flex-col items-center">
      <CircularProgressbarWithChildren
        className={`${width} ${height}`}
        value={porcentagem}
        strokeWidth={12}
        styles={buildStyles({
          pathColor: `${corHex}`,
          textColor: `${corHex}`,
          trailColor: "#d6d6d6",
        })}
      >
        <p className={`text-xl font-bold text-[${corHex}]`}>{porcentagem}%</p>
      </CircularProgressbarWithChildren>
      <p>{tema}</p>
    </section>
  );
};

export default CircularProgress;

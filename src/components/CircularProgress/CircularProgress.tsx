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
    <section className="flex flex-col items-center gap-2">
      <CircularProgressbarWithChildren
        className={`xl:w-44 xl:h-44 lg:w-28 lg:h-28 w-24 h-24`}
        value={porcentagem}
        strokeWidth={12}
        styles={buildStyles({
          pathColor: `${corHex}`,
          trailColor: "#d6d6d6",
        })}
      >
        <p className={`lg:text-xl font-bold text-[${corHex}]`}>
          {porcentagem}%
        </p>
      </CircularProgressbarWithChildren>
      <p className="lg:text-base text-xs text-center">{tema}</p>
    </section>
  );
};

export default CircularProgress;

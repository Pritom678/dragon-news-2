import React from "react";
import swimmingImg from "../../assets/swimming.png";
import playingImg from "../../assets/playground.png";
import classImg from "../../assets/class.png";

const QZone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-bold mb-5">QZone</h2>
      <div className="space-y-5">
        <img src={swimmingImg} alt="" />
        <img src={playingImg} alt="" />
        <img src={classImg} alt="" />
      </div>
    </div>
  );
};

export default QZone;

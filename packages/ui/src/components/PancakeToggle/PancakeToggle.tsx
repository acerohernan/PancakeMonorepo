import React from "react";
import { PancakeInput, PancakeLabel, PancakeStack } from "./StyledPancakeToggle";
import { PancakeToggleProps, scales } from "./types";

const PancakeToggle: React.FC<PancakeToggleProps> = ({ checked, scale = scales.LG, ...props }) => (
  <PancakeStack scale={scale}>
    <PancakeInput id={props.id || "pancake-toggle"} scale={scale}>
      {/* <PancakeLabel scale={scale} checked={checked} htmlFor={props.id || "pancake-toggle"}>
        <div className="pancakes">
          <div className="pancake" />
          <div className="pancake" />
          <div className="pancake" />
          <div className="butter" />
        </div>
      </PancakeLabel> */}
      {/* <div className="pancakes">
        <div className="pancake" />
        <div className="pancake" />
        <div className="pancake" />
        <div className="butter" />
      </div> */}
    </PancakeInput>
  </PancakeStack>
);

export default PancakeToggle;

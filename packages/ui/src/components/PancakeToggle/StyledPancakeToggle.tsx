import styled from "styled-components";
import { Scales, scaleKeys, ScaleKeys, scales, PancakeToggleProps, HandleProps } from "./types";

const scaleKeyValues = {
  sm: {
    pancakeSize: "14px", // The size of a pancake (the handle)
    travelDistance: "14px", // How far pancakes should travel horizontally
    toggleHeight: "20px", // General Height and
    toggleWidth: "36px", // Width of a toggle box
    pancakeThickness: "1px", // Bottom shadow of a pancake
    pancakeTwoOffset: "0px", // Pancakes don't look good when they are concentric
    pancakeThreeOffset: "-3px", // so pancake 2 and 3 are shifted a little bit
    butterTop: "3px", // Fine adjustments for butter position
    butterLeft: "10px",
    butterWidth: "6px", // Widht and
    butterHeight: "5px", // Height of a butter block on top of pancakes
    butterThickness: "0.5px", // Shadow on the bottom of the butter block
    butterRadius: "2px", // Rounded corners for the butter
    butterSmearOneTop: "10px", // There is melted butter
    butterSmearOneLeft: "2.5px", // next to the butter block
    butterSmearTwoTop: "11px", // implemented with :before and :after
    butterSmearTwoRight: "2.5px", // these values adjust the position of it
  },
  md: {
    pancakeSize: "24px",
    travelDistance: "24px",
    toggleHeight: "32px",
    toggleWidth: "56px",
    pancakeThickness: "1.5px",
    pancakeTwoOffset: "-1px",
    pancakeThreeOffset: "-6px",
    butterTop: "5px",
    butterLeft: "13px",
    butterWidth: "10px",
    butterHeight: "8px",
    butterThickness: "0.75px",
    butterRadius: "3px",
    butterSmearOneTop: "15px",
    butterSmearOneLeft: "3.75px",
    butterSmearTwoTop: "16px",
    butterSmearTwoRight: "3.75px",
  },
  lg: {
    pancakeSize: "31px",
    travelDistance: "31px",
    toggleHeight: "40px",
    toggleWidth: "72px",
    pancakeThickness: "2px",
    pancakeTwoOffset: "-3px",
    pancakeThreeOffset: "-8px",
    butterTop: "3px",
    butterLeft: "16px",
    butterWidth: "12px",
    butterHeight: "11px",
    butterThickness: "1px",
    butterRadius: "4px",
    butterSmearOneTop: "20px",
    butterSmearOneLeft: "5px",
    butterSmearTwoTop: "22px",
    butterSmearTwoRight: "5px",
  },
};

const getScale =
  (property: ScaleKeys) =>
  ({ scale = scales.LG }: PancakeToggleProps) =>
    scaleKeyValues[scale][property];

export const PancakeStack = styled.div<HandleProps>`
  position: relative;
  display: inline-block;

  &:label:before {
    content: none;
  }

  .pancakes {
    position: absolute;
    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .pancake {
    background: #e27c31;
  }
`;

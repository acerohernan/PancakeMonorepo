import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <path d="M9.43458 5.26321C9.31196 4.60661 9.81578 4 10.4837 4C11.0732 4 11.551 4.47784 11.551 5.06729V6.38309C11.6985 6.37268 11.8483 6.36735 12 6.36735C12.1458 6.36735 12.2898 6.37227 12.4316 6.38189V5.06729C12.4316 4.47784 12.9094 4 13.4989 4C14.1668 4 14.6707 4.60661 14.548 5.26321L14.2592 6.80987C15.2505 7.24263 16 7.99428 16 8.93878V9.5102C16 10.2869 15.4862 10.9372 14.7678 11.3762C14.0438 11.8186 13.0645 12.0816 12 12.0816C10.9355 12.0816 9.95615 11.8186 9.23219 11.3762C8.51384 10.9372 8 10.2869 8 9.5102V8.93878C8 7.99928 8.74184 7.25052 9.72473 6.81689L9.43458 5.26321Z" />
    <path d="M6 11C6 12.1 5.1 13 4 13C2.9 13 2 12.1 2 11C2 9.9 2.9 9 4 9C5.1 9 6 9.9 6 11Z" />
    <path d="M4 14C4.39 14 4.76 14.04 5.13 14.1C4.73 14.78 4.5 15.56 4.5 16.39V18H1C0.447715 18 0 17.5523 0 17V16.43C0 15.62 0.48 14.9 1.22 14.58C2.07 14.21 3.01 14 4 14Z" />
    <path d="M22 11C22 12.1 21.1 13 20 13C18.9 13 18 12.1 18 11C18 9.9 18.9 9 20 9C21.1 9 22 9.9 22 11Z" />
    <path d="M22.78 14.58C23.52 14.9 24 15.62 24 16.43V17C24 17.5523 23.5523 18 23 18H19.5V16.39C19.5 15.56 19.27 14.78 18.87 14.1C19.24 14.04 19.61 14 20 14C20.99 14 21.93 14.21 22.78 14.58Z" />
    <path d="M12 12.75C13.63 12.75 15.07 13.13 16.24 13.65C17.32 14.13 18 15.21 18 16.39V17C18 17.5523 17.5523 18 17 18H7C6.44772 18 6 17.5523 6 17V16.39C6 15.21 6.68 14.13 7.76 13.65C8.93 13.14 10.37 12.75 12 12.75Z" />
  </Svg>
);

export default Icon;

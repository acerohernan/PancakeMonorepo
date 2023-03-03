import React, { useEffect } from "react";
import styled from "styled-components";
import { Box, BoxProps } from "../Box";

const StyledOverlay = styled(Box)`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => `${theme.colors.text}99`};
  z-index: 20;
`;

const BodyLock = () => {
  useEffect(() => {
    document.body.style.cssText = `overflow: hiddend`;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.cssText = `
            overflow: visible;
            overflow: overlay
        `;
    };
  }, []);

  return null;
};

const Overlay: React.FC<BoxProps> = (props) => (
  <>
    <BodyLock />
    <StyledOverlay role="presentation" {...props} />
  </>
);

export default Overlay;

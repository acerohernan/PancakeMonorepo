import { ComponentMeta } from "@storybook/react";
import React from "react";
import BoxComponent from "./Box";
import FlexComponent from "./Flex";
import GridComponent from "./Grid";

export default {
  title: "Components/Primitives",
  component: BoxComponent,
  argTypes: {},
} as ComponentMeta<typeof BoxComponent>;

export const Box: React.FC = () => (
  <div>
    <BoxComponent as="p">
      Contains background, border, layout, position, and space from{" "}
      <a href="https://styled-system.com/api" target="_blank" rel="noreferrer">
        Styled System&lsquo;s API
      </a>
    </BoxComponent>
  </div>
);

export const Flex: React.FC = () => (
  <div>
    <p>Based in the Box component. You can apply any flexboz properties on the Flex component.</p>
    <a href="https://styled-system.com/api#flexbox" target="_blank" rel="noreferrer">
      List of applicable props
    </a>
    <FlexComponent mt="40px" justifyContent="space-between">
      <span>Left</span>
      <span>Right</span>
    </FlexComponent>
    <FlexComponent justifyContent="center" mt="8px">
      <span>Center</span>
    </FlexComponent>
  </div>
);

export const Grid: React.FC = () => (
  <GridComponent
    justifyItems="center"
    alignContent="center"
    gridTemplateColumns="1fr 1fr"
    gridColumnGap="16px"
    style={{ backgroundColor: "#7645d9" }}
  >
    <BoxComponent style={{ backgroundColor: "#1fc7d4", width: "300px", height: "300px" }} />
    <BoxComponent style={{ backgroundColor: "#1fc7d4", width: "300px", height: "300px" }} />
  </GridComponent>
);

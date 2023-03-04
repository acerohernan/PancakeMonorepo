import React from "react";
import { ComponentMeta } from "@storybook/react";

import Text from "./Text";
import TooltipText from "./TooltipText";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    bold: {
      name: "bold",
      table: {
        type: { summary: "bool", detail: "Bold the text" },
      },
      control: {
        type: null,
      },
    },
    fontSize: {
      name: "fontSize",
      table: {
        type: { summary: "string", detail: "FontSIze px or em" },
        defaultValue: { summary: "16px" },
      },
    },
  },
} as ComponentMeta<typeof Text>;

export const Default: React.FC = () => (
  <div>
    <Text>Deafult</Text>
    <Text bold>Bold text</Text>
    <Text small>Small text</Text>
    <Text fontSize="24px">Custom fontsize</Text>
    <Text color="red">Custom color</Text>
    <Text color="primary">Custom color from theme</Text>
    <Text color="secondary" textTrasnform="uppercase">
      With text transform
    </Text>
    <Text textAlign="center">center</Text>
    <Text display="inline" color="textSubtle" textTrasnform="uppercase">
      Example of{" "}
    </Text>
    <Text display="inline" bold textTrasnform="uppercase">
      inline{" "}
    </Text>
    <Text display="inline" color="textSubtle" textTrasnform="uppercase">
      Text
    </Text>
    <Text ellipsis width="250px">
      Ellipsis: a lon text with an ellipsis just for the example
    </Text>
  </div>
);

export const TooltipTextVariant: React.FC = () => (
  <div>
    <Text>Use TooltipText for text that has tooltip, it accepts the same props as normal Text component</Text>
    <TooltipText>Example</TooltipText>
  </div>
);

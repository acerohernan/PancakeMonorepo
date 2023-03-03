import React, { useState } from "react";
import styled from "styled-components";
import { capitalize } from "lodash";
import { ComponentMeta } from "@storybook/react";

import Button from "./Button";
import IconButton from "./IconButton";
import { ExpandableButton, ExpandableLabel } from "./ExpandableButton";
import Flex from "../Box/Flex";
import Box from "../Box/Box";
import { AddIcon, AutoRenewIcon, LogoIcon } from "../Svg";
import { scales, variants } from "./types";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Row = styled(Flex)`
  margin-bottom: 32px;
  & > button + button,
  & > a + a {
    margin-left: 16px;
  }
`;

export const Default: React.FC = () => (
  <>
    <Box mb="32px">
      <button type="button">Unstyled Button</button>
    </Box>
    <Box mb="32px">
      {Object.values(variants).map((variant) => (
        <Box key={variant} mb="32px">
          {Object.values(scales).map((scale) => (
            <Button key={scale} variant={variant} scale={scale} mr="8px">
              {`${capitalize(variant)} ${scale.toUpperCase()}`}
            </Button>
          ))}
        </Box>
      ))}
    </Box>
    <Box>
      <Button mr="8px" disabled>
        Disabled
      </Button>
      <Button variant="secondary" disabled>
        Disabled
      </Button>
    </Box>
  </>
);

export const Anchors: React.FC = () => (
  <>
    <Box mb="32px">
      {Object.values(variants).map((variant) => (
        <Box key={variant} mb="32px">
          {Object.values(scales).map((scale) => (
            <Button
              as="a"
              href="https://pancakeswap.finance"
              key={scale}
              variant={variant}
              external
              mr="8px"
              scale={scale}
            >
              {`${capitalize(variant)} anchor ${scale.toUpperCase()}`}
            </Button>
          ))}
        </Box>
      ))}
    </Box>
    <Box>
      <Button as="a" href="https://pancakeswap.finance" mr="8px" external disabled>
        Disabled
      </Button>
      <Button as="a" href="https://pancakeswap.finance" variant="secondary" external disabled>
        Disabled
      </Button>
    </Box>
  </>
);

export const Variants: React.FC = () => (
  <Box width="640px">
    <Row>
      <Button width="100%">Full size</Button>
    </Row>
    <Row>
      <Button isLoading endIcon={<AutoRenewIcon spin color="currentColor" />}>
        Aproving
      </Button>
      <Button isLoading variant="success">
        Aproving
      </Button>
    </Row>
    <Row>
      <Button startIcon={<LogoIcon />}>Start Icon</Button>
      <Button endIcon={<LogoIcon />}>End Icon</Button>
      <Button startIcon={<LogoIcon />} endIcon={<LogoIcon />}>
        Start and End Icon
      </Button>
    </Row>
    <Row>
      <IconButton>
        <LogoIcon />
      </IconButton>
      <IconButton variant="secondary">
        <AddIcon color="currentColor" />
      </IconButton>
    </Row>
    <Row>
      <IconButton scale="sm" variant="danger">
        <LogoIcon />
      </IconButton>
      <IconButton scale="sm" variant="success">
        <AddIcon color="currentColor" />
      </IconButton>
    </Row>
  </Box>
);

export const Expandable: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box width="640px">
      <Row>
        <ExpandableButton expanded={expanded} onClick={() => setExpanded((prev) => !prev)} />
        <ExpandableLabel expanded={expanded} onClick={() => setExpanded((prev) => !prev)}>
          Expandable Label
        </ExpandableLabel>
      </Row>
    </Box>
  );
};

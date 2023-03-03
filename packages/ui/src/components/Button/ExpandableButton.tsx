/* eslint-disable @typescript-eslint/no-empty-function */
import React, { PropsWithChildren } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "../Svg";
import Button from "./Button";
import IconButton from "./IconButton";

interface Props extends PropsWithChildren {
  onClick?: () => void;
  expanded?: boolean;
}

export const ExpandableButton: React.FC<Props> = ({ onClick, expanded, children }) => (
  <IconButton aria-label="Hide or show expandable content" onClick={onClick}>
    {children}
    {expanded ? <ChevronUpIcon color="invertedContrast" /> : <ChevronDownIcon color="invertedContrast" />}
  </IconButton>
);
ExpandableButton.defaultProps = {
  expanded: false,
  onClick: () => {},
};

export const ExpandableLabel: React.FC<Props> = ({ onClick, expanded, children }) => (
  <Button
    variant="text"
    aria-label="Hide or show expandable content"
    onClick={onClick}
    endIcon={expanded ? <ChevronUpIcon color="primary" /> : <ChevronDownIcon color="primary" />}
  >
    {children}
  </Button>
);
ExpandableLabel.defaultProps = {
  expanded: false,
  onClick: () => {},
};

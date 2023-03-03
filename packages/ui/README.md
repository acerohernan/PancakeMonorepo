# Acero's Pancake Uikit

Acero's Pancake Uikit is a set of components and hooks to use in Acero's Pancake apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @acerohernan/pancakeui`

## Setup

### Theme

Before using Acero's Pancake Uikit, you need to provide the theme file to styled-component.

```tsx
import { ThemeProvider } from "styled-components";
import { light, dark } from "@acerohernan/pancakeui";

<ThemeProvider theme={isDark ? dark : light}>...</ThemeProvider>;
```

**\*Note**: "isDark" is a boolean determinate when use the dark or light theme in your app.\*

### Reset

A reset CSS is avaiable as a global styled component.

```tsx
import { ResetCSS } from "@acerohernan/pancakeui";

<ResetCSS />;
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use component from the Uikit, you will be able to see the storybook documentation soon.

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

### ModalProvider

If you want you a built-in Modal component, you must add the _Modal Provider_ in your app

```tsx
import { ModalProvider } from "@acerohernan/pancakeui";

<ModalProvider>...</ModalProvider>;
```

And to use the modal you have avaliable the _useModal_ hook that receives the Modal component as the first argument and returns an array with the open handler as the first element and the close handler as the second element

```tsx
import { useModal, Modal, Button } from "@acerohernan/pancakeui";

const [openHandler, closeHandler] = useModal(<Modal>...</Modal>);

<Button onClick={openHandler}>Open modal</Button>;
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use component from the Uikit, you will be able to see the storybook documentation soon.

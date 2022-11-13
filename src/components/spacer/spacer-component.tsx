import React from "react";
import styled, {useTheme} from "styled-components";
import { View } from "react-native";
const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  return `${property}:${value}`;
};

const SpacerView = styled.View`
  ${({variant}) => variant};
`;

export const Spacer = ({position, size, children}) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};

export const Space = styled(View)`
<<<<<<< HEAD
  margin-bottom: 10px;
=======
  
  margin-bottom: 15px;
>>>>>>> 31933125442dc0ccc73c38f4d4e1066e8b7135a7
`;
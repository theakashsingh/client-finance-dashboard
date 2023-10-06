import FlexBetween from "@/components/FlexBetween";
import { useTheme } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  return (
    <FlexBetween
      mb="0.25rem"
      p="0.5rem 0rem"
      color={palette.grey[300]}
    >Har Har Mahadev</FlexBetween>
  );
};

export default Navbar;

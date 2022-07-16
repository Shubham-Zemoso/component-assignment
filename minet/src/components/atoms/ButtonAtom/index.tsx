import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface Props extends ButtonProps {
  handleClick?: () => void;
}

const ButtonAtom = (props: Props) => {
  return <Button sx={props.sx}>button</Button>;
};

export default ButtonAtom;

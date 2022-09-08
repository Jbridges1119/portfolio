import React from "react";
//MUI
import { Button } from "@mui/material";


type Props = {
  buttons: {
    name: string;
    link: string;
  }[];
};
type buttonType = {
  name: string;
  link: string;
};
const ButtonMap: React.FC<Props> = ({ buttons }) => {
  const buttonSx = {
    display: "flex",
    color: "#fff",
    borderRadius: 25,
    fontSize: 16,
    backgroundColor: "#7b27f6",
    width: "100px",
    pt: 0.9,
    fontWeight: "bold",
    textTransform: "none",
  };

  return (
    <>
      {buttons.map((button: buttonType) => {
        return (
          <Button
            key={button.link}
            href={button.link}
            target="_blank"
            sx={buttonSx}
          >
            {button.name}
          </Button>
        );
      })}
    </>
  );
};

export default ButtonMap;

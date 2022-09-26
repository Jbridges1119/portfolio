import React from "react";
//MUI
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { usePageLocation } from "../../../hooks/pageContext";

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
  const { buttonAnimate, letterAnimate } = usePageLocation();
  const buttonSx = {
    display: "flex",
    color: "#fff",
    borderRadius: 25,
    boxShadow: "0px 1px 3px 1px #424242",
    fontSize: 16,
    backgroundColor: "#7b27f6",
    // width: "100px",
    fontWeight: "bold",
    px:2,
    ":hover": {
      bgcolor: "#5802ff",
    },
  };

  return (
    <>
      {buttons.map((button: buttonType, i) => {
        return (
          <motion.div
            key={i}
            initial="preHover"
            whileHover="onHover"
            whileTap="onTap"
            variants={buttonAnimate}
            style={{
              maxWidth: "200px",
              borderRadius: 40,
              background: "black",
              marginBottom: "0.4rem",
            }}
          >
            <Button
              key={button.link}
              href={button.link}
              target="_blank"
              rel="noreferrer noopener"
              sx={buttonSx}
            >
              {button.name.split("").map((letter, i) => {
                return (
                  <motion.span
                    key={i}
                    style={{ paddingInline: "0.075em" }}
                    variants={letterAnimate}
                  >
                    {letter}
                  </motion.span>
                );
              })}
            </Button>
          </motion.div>
        );
      })}
    </>
  );
};

export default ButtonMap;

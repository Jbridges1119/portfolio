import React from "react";
//MUI
import { CardMedia } from "@mui/material";

type Props = {
  stack: {
    name: string;
  }[];
};
type IconType = {
  name: string;
};
const IconMap: React.FC<Props> = ({ stack }) => {
  return (
    <>
      {stack.map((icon: IconType) => {
        return (
          <CardMedia
            key={icon.name}
            // className="project-tool"
            component="img"
            image={icon.name}
            alt=""
            sx={{ maxWidth: "50px", objectFit: "contain", mx:0.5 }}
          />
        );
      })}
    </>
  );
};

export default IconMap;

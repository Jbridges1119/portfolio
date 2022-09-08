import { CardMedia } from "@mui/material";
import React from "react";

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
            className="project-tool"
            component="img"
            image={icon.name}
            alt=""
          />
        );
      })}
    </>
  );
};

export default IconMap;

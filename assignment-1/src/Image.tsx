import React from "react";
interface Props {
  height?: string;
  width?: string;
  src?: any;
  alt?: string
}

const Image = ({ height, width, src, alt }: Props) => {
  return (
    <>
      <img src={src} alt={alt} style={{ height: height, width: width }}></img>
    </>
  );
};

export default Image;

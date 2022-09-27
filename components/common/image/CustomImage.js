import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { fallbackImageRectangle, fallbackImageSquare } from '../../../constants/fallbackImage';

const CustomImage = ({ src, alt = "", fallbackSrc = null, size = "rectangle", ...rest }) => {

  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  const getSize = () => {
    switch (size) {
      case "rectangle":
        return fallbackImageRectangle;
      case "square":
        return fallbackImageSquare;
      default:
        return fallbackImageSquare;
    }
  }

  return (
    <Image
      {...rest}
      src={imgSrc ? imgSrc : fallbackSrc ? fallbackSrc : getSize()}
      alt={alt}
      onLoadingComplete={(result) => {
        if (result.naturalWidth === 0) {
          // Broken image
          setImgSrc(fallbackSrc ? fallbackSrc : getSize());
        }
      }}
      onError={() => {
        setImgSrc(fallbackSrc ? fallbackSrc : getSize());
      }}
    />
  );
}
export default CustomImage;
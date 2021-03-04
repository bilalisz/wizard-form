import React from "react";
import GifLoader from "react-gif-loader";
import rolling from "../../../assests/images/rolling.gif";

const Loader = (props) => {
  const { isLoad } = props;
  return (
    <GifLoader
      loading={isLoad}
      imageSrc={rolling}
      imageStyle={{
        marginTop: "13%",
        width: "100px",
        height: "100px",
        marginLeft: "30px",
      }}
      overlayBackground="rgba(255,255,255,0.6)"
    />
  );
};

export default Loader;

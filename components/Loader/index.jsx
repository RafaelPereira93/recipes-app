import React from "react";
import * as Style from "./LoaderStyles";

const Loader = () => {
  return (
    <>
      <Style.WrapperLoader>
        <Style.Line></Style.Line>
        <Style.Line></Style.Line>
        <Style.Line></Style.Line>
        <Style.Line></Style.Line>
        <Style.Line></Style.Line>
      </Style.WrapperLoader>
    </>
  );
};

export default Loader;

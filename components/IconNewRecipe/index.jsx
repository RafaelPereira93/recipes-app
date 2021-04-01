import React from "react";
import * as Style from "./IconNewRecipeStyles";
import Link from "next/link";

const IconNewRecipe = () => {
  return (
    <Style.WrapperIconNewRecipe>
      <Link href="/new">
        <a>
          <img src="/new.svg" alt="" />
        </a>
      </Link>
    </Style.WrapperIconNewRecipe>
  );
};

export default IconNewRecipe;

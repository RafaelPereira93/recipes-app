import React from "react";
import * as Style from "./Page404Styles";
import { Router, useRouter } from "next/router";

const decreaseCounter = (setCounter) => {
  let timeout = setTimeout(() => setCounter((c) => c - 1), 1000);
  return timeout;
};

const Page404 = () => {
  const router = useRouter();
  const [counter, setCounter] = React.useState(5);

  React.useEffect(() => {
    let timeout = decreaseCounter(setCounter);
    if (counter < 1) {
      router.push("/");
    }
    return () => clearInterval(timeout);
  });

  return (
    <>
      <Style.Wrapper404Page>
        <Style.Content404Page>
          <Style._404>
            <h1>404</h1>
          </Style._404>
          <Style.NotFoundTItle>
            <h2>Page Not Found</h2>
          </Style.NotFoundTItle>
          <Style.WrapperTimer>
            <h1>Returning to the home in {counter} ...</h1>
          </Style.WrapperTimer>
        </Style.Content404Page>
      </Style.Wrapper404Page>
    </>
  );
};

export default Page404;

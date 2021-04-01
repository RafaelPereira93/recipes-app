import React from "react";
import { useRouter } from "next/router";

const UpdatePage = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/");
  });

  return <></>;
};

export default UpdatePage;

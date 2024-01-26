import { useRouter } from "next/router";
import React from "react";

const slug = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { slug } = router.query;
  console.log("slug", slug);
  return <div>{slug}</div>;
};

export default slug;

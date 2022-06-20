import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";
import { services } from "../data";

function index=({services}) => {
  console.log("CLIENT"ervices);

  return <div>This is content</div>;
}

export default index;
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const res = await fetch("http://localhost:3000/api/services");
  const data = await res.json();
  console.log("SERVER", services);
  
  return {
    props: {
      services: data.services,
    },
  };
};

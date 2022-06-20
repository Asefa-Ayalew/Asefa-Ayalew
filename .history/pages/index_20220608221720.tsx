import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";
import { services } from "../data";

const index=({services}) => {
  console.log("CLIENT",services);

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
export const getStaticProps = async (
  context: gets
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
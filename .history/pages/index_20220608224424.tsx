import { GetServerSideProps, GetServerSidePropsContext, GetStaticPropsContext } from "next";
import React from "react";
import { services } from "../data";

const index=() => {

  return <div>
    <h5 className="px-2 m-2">
      I'd graduated from Wachemo University with BSC degree of Electrical snd computer Engineering.
      I've 3 years of experience in web development with php, html, css, javascript, typescript react,
      python, java, c#, and other frameworks.
    </h5>
    <div>
      {services.map(service)=>{
        <Service
      }}
    </div>
  </div>;
}

export default index;
// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();
//   console.log("SERVER", services);
  
//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
// export const getStaticProps = async (
//   context: GetStaticPropsContext
// ) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();
//   console.log("SERVER", services);
  
//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
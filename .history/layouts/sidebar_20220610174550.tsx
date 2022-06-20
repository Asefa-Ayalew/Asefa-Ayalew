import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import Image from "next/image";
import React from "react";
import { Button } from "@mantine/core";
import {useTheme} from 'next-themes'

function Sidebar() {
  const {theme, setTheme} = useTheme();
  const changeTheme = () =>{
    setTheme(theme==="light"? "dark" : "light" )
  }
  return (
    <div>
      <Image
        src="/images/girl.jpg"
        alt="ase"
        height={200}
        width={200}
        className="mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider">
        <span className="text-green-400">Asefa </span>
        Ayalew
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full">
        Frontened web developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 dark:bg-dark-200 rounded-full"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" />
        download resume
      </a>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
        <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex justify-center space-x-2 tems-center ">
          <GoLocation />
          <span>Addis Ababa, Ethiopia</span>
        </div>
        <p className="my-2">asefa12a19@gmail.com</p>
        <p className="my-2">+251961445484</p>
      </div>
      <Button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400 focus:outline-none"
      onClick={()=>window.open('mailto:asefa12a19@gmail.com')}>
        Email me
      </Button>
      <Button
      onClick={changeTheme}
      className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400">
        Toggle theme
      </Button>
    </div>
  );
}

export default Sidebar;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../layouts/sidebar";
import {MantineProvider} from '@mantine/core';
import NextNProgress from "nextjs-progressbar";
import Navbar from "../layouts/navbar";
import {ThemeProvider} from 'next-themes'
 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute=""
  );
}

        
        
export default MyApp;

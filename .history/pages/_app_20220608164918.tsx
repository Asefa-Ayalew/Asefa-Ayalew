import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../layouts/sidebar";
import {MantineProvider} from '@mantine/core';
import NextNProgress from "nextjs-progressbar";
 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <NextNProgress
                height={6}
                color="#ffa500"
                options={{ easing: 'ease', speed: 500 }}
                showOnShallow={true}
              />

    <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:px-48">
      <div className="col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl">
        <Sidebar />
      </div>
      <div className="col-span-12 bg-white lg:col-span-9 rounded-2xl">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

        
        
export default MyApp;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../layouts/sidebar";
// import {MantineProvider} from '@mantine/core';
import NextNProgress from "nextjs-progressbar";
import Navbar from "../layouts/navbar";
import {ThemeProvider} from 'next-themes'
 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      {/* <MantineProvider
        theme={{
          colors: {
            teal: [
              "#f0fdfa",
              "#ccfbf1",
              "#99f6e4",
              "#5eead4",
              "#2dd4bf",
              "#14b8a6",
              "#0d9488",
              "#0f766e",
              "#115e59",
              "#134e4a",
            ],
          },
          primaryColor: "teal",
        }} 
      > */}
        <NextNProgress
                height={6}
                color="#ffa500"
                options={{ easing: 'ease', speed: 500 }}
                showOnShallow={true}
              />

    <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:px-48 sm:px-20 md:px-32">
      <div className="col-span-12 p-4 text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shado">
        <Sidebar />
      </div>
      <div className="flex flex-col bg-white dark:bg-dark-500 col-span-12 lg:col-span-9 rounded-2xl overflow-hidden">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
    {/* </MantineProvider> */}
    </ThemeProvider>
  );
}

        
        
export default MyApp;

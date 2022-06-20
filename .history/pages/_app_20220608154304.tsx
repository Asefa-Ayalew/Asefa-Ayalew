import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../layouts/sidebar";
import {MantineProvider} from '@mantine/core';
import nextNProgress from 'nextjs-progressbar'
 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
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
      >
        <NextNProgress
                height={6}
                color="#ffa500"
                options={{ easing: 'ease', speed: 500 }}
                showOnShallow={true}
              />

    <div className="grid grid-cols-12 gap-6 my-14 lg:px-48 px-5">
      <div className="lg:col-span-3 bg-white rounded-2xl col-span-12 p-4 text-center">
        <Sidebar />
      </div>
      <div className="lg:col-span-9 bg-white rounded-2xl col-span-12">
        <Component {...pageProps} />
      </div>
    </div>
    </N
    </MantineProvider>
  );
}

        
        
export default MyApp;

import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='grid drid-cols-12 gap-6'>
<div>
  sidebaar
</div>
<div>
<Component {...pageProps} />
</div>
    </div>
  )
}

export default MyApp

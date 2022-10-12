import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        Food ingreadients search
        <link rel='icon' href="/favicon.ico" />
      </Head>
    
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
        
    </>
  )
}

export default MyApp

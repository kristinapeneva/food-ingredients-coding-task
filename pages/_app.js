import Head from 'next/head'
import "@fontsource/poppins"
import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        Food ingreadients search
      </Head>
    
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
        
    </>
  )
}

export default MyApp

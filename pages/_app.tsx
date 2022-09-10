import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '@components/layouts/main'
import Fonts from '@components/fonts'
import theme from '@lib/theme'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'

const Website = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress startPosition={0.2} />
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website

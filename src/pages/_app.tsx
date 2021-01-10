import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import { DefaultSeo } from 'next-seo'

import theme from '@/theme'
import SEO from '~/next-seo.config'
import siteConfig from '~/site-config'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <DefaultSeo {...SEO} canonical={siteConfig.url + (router.asPath || '')} />

      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp

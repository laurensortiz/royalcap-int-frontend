import App from 'next/app'
import Head from 'next/head'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { ThemeProvider, ServerStyleSheet } from 'styled-components'
import { DefaultSeo } from 'next-seo'
import { getStrapiMedia } from 'utils/media'
import { getGlobalData } from 'utils/api'
import '@/styles/antd-dark.css'
import '@/styles/index.css'
import '@/styles/responsive.css'
import GlobalStyles from 'GlobalStyles'
import { defaultTheme } from 'theme'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import 'components/icons/elegant-icons/style.css'
import '../node_modules/react-responsive-carousel/lib/styles/carousel.min.css'

import ScrollToTop from 'helpers/ScrollToTop'

const MyApp = ({ Component, pageProps }) => {
  // Extract the data we need
  const { global } = pageProps

  if (global == null) {
    return <ErrorPage statusCode={404} />
  }

  const { metadata } = global

  return (
    <>
      {/* Favicon */}
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon.url)} />
      </Head>
      {/* Global site metadata */}
      <DefaultSeo
        titleTemplate={`%s | ${global.metaTitleSuffix}`}
        title="Page"
        description={metadata.metaDescription}
        openGraph={{
          images: Object.values(metadata.shareImage.formats).map((image) => {
            image.url = undefined
            return {
              url: getStrapiMedia(image.url),
              width: image.width,
              height: image.height,
            }
          }),
        }}
        twitter={{
          cardType: metadata.twitterCardType,
          handle: metadata.twitterUsername,
        }}
      />
      {/* Display the content */}
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <ScrollToTop>
          <Component {...pageProps} />
        </ScrollToTop>
      </ThemeProvider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (appContext) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)
  //TODO: Remove this line
  const globalLocale = await getGlobalData('es')
  //const globalLocale = await getGlobalData(appContext.router.locale)

  return {
    ...appProps,
    pageProps: {
      global: globalLocale,
    },
  }
}

export default MyApp

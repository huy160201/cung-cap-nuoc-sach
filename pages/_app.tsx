import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

import type { NextPageWithLayout } from '../types/next-page'
import React from 'react'

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? (page => page)

  return <>{getLayout(<Component {...pageProps} />)}</>
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default appWithTranslation(MyApp)

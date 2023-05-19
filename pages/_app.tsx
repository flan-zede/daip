
import type { AppProps } from 'next/app'
import Base from '@/layout/Base'
import { SessionProvider } from 'next-auth/react'
import 'react-perfect-scrollbar/dist/css/styles.css'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Base>
        <Component {...pageProps} />
      </Base>
    </SessionProvider>
  )
}

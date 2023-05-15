
import type { AppProps } from 'next/app'
import Base from '@/layout/Base'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Base>
        <Component {...pageProps} />
      </Base>
    </SessionProvider>
  )
}

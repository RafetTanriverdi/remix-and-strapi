import { withEmotionCache } from "@emotion/react"
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import { ThemeProvider } from "next-themes"
import { ChakraProvider } from "./components/chakra-provider"
import { useInjectStyles } from "./emotion/emotion-client"
import IndexLayout from "./routes/_layout"
import {Amplify} from 'aws-amplify'
import awsExports from '../src/aws-exports'

Amplify.configure(awsExports)
interface LayoutProps extends React.PropsWithChildren {}

export const Layout = withEmotionCache((props: LayoutProps, cache) => {
  const { children } = props

  useInjectStyles(cache)

  return (
    <html lang="en">
      <head suppressHydrationWarning>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <meta
          name="emotion-insertion-point"
          content="emotion-insertion-point"
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
})

export default function App() {
  return (
    <ChakraProvider>
      <ThemeProvider disableTransitionOnChange attribute="class">
        <IndexLayout>

        <Outlet />
        </IndexLayout>
      </ThemeProvider>
    </ChakraProvider>
  )
}

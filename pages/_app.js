import "/styles/tailwind.css";
import "/styles/prism.css";

import "@fontsource/inter/variable-full.css";
import siteMetadata from "/posts/siteMetadata";
import { ThemeProvider } from "next-themes";
import LayoutWrapper from "../components/LayoutWrapper";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
}

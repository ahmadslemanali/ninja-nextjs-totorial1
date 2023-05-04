import Layout from "../../comps/Layout";
import  "../../styles/globals.css"


export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} /> 
    </Layout>
  )
}
// children = <Component {...pageProps} /> = to all content in all pages
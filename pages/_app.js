import '../styles/globals.css'
import Layout from '../components/Layout'
import {ProductContextProvider} from '../context/MyContext'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ProductContextProvider>
        <Component {...pageProps} />
      </ProductContextProvider>
    </Layout>
  )
}

export default MyApp

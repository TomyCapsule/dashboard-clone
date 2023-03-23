import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/layout'
import {Box} from '@mui/material'

function MyApp({ Component, pageProps }) {
  return (
    <Box component="div" sx={{margin:0,padding:0,width:'100vw', height:'100vh'}}>
      <Head>
        <title>MyDashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Box>
  )
}

export default MyApp

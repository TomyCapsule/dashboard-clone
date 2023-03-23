import Head from 'next/head'
import Layout from '../components/layout'
import {Box} from '@mui/material'
import Dashboard from '../components/contents/dashboard/dashboard';
import { getStats } from '../lib/stats';

export async function getServerSideProps(){
  const stats = await getStats();
  return {
      props:{
          stats: stats
      }
  }
}

export default function Home({stats}) {
  return (
        <Dashboard stats={stats} />
  )
}

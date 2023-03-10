import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TopicCuration from '@/components/TopicCuration'
import config from '@/config'
import Map from '@/components/Map'
import Contact from '@/components/Contact'
import Masthead from '@/components/Masthead'
import Banner from '@/components/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>{config.project_title}</title>
        <meta name="description" content={config.project_description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <Masthead />
        <TopicCuration />
        <Banner />
        <Map />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

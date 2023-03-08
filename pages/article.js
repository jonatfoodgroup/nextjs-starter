import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import config from '@/config'
import Sidebar from '@/components/Sidebar'

export default function Article() {
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
        <Sidebar />
        <Footer />
      </main>
    </>
  )
}

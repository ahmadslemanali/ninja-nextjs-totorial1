import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../../comps/Navbar'
import Footer from '../../comps/Footer'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod obcaecati asperiores labore velit voluptatibus excepturi incidunt ut beatae ipsam suscipit, recusandae omnis. Quaerat velit dicta debitis temporibus officiis, illum laudantium.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod obcaecati asperiores labore velit voluptatibus excepturi incidunt ut beatae ipsam suscipit, recusandae omnis. Quaerat velit dicta debitis temporibus officiis, illum laudantium.</p>
        <Link className={styles.btn} href="/ninjas">See Ninja Listing</Link>
      </div>
    </>
  )
}

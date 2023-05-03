import Head from 'next/head'
import Image from 'next/image'

import styles from '@/pages/index.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Testando projeto com <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <div className={styles.grid}>
          <Link href="/aboutme" className={styles.card}>
            <h2>About Me &rarr;</h2> <p>Primeira página</p>
          </Link>
          <Link href="/details" className={styles.card}>
            <h2>Details &rarr;</h2> <p>Segunda página</p>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

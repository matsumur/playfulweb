import Head from 'next/head'
import Page from '../components/page'
import About from '../components/about'
// import Faculty from '../components/faculty'
// import Divider from '../components/divider'

export default function Papers() {
  return (
    <Page>
      <Head>
        <title>発表文献</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP" rel="stylesheet"></link>
      </Head>

      <main className="flex flex-col justify-center w-full flex-1 px-20">
        <About name="発表文献">
          <p>
            近日公開予定
          </p>
        </About>
      </main>
    </Page>
  )
}

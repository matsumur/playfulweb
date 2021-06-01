import Head from 'next/head'
import Page from '../components/page'
import Banner from '../components/banner'
import News from '../components/news'

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Playful Laboratory</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="flex flex-col justify-center w-full px-20 py-5">
        <div className="flex-1">
          <Banner />
        </div>
        <div className="flex-1">
          <News />
        </div>
      </main>
    </Page>
  );
}

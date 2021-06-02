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
          <Banner/>
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <News />
          </div>
        </div>
      </main> 
    </Page>
  );
}

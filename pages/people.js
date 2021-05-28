import Head from 'next/head'
import Page from '../components/page'
import About from '../components/about'
import Faculty from '../components/faculty'
import Divider from '../components/divider'

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP" rel="stylesheet"></link>
      </Head>

      <main className="flex flex-col justify-center w-full flex-1 px-20">
        <About name="Playfulな人">
            <p>
              研究室のメンバーを紹介します。
            </p>
        </About>

        <Divider>教員</Divider>
        <Faculty name="松村 耕平 准教授">
          研究室の主宰です
        </Faculty>
        <Faculty name="岡藤 勇希 助教">aafdsfsdafasda</Faculty>

        <Divider>博士前期課程</Divider>

        <Divider>学部</Divider>
      </main>
    </Page>
  )
}
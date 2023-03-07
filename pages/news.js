import Head from "next/head";
import Page from "../components/page";
import About from "../components/about";
import NewsList from "../components/news";

export default function News() {
  return (
    <Page>
      <Head>
        <title>新着ニュース一覧</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="flex flex-col justify-center w-full flex-1 px-20 py-5">
        <About name="新着ニュース一覧">
          <p className="text-lg">
            新着ニュースを表示します。
          </p>
        </About>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsList number={100}/>
        </div>
      </main>
    </Page>
  );
}

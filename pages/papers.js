import Head from "next/head";
import Page from "../components/page";
import About from "../components/about";
import Research from "../components/paper";
import research from "../public/paper2.json";

export default function Papers() {
  return (
    <Page>
      <Head>
        <title>発表文献</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="flex flex-col justify-center w-full flex-1 px-20 py-5">
        <About name="発表文献">
          <p className="text-lg">
            発表した論文を紹介します。
          </p>
        </About>
      <Research papers={research} form={"ポスター発表"}/>
      <Research papers={research} form={"原著"}/>
      <Research papers={research} form={"口頭発表"}/>
      </main>
    </Page>
  );
}

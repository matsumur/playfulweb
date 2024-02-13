import Head from "next/head";
import Page from "../components/page";
import About from "../components/about";
import { Faculty, Students } from "../components/people";
import Divider from "../components/divider";
import Members from "../public/member.json";

export default function People() {
  return (
    <Page>
      <Head>
        <title>Playfulな人</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="flex flex-col justify-center w-full sm:px-5 lg:px-20 py-5">
        <About name="Playfulな人">
          <p className="sm:text-base lg:text-lg">
            研究室のメンバーを紹介します。
          </p>
          <p className="sm:text-base lg:text-lg">※2023年4月時点</p>
        </About>

        <Divider>教員</Divider>
        <Faculty faculty={Members} />
        <Divider>博士前期課程</Divider>
        <Students students={Members} grade={2} />
        <Students students={Members} grade={1} />

        <Divider>学部</Divider>
        <Students students={Members} grade={4} />
        <Students students={Members} grade={3} />

        <Divider>卒業生</Divider>
        <Students students={Members} grade={0} />
      </main>
    </Page>
  );
}

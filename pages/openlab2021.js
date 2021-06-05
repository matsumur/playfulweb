import Head from "next/head";
import Page from "../components/page";
import About from "../components/about";
import Faq from "../components/faq";
import Divider from "../components/divider";

export default function Openlab() {
  return (
    <Page>
      <Head>
        <title>2021年度研究室公開</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="flex flex-col justify-center w-full flex-1 px-20 py-5">
        <About name="研究室公開2021">
          <p>
            2021年度の研究室公開はオンラインで実施します。こちらのページで公開の実施方法や、みなさんがプレイフルインタラクション研究室について理解するためのリソースを公開します。
          </p>
        </About>

        <Divider>本研究室の成り立ち</Divider>
        <p className="flex flex-col w-full flex-1 px-10 mt-2">
          プレイフルインタラクション研究室は2021年4月に発足した、ヒューマンコンピュータインタラクションに関する研究室です。特に、フィールドワークやワークショップを実施することで、コンピュータやロボットを含む複数の存在がどのように関わり合うのかということを理解することに研究上の興味があります。
        </p>
        <p className="flex flex-col w-full flex-1 px-10 mt-2">
          本研究室には歴史や伝統がありません。すなわち、これから配属することになるみなさんが1期生ということになります。みなさんが教員と一緒に研究室をどのように作っていくか、それが歴史や伝統となっていくことになります。そのような新しいチャレンジを好む人を歓迎します。
        </p>
        <Faq />
      </main>
    </Page>
  );
}

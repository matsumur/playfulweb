import Head from "next/head";
import Page from "../components/page";
import About from "../components/about";
import Faq from "../components/faq";
import Divider from "../components/divider";
import FaqAnswers from "../public/faq.json";
import Link from "next/link";

export default function Openlab() {
  return (
    <Page>
      <Head>
        <title>2023年度研究室公開</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="flex flex-col justify-center w-full sm:px-5 lg:px-20 py-5">
        <About name="研究室公開2023">
          <p className="sm:text-base lg:text-lg">2023年度の研究室公開は<a class="underline decoration-zink-500 decoration-2">6月6日（火）の3限（13:00から14:30）</a>と<a class="underline decoration-zink-500 decoration-2">6月14日（水）の5限（16:20〜17:50）</a>に<a class="underline decoration-pink-500 decoration-2">クリエーションコア3Fプレイフルインタラクション研究室</a>で実施します。この時間内であればいつ来てくれても、いつお帰りいただいても構いません。そもそもプレイフルインタラクション研究室は<a class="underline decoration-rose-500 decoration-2">オープンマインド</a>を標語としており、いつでもオープンですので、そのほかの時間でもお気軽にお越しください。</p>
        </About>

        <Divider>本研究室の成り立ち</Divider>
        <p className="flex flex-col w-full flex-1 sm:px-5 lg:px-10 mt-2 sm:text-base lg:text-lg">
          プレイフルインタラクション研究室は2021年4月に発足した、ヒューマンコンピュータインタラクションに関する研究室です。特に、フィールドワークやワークショップを実施することで、コンピュータやロボットを含む複数の存在がどのように関わり合うのかということを理解することに研究上の興味があります。
        </p>
        <p className="flex flex-col w-full flex-1 sm:px-5 lg:px-10 mt-2 sm:text-base lg:text-lg">
          本研究室には歴史や伝統がありません。これから配属することになるみなさんは本研究室の3期生いうことになります。みなさんが先輩の学生や、教員と一緒に研究室をどのように作っていくか、それが歴史や伝統となっていくことになります。そのような新しいチャレンジを好む人を歓迎します。
        </p>
        <Divider>研究室の生活</Divider>

        <p className="flex flex-col w-full flex-1 sm:px-5 lg:px-10 mt-2 sm:text-base lg:text-lg">
          以下に例を紹介します。
        </p>
        <Lablife />
        <Faq />
      </main>
    </Page>
  );
}

export function Lablife() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:px-5 lg:px-10 mt-6">
      {FaqAnswers.map((person) => (
        <Link href={"lablife?id="+person.id}>
          <div
            key={person.id}
            className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
          >
            <div className="flex-shrink-0">
              {person.imageUrl && (
                <img
                  className="h-10 w-10 rounded-full"
                  src={"/images/"+person.imageUrl}
                  alt=""
                />
              )}
              {!person.imageUrl && (
                <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                  <svg
                    className="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <a href={"?id="+person.id} className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">
              {person.name}
                </p>
                <p className="sm:text-xs md:text-sm text-gray-500 truncate">
                  {person.master? ("ある修士学生の場合"):("ある学部学生の場合")}
                </p>
              </a>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

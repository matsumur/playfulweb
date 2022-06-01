import Head from "next/head";
import Page from "../components/page";
import About from "../components/about";
import Faq from "../components/faq";
import Divider from "../components/divider";
import Link from "next/link";

export default function Openlab() {
  return (
    <Page>
      <Head>
        <title>2022年度研究室公開</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="flex flex-col justify-center w-full flex-1 px-20 py-5">
        <About name="研究室公開2022">
          <p className="text-lg">2022年度の研究室公開は以下の日時に<a class="underline decoration-pink-500 decoration-2">クリエーションコア3Fプレイフルインタラクション研究室</a>で実施します。この時間内であればいつ来てくれても、いつお帰りいただいても構いません。</p>
          <ul className="text-lg list-decimal">
            <li>6月8日（水）16:20〜17:50</li>
            <li>6月15日（水）16:20〜17:50</li>
          </ul>
          <p className="text-lg">オンライン（Zoom）でも随時実施します。<a href="https://ritsumei-ac-jp.zoom.us/j/98447792256?pwd=MjIrZlpNeERONGpWUHZLczhxcm5TZz09" class="underline  decoration-sky-500 hover:decoration-blue-400 decoration-2">ここのリンク</a>から待機室にはいっていただくと、教員が空いている時間に対応します（5分程度待って来なければ違う時間にもう一度試してください）。</p>
        </About>

        <Divider>本研究室の成り立ち</Divider>
        <p className="flex flex-col w-full flex-1 px-10 mt-2 text-lg">
          プレイフルインタラクション研究室は2021年4月に発足した、ヒューマンコンピュータインタラクションに関する研究室です。特に、フィールドワークやワークショップを実施することで、コンピュータやロボットを含む複数の存在がどのように関わり合うのかということを理解することに研究上の興味があります。
        </p>
        <p className="flex flex-col w-full flex-1 px-10 mt-2 text-lg">
          本研究室には歴史や伝統がありません。これから配属することになるみなさんは本研究室の2期生いうことになります。みなさんが1期生の学生や、教員と一緒に研究室をどのように作っていくか、それが歴史や伝統となっていくことになります。そのような新しいチャレンジを好む人を歓迎します。
        </p>
        <Divider>研究室の生活</Divider>

        <p className="flex flex-col w-full flex-1 px-10 mt-2 text-lg">
          以下に二人の例を紹介します。
        </p>
        <Lablife />
        <Faq />
      </main>
    </Page>
  );
}

export function Lablife() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 px-10 mt-6">
      {students.map((person) => (
        <Link href={person.href}>
          <div
            key={person.id}
            className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
          >
            <div className="flex-shrink-0">
              {person.imageUrl && (
                <img
                  className="h-10 w-10 rounded-full"
                  src={person.imageUrl}
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
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">
                  {person.name}
                </p>
                <p className="text-sm text-gray-500 truncate">{person.theme}</p>
              </a>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

const students = [
  {
    name: "渡邊 将太",
    id: "1",
    theme: "学部生の場合",
    imageUrl: "/images/watanabe.jpg",
    href: "/lablife/bachelor",
  },
  {
    name: "山口 遊",
    id: "2",
    theme: "修士生の場合",
    imageUrl: "/images/lovotyamaguchi.png",
    href: "/lablife/master",
  },
];

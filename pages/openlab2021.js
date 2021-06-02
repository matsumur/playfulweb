import Head from 'next/head'
import Page from '../components/page'
import About from '../components/about'
import Faculty from '../components/faculty'
import Divider from '../components/divider'

export default function Openlab() {
  return (
    <Page>
      <Head>
        <title>2021年度研究室公開</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP" rel="stylesheet"></link>
      </Head>

      <main className="flex flex-col justify-center w-full flex-1 px-20">
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
  )
}

const faqs = [
  {
    id: 1,
    question: "ゼミはどのようにやるのですか",
    answer:
      "週1回90分のゼミがあります。学士課程の場合毎回1人5分程度の報告を行ってもらいます。博士前期課程では、1人30分程度の報告と議論を行ってもらいます。オンラインツールを併用することで、教員のみならず学生同士でも活発に議論をしています。",
  },
  {
    id: 2,
    question: "ゼミ以外ではどのような指導がありますか",
    answer:
      "教員との個別ミーティングが中心です。ここでは必要に応じて10分程度から1時間を超える議論をします。また、ワークショップ形式での任意参加型のゼミがあります。他の研究機関の研究者との勉強会も実施しています。",
  },
  {
    id: 3,
    question: "コアタイムはありますか",
    answer:
      "コアタイムはありません。しかし、教員と、また、学生同士が関わりあう機会は重要だと考えています。研究室をオンライン・オフライン問わず学生が出てきたくなる場にしていきたいと考えます。",
  },
  {
    id: 4,
    question: "研究（卒論）テーマはどのように決まりますか？",
    answer:
      "配属後、教員と相談の上、4年生の4月程度までに学生が主体的にテーマを決定するのが好ましいと考えています。とはいえ、研究テーマを考えるのは難しいので、教員が学生の興味関心を聞いた上で、研究テーマと進め方を設定することや、既存のテーマを引き継ぐことがあります。",
  },
  {
    id: 5,
    question: "どのような研究生活ですか？",
    answer:
      "研究ガチ勢とそうでない人によって大きく異なると思いますが、比較的ガチ勢の例を挙げます（つづく）。",
  },
  {
    id: 6,
    question: "就活したいんですけど",
    answer:
      "どうぞっ！",
  },
]

export function Faq() {
  return (
    <div className="bg-white">
      <Divider>疑問と回答</Divider>
      <div className="mt-4 px-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <dt className="text-lg leading-6 font-medium text-gray-900">{faq.question}</dt>
              <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

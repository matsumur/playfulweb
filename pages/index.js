import Head from 'next/head'
import Page from '../components/page'
import About from '../components/about'
import Faculty from '../components/faculty'
import Divider from '../components/divider'
import TopImage from '../components/topimage'
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
      <TopImage />
      <main className="flex flex-row justify-center w-full px-20 py-5">
        <div className="flex-1">
          <News />
        </div>
        <div className="flex-1">
          <About className="flex-1" name="私たちについて">
            <p>
              私たち、立命館大学情報理工学部プレイフルインタラクション研究室は、Human-Centred
              Designの手法を用いて実世界の問題をプレイフルに解決する集団です。研究者として、エンジニアとして、デザイナーとして、実践者として、アーティストとして、あるいはオタクとして、新しいデジタル技術を創造し、それがもたらす社会的価値や科学的価値を発見・発信します。これによって社会問題を解決することや未来の生活を楽しくすることを目指します。
            </p>
          </About>
        </div>
      </main>
      {/* <main className="flex flex-col justify-center w-full px-20 py-5">
        <div className="flex-1">
          <TopImage/>
          <News />
        </div>
        <div className="flex-1">
          <About name="私たちについて">
            <p>
              私たち、立命館大学情報理工学部プレイフルインタラクション研究室は、Human-Centred
              Designの手法を用いて実世界の問題をプレイフルに解決する集団です。研究者として、エンジニアとして、デザイナーとして、実践者として、アーティストとして、あるいはオタクとして、新しいデジタル技術を創造し、それがもたらす社会的価値や科学的価値を発見・発信します。これによって社会問題を解決することや未来の生活を楽しくすることを目指します。
            </p>
          </About>
        </div>
      </main> */}
    </Page>
  );
}

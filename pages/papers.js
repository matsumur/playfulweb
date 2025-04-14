import Head from 'next/head';
import Page from '../components/page';
import About from '../components/about';
import Research from '../components/paper';
import research from '../public/paper.json';
import Divider from '../components/divider';

export default function Papers() {
  return (
    <Page>
      <Head>
        <title>発表文献</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css?family=Noto+Sans+JP'
          rel='stylesheet'
        ></link>
      </Head>

      <main className='flex flex-col justify-center w-full sm:px-5 lg:px-20 py-5'>
        <About name='発表文献'>
          <p className='sm:text-base lg:text-lg'>発表した論文を紹介します。</p>
        </About>
        <div id={'poster2025'} />
        <Divider>査読なし発表(2025年)</Divider>
        <Research papers={research} form={'査読なし発表'} year={2025} />
        {/* <div id={'jornal2024'} />
        <Divider>論文誌(2024年)</Divider>
        <Research papers={research} form={'論文'} year={2024} /> */}

        <div id={'oral2024'} />
        <Divider>査読付き発表(2024年)</Divider>
        <Research papers={research} form={'査読付き発表'} year={2024} />

        <div id={'poster2024'} />
        <Divider>査読なし発表(2024年)</Divider>
        <Research papers={research} form={'査読なし発表'} year={2024} />

        {/* <div id={'jornal2023'} />
        <Divider>論文誌(2023年)</Divider>
        <Research papers={research} form={'論文'} year={2023} /> */}

        <div id={'oral2023'} />
        <Divider>査読付き発表(2023年)</Divider>
        <Research papers={research} form={'査読付き発表'} year={2023} />

        <div id={'poster2023'} />
        <Divider>査読なし発表(2023年)</Divider>
        <Research papers={research} form={'査読なし発表'} year={2023} />

        <div id={'jornal2023'} />
        <Divider>論文誌(2023年)</Divider>
        <Research papers={research} form={'論文'} year={2022} />

        <div id={'oral2022'} />
        <Divider>査読付き発表(2022年)</Divider>
        <Research papers={research} form={'査読付き発表'} year={2022} />

        <div id={'poster2022'} />
        <Divider>査読なし発表(2022年)</Divider>
        <Research papers={research} form={'査読なし発表'} year={2022} />

        <div id={'jornal2021'} />
        <Divider>論文誌(2021年)</Divider>
        <Research papers={research} form={'論文'} year={2021} />

        <div id={'oral2021'} />
        <Divider>査読付き発表(2021年)</Divider>
        <Research papers={research} form={'査読付き発表'} year={2021} />

        {/* <div id={'poster2021'} />
        <Divider>査読なし発表(2021年)</Divider>
        <Research papers={research} form={'査読なし発表'} year={2021} /> */}
      </main>
    </Page>
  );
}

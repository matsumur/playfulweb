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
        {/* <div id={'jornal2024'} />
        <Divider>原著(2024年度)</Divider>
        <Research papers={research} form={'原著'} year={2024} />

        <div id={'oral2024'} />
        <Divider>口頭発表(2024年度)</Divider>
        <Research papers={research} form={'口頭発表'} year={2024} />

        <div id={'poster2024'} />
        <Divider>ポスター発表(2024年度)</Divider>
        <Research papers={research} form={'ポスター発表'} year={2024} /> */}

        {/* <div id={'jornal2023'} />
        <Divider>原著(2023年度)</Divider>
        <Research papers={research} form={'原著'} year={2023} /> */}

        <div id={'oral2023'} />
        <Divider>口頭発表(2023年度)</Divider>
        <Research papers={research} form={'口頭発表'} year={2023} />

        <div id={'poster2023'} />
        <Divider>ポスター発表(2023年度)</Divider>
        <Research papers={research} form={'ポスター発表'} year={2023} />

        <div id={'jornal2022'} />
        <Divider>原著(2022年度)</Divider>
        <Research papers={research} form={'原著'} year={2022} />

        <div id={'oral2022'} />
        <Divider>口頭発表(2022年度)</Divider>
        <Research papers={research} form={'口頭発表'} year={2022} />

        <div id={'poster2022'} />
        <Divider>ポスター発表(2022年度)</Divider>
        <Research papers={research} form={'ポスター発表'} year={2022} />

        <div id={'jornal2021'} />
        <Divider>原著(2021年度)</Divider>
        <Research papers={research} form={'原著'} year={2021} />

        <div id={'oral2021'} />
        <Divider>口頭発表(2021年度)</Divider>
        <Research papers={research} form={'口頭発表'} year={2021} />

        <div id={'poster2021'} />
        <Divider>ポスター発表(2021年度)</Divider>
        <Research papers={research} form={'ポスター発表'} year={2021} />
      </main>
    </Page>
  );
}

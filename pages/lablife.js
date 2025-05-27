import Page from '../components/page';
import Head from 'next/head';
import {
  AcademicCapIcon,
  ChatAlt2Icon,
  ThumbUpIcon,
  UserIcon,
  BookOpenIcon,
} from '@heroicons/react/solid';
import Image from 'next/image';
import FaqAnswers from '../public/faq.json';
import TimeLineData from '../public/timelines.json';
import { useRouter, useEffect } from 'next/router';

const questions = [
  'どのような研究をしていますか?',
  'どのような観点から研究室を選びましたか?',
  'アルバイトをしていたらどんなことをしているか教えてください',
  '研究室で楽しいと思えることを教えてください',
  '研究室でつらいなーと思うことを教えてください',
  '研究室の教員に対する印象を教えてください',
  '最後に3回生に向けて、なにか一言お願いします',
];

var answer = FaqAnswers[0];
var que = 1;

export default function Labfile() {
  const router = useRouter();
  que = router.query['id'];

  if (que <= 0 || FaqAnswers.length < que || que == undefined) {
    que = 1;
  }
  que -= 1;
  answer = FaqAnswers[que];
  const faq = [
    answer.faq1,
    answer.faq2,
    answer.faq3,
    answer.faq4,
    answer.faq5,
    answer.faq6,
    answer.faq7,
  ];

  return (
    <Page>
      <Head>
        <title>プレイフルインタラクション研究室の1日</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css?family=Noto+Sans+JP'
          rel='stylesheet'
        ></link>
      </Head>

      <main className='flex flex-col justify-center w-full sm:px-5 lg:px-20 py-5'>
        <div className='bg-white overflow-hidden'>
          <div className='relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
            <div className='hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen' />
            <div className='mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none'>
              <div>
                <h2 className='text-base text-indigo-600 font-semibold tracking-wide uppercase'>
                  プレイフルインタラクション研究室の1日
                </h2>
                <h3 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                  {answer.master ? 'ある修士学生の場合' : 'ある学部学生の場合'}
                </h3>
              </div>
            </div>
            <div className='mt-8 lg:grid lg:grid-cols-2 lg:gap-8'>
              <div className='relative lg:row-start-1 lg:col-start-2'>
                <svg
                  className='hidden lg:block absolute top-0 right-0 -mt-20 -mr-20'
                  width={404}
                  height={384}
                  fill='none'
                  viewBox='0 0 404 384'
                  aria-hidden='true'
                >
                  <defs>
                    <pattern
                      id='de316486-4a29-4312-bdfc-fbce2132a2c1'
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits='userSpaceOnUse'
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className='text-gray-200'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)'
                  />
                </svg>
                <div className='relative text-base mx-auto max-w-prose lg:max-w-none'>
                  <figure>
                    <div className='aspect-w-12 aspect-h-7 lg:aspect-none'>
                      {answer.scheduleImgUrl && (
                        <Image
                          className='rounded-lg shadow-lg object-cover object-center'
                          src={'/images/lablife/' + answer.scheduleImgUrl}
                          alt='Whitney leaning against a railing on a downtown street'
                          width={600}
                          height={600}
                        />
                      )}
                    </div>
                    <Timetable />
                  </figure>
                </div>
              </div>

              <div className='mt-8 lg:mt-0'>
                <div className='mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1'>
                  <h3 className='py-3 mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl'>
                    答える人
                  </h3>
                  <Student />
                </div>
                <div className='py-6 mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1'>
                  <div className='mt-12 lg:mt-0 lg:col-span-2'>
                    <dl className='space-y-12'>
                      {questions.map((question, idx) => (
                        <div key={question}>
                          <dt className='text-lg leading-6 font-medium text-gray-900'>
                            {question}
                          </dt>
                          <dd className='mt-2 text-base text-gray-500'>
                            {faq[idx]}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Page>
  );
}

export function Student() {
  return (
    <div className='flex-shrink-0 group block'>
      <div className='flex items-center'>
        <div>
          {answer.imageUrl && (
            <Image
              className='inline-block h-16 w-16 rounded-full'
              src={'/images/' + answer.imageUrl}
              width='100'
              height='100'
              alt=''
            />
          )}
          {!answer.imageUrl && (
            <span className='inline-block w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full overflow-hidden bg-gray-100'>
              <svg
                className='h-full w-full text-gray-300'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
              </svg>
            </span>
          )}
        </div>
        <div className='ml-3'>
          <p className='text-lg font-medium text-gray-700 group-hover:text-gray-900'>
            {answer.name}
          </p>
          <p className='text-l font-medium text-gray-500 group-hover:text-gray-700'>
            {answer.master
              ? '修士' + answer.grade + '年'
              : '学部' + answer.grade + '年'}
          </p>
        </div>
      </div>
    </div>
  );
}

// タイムラインデータを取得する関数
function getTimelineData() {
  const iconMap = {
    UserIcon: UserIcon,
    AcademicCapIcon: AcademicCapIcon,
    ThumbUpIcon: ThumbUpIcon,
    BookOpenIcon: BookOpenIcon,
    ChatAlt2Icon: ChatAlt2Icon,
  };

  return TimeLineData.lablife.map((timeline) => ({
    ...timeline,
    timeline: timeline.timeline.map((event) => ({
      ...event,
      icon: iconMap[event.icon] || UserIcon,
    })),
  }));
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function Timetable() {
  const timeLines = getTimelineData();

  return (
    <div className='flow-root'>
      <ul className='-mb-8'>
        {Math.abs(que) < timeLines.length &&
          timeLines[que].timeline.map((event, eventIdx) => (
            <li key={event.id}>
              <div className='relative pb-8'>
                {eventIdx !== timeLines[que].timeline.length - 1 ? (
                  <span
                    className='absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200'
                    aria-hidden='true'
                  />
                ) : null}
                <div className='relative flex space-x-3'>
                  <div>
                    <span
                      className={classNames(
                        event.iconBackground,
                        'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                      )}
                    >
                      <event.icon
                        className='h-5 w-5 text-white'
                        aria-hidden='true'
                      />
                    </span>
                  </div>
                  <div className='min-w-0 flex-1 pt-1.5 flex justify-between space-x-4'>
                    <div>
                      <p className='text-sm text-gray-500'>
                        {event.content}{' '}
                        <a
                          href={event.href}
                          className='font-medium text-gray-900'
                        >
                          {event.target}
                        </a>
                      </p>
                    </div>
                    <div className='text-right text-sm whitespace-nowrap text-gray-500'>
                      {event.endtime ? (
                        <>
                          <time dateTime={event.statetime}>
                            {event.starttime}
                          </time>{' '}
                          –<time dateTime={event.endtime}>{event.endtime}</time>
                        </>
                      ) : (
                        <time dateTime={event.starttime}>
                          {event.starttime}
                        </time>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

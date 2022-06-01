import Page from "../components/page";
import Head from "next/head";
import { AcademicCapIcon, ChatAlt2Icon, ThumbUpIcon, UserIcon, BookOpenIcon } from "@heroicons/react/solid";
import Image from "next/image";
import FaqAnswers from "../public/faq.json";
// import TimeLines from "../public/timelines.json";
import { useRouter, useEffect } from "next/router";

const questions = [ "どのような研究をしていますか?", "どのような観点から研究室を選びましたか?", "アルバイトをしていたらどんなことをしているか教えてください", "研究室で楽しいと思えることを教えてください", "研究室でつらいなーと思うことを教えてください", "研究室の教員に対する印象を教えてください", "最後に3回生に向けて、なにか一言お願いします"];
    
var answer = FaqAnswers[0];
var que = 1;

export default function Labfile() {
  const router = useRouter();
  que = router.query["id"];
    
  if(que <= 0 || FaqAnswers.length < que || que == undefined) {
    que = 1;
  }
  que -= 1;
  answer = FaqAnswers[que];
  const faq = [answer.faq1, answer.faq2,  answer.faq3, answer.faq4, answer.faq5, answer.faq6, answer.faq7]; 


  return (
    <Page>
      <Head>
        <title>プレイフルインタラクション研究室の1日</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans+JP"
          rel="stylesheet"
        ></link>
      </Head>

      <main className="flex flex-col justify-center w-full flex-1 px-20 py-5">
        <div className="bg-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />  
            <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
              <div>
                <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                  プレイフルインタラクション研究室の1日
                </h2>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {answer.master?
           ("ある修士学生の場合"):("ある学部学生の場合")
                  }
                </h3>
              </div>
            </div>
            <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="relative lg:row-start-1 lg:col-start-2">
                <svg
                  className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
      width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
                  />
                </svg>
                <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                  <figure>
                    <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                      {answer.scheduleImgUrl && (
                        <Image
                          className="rounded-lg shadow-lg object-cover object-center"
                          src={"/images/lablife/"+answer.scheduleImgUrl}
                          alt="Whitney leaning against a railing on a downtown street"
                          width={600}
                          height={600}
                        />
                      )}
                    </div>
                    <Timetable />
                  </figure>
                </div>
              </div>

              <div className="mt-8 lg:mt-0">
                <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                  <h3 className="py-3 mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                    答える人
                  </h3>
                  <Student />
                </div>
                <div className="py-6 mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                  <div className="mt-12 lg:mt-0 lg:col-span-2">
                    <dl className="space-y-12">
                      {questions.map((question, idx) => (
                        <div key={question}>
                          <dt className="text-lg leading-6 font-medium text-gray-900">
                            {question}
                          </dt>
                          <dd className="mt-2 text-base text-gray-500">
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
    <div className="flex-shrink-0 group block">
      <div className="flex items-center">
        <div>
          {answer.imageUrl && (
            <Image
              className="inline-block h-16 w-16 rounded-full"
              src={"/images/"+answer.imageUrl}
              width="100"
              height="100"
              alt=""
            />)}
          {!answer.imageUrl && (
            <span className="inline-block w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full overflow-hidden bg-gray-100">
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
        <div className="ml-3">
          <p className="text-lg font-medium text-gray-700 group-hover:text-gray-900">
          {answer.name}
          </p>
          <p className="text-l font-medium text-gray-500 group-hover:text-gray-700">
          {answer.master?
           "修士"+answer.grade+"年":"学部"+answer.grade+"年"
          }
          </p>
        </div>
      </div>
    </div>
  );
}

const TimeLines = [
    {
        timeID: 1,
        timeline: [
            {
                id: 1,
                content: "研究室 入室",
                starttime: "9:00",
                icon: UserIcon,
                iconBackground: "bg-gray-400"
            },
            {
                id: 2,
                content: "オンラインの講義（気分や天気で自宅か大学か決める）",
                starttime: "9:00",
                endtime: "12:15",
                icon: "BookOpenIcon",
                iconBackground: "bg-red-400"
            },
            {
                id: 3,
                content: "昼食（大学の場合は，ミーティングスペースで誰かと食べるかも）",
                starttime: "12:15",
                endtime: "13:00",
                icon: ThumbUpIcon,
                iconBackground: "bg-green-500"
            },
            {
                id: 4,
                content: "研究や授業の課題",
                starttime: "13:00",
                endtime: "14:00",
                icon: AcademicCapIcon,
                iconBackground: "bg-red-400"
            },
            {
                id: 5,
                content: "岡藤先生とミーティング",
                starttime: "14:00",
                endtime: "15:00",
                icon: ChatAlt2Icon,
                iconBackground: "bg-yellow-500"
            },
            {
                id: 6,
                content: "途中でおやつタイム挟みながら研究（この時間に相談とか雑談多い）",
                starttime: "15:00",
                endtime: "18:00",
                icon: AcademicCapIcon,
                iconBackground: "bg-red-400"
            },
            {
                id: 7,
                content: "研究して，きりが良くなったタイミングで帰る",
                starttime: "18:00",
                icon: UserIcon,
                iconBackground: "bg-gray-400"
            }
        ]
    },
    {
        timeID: 2,
        timeline: [
            {
                id: 1,
                content: "研究室 入室",
                starttime: "9:30",
                icon: UserIcon,
                iconBackground: "bg-gray-400"
            },
            {
                id: 2,
                content: "研究とミーティングの準備",
                starttime: "9:30",
                endtime: "10:40",
                icon: AcademicCapIcon,
                iconBackground: "bg-red-400"
            },
            {
                id: 3,
                content: "教員とミーティング",
                starttime: "10:40",
                endtime: "12:00",
                icon: ChatAlt2Icon,
                iconBackground: "bg-yellow-500"
            },
            {
                id: 4,
                content: "昼休憩",
                starttime: "12:00",
                endtime: "13:00",
                icon: ThumbUpIcon,
                iconBackground: "bg-green-500"
            },
            {
                id: 5,
                content: "研究",
                starttime: "13:00",
                endtime: "14:30",
                icon: AcademicCapIcon,
                iconBackground: "bg-red-400"
            },
            {
                id: 6,
                content: "休憩（研究室の人と雑談）",
                starttime: "14:30",
                endtime: "15:00",
                icon: ThumbUpIcon,
                iconBackground: "bg-green-500"
            },
            {
                id: 7,
                content: "ゼミの準備",
                starttime: "15:00",
                endtime: "16:20",
                icon: AcademicCapIcon,
                iconBackground: "bg-red-400"
            },
            {
                id: 8,
                content: "ゼミ（進捗報告）",
                starttime: "16:20",
                endtime: "17:50",
                icon: ChatAlt2Icon,
                iconBackground: "bg-yellow-500"
            },
            {
                id: 9,
                content: "休憩（研究室内で卓球）",
                starttime: "17:50",
                endtime: "19:00",
                icon: ThumbUpIcon,
                iconBackground: "bg-green-500"
            },
            {
                id: 10,
                content: "ゼミの内容をまとめる",
                starttime: "19:00",
                endtime: "19:30",
                icon: AcademicCapIcon,
                iconBackground: "bg-red-400"
            },
            {
                id: 11,
                content: "帰宅",
                starttime: "19:00",
                icon: UserIcon,
                iconBackground: "bg-gray-400"
            }
        ]
    },
    {
        timeID: 3,
        timeline: [
            
        ]
    },
    {
        timeID: 4,
        timeline: [
            {
                id: 1,
                content: "起床ー準備",
                starttime: "7:30",
                icon: UserIcon,
                iconBackground: "bg-gray-400"
            },
            {
                id: 2,
                content: "朝の散歩",
                starttime: "8:00",
                icon: UserIcon,
                iconBackground: "bg-gray-400"
            },
            {
                id: 3,
                content: "朝食",
                starttime: "9:00",
                icon: UserIcon,
                iconBackground: "bg-gray-400"
            },
            {
                id: 4,
                content: "研究室に行く",
                starttime: "10:30",
                endtime: "11:00",
                icon: UserIcon,
                iconBackground: "bg-gray-400"
            },
            {
                id: 5,
                content: "研究",
                starttime: "11:00",
                endtime: "12:00",
                icon: AcademicCapIcon,
                iconBackground: "bg-red-400"
            },
            {
                id: 6,
                content: "昼食",
                starttime: "12:00",
                endtime: "13:00",
                icon: ThumbUpIcon,
                iconBackground: "bg-green-500"
            },
            {
                id: 7,
                content: "研究（論文読んだり, システム考えたり, おしゃべり）",
                starttime: "13:00",
                endtime: "16:00",
                icon: AcademicCapIcon,
                iconBackground: "bg-red-400"
            },
            {
                id: 8,
                content: "バイト, 夕食",
                starttime: "17:00",
                endtime: "21:00",
                icon: ThumbUpIcon,
                iconBackground: "bg-green-500"
            },
            {
                id: 9,
                content: "筋トレ",
                starttime: "21:00",
                endtime: "23:00",
                icon: UserIcon,
                iconBackground: "bg-gray-400"
            },
            {
                id: 10,
                content: "お風呂",
                starttime: "23:00",
                icon: UserIcon,
                iconBackground: "bg-gray-400"
            },
            {
                id: 11,
                content: "就寝",
                starttime: "24:00",
                icon: UserIcon,
                iconBackground: "bg-gray-400"
            }
        ]
    },
    {
        timeID: 5,
        timeline: [
            {
                id: 1,
                content: "昼くらいまで寝てから研究室に入室",
                starttime: "14:00",
                icon: UserIcon,
                iconBackground: "bg-gray-400"
            },
            {
                id: 2,
                content: "論文読んだりミーティングしたり",
                starttime: "14:00",
                endtime: "16:00",
                icon: ChatAlt2Icon,
                iconBackground: "bg-yellow-500"
            },
            {
                id: 3,
                content: "おやつ＆昼寝",
                starttime: "16:00",
                endtime: "17:00",
                icon: ThumbUpIcon,
                iconBackground: "bg-green-500"
            },
            {
                id: 4,
                content: "研究",
                starttime: "17:00",
                endtime: "19:00",
                icon: AcademicCapIcon,
                iconBackground: "bg-red-400"
            },
            {
                id: 5,
                content: "軽くごはん",
                starttime: "19:00",
                endtime: "19:30",
                icon: ThumbUpIcon,
                iconBackground: "bg-green-500"
            },
            {
                id: 6,
                content: "ゼミの準備",
                starttime: "19:00",
                endtime: "21:00",
                icon: AcademicCapIcon,
                iconBackground: "bg-red-400"
            },
            
            {
                id: 7,
                content: "帰宅",
                starttime: "21:00",
                icon: UserIcon,
                iconBackground: "bg-gray-400"
            }
        ]
    }
];



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Timetable() {
  return (
    <div className="flow-root">
      <ul className="-mb-8">
      {Math.abs(que) < TimeLines.length && TimeLines[que].timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== TimeLines[que].timeline.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                    )}
                  >
                    <event.icon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.content}{" "}
                      <a
                        href={event.href}
                        className="font-medium text-gray-900"
                      >
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className="text-right text-sm whitespace-nowrap text-gray-500">
                    {event.endtime ? (
                      <>
                        <time dateTime={event.statetime}>
                          {event.starttime}
                        </time>{" "}
                        –<time dateTime={event.endtime}>{event.endtime}</time>
                      </>
                    ) : (
                      <time dateTime={event.starttime}>{event.starttime}</time>
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


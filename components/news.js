const announcements = [
  {
    id: 19,
    date: '2025/5/30',
    preview:
      '2025年度の研究室紹介の情報を公開しました。いつでもお越しください。',
    href: '/openlab2025',
  },
  {
    id: 18,
    date: '2024/7/15',
    preview:
      'Playful Interaction Week が始まります。3回生とたくさん交流して仲良くなりましょう。',
    href: 'https://playful-interaction-weeks-2024.vercel.app',
  },
  {
    id: 17,
    date: '2024/7/5',
    preview: '新しく研究室にB3メンバーが加わりました。ようこそ！',
    href: '/people',
  },
  {
    id: 16,
    date: '2024/5/24',
    preview:
      '研究室前にアーケードゲームを設置しています。自由に遊んでください。',
    href: '#',
  },
  {
    id: 15,
    date: '2024/5/24',
    preview:
      '2024年度の研究室紹介の情報を公開しました。いつでもお越しください。',
    href: '#',
  },
  {
    id: 14,
    date: '2023/5/29',
    preview:
      '2023年度の研究室紹介の情報を公開しました。6月6日の3限と6月14日の5限に研究室にお越しください。',
    href: '#',
  },
  {
    id: 13,
    date: '2023/3/1',
    preview: '2023年度のメンバーの更新をしました。',
    href: '/people',
  },
  {
    id: 12,
    date: '2023/2/6',
    preview: '2022年度に行った発表文献の公開をしました。',
    href: '/papers',
  },
  {
    id: 11,
    date: '2022/10/5',
    preview: 'Playful研究室麻雀リーグが開幕しました。',
    href: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSIRbYKPhL9D6zUGawAB1xxnTtX4PQCHJw5vfH4sF02v5iTsQ3QLGPVfvQaMmSMKf0Zw5noZzhwPFoG/pubhtml?gid=835796038&single=true',
  },
  {
    id: 10,
    date: '2022/9/20',
    preview: '新しく研究室にはいった3回生をメンバーに追加しました。',
    href: '/people',
  },
  {
    id: 9,
    date: '2022/7/31',
    preview:
      'Playful Interaction Week が始まります。3回生とたくさん交流して仲良くなりましょう。',
    href: 'https://sites.google.com/view/playful-interaction-weeks-2022',
  },
  {
    id: 8,
    date: '2022/6/6',
    preview:
      '松村が運営メンバーとなっているCHI勉強会2022が開催されます。637本のCHI論文を一気に知る機会ですので是非ご参加ください。',
    href: 'https://sigchi.jp/seminar/chi2022/',
  },
  {
    id: 7,
    date: '2022/6/6',
    preview:
      '2022年の研究室公開のページを更新しました。研究室公開とは関係なく本研究室はいつもオープンですので、機会を問わず気軽に遊びに来てください。',
    href: '#',
  },
  {
    id: 6,
    date: '2022/3/18',
    preview:
      '2022年3月2日~3日に行われたHAIシンポジウム2022において、弊研の天田(修士1年)と牧田(学部4年)の2人がImpressive Short-paper Award(優秀論文賞(ショート))をいただきました。おめでとうございます。',
    href: 'https://hai-conference.net/symp2022/awards.php',
  },
  {
    id: 5,
    date: '2022/3/18',
    preview: '2021年度に行った発表文献の公開をしました。',
    href: '/papers',
  },
  {
    id: 4,
    date: '2022/3/18',
    preview: '2022年度のメンバーの更新をしました。',
    href: '/people',
  },
  {
    id: 3,
    date: '2021/6/8',
    preview:
      '研究室公開があります。オンラインで実施します。研究室公開とは関係なく本研究室はいつもオープンですので、機会を問わず気軽に遊びに来てください。',
    href: '#',
  },
  {
    id: 2,
    date: '2021/6/5',
    preview:
      '松村が運営メンバーとなっているCHI勉強会2021が開催されます。747本のCHI論文を一気に知る機会ですので是非ご参加ください。',
    href: 'https://pgl.jp/seminars/chi2021',
  },
  {
    id: 1,
    date: '2021/6/1',
    preview: 'プレイフルインタラクション研究室のWebpageを公開しました。',
    href: '#',
  },
];

function News(props) {
  return (
    <li className='py-5'>
      <div className='relative focus-within:ring-2 focus-within:ring-indigo-500'>
        <h3 className='text-sm font-semibold text-gray-800'>
          <a
            href={props.announcement.href}
            className='hover:underline focus:outline-none'
          >
            {/* Extend touch target to entire panel */}
            <span className='absolute inset-0' aria-hidden='true' />
            {props.announcement.date}
          </a>
        </h3>
        <p className='mt-1 text-sm text-gray-600 line-clamp-2'>
          {props.announcement.preview}
        </p>
      </div>
    </li>
  );
}

export default function NewsList(props) {
  return (
    <div className='h-full flex flex-col justify-between'>
      <h1 className='pb-5 text-2xl font-bold'>News</h1>
      <div className='flow-root'>
        <ul className='-my-5 divide-y divide-gray-200'>
          {announcements.map((announcement) => (
            <div key={announcement.id}>
              {announcements.length - announcement.id < props.number && (
                <News announcement={announcement} />
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

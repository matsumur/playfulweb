const announcements = [
  {
    id: 13,
    title: "2023/3/1",
    preview:
      "2023年度のメンバーの更新をしました。",
    href: "/people",
  },
  {
    id: 12,
    title: "2023/2/6",
    preview: "2022年度に行った発表文献の公開をしました。",
    href: "/papers",
  },
  {
    id: 11,
    title: "2022/10/5",
    preview:
      "Playful研究室麻雀リーグが開幕しました。",
    href: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSIRbYKPhL9D6zUGawAB1xxnTtX4PQCHJw5vfH4sF02v5iTsQ3QLGPVfvQaMmSMKf0Zw5noZzhwPFoG/pubhtml?gid=835796038&single=true",
  },
  {
    id: 10,
    title: "2022/9/20",
    preview:
      "新しく研究室にはいった3回生をメンバーに追加しました。",
    href: "/people",
  },  {
    id: 9,
    title: "2022/7/31",
    preview:
      "Playful Interaction Week が始まります。3回生とたくさん交流して仲良くなりましょう。",
    href:"https://sites.google.com/view/playful-interaction-weeks-2022",
  },
  {
    id: 8,
    title: "2022/6/6",
    preview:
      "松村が運営メンバーとなっているCHI勉強会2022が開催されます。637本のCHI論文を一気に知る機会ですので是非ご参加ください。",
    href: "https://sigchi.jp/seminar/chi2022/",
  },
  {
    id: 7,
    title: "2022/6/6",
    preview:
      "2022年の研究室公開のページを更新しました。研究室公開とは関係なく本研究室はいつもオープンですので、機会を問わず気軽に遊びに来てください。",
    href: "/openlab2022",
  },
  {
    id: 6,
    title: "2022/3/18",
    preview:
      "2022年3月2日~3日に行われたHAIシンポジウム2022において、弊研の天田(修士1年)と牧田(学部4年)の2人がImpressive Short-paper Award(優秀論文賞(ショート))をいただきました。おめでとうございます。",
    href: "https://hai-conference.net/symp2022/awards.php",
  },
  {
    id: 5,
    title: "2022/3/18",
    preview:
      "2021年度に行った発表文献の公開をしました。",
    href: "/papers",
  },
  {
    id: 4,
    title: "2022/3/18",
    preview:
      "2022年度のメンバーの更新をしました。",
    href: "/people",
  },
  {
    id: 1,
    title: "2021/6/8",
    preview:
      "研究室公開があります。オンラインで実施します。研究室公開とは関係なく本研究室はいつもオープンですので、機会を問わず気軽に遊びに来てください。",
    href: "/openlab2021",
  },
  {
    id: 2,
    title: "2021/6/5",
    preview:
      "松村が運営メンバーとなっているCHI勉強会2021が開催されます。747本のCHI論文を一気に知る機会ですので是非ご参加ください。",
    href: "https://pgl.jp/seminars/chi2021",
  },
  {
    id: 3,
    title: "2021/6/1",
    preview: "プレイフルインタラクション研究室のWebpageを公開しました。",
    href: "#",
  },
];

export default function News(props) {
  return (
    <div className="h-full flex flex-col justify-between">
      <h1 className="pb-5 text-2xl font-bold">News</h1>
      <div className="flow-root">
        <ul className="-my-5 divide-y divide-gray-200">
          {announcements.map((announcement) => (
            <>{announcements.length - announcement.id < props.number && (
            <li key={announcement.id} className="py-5">
              <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
                <h3 className="text-sm font-semibold text-gray-800">
                  <a
                    href={announcement.href}
                    className="hover:underline focus:outline-none"
                  >
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0" aria-hidden="true" />
                    {announcement.title}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                  {announcement.preview}
                </p>
              </div>
            </li>
            )}</>
          ))}
        </ul>
      </div>
    </div>
  );
}

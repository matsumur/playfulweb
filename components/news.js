const announcements = [
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

export default function News() {
  return (
    <div className="h-full flex flex-col justify-between">
      <h1 className="pb-5 text-2xl font-bold">News</h1>
      <div className="flow-root">
        <ul className="-my-5 divide-y divide-gray-200">
          {announcements.map((announcement) => (
            (announcement.id > 6 && {
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
            })    
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <a
          href="#"
          className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          View all
        </a>
      </div>
    </div>
  );
}

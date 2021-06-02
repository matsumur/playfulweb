const announcements = [
  {
    id: 1,
    title: "2021/5/12 ",
    preview:
      "2021/5/12研究室公開をします．3Fプレイフルインタラクションにて待ってます",
  },
  {
    id: 2,
    title: "2021/5/11",
    preview: "CHI2021に〇〇君の論文が採択されました．",
  },
  {
    id: 3,
    title: "2021/5/10",
    preview: "プレイフルインタラクションHPを公開しました．是非見てね",
  },
];

export default function News() {
  return (
    <div className="h-full flex flex-col justify-between">
      <h1 className="pb-5 text-2xl font-bold">News</h1>
      <div className="flow-root">
        <ul className="-my-5 divide-y divide-gray-200">
          {announcements.map((announcement) => (
            <li key={announcement.id} className="py-5">
              <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
                <h3 className="text-sm font-semibold text-gray-800">
                  <a href="#" className="hover:underline focus:outline-none">
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

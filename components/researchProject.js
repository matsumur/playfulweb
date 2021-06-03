import Image from "next/image";

export default function ResearchProjects() {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="mt-0 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <Image
                  src={project.imageUrl}
                  height={400}
                  width={600}
                  objectFit="cover"
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    キーワード：{project.keyword}
                  </p>
                  <a href={project.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {project.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {project.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">{project.name}</span>
                  </div>
                  <div className="ml-2">
                    <p className="text-sm font-medium text-gray-900">
                      {project.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    name: "川上雄大 & 渡邊将太 ",
    title: "顔アイコンの研究",
    keyword: "顔アイコン、感情",
    description:
      "顔アイコンを用いた全く新しい感情表現方法について研究しています。アニメーションする顔アイコンを自分で作成して、悲しい気持ちから楽しい気持ちになったなどの感情の変化や、感情の強調が簡単に表現できるシステムを作っています。",
    imageUrl: "/project-images/faceicon.png",
  },
  {
    name: "天田穣一朗 & 牧田昌大",
    title: "公共の場のロボットインタラクション",
    keyword: "公共の場のロボットインタラクション",
    description:
      "会話をしたり感情を表現したりする社会的なロボットは，商業において接客や広告を行う新たな媒体として期待されています。この研究では、特に公共の場においてどのようなロボットが人に注目されるか、人に使われるのか、どういう印象を与えるか調査します。",
    imageUrl: "/project-images/amada.png",
  },
  {
    name: "YANG Guang",
    title: "VRライブステージのインタラクション",
    keyword: "VR、心理学、アバタ",
    description:
      "アバタの表現に関連する研究を従事しています。主にバーチャル空間内のアバタが発話者に対する注意喚起やVRライブステージの参加者同士のインタラクションによる体験の向上など、VR環境の表現が人間に心理的な影響をどのように与えて改善できるかを研究しています。",
    imageUrl: "/project-images/YANG Guang VRライブステージの表現(一例).png",
  },
  {
    name: "坂口太一",
    title: "通行人の滞留時間延長に関する研究",
    keyword: "ロボット，機械学習，社会心理学",
    description:
      "対話ロボットの前に滞留させる行動生成を可能にするための研究を行っています．そこで本研究では機械学習を用いて，対象者が立ち去り傾向にあるかを識別し，滞留させるための行動生成を可能にするための方法を研究しています．",
    imageUrl: "/project-images/noImage.png",
  },
  {
    name: "Zhang Sicheng & 加藤祐樹",
    title: "アニメと漫画のメディアミックス",
    keyword: "アニメ、マンガ、メディアミックス",
    description:
      "アニメや漫画に関する研究をしています。この研究では、同じストーリー・キャラクター等のシーン描写をしているアニメと漫画に着目し、アニメと漫画のマッチング・アニメ中のシーンの探索速度の向上等、ユーザに新たな視聴体験を与えることを目指しています。",
    imageUrl: "/project-images/anime.png",
  },
  {
    name: "石川拓海",
    title: "購入促進ロボット間対話システム",
    keyword: "ロボット，心理学",
    description:
      "ロボットの対話システムを用いた商品推薦に関する研究をしています．ロボット同士に推薦する商品に関する内容で対話をさせ，それをユーザに聞かせることによって行動変容を促し，商品の購入を促進可能かどうかについて調査しています．",
    imageUrl: "/project-images/noImage.png",
  },
  {
    name: "浮田凌佑",
    title:
      "ニューラルネットワーク構造の探索アルゴリズムを用いた運転行動の数理モデルの構築",
    keyword: "ドライバモデル, 機械学習",
    description:
      "自動運転が普及する現代だからこそ、そもそも人間はなぜ運転できるのかを理解することは非常に重要です。運転の基本ループである知覚・認知・判断・操作の一貫した運転行動を心理学実験・機械学習を通して理解し、自動運転への応用することを目指しています。",
    imageUrl: "/project-images/ukita.png",
  },
];

import Image from "next/image";

export default function ResearchProjects(props) {
  return (
    <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
          <div className="mt-0 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {props.projects.map((project) => (
            <div
              key={project.projectID}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:border-gray-400 projectContents"
              id={"project"+project.projectID}
            >
            <div className="flex-shrink-0">
                <Image
                  src={
                    project.imageUrl
                      ? "/project-images/"+project.imageUrl
                      : "/project-images/noImage.png"
                  }
                  height={400}
                  width={600}
                  objectFit="cover"
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                  キーワード：{project.keyword1+"  "+project.keyword2+"  "+project.keyword3}
                  </p>
                  <a href={"#project" + project.projectID} className="block mt-2">
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
                    <span className="sr-only">{}</span>
                  </div>
                  <div className="ml-1">
                  <p className="text-sm font-medium text-gray-900">
                  {}
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

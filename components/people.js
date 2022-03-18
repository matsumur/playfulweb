import { MailIcon, HomeIcon } from "@heroicons/react/solid";
import { version } from "react-dom";
import Image from "next/image";

export function Faculty(props) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 mt-6">
      {props.faculty.map((person) => (
        <>{person.grade== -1 && (
          <li
            key={person.name}
            className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
          >
          <div className="flex-1 flex flex-col p-8">
            {person.imageUrl && (
              <img
                className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
                width="400"
                height="400"
                src={"/images/"+person.imageUrl}
                alt=""
              />
            )}
            {!person.imageUrl && (
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
            <h3 className="mt-6 text-gray-900 text-sm font-medium">
              {person.name}
            </h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-gray-500 text-sm">{person.role}</dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <a
                  href={`mailto:${person.email}`}
                  className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                >
                <MailIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-3">Email</span>
              </a>
            </div>
            <div className="-ml-px w-0 flex-1 flex">
              <a
                href={`${person.web}`}
                className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
              >
                <HomeIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-3">Web</span>
              </a>
            </div>
          </div>
        </div>
      </li>
        )}</>
      ))}
    </ul>
  );
}

export function Students(props) {
  const { students, grade } = props
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 px-10 mt-6">
      {students.map((person) => (
        <>{person.grade==grade && (
              <div
          key={person.id}
          className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 studentContents"
        >
          <div className="flex-shrink-0">
            {person.imageUrl && (
              <img
                className="h-10 w-10 rounded-full"
                src={"/images/"+person.imageUrl}
                alt=""
              />
            )}
            {!person.imageUrl && (
              <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
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
          <div className="flex-1 min-w-0">
            <a href={person.project ? "/projects#project" + person.project: "#"} >
              <span className="absolute inset-0" aria-hidden="true" />
              <p className="text-sm font-medium text-gray-900">{person.name}</p>
            </a>
          </div>
        </div>
      )}</>
      ))}
    </div>
  );
}

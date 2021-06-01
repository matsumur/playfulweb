import { Fragment, useCallback, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  if(process.browser){
    var pathname = window.location.pathname;

    pathname = pathname.replace('/', '');

    if(pathname.indexOf('/') !== -1){
      pathname = pathname.slice(0, pathname.indexOf('/'));
    }
  } else { 
    var pathname = "/home";
  }
  const [count, setCount] = useState(pathname);

  function styleChange(style) {
    if (style) {
      return "font-extrabold border-indigo-700 text-black-700 hover:border-indigo-900 hover:text-black-900 "
    } else {
      return "font-medium border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900"
    }
  }
  
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
          <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <a role="tab" aria-controls="home" onClick={() => setCount("home")}>
                      <img
                        className="block lg:hidden h-8 w-auto"
                        src="/playful.svg"
                        alt="Playful Laboratory"
                      />
                      <img
                        className="hidden lg:block h-8 w-auto"
                        src="/playful_text.svg"
                        alt="Playful Laboratory"
                      />
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                   <Link href="/people">
                   <a onClick={() => setCount("people")} className={['inline-flex items-center px-1 pt-1 border-b-2 hover:border-b-4 text-sm  wf-notosansjapanese ', styleChange(count === "people")].join(' ').trim()}>
                      Playfulな人
                  </a>
                  </Link>
          <Link href="/projects">          
                  <a onClick={() => setCount("projects")}  className={['inline-flex items-center px-1 pt-1 border-b-2 hover:border-b-4 text-sm wf-notosansjapanese', styleChange(count ==="projects")].join(' ').trim()}>
                      研究プロジェクト
                  </a>
                  </Link>
                  <Link href="/papers">
                  <a onClick={() => setCount("papers")}  className={['inline-flex items-center px-1 pt-1 border-b-2 hover:border-b-4 text-sm wf-notosansjapanese', styleChange(count ==="papers")].join(' ').trim()}>
                      発表文献
                  </a>
                  </Link>
                  <Link href="/openlab2021">
                  <a onClick={() => setCount("openlab2021")}  className={['inline-flex items-center px-1 pt-1 border-b-2 hover:border-b-4 text-sm wf-notosansjapanese', styleChange(count ==="openlab2021")].join(' ').trim()}>
                      研究室公開
                  </a>
                  </Link>
                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link href="/people">
                <a className="border-gray-500 text-gray-700 hover:bg-gray-50 hover:border-gray-900 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  Playfulな人
                </a>
              </Link>
              <Link href="/projects">
                <a className="border-gray-500 text-gray-700 hover:bg-gray-50 hover:border-gray-900 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  研究プロジェクト
                </a>
              </Link>
              <Link href="/papers">
                <a className="border-gray-500 text-gray-700 hover:bg-gray-50 hover:border-gray-900 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  発表文献
                </a>
              </Link>
              <Link href="/openlab2021">
                <a className="border-gray-500 text-gray-700 hover:bg-gray-50 hover:border-gray-900 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  研究室公開
                </a>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

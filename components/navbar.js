import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <a href="/">
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
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <a
                    href="#"
                    className="border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 hover:border-b-4 text-sm font-medium wf-notosansjapanese"
                  >
                    Playfulな人
                  </a>
                  <a
                    href="#"
                    className="border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 hover:border-b-4 text-sm font-medium wf-notosansjapanese"
                  >
                    研究プロジェクト
                  </a>
                  <a
                    href="#"
                    className="border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 hover:border-b-4 text-sm font-medium wf-notosansjapanese"
                  >
                    発表文献
                  </a>
                  <a
                    href="#"
                    className="border-indigo-300 text-indigo-700 hover:border-indigo-900 hover:text-indigo-900 inline-flex items-center px-1 pt-1 border-b-2 hover:border-b-4 text-sm font-medium wf-notosansjapanese"
                  >
                    研究室公開
                  </a>
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
              <a
                href="#"
                className="border-gray-500 text-gray-700 hover:bg-gray-50 hover:border-gray-900 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                People
              </a>
              <a
                href="#"
                className="border-gray-500 text-gray-700 hover:bg-gray-50 hover:border-gray-900 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Research
              </a>
              <a
                href="#"
                className="border-gray-500 text-gray-700 hover:bg-gray-50 hover:border-gray-900 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Publications
              </a>
              <a
                href="#"
                className="border-gray-500 text-gray-700 hover:bg-gray-50 hover:border-gray-900 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Open Lab
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

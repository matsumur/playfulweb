import { Fragment, useCallback, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function styleChange(page, id, name) {
  var d1 = document.getElementById(id);
  if(!page){
    return d1.insertAdjacentHTML('afterend', '<a className="border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 hover:border-b-4 text-sm font-medium wf-notosansjapanese"> name </a>');
    
  }else{
    return d1.insertAdjacentHTML('afterend', '<a className="border-indigo-300 text-indigo-700 hover:border-indigo-900 hover:text-indigo-900 inline-flex items-center px-1 pt-1 border-b-2 hover:border-b-4 text-sm font-medium wf-notosansjapanese"> name </a>');
  }
}

export default function Navbar() {
  var [state, setState] = useState({
    tab: 'home',
  });

  // クリックしたときのイベントハンドラーです。
  const handleClick = useCallback((event) => {
    // イベント発生源の要素を取得
    const element = event.currentTarget;

    // aria-controls 属性の値を取得
    const tabState = element.getAttribute('aria-controls');

    // プロパティーを更新
    setState({
      tab: tabState,
    });
  }, []);
  
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="/">
                    <a role="tab" aria-controls="home" onClick={handleClick}>
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
                   <div id="people" role="tab" aria-controls="people" onClick={handleClick}>
                   <script>
                     styleChange = {state.tab === 'people', "people", "Playfulな人"}
        </script>
          </div>
                  </Link>
                  <Link href="/projects">
                    <div id="research" role="tab" aria-controls="research" onClick={handleClick}> 
                   <script>
                     styleChange = {state.tab === 'research', "research", "研究プロジェクト"}
        </script>
           </div>
                  </Link>
                  <Link href="/papers">
          <div id="papers" role="tab" aria-controls="papers" onClick={handleClick}>
                   <script>
                     styleChange = {state.tab === 'papers', "papers", "発表文献"}
        </script>
          </div>
                  </Link>
                  <Link href="/openlab2021">
          <div id="openlab" role="tab" aria-controls="openlab" onClick={handleClick}>
                   <script>
                     styleChange = {state.tab === 'openlab', "openlab", "研究室公開"}
        </script>
          </div>
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

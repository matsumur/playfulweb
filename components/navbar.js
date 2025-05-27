import { Disclosure, Menu } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter, useEffect } from 'next/router';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const router = useRouter();
  function ariaChange(style) {
    if (style === router.pathname) {
      return "aria-current='page' UnderlineNav-item-this-page";
    } else {
      return 'UnderlineNav-item';
    }
  }

  return (
    <Disclosure as='nav' className='bg-white shadow'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between h-16'>
              <div className='flex'>
                <div className='flex-shrink-0 flex items-center'>
                  <Link href='/'>
                    <a>
                      <img
                        className='block lg:hidden h-8 w-auto'
                        src='/playful.svg'
                        alt='Playful Laboratory'
                      />
                      <img
                        className='hidden lg:block h-8 w-auto'
                        src='/playful_text.svg'
                        alt='Playful Laboratory'
                      />
                    </a>
                  </Link>
                </div>
                <div className='hidden md:ml-6 md:flex md:space-x-8'>
                  <Link href='/people'>
                    <a
                      className={[
                        ariaChange('/people'),
                        'inline-flex items-center px-1 pt-1 text-sm  wf-notosansjapanese',
                      ]
                        .join(' ')
                        .trim()}
                    >
                      Playfulな人
                    </a>
                  </Link>
                  <Link href='/projects'>
                    <a
                      className={[
                        ariaChange('/projects'),
                        'inline-flex items-center px-1 pt-1 text-sm  wf-notosansjapanese',
                      ]
                        .join(' ')
                        .trim()}
                    >
                      研究プロジェクト
                    </a>
                  </Link>
                  <Link href='/papers'>
                    <a
                      className={[
                        ariaChange('/papers'),
                        'inline-flex items-center px-1 pt-1 text-sm  wf-notosansjapanese',
                      ]
                        .join(' ')
                        .trim()}
                    >
                      発表文献
                    </a>
                  </Link>
                  <Link href='/openlab2025'>
                    <a
                      className={[
                        ariaChange('/openlab2025'),
                        'inline-flex items-center px-1 pt-1 text-sm  wf-notosansjapanese',
                      ]
                        .join(' ')
                        .trim()}
                    >
                      いつでも研究室公開
                    </a>
                  </Link>
                </div>
              </div>

              <div className='-mr-2 flex items-center md:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='md:hidden'>
            <div className='pt-2 pb-3 space-y-1'>
              <Link href='/people'>
                <a className='border-gray-500 text-gray-700 hover:bg-gray-50 hover:border-gray-900 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'>
                  Playfulな人
                </a>
              </Link>
              <Link href='/projects'>
                <a className='border-gray-500 text-gray-700 hover:bg-gray-50 hover:border-gray-900 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'>
                  研究プロジェクト
                </a>
              </Link>
              <Link href='/papers'>
                <a className='border-gray-500 text-gray-700 hover:bg-gray-50 hover:border-gray-900 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'>
                  発表文献
                </a>
              </Link>
              <Link href='/openlab2025'>
                <a className='border-gray-500 text-gray-700 hover:bg-gray-50 hover:border-gray-900 hover:text-gray-900 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'>
                  いつでも研究室公開
                </a>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

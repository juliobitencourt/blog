import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { StaticImage } from 'gatsby-plugin-image'

const toggleDarkMode = () => {
  if (document.documentElement.classList.contains('dark')) {
    localStorage.theme = 'light'
    document.documentElement.classList.remove('dark')
  } else {
    localStorage.theme = 'dark'
    document.documentElement.classList.add('dark')
  }
}

if (typeof window !== 'undefined') {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  mediaQuery.addEventListener('change', function (e) {
    if ('theme' in localStorage) {
      return
    }

    if (e.matches) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  });
}

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <meta name="google-site-verification" content="mLxbzMz7rJHe_1Zvo8kAqXCNOKDicaLld6lEfujAIGY" />
      </Helmet>
      <div class="dark:bg-gray-800 transform transition duration-1000">
        <div className="container mx-auto max-w-6xl p-6">
          <header className="sticky top-0 dark:bg-gray-800 bg-white transform transition duration-1000 z-10">
              <div className="flex flex-col md:flex-row justify-between items-center border-b-2 pb-1">
                  <span className="font-semibold md:font-bold dark:text-gray-200 text-indigo-700 text-xl md:text-2xl">{data.site.siteMetadata.title}</span>
                  <nav>
                    <ul className="flex items-center space-x-2 md:space-x-4 font-semibold md:font-bold dark:text-gray-200 text-indigo-700 text-sm md:text-2xl">
                      <li>
                        <Link to="/" className="hover:text-indigo-500">Home</Link>
                      </li>
                      <li>
                        <Link to="/about" className="hover:text-indigo-500">About</Link>
                      </li>
                      <li class="flex items-center dark:text-white text-yellow-400 dark:hover:text-yellow-400 hover:text-gray-800">
                        <button onClick={toggleDarkMode} title={typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? 'Light Mode' : 'Dark Mode'}>
                          <svg className="h-6 w-6 mr-1 fill-current" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </nav>
              </div>
          </header>
          <main className="py-3">
              <div className="mx-auto max-w-prose">
                <h1 className="text-6xl dark:text-gray-300">{pageTitle}</h1>
              </div>
              {children}
          </main>
          <nav className="mx-auto max-w-prose mt-3 sm:mt-5 flex space-x-3">
              <a className="flex items-center text-gray-500 text-sm hover:underline" href="https://github.com/juliobitencourt" title="GitHub">
                  <svg className="h-6 w-6 mr-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                      <path
                          d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="hidden lg:block">GitHub</span>
              </a>
              <a className="flex items-center text-gray-500 text-sm hover:underline" href="https://twitter.com/juliobitencourt" title="Twitter">
                  <svg className="h-6 w-6 mr-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                      <path
                          d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                  </svg>
                  <span className="hidden lg:block">Twitter</span>
              </a>
              <a className="flex items-center text-gray-500 text-sm hover:underline" href="https://www.linkedin.com/in/jbitencourt/" title="LinkedIn">
                  <svg className="h-6 w-6 mr-1 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                  <span className="hidden lg:block">LinkedIn</span>
              </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Layout
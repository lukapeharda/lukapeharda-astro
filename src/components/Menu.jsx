import React, { useState } from "react";

function Menu({currentPathName}) {
    const [isExpanded, toggleExpansion] = useState(false);

    const isActive = (url) => {
        if (url === '/') {
            return currentPathName === '/';
        }

        return currentPathName.startsWith(url);
    }

    return (
        <>
            <button
                className="block md:hidden flex items-center px-3 py-2 rounded text-white light-mode:text-slate-800 focus:outline-none"
                onClick={() => toggleExpansion(!isExpanded)}
            >
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>

            <div
                className={`${
                isExpanded ? `block` : `hidden`
                } md:block md:flex md:items-center w-full md:w-auto`}
            >
                <nav className="text-md" role="menubar">
                    <a
                        href="/"
                        title="Home"
                        className={`${ isActive('/') ? 'border-b-2' : 'border-b' } block mt-4 p-2 md:inline-block md:mt-0 mx-3 no-underline text-slate-400 border-b border-e6n-red hover:bg-e6n-red hover:text-white light-mode:text-slate-800`}
                    >home</a>
                    <a
                        href="/now/"
                        title="Now"
                        className={`${ isActive('/now/') ? 'border-b-2' : 'border-b' } block p-2 md:inline-block mt-4 md:mt-0 mx-3 no-underline text-slate-400 border-e6n-blue hover:bg-e6n-blue hover:text-white light-mode:text-slate-800`}
                    >now</a>
                    <a
                        href="/projects/"
                        title="Projects"
                        className={`${ isActive('/projects/') ? 'border-b-2' : 'border-b' } block p-2 md:inline-block mt-4 md:mt-0 mx-3 no-underline text-slate-400 border-e6n-yellow hover:bg-e6n-yellow hover:text-white light-mode:text-slate-800`}
                    >projects</a>
                    <a
                        href="/articles/"
                        title="Articles"
                        className={`${ isActive('/articles/') ? 'border-b-2' : 'border-b' } block p-2 md:inline-block mt-4 md:mt-0 mx-3 no-underline text-slate-400 border-e6n-green hover:bg-e6n-green hover:text-white light-mode:text-slate-800`}
                    >articles</a>
                    <a
                        href="/about/"
                        title="About"
                        className={`${ isActive('/about/') ? 'border-b-2' : 'border-b' } block p-2 md:inline-block mt-4 md:mt-0 mx-3 no-underline text-slate-400 border-e6n-red hover:bg-e6n-red hover:text-white light-mode:text-slate-800`}
                    >about</a>
                </nav>
            </div>
        </>
    );
}

export default Menu;
import React, { useState } from 'react';

function Tags({tags, color}) {
    if (typeof tags !== 'object') {
        return null;
    }

    return (
        <div className="p-6">
            { tags.map((tag) => (
                <span className={ `text-white px-2 py-1 bg-e6n-${color} mr-2 mb-2 inline-block last-child:mr-0` } key={ tag }>{ tag }</span>
            ))}
        </div>
    )
}

function ActiveProjects({projects}) {
    const [index, setIndex] = useState(0);

    const nextProject = () => {
        if (index < projects.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }

    const prevProject = () => {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(projects.length - 1);
        }
    }

    const project = projects[index].data;

    const styles = {
        backgroundImage: "url(" + project.image + ")"
    }

    return (
        <div className="h-full w-full relative">
            <div className="bg-e6n-black light-mode:bg-white flex flex-col md:flex-row h-full" key={ project.id }>
                <div className={ `w-full md:w-2/3 relative bg-e6n-${project.color} h-64 md:h-full bg-cover bg-center` } style={ styles }>
                    <h2 className="absolute bg-e6n-black light-mode:bg-white opacity-90 top-0 right-0 text-3xl p-6 text-white light-mode:text-gray-800">
                        <a href={ project.url } className={ `no-underline border-b border-e6n-${project.color} hover:bg-e6n-${project.color} p-1` } target="_blank">{ project.title }</a>
                    </h2>
                </div>
                <div className="w-full md:w-1/3 text-white light-mode:text-gray-800 flex flex-col h-full">
                    <div className="text-xl p-6 text-content" dangerouslySetInnerHTML={{ __html: project.description }}></div>
                    <Tags tags={ project.technologies } color={ project.color } />
                </div>
            </div>
            <div className="absolute bg-white flex justify-around bottom-0 right-0">
                <button type="button" className="inline-block p-6 text-e6n-black hover:text-e6n-red focus:outline-none" onClick={ prevProject }>
                    <svg className="fill-current" width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"></path></svg>
                </button>
                <button type="button" className="inline-block p-6 text-e6n-black hover:text-e6n-blue focus:outline-none" onClick={ nextProject }>
                    <svg className="fill-current" width="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M216.464 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887L209.393 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L233.434 36.465c-4.686-4.687-12.284-4.687-16.97 0z"></path></svg>
                </button>
            </div>
        </div>
    );
}

export default ActiveProjects;
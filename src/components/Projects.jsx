const statusColors = {
    Active: 'blue',
    Zombie: 'green',
    Dead: 'red'
};

function Tags({tags, color}) {
    return (
        <div className="mt-6">
            { tags.map((tag) => (
                <span className={ `text-white px-2 py-1 bg-e6n-${color} mr-2 mb-2 inline-block` } key={ tag }>{ tag }</span>
            ))}
        </div>
    );
}

function Section({title, color, html}) {
    return (
        <div className="mt-6">
            <h3 className={ `text-e6n-${color} italic text-lg mb-2` }>{ title }</h3>
            <div className="text-gray-100 light-mode:text-gray-600 text-content" dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
    );
}

function Project({project, slug, reversed}) {
    const styles = {
        backgroundImage: "url(" + project.image + ")"
    };

    return (
        <article id={ slug } className={ `flex flex-col ${ reversed ? 'md:flex-row-reverse' : 'md:flex-row' } bg-e6n-black light-mode:bg-white` }>
            <a href={ project.url } target="_blank" className={ `order-2 md:order-none block w-full md:w-1/2 h-96 md:h-auto md:min-h-[28rem] bg-e6n-${project.color} bg-cover bg-center` } style={ styles } aria-label={ project.title }></a>
            {/* On mobile the wrapper dissolves so the header can sit above the image */}
            <div className="contents md:block w-full md:w-1/2 md:p-8 text-white light-mode:text-gray-800">
                <div className="order-1 md:order-none p-4 md:p-0">
                    <h2 className="text-3xl mb-3">
                        <a href={ project.url } className={ `no-underline border-b border-e6n-${project.color} hover:bg-e6n-${project.color} p-1` } target="_blank">{ project.title }</a>
                    </h2>
                    <div className="flex items-center md:mb-4">
                        <span className="text-slate-400 light-mode:text-slate-800 mr-3">{ project.year }.</span>
                        <span className={ `text-white text-sm px-2 py-1 bg-e6n-${statusColors[project.status]} inline-block` }>{ project.status }</span>
                    </div>
                </div>
                <div className="order-3 md:order-none p-4 md:p-0">
                    <div className="text-xl text-content" dangerouslySetInnerHTML={{ __html: project.description }}></div>
                    <Section title="Why I built it" color={ project.color } html={ project.why } />
                    <Section title="What I learned" color={ project.color } html={ project.learned } />
                    <Tags tags={ project.technologies } color={ project.color } />
                </div>
            </div>
        </article>
    );
}

function Projects({projects}) {
    return (
        <div>
            { projects.map((project, index) => (
                <Project project={ project.data } slug={ project.id } reversed={ index % 2 === 1 } key={ project.id } />
            ))}
        </div>
    );
}

export default Projects;

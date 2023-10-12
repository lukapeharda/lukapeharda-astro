function ProjectName({project}) {
    if ( ! project.url) {
        return project.name;
    }

    if (project.status === 'Dead') {
        return (
            <a href={ project.url } className="border-b border-e6n-red hover:bg-e6n-red whitespace-no-wrap" target="_blank">{ project.name }</a>
        );
    }

    if (project.status === 'Active') {
        return (
            <a href={ project.url } className="border-b border-e6n-blue hover:bg-e6n-blue whitespace-no-wrap" target="_blank">{ project.name }</a>
        );
    }

    if (project.status === 'Zombie') {
        return (
            <a href={ project.url } className="border-b border-e6n-green hover:bg-e6n-green whitespace-no-wrap" target="_blank">{ project.name }</a>
        );
    }

    return (
        <a href={ project.url } className="border-b border-e6n-yellow hover:bg-e6n-yellow whitespace-no-wrap" target="_blank">{ project.name }</a>
    );
}

function ProjectStatus({project}) {
    if (project.status === 'Dead') {
        return (
            <span className="text-white text-sm px-2 py-1 bg-e6n-red inline-block">{ project.status }</span>
        );
    }

    if (project.status === 'Active') {
        return (
            <span className="text-white text-sm px-2 py-1 bg-e6n-blue inline-block">{ project.status }</span>
        );
    }

    if (project.status === 'Zombie') {
        return (
            <span className="text-white text-sm px-2 py-1 bg-e6n-green inline-block">{ project.status }</span>
        );
    }

    return (
        <span className="text-white text-sm px-2 py-1 bg-e6n-yellow inline-block">{ project.status }</span>
    );
}

function ArchivedProjects({projects}) {
    return (
        <table class="w-full border-collapse">
            <thead>
                <tr>
                    <th class="text-white light-mode:text-gray-800 text-xl text-left border-b border-e6n-red">Name</th>
                    <th class="pl-2 text-white light-mode:text-gray-800 text-xl text-left border-b border-e6n-red">Year</th>
                    <th class="pl-2 text-white light-mode:text-gray-800 text-xl text-left border-b border-e6n-red hidden md:table-cell">Description</th>
                    <th class="pl-2 text-white light-mode:text-gray-800 text-xl text-left border-b border-e6n-red">Status</th>
                </tr>
            </thead>
            <tbody>
                {projects.map(project => (
                    <tr>
                        <td class="text-white light-mode:text-gray-800 text-left py-2">
                            <ProjectName project={ project.data }></ProjectName>
                        </td>
                        <td class="pl-2 text-white light-mode:text-gray-800 text-left py-2">{ project.data.year }.</td>
                        <td class="pl-2 text-white light-mode:text-gray-800 text-left py-2 hidden md:table-cell">{ project.data.description }</td>
                        <td class="pl-2 pt-2">
                            <ProjectStatus project={ project.data }></ProjectStatus>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ArchivedProjects;
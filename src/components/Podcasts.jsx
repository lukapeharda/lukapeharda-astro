function Podcasts({ podcasts }) {
    const colors = ['red', 'blue', 'green', 'yellow'];

    return (
        <div className="flex flex-wrap -mx-4">
            { podcasts.map((podcast, index) => (
                <div className="w-full py-2 px-4" key={ podcast.data.title }>
                    <h3>
                        <a className={ `text-white light-mode:text-gray-800 p-1 text-lg border-b border-e6n-${colors[index % 4]} hover:bg-e6n-${colors[index % 4]}` } href={ podcast.data.url } title={ podcast.data.title } target="_blank">{ podcast.data.title }</a>
                    </h3>

                    <p className="text-gray-100 light-mode:text-gray-600 mt-2">{ podcast.data.description }</p>
                </div>
            )) }
        </div>
    );
}

export default Podcasts;
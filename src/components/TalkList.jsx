function TalkList({ talks}) {
    const colors = ['red', 'blue', 'green', 'yellow'];

    return (
        <div className="flex flex-wrap -mx-4">
            { talks.map((talk, index) => (
                <div className="w-full py-2 px-4" key={ talk.data.title }>
                    <h3>
                        <a className={ `text-white light-mode:text-gray-800 p-1 text-lg border-b border-e6n-${colors[index % 4]} hover:bg-e6n-${colors[index % 4]}` } href={ talk.data.url } title={ talk.data.title } target="_blank">{ talk.data.title }</a>
                    </h3>
                    <div className="text-slate-400 light-mode:text-slate-800 text-xs mt-2">
                        { new Date(talk.data.date).toDateString() }
                        <span className="text-sm text-gray-500 mx-2">@</span>
                        <a className={ `text-gray-500 light-mode:text-gray-800 p-1 text-sm border-b border-e6n-${colors[index % 4]} hover:bg-e6n-${colors[index % 4]} hover:text-white` } href={ talk.data.conferenceUrl } title={ talk.data.conference } target="_blank">{ talk.data.conference }</a>
                    </div>

                    <p className="text-gray-100 light-mode:text-gray-600 mt-2">{ talk.data.description }</p>
                </div>
            )) }
        </div>
    );
}

export default TalkList;
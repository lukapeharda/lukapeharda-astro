function Paragraph(props) {
    const { children } = props;

    return <p className="text-slate-400 light-mode:text-slate-800 text-xl">{ children }</p>
}

function Subtitle(props) {
    const { children } = props;

    return <h2 className="text-white light-mode:text-slate-800 text-2xl italic mb-4">{ children }</h2>
}

function Divider() {
    return (
        <div className="text-white light-mode:text-slate-800 text-xl text-center my-4">
            <span className="px-1">&bull;</span>
            <span className="px-1">&bull;</span>
            <span className="px-1">&bull;</span>
        </div>
    );
}

function TweetLink(props) {
    const { text, children, ...other } = props;

    return <a href={ "https://twitter.com/intent/tweet?text=" + encodeURI(text) } { ... other } target="_blank">{ children }</a>
}

function Bold(props) {
    const { children } = props;

    return <strong className="bg-slate-700 light-mode:bg-slate-200">{ children }</strong>
}

export { Paragraph, Bold, Subtitle, Divider, TweetLink };
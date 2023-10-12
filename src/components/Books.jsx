function Books({books}) {
    const colors = ['red', 'blue', 'green', 'yellow'];

    return (
        <div className="flex flex-wrap -mx-4">
            { books.map((book, index) => (
                <div className="w-full py-2 px-4" key={ book.data.title }>
                    <h3>
                        <a className={ `text-white light-mode:text-gray-800 p-1 text-lg border-b border-e6n-${colors[index % 4]} hover:bg-e6n-${colors[index % 4]}` } href={ book.data.url } title={ book.data.title } target="_blank">{ book.data.title } <span className="text-sm text-gray-500">by { book.data.author }</span></a>
                    </h3>

                    <p className="text-gray-100 light-mode:text-gray-600 mt-2">{ book.data.description }</p>
                </div>
            )) }
        </div>
    );
}

export default Books;
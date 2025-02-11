export async function fetchGithubContent(url) {
    url = url.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/');

    const response = await fetch(url);

    if ( ! response.ok) {
        throw new Error(`Failed to fetch content: ${response.statusText}`);
    }
    return await response.text();
}
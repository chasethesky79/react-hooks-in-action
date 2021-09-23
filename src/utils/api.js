export default async function getData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        throw Error('There was a problem fetching data');
    }
}
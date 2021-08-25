import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
    url: 'https://nikilablog.herokuapp.com',
    key: '9d9bb29ec44fdee8bb342b9364',
    version: "v2"
});

export  async function getPost() {
    return await api.posts
    .browse({
        limit: "all",
        include:"tags,authors"
    })
    .catch(err => {
        console.error(err);
    })
}
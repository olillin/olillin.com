const express = require('express')
const https = require('https')
const fs = require('fs')
const { Client: GetPinnedReposClient } = require('get-pinned-repos')

const app = express()
const PORT = process.env.PORT || 8080

const { GITHUB_ACCESS_TOKEN } = process.env
if (!GITHUB_ACCESS_TOKEN) {
    console.error('Missing required ENV variable GITHUB_ACCESS_TOKEN')
    process.exit(1)
}
GetPinnedReposClient.setToken(GITHUB_ACCESS_TOKEN)

app.use(express.static('public/'))

app.get('/projects.json', async (req, res) => {
    const pinned = await GetPinnedReposClient.getPinnedRepos('olillin')
    const projects = pinned.map(repo => {
        return {
            name: repo.name,
            description: repo.description,
            source: repo.url,
            website: repo.homepageUrl,
        }
    })
    res.json(projects)
})

if (fs.existsSync('cert.pem') && fs.existsSync('key.pem')) {
    https
        .createServer(
            {
                cert: fs.readFileSync('cert.pem'),
                key: fs.readFileSync('key.pem'),
            },
            app
        )
        .listen(PORT, port => {
            console.log(`Started HTTPS server on port ${port}`)
        })
} else {
    app.listen(PORT, () => {
        console.log(`Started HTTP server on port ${PORT}`)
    })
}

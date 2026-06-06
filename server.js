import http from 'node:http';
import { createPage } from './pages.js';

const serverPort = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    const route = req.url;

    if (route === '/') {
        res.statusCode = 200;

        res.end(
            createPage(
                'Home Page',
                'Welcome to my simple Node.js server'
            )
        );
        return;
    }

    if (route === '/about') {
        res.statusCode = 200;

        res.end(
            createPage(
                'About Page',
                'Here you can find information about this project'
            )
        );
        return;
    }

    if (route === '/contact') {
        res.statusCode = 200;

        res.end(
            createPage(
                'Contact Page',
                'You can contact me anytime'
            )
        );
        return;
    }

    res.statusCode = 404;

    res.end(
        createPage(
            'Error 404',
            'Sorry, page not found'
        )
    );
});

server.listen(serverPort, () => {
    console.log(`Server is running on port ${serverPort}`);
});
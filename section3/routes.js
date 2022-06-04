const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(url, method)

    res.setHeader('Content-Type', 'text/html');

    if (url === "/") {
        res.write(`
        <html>
            <head>
                <title>Welcome Page</title>
            </head>
            <body>
                <h1>Welcome to FamilyBook</h1>
                <h3>Create an account to became a member of our family</h3>
                <form action="/create-user" method="POST">
                    <label>
                        Username:
                        <input type="text" name="username">
                    </label>
                    <input type="submit">
                </form>
            </body>
        </html>
        `);
        return res.end()
    } else if (url === "/create-user" && method === "POST") {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        })

        return req.on('end', () => {
            const parsedData = Buffer.concat(body).toString();
            const username = parsedData.split('=')[1];

            fs.writeFile('users.txt', username, () => {
                res.statusCode = 302;
                res.setHeader('Location', '/users');
                return res.end()
            })
        })

    } else if (url === "/users") {
        res.write(`
        <html>
            <head>
                <title>Users Page</title>
            </head>
            <body>
                <h1>Welcome to FamilyBook</h1>
                <h3>Now you're a memeber of our family, there is your brothers and sisters</h3>
                <ul>
                    <li>Nathalie</li>
                    <li>George</li>
                    <li>Melanie</li>
                    <li>Bertrand</li>
                </ul>
            </body>
        </html>
        `)
        return res.end();
    } else if (url === "/go-back" && method === "POST") {
        res.statusCode= 302;
        res.setHeader('Location', '/');
        return res.end()
    }
    res.write(`
    <html>
        <head>
            <title>Not found</title>
        </head>
        <body>
            <h1>404 NOT FOUNT</h1>
            <h3>Go back to home page</h3>
            <form action="/go-back" method="POST">
                <input type="submit">
            </form>
        </body>
    </html>
    `)
    return res.end();
}

exports.handler = requestHandler;

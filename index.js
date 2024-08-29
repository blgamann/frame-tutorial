const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>OG Meta Tags Example</title>

        <!-- Open Graph Meta Tags -->
        <meta property="og:title" content="My OG Meta Tags Example" />
        <meta property="og:description" content="This is a simple example of an HTML page with Open Graph meta tags." />
        <meta property="og:image" content="https://example.com/path/to/your/image.jpg" />
        <meta property="og:url" content="http://localhost:3000/" />
        <meta property="og:type" content="website" />
    </head>
    <body>
        <h1>Welcome to the OG Meta Tags Example</h1>
        <p>This page includes Open Graph meta tags for better social media integration.</p>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});

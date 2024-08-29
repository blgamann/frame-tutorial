const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>My Node.js App with Custom Meta Tags</title>

        <meta property="og:image" content="https://fc-dev-call.replit.app/image" />

        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://fc-dev-call.replit.app/image" />

        <meta property="fc:frame:button:1" content="Spec" />
        <meta property="fc:frame:button:1:action" content="link" />
        <meta property="fc:frame:button:1:target" content="https://docs.farcaster.xyz/reference/frames/spec#constructing-a-frame" />

        <meta property="fc:frame:button:2" content="Image" />
        <meta property="fc:frame:button:2:action" content="link" />
        <meta property="fc:frame:button:2:target" content="https://fc-dev-call.replit.app/image" />

        <meta property="fc:frame:button:3" content="Frame Validator" />
        <meta property="fc:frame:button:3:action" content="link" />
        <meta property="fc:frame:button:3:target" content="https://warpcast.com/~developers/frames" />

        <meta property="fc:frame:button:4" content="Replit" />
        <meta property="fc:frame:button:4:action" content="link" />
        <meta property="fc:frame:button:4:target" content="https://replit.com/@VarunSrinivasa4/FrailStridentDisc#index.js" />
    </head>
    <body>
        <h1>Welcome to the OG Meta Tags Example</h1>
        <p>This page includes Open Graph and FC Frame meta tags for better social media and FC frame integration.</p>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});

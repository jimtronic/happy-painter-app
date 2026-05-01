import { Outlet, useLoaderData, useRouteError } from "react-router";
import { boundary } from "@shopify/shopify-app-react-router/server";
import { AppProvider } from "@shopify/shopify-app-react-router/react";
import { authenticate } from "../shopify.server";

export async function loader() {
  return new Response(
    `
    <!doctype html>
    <html>
      <head>
        <title>HappyPainter</title>
      </head>
      <body>
        <main style="font-family: system-ui; padding: 48px;">
          <h1>Hello from HappyPainter 🎨</h1>
          <p>This is your first Shopify app route.</p>
        </main>
      </body>
    </html>
    `,
    {
      headers: {
        "Content-Type": "text/html",
      },
    }
  );
}

import { type MetadataRoute } from "next";
import { headers } from "next/headers";

export default function robots(): MetadataRoute.Robots {
    const headersList = headers();
    const host = headersList.get("host");

    return {
        rules: [
            {
                userAgent: "Googlebot", // for Googlebot
                allow: ["/$"], // allow the home page and the OG image API
                // disallow: "/", // disallow everything else
            },
            {
                userAgent: "LinkedInBot", // for LinkedInBot
                allow: "/", // allow everything
            },
        ],
        sitemap: `https://${host}/sitemap.xml`,
    };
}

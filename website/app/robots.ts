import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/invite/", "/delete-account/", "/delete-data/"],
    },
    sitemap: "https://magpie.money/sitemap.xml",
  };
}

/**
 * The paths as well as the priority when applied to SEO
 */
 const PRIORITY_CONFIG = {
    home: {
        path: '/',
        priority: '1.00',
    },
};

const XML_TAGS = {
    header: '<?xml version="1.0" encoding="UTF-8"?>',
    newLine: '\r\n',
    urlsetStart: `<urlset \r\n   xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\r\n>\r\n`,
    urlsetEnd: '</urlset>',
    urlStart: `<url>\r\n   <loc>`,
    urlEnd: `\r\n</url>`,
    timeStart: '   <lastmod>',
    timeEnd: '</lastmod>',
    priorityStart: '   <priority>',
    priorityEnd: '</priority>',
    setEnd: '</loc>',
};

export { PRIORITY_CONFIG, XML_TAGS };
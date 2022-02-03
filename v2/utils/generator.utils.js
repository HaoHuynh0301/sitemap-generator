import fs from 'fs';
import { PRIORITY_CONFIG, XML_TAGS } from '../constants/sitemap.constants';

let urls = '';

/**
 * Write to a file with a given path and content
 * @function
 * @param {String} path - The path of the file will be generated
 * @param {String} content - The content of the file will be generated
 */

 const writeFile = (path, content) => {
    if (path && content) {
        fs.writeFile(path, content, (err) => {
            if (err) throw err;
            console.log('Generated new sitemap file!');
        });
    } else {
        console.log('The path or the content of sitemap.xml is invalid!');
        return;
    }
};

/**
 * Calculate the priority based on the path, the res priority is float number with 2 nums after the ","
 * @function
 * @param {String} _str - path to calculate priority
 * @return {Float}
 */

const generatePriority = (_str) => {
    return ((10 - (_str.split('/').length - 1) * 2) / 10).toFixed(2);
};

/**
 * generate the content of sitemap.xml file based on the array of URLs
 * @function
 * @param {Object} _urls - is an array containing all the routes of the app
 * @param {String} _website_url - is an url of your website
 * @return {String} - Returns a string created by concatenating and modifying multiple URLs
 */
 const generateUrls = (_urls, _website_url) => {
    if (_urls.length !== 0) {
        _urls.map((item) => {
            if (item.path != null && typeof item.path === 'string') {
                let url = _website_url + item.path;
                let lastModify = new Date().toISOString();

                //Check that if the path is home, the priority will be higher than the rest of the links in the site depend on number of "/"
                let priority = generatePriority(item.path);
                if (item.path === PRIORITY_CONFIG.home.path) priority = PRIORITY_CONFIG.home.priority;
                urls =
                    urls +
                    XML_TAGS.newLine +
                    XML_TAGS.urlStart +
                    url +
                    XML_TAGS.setEnd +
                    XML_TAGS.newLine +
                    XML_TAGS.timeStart +
                    lastModify +
                    XML_TAGS.timeEnd +
                    XML_TAGS.newLine +
                    XML_TAGS.priorityStart +
                    priority +
                    XML_TAGS.priorityEnd +
                    XML_TAGS.urlEnd;
            }
        });
        let sitemapContent =
            XML_TAGS.header +
            XML_TAGS.newLine +
            XML_TAGS.urlsetStart +
            XML_TAGS.newLine +
            urls +
            XML_TAGS.newLine +
            XML_TAGS.urlsetEnd;
        return sitemapContent;
    }
    return;
};

export { writeFile, generateUrls };


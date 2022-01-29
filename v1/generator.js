import { writeFile, generateUrls } from './utils/generator.utils';
import indexRoutes from './sitemap.route';

//The path of the file will be generated
const SAVED_SITEMAP_PATH = '../sitemap.xml';

//Get the returned content of the sitemap file
let sitemapContent = generateUrls(indexRoutes);

//Write file with the provided content and path
writeFile(SAVED_SITEMAP_PATH, sitemapContent);
const fs = require('fs');
const utils = require('./utils/generator.utils');

export default class generator {
    constructor(url, content, website_url) {
        this._baseUrl = url;
        this._baseContent = content;
        this._website_url = website_url;
    }

    getXML = () => {

    }

    save = (path) => {
        utils.save(path, this._content);
    }

    getPriority = () => {
        
    }
}
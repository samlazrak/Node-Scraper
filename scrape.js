const request = require('request');
const cheerio = require('cheerio');

request('', (error, response, html) => {
  if (!error && response.statusCode === 200) {
    const $ = cheerio.load(html);
  }
});

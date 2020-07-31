const chai = require('chai')
const expect = require('chai').expect
const chaiHttp = require('chai-http')
const rewire = require('rewire');
const fetch = require('node-fetch');
var sinon = require('sinon');
const puppeteer = require('puppeteer');
require('jsdom-global')();

const fs = require('fs');
const { doesNotMatch } = require('assert');

let browser;
let page;
let frontEnd = rewire('../client/frontend.js');
// let client = rewire('../client/client.js')
// let server = rewire('../server.js')

chai.use(chaiHttp);
chai.should();

before(async () => {
    try {
        browser = await puppeteer.launch({headless: true});
        page = await browser.newPage();
        const html = fs.readFileSync('client/index.html', {encoding: 'utf-8'});
        await page.setContent(html)
    } catch {
        done();
    }
});


describe('openModal', () => {
    describe('btn', () => {
      let btn;
        it('exists', async () => {
          const btn = await page.$('#showModal');
           expect(btn).to.exist;
        });
      });
  });

//   describe('myFunction', () => {
//     const myFunction = frontEnd.__get__('myFunction');
//     it('do something', () => {
//       myFunction();
//       let a =
//     })
//   }
// )

  after(async () => {
      await browser.close();
  });

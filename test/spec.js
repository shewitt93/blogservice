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

before(async () => {
    try {
        browser = await puppeteer.launch({headless: true});
        page = await browser.newPage();
        const html = fs.readFileSync('index.html', {encoding: 'utf-8'});
        await page.setContent(html)
    } catch {
        done();
    }

});

let frontEnd = rewire('../client/frontend.js');
// let client = rewire('../client/client.js')
// let server = rewire('../server.js')

chai.use(chaiHttp);
chai.should();

describe('openModal', () => {
    describe('btn', () => {
      // var fake = sinon.fake.returns('fake');
      // console.log(fake());
        const btn = frontEnd.__get__('btn');
        it('should not be undefined', () => {
           expect(btn).to.not.be.undefined;
        });

        it('content should store a string', () => {
            expect(btn.textContent).to.be.a('string');
        });

        it('should be declared as "new post"', () => {
            expect(btn).to.equal('New post');
        });
    });
  });

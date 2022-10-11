const puppeteer = require("puppeteer");
const path = require('path');

let browser;
let page;

beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.goto('file://' + path.resolve('./index.html'));
});

afterAll((done) => {
    try {
        this.puppeteer.close();
    } catch (e) { }
    done();
}, 30000);

describe("Bootstrap", () => {
    it("Bootstrap is included in the page", async () => {
        const cdn = await page.$eval('head link[href*="bootstrap"]', (el) => el.href);
        expect(cdn).toBeTruthy();
    });
});

describe("Navigation", () => {
    it("Page should contain a bootstrap Navbar component", async () => {
        try {
            const navbar = await page.$('nav');
            expect(navbar).not.toBe(null);
        } catch (err) {
            throw err;
        }
    });
});

describe("Slideshow", () => {
    it("Carousel component is used", async () => {
        try {
            const carousel = await page.$('div.carousel');
            expect(carousel).not.toBe(null);
        } catch (err) {
            throw err;
        }
    });
});

describe("Row", () => {
    it("Page Should use bootstrap row class", async () => {
        try {
            const rows = await page.$$('div.row');
            expect(rows.length).toBeGreaterThan(1);
            const rowImages = await page.$$('div.row img');
            expect(rowImages.length).toBeGreaterThan(2);
        } catch (err) {
            throw err;
        }
    });
});

describe("3-column section", () => {
    it("Page Should contain 3 Bootstrap card components", async () => {
        try {
            const cards = await page.$$('div.card');
            expect(cards.length).toBe(3);
        } catch (err) {
            throw err;
        }
    });
    it("Cards are nested in rows", async () => {
        try {
            const rowImages = await page.$$('div.row img');
            expect(rowImages.length).toBeGreaterThan(2);
        } catch (err) {
            throw err;
        }
    });
});
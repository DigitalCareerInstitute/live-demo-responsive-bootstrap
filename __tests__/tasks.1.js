const puppeteer = require("puppeteer");
const path = require('path');

const browserOptions = {
    headless: true,
    defaultViewport: null,
    ignoreHTTPSErrors: true,
    devtools: false,
}
let browser;
let page;

beforeAll(async () => {
    browser = await puppeteer.launch(browserOptions);
    page = await browser.newPage();
    await page.goto('file://' + path.resolve('./index.html'));
});

afterAll((done) => {
    try {
        this.puppeteer.close();
    } catch (e) { }
    done();
});

describe("UIB - Responsive Bootstrap Webpage", () => {
    it("Index file should contain appropriate meta tags", async () => {
        try {
            const metaTags = await page.$$('meta');
            expect(metaTags.length).toBeGreaterThan(1);
        } catch (err) {
            throw err;
        }
    });
    it("Index file Should contain a title tag that is not empty", async () => {
        try {
            const title = await page.$eval('title', el => el.innerHTML);
            expect(title).not.toBe('');
        } catch (err) {
            throw err;
        }
    });
    it("Navbar Should exist on the Page", async () => {
        try {
            const navbar = await page.$('nav');
            expect(navbar).not.toBe(null);
        } catch (err) {
            throw err;
        }
    });
    it("Navbar Should be responsive and collapse on smaller screens", async () => {
        try {
            const navbar = await page.$('nav');
            const navbarCollapse = await navbar.$('div.collapse');
            expect(navbarCollapse).not.toBe(null);
        } catch (err) {
            throw err;
        }
    });
    it("Upon page resize toggle menu should appear", async () => {
        try {
            await page.setViewport({ width: 500, height: 500 });
            const navbar = await page.$('nav');
            const navbarCollapse = await navbar.$('div.collapse');
            expect(navbarCollapse).not.toBe(null);
            const navbarCollapseInnerHTML = await navbarCollapse.getProperty('innerHTML');
            expect(navbarCollapseInnerHTML).not.toBe('');
            const hiddenClass = await navbarCollapse.$eval('ul > li > a > span', el => el.className);
            expect(hiddenClass).toBe('visually-hidden');
        } catch (err) {
            throw err;
        }
    });
    it("Carousel exists and should change background upon swipe", async () => {
        try {
            const carousel = await page.$('div.carousel');
            const carouselControlPrevIcon = await carousel.$('span.carousel-control-prev-icon');
            await carouselControlPrevIcon.click();
            const carouselControlPrevIconBackgroundImage = await carouselControlPrevIcon.getProperty('style.backgroundImage');
            expect(carouselControlPrevIconBackgroundImage).toBeTruthy();
        } catch (err) {
            throw err;
        }
    });
    it("Page Should contain 3 Bootstrap card components", async () => {
        try {
            const cards = await page.$$('div.card');
            expect(cards.length).toBe(3);
        } catch (err) {
            throw err;
        }
    });
    it("Page Should contain 3 row sections, Each with an image", async () => {
        try {
            const rows = await page.$$('div.row');
            expect(rows.length).toBe(4);
            const rowImages = await page.$$('div.row > div > img');
            expect(rowImages.length).toBe(3);
        } catch (err) {
            throw err;
        }
    });
});
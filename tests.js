const expect = require('chai').expect;
const utils = require('./utilities');
const homePage = require('./pages/home-page');
const roomPage = require('./pages/room-page');
const {HOME_URL} = process.env;

describe ("Chaturbate Interview Assignment", () =>  {

    before(() => {
        utils.openBrowserAndGoToUrl(HOME_URL);
        utils.click($(`//a[text()='I AGREE']`));
        homePage.confirmPageIsDisplayed();
    })

    it('\n\tvisits a random room and confirms the correct page is visited, \n' +
       '\tconfirms the "Sign Up", "Scan Cams", "Next Cam", and "Send Tip" buttons exist, \n' +
       '\tconfirms the video is playing, \n' +
       '\tand confirms clicking "Scan Cams" leads to a new page', ()  => {

        const roomLinkUrl = homePage.visitRandomRoom();
        expect(browser.getUrl()).to.contain(roomLinkUrl);

        roomPage.confirmPageIsDisplayed();
        roomPage.confirmVideoIsPlaying();
        roomPage.scanCams();

        for (let i = 0; i < 3; i++) {
            const savedUrl = browser.getUrl();
            roomPage.skipCam();
            browser.waitUntil(() => savedUrl != browser.getUrl());
        }
    });

})

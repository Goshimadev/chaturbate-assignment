const utils = require('../utilities');

const signUpButtonSelector = '//a[text()="SIGN UP"]';
const scanCamsButtonSelector = '//span[text()="SCAN CAMS"]';
const nextCamButtonSelector = '//a[contains(text(), "NEXT CAM")]';
const sendTipButtonSelector = '//span[text()="SEND TIP"]';
const skipCamButtonSelector = '//span[contains(text(), "SKIP CAM")]';
const videoPlayingSelector = 'div.vjs-playing';

class RoomPage {

    static confirmPageIsDisplayed() {
        expect($(signUpButtonSelector).isDisplayed());
        expect($(scanCamsButtonSelector).isDisplayed());
        expect($(nextCamButtonSelector).isDisplayed());
        expect($(sendTipButtonSelector).isDisplayed());
    }

    static confirmVideoIsPlaying() {
        expect($(videoPlayingSelector).isDisplayed());
    }

    static scanCams() {
        utils.click($(scanCamsButtonSelector));
    }

    static skipCam() {
        utils.click($(skipCamButtonSelector));
    }

}

module.exports = RoomPage;

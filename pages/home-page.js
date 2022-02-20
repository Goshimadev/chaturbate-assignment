const utils = require('../utilities');

const roomLinksSelector = '//ul[@id="room_list"]//a[@data-room and not(contains(@class, "no_select"))]';

class HomePage {

    static confirmPageIsDisplayed() {
        const expectedText = ['DISCOVER', 'CHAT ROOMS'];
        utils.confirmTextIsDisplayedOnPage(expectedText);
    }

    static visitRandomRoom() {
        const roomLinks = $$(roomLinksSelector);
        const chosenLink = roomLinks[Math.floor(Math.random() * roomLinks.length)];
        const chosenLinkUrl = chosenLink.getAttribute('href');
        utils.click(chosenLink);
        return chosenLinkUrl;
    }

}

module.exports = HomePage;

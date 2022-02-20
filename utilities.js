const { expect } = require('chai');

class Utilities {
    
    static waitForElementReadiness(elem) {
        browser.waitUntil(() => elem.isClickable() === true,
        {
            timeout: 20000,
            timeoutMsg: 'The element was not clickable within twenty seconds!'
        });
    }

    static enterText(elem, text) {
        this.waitForElementReadiness(elem);
        elem.setValue(text);
    }

    static click(elem) {
        this.waitForElementReadiness(elem);
        elem.click();
        expect(this.isTextDisplayed('wrong')).to.equal(false, 'An error was thrown after the element was clicked!');
    }

    static allowDataProcessing(waitTime) {
        // waitTime is in ms
        const date = Date.now();
        let currentDate = null;
        do {
            currentDate = Date.now();
        } while (currentDate - date < waitTime);
    }

    static isTextDisplayed(text) {
        const body = $('/html/body').getText();
        return body.includes(text);
    }

    static isElementEnabled(elem, waitTime = 30000) {
        elem.waitForExist(waitTime);
        return elem.isEnabled();
    }

    static waitForTextToBeDisplayed(text) {
        browser.waitUntil(() => this.isTextDisplayed(text) === true,
        {
            timeout: 20000,
            timeoutMsg: `The text '${text}' was not displayed on the page '${browser.getUrl()}' within twenty seconds!`
        });
    }

    static confirmTextIsDisplayedOnPage(expectedText) {
        expectedText.forEach(text => this.waitForTextToBeDisplayed(text));
    }

    static openBrowserAndGoToUrl(url) {
        browser.url(url);
        browser.maximizeWindow();
    }

}

module.exports = Utilities;

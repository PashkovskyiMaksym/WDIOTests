import PortalPage from "./portal.page";

class ChallengesPage extends PortalPage {

    get sectionHeader() {
        return $('h1');
    }

    open() {
        return super.open('/challenges')
    }

    isOpen() {
        expect(browser).toHaveUrlContaining('/challenge');
        expect(this.sectionHeader).toHaveText('Coding challenges from very basic to interview level');
    }

}

export default new ChallengesPage();
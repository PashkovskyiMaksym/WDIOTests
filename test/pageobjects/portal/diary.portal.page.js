import PortalPage from "./portal.page";

class DiaryPage extends PortalPage {

    get sectionHeader() {
        return $('h1');
    }

    open() {
        return super.open('/diary')
    }

    isOpen() {
        expect(browser).toHaveUrlContaining('/diary');
        expect(this.sectionHeader).toHaveText('Diaries is self accountability tool');
    }

}

export default new DiaryPage();
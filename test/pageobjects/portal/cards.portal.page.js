import PortalPage from "./portal.page";

class CardsPage extends PortalPage {

    get sectionHeader() {
        return $('h1');
    }

    open() {
        return super.open('/cards')
    }

    isOpen() {
        expect(browser).toHaveUrlContaining('/flash');
        expect(this.sectionHeader).toHaveText('Flash cards in beta mode so far');
    }

}

export default new CardsPage();
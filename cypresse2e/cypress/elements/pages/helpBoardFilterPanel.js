class helpBoardFilter {

    hbAllPosts = '#HB_AP';
    hbRequestHelp = '#HB_RE';
    hbOfferHelp = '#HB_OF';
    filterButton = '#HB_FI';
    backButton = '';
    expandWidget = '.arrow';
    hbLocationHeading = '#HB_LO';
    hbLocationInput = '#HB_LO_EAZ';
    hbShareLocation = '#HB_LO_SL';
    hbProvidersHeading = '#HB_PV';
    hbTypeHeading = '#HB_TP';
    hbProvidersAndType = '.am-accordion-content-box a';
    quitFiltersButton = '#HB_FI_QF';
    viewResultsButton = '#HB_FI_VR';

    constructor() {}

    visit() {
        cy.visit('feed');
    }


}
export default class View {

    $= {}
    constructor() {
        this.$.features = this.#qs('[data-id="features"]');
        this.$.featuresItem =this.#qs('[data-id="features-item"]');

        this.$.company = this.#qs('[data-id="company"]');
        this.$.companyItems = this.#qs('[data-id="columns"]');

        this.$.featureDownArrow = this.#qs('[data-id="feature-downArrow"]');
        this.$.featureUpArrow = this.#qs('[data-id="feature-upArrow"]');

        this.$.companyDownArrow = this.#qs('[data-id="company-downArrow"]');
        this.$.companyUpArrow = this.#qs('[data-id="company-upArrow"]');

        this.$.hamburger = this.#qs('[data-id="hamburger"]');
        this.$.navbarContainer = this.#qs('[data-id="navbar-container"]')
    }

    showFeatureMenu(handler) {
        this.$.features.addEventListener("click",handler);
    }   
    showFeatureMenuImpl(){
        this.$.featuresItem.classList.toggle("display");
        this.toggle(this.$.featuresItem.classList,this.$.featureDownArrow.classList,this.$.featureUpArrow.classList)
    }
    showCompanyMenu(handler) {
        this.$.company.addEventListener("click",handler)
    }
    showCompanyMenuImpl() {
        this.$.companyItems.classList.toggle("display");
        this.toggle(this.$.companyItems.classList,this.$.companyUpArrow.classList,this.$.companyDownArrow.classList);
    }

    toggle(className,downArrow,upArrow) {
        console.log(className.contains("display"));
        if(className.contains("display"))
        {
            downArrow.add("display");
            upArrow.remove("display")
        }
        else {
            upArrow.add("display");
            downArrow.remove("display");
        }
    }

    toggleMenu(handler) {
        this.$.hamburger.addEventListener("click",handler);
    }
    toggleMenuImpl()
    {
        this.$.navbarContainer.classList.toggle("display");
    }

    displayMenu(handler) {
        window.addEventListener("resize",handler);
    }
    displayMenuImpl() {
      this.$.navbarContainer.classList.add("display");
     
    }
    showMenuImpl() {
        this.$.navbarContainer.classList.remove("display")
    }

    #qs(selector)
    {
        let ele = document.querySelector(selector);
        return ele;
    }
}
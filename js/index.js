import View from "./View.js";

function init() {
    const view = new View();
    view.showFeatureMenu((event)=>{
        view.showFeatureMenuImpl();
        })
    view.showCompanyMenu((event)=>{
        view.showCompanyMenuImpl();
    })

    view.toggleMenu((event)=>{
        view.toggleMenuImpl();
    })
    
    view.displayMenu((event)=> {
        if(window.innerWidth<=700)
        {
          view.displayMenuImpl();
          console.log("hello")
        }
        else {
            view.showMenuImpl();
        }
    })
}
window.addEventListener("load",init);
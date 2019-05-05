
// Handle Page scroll navbar 
window.onload = ()=>{
    const navContainer = document.querySelector("nav"),
        navBar = document.querySelector(".navContainer");

    document.body.addEventListener("click",(e)=>{
        if (e.target.parentNode.getAttribute("id") == "Menu"){
            navBar.className = "navContainer jsNavBarDrop"
            navContainer.className="jsNavContainerShow";
        }

    });


    // Handle navbar display on scroll 
    this.onscroll = (e)=>{
        const direction = ScrollDirection(e).direction,
              scrollY = ScrollDirection(e).scrollY;
    
        if (scrollY > 700){
            let toggleClass = direction=="Up"?"jsNavBarShow":"jsNavBarHide";
            navContainer.className="jsNavContainerShow";
            navBar.className = "navContainer "+toggleClass;
        }
    }
}


// Get Scroll direction
var previousValue = null;
const ScrollDirection = (e)=>{
    let currentValue = e.path[1].scrollY,
        direction = currentValue < previousValue?"Up":"Down";

    previousValue = currentValue;

    return {
        direction: direction,
        scrollY: currentValue
    }
}

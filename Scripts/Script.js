
// Handle Page scroll navbar 
window.onload = ()=>{

    // document.body.addEventListener("click",(e)=>{
    //     // console.log(e.target.parentNode.getAttribute("name"));

    // });


    // Handle navbar display on scroll 
    this.onscroll = (e)=>{
        const navContainer = document.querySelector("nav"),
            navBar = document.querySelector(".navContainer"),
            direction = ScrollDirection(e).direction,
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

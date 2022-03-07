// start nav
let NavElement = document.querySelectorAll(".navbar .navbar-nav a");
function nav() {
    NavElement.forEach((element)=>{
        element.onclick = function () {
            NavElement.forEach((el)=>{
                el.style.color = "#556270";
                this.style.color = "red";
            })
        }
    })
}
nav();
// end nav

/*start CHECK OUR FEATURES*/
let ElementClick = document.querySelectorAll("#feature ul li");
let ContentPane = document.querySelectorAll(".tap-pane");

function SectionCheck() {
    ElementClick.forEach((element)=>{
        element.addEventListener("click" , check);
    })
    
    function check() {
        ContentPane.forEach((pane)=>{
            pane.style.display = "none";
        })
        document.querySelectorAll(this.dataset.pane).forEach((el) => {
            el.style.display = "block";
        });
        ElementClick.forEach((el)=>{
            el.classList.remove("activeColor");
            this.classList.add("activeColor");
    
            el.style.borderRight = "none";
            this.style.borderRight = "2px solid #d9232d";
        })
    }
}
SectionCheck();
/*end CHECK OUR FEATURES*/

// back to top
let btnToTop = document.querySelector(".backToTop button");

window.onscroll = function () {
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
        btnToTop.style.display = "block";
    }
    else{
        btnToTop.style.display = "none";
    }

    btnToTop.onclick = ()=> {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}
// back to top
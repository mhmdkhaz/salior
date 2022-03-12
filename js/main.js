// filter element img
let ImgFilter = document.querySelectorAll(".portfolio-img .box-portfolio");
let BtnChoose = document.querySelectorAll(".choose ul li");

BtnChoose.forEach((btn)=>{
    btn.addEventListener("click" , FilterImg);
})

function FilterImg() {
    ImgFilter.forEach((div)=>{
        div.style.display = "none";
        console.log(div);
    })
    document.querySelectorAll(this.dataset.filter).forEach((el) => {
        el.style.display = "block";
    });
    BtnChoose.forEach((btn)=>{
        btn.classList.remove("filter-active");
        this.classList.add("filter-active");
    })
}
// filter element img

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
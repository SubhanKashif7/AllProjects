const redirection = (link) => {
        window.location.href = link;
};

const anchor = document.querySelector("a");
anchor.addEventListener("click",()=>{
    redirection("./subpages/categories/index.html")
})

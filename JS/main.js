let allBtns = document.querySelectorAll(".featured-work ul li")
let allPhotos = document.querySelectorAll(".featured-work .row div")


allBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        allBtns.forEach(btn => {
            btn.classList.remove("active")
        })
        e.target.classList.add("active")
        
        if (e.target.dataset.class === "all") {
            allPhotos.forEach(el => {
                el.style.opacity = 1
            })
        } else {
            allPhotos.forEach(el => {
                el.style.opacity = 0.3
            })
            document.querySelectorAll(e.target.dataset.class).forEach(el => {
                el.parentElement.style.opacity = 1
            })
        }
    })
})



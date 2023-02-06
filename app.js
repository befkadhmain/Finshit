let header = document.querySelector(".header")
let scrollUp = document.querySelector(".scroll-up")
let content = document.querySelector(".content")
let contentH1 = document.querySelector(".content h1")
let image = document.querySelector(".photo")
let firstColumn = document.querySelector(".first-col")
let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")
let box3 = document.querySelector(".box3")
let content1 = document.querySelector(".content1")
let content2 = document.querySelector(".content2")
let content3 = document.querySelector(".content3")

//Scaling up the images of the Recent News tab when hovered over the whole content

    content1.addEventListener("mouseover", () => {
        box1.classList.add("magnify")
    })
    content2.addEventListener("mouseover", () => {
        box2.classList.add("magnify")
    })
    content3.addEventListener("mouseover", () => {
        box3.classList.add("magnify")
    })

    content1.addEventListener("mouseleave", () => {
        box1.classList.remove("magnify")
    })
    content2.addEventListener("mouseleave", () => {
        box2.classList.remove("magnify")
    })
    content3.addEventListener("mouseleave", () => {
        box3.classList.remove("magnify")
    })

// Making the header disappear when scrolled down and appear back when scrolled up at any position

const body = document.body
let lastscroll = 0
window.addEventListener('scroll', () => {

    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
    }

    if (currentScroll > lastscroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
        content.classList.add("step-down")
    }

    if (currentScroll  < lastscroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up")
        body.classList.add("step-down")
    }

    lastscroll = currentScroll;
})

//Making the header sticky when it reaches the top-most

let clWidth = document.body.clientWidth
window.addEventListener('scroll', () => {

    if (contentH1.offsetTop <= window.scrollY) {
        contentH1.classList.add("heading-stick")
    }

    if (body.classList.contains("scroll-up")) {
        contentH1.classList.add("heading-stick-lower")
    }

    else if (contentH1.offsetTop > window.scrollY) {
        contentH1.classList.remove("heading-stick")
        contentH1.classList.remove("heading-stick-lower")
    }
})

if (clWidth <= 480) {
    contentH1.classList.add("heading-stick-lower-responsive")
}

else if (clWidth > 480) {
    contentH1.classList.remove("heading-stick-lower-responsive")
}
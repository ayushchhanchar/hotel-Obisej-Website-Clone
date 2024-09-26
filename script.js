

var t1 = gsap.timeline()

t1.from("#page1 svg",{
    y : -40,
    opacity:0,
    duration: 0.8,
    delay:0.5,
})

t1.from("#page1 img",{
    scale: 0.5,
})

t1.from("#nav #nav-part1",{
    y : -40,
    opacity :0,
    duration : 0.3,
    delay:0,
})
t1.from("#nav #nav-part2",{
    y : -40,
    opacity :0,
    duration : 0.3,
    delay: 0,
})

var data=document.querySelectorAll("#page2 #text-cont h2")
data.forEach(function(elem){
    var sdata = elem.textContent
    var splitter=sdata.split("")
var clutter = ""
splitter.forEach(function(e){
    clutter += `<span>${e}</span>`
})
elem.innerHTML=clutter
}) 
gsap.to("#page2 #text-cont h2 span",{
    color:"#E3E3C4",
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page2 #text-cont h2 span",
        scroller:"body",
        start:"top 80%",
        end:"top -25%",
        scrub:3
    }
})
gsap.to("#page2 #svg2",{
    x:"-40%",
    scrollTrigger:{
        trigger:"#page2 #svg2",
        scroller:"body",
        start:"top 60%",
        end:"top -10%",
        scrub:3,

    }
})
gsap.to("#page2 #svg3",{
    x:"-30%",
    scrollTrigger:{
        trigger:"#page2 #svg2",
        scroller:"body",
        start:"top 60%",
        end:"top -10%",
        scrub:3,

    }
})


var data2=document.querySelectorAll("#page3 #text-cont2 h1")
data2.forEach(function(elem2){
    var sdata2 = elem2.textContent
    var splitter2=sdata2.split("")
var clutter2 = ""
splitter2.forEach(function(e2){
    clutter2 += `<span>${e2}</span>`
})
elem2.innerHTML=clutter2
}) 

gsap.to("#page3 #text-cont2 h1 span",{
    color:"#E3E3C4",
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page3 #text-cont2 h1 span",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3
    }
})

gsap.from("#page3 h3",{
    y : "100%",
    opacity:0,
    scrollTrigger:{
        trigger:"#page3 h3",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3 ,
    }
})

gsap.from("#page3 #img1",{
    y : "10%",
    opacity:0,
    scrollTrigger:{
        trigger:"#page3 h3",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3
    }
})

gsap.from("#page3 #img2",{
    y : "10%",
    opacity:0,
    scrollTrigger:{
        trigger:"#page3 h3",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3
    }
})

gsap.from("#page3 #img3",{
    y : "50%",
    opacity:0,
    scrollTrigger:{
        trigger:"#page3 h3",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3
    }
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type:"fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });

gsap.to("#page6 #svgg1",{
    x:"-30%",
    scrollTrigger:{
        trigger:"#page6 #svgg1",
        scroller:"body",
        start:"top 60%",
        end:"top -10%",
        scrub:3,

    }
})
gsap.to("#page6 #svgg2",{
    x:"-25%",
    scrollTrigger:{
        trigger:"#page6 #svgg2",
        scroller:"body",
        start:"top 60%",
        end:"top -10%",
        scrub:3,

    }
})

var data2=document.querySelectorAll("#page6 #text-cont3 h2")
data2.forEach(function(elem2){
    var sdata2 = elem2.textContent
    var splitter2=sdata2.split("")
var clutter2 = ""
splitter2.forEach(function(e2){
    clutter2 += `<span>${e2}</span>`
})
elem2.innerHTML=clutter2
}) 

gsap.to("#page6 #text-cont3 h2 span",{
    color:"#E3E3C4",
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page6 #text-cont3 h2 span",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3
    }
})

gsap.from("#page6 #imgg1 img",{
    y : "10%",
    opacity:0,
    scrollTrigger:{
        trigger:"#page6 #imgg1 img",
        scroller:"body",
        start:"top 80%",
        end:"top 30%",
        scrub:3
    }
})
gsap.from("#page6 #imgg2 img",{
    y : "10%",
    opacity:0,
    scrollTrigger:{
        trigger:"#page6 #imgg2 img",
        scroller:"body",
        start:"top 80%",
        end:"top 30%",
        scrub:3
    }
})
gsap.from("#page6 #imgg3 img",{
    y : "10%",
    opacity:0,
    scrollTrigger:{
        trigger:"#page6 #imgg3 img",
        scroller:"body",
        start:"top 80%",
        end:"top 30%",
        scrub:3
    }
})

gsap.to("#page6 #svgg3",{
    x:"-30%",
    scrollTrigger:{
        trigger:"#page6 #svgg3",
        scroller:"body",
        start:"top 60%",
        end:"top -10%",
        scrub:3,

    }
})
gsap.to("#page6 #svgg4",{
    x:"-25%",
    scrollTrigger:{
        trigger:"#page6 #svgg4",
        scroller:"body",
        start:"top 60%",
        end:"top -10%",
        scrub:3,

    }
})

var data2=document.querySelectorAll("#page7 #text-cont4 h3")
data2.forEach(function(elem2){
    var sdata2 = elem2.textContent
    var splitter2=sdata2.split("")
var clutter2 = ""
splitter2.forEach(function(e2){
    clutter2 += `<span>${e2}</span>`
})
elem2.innerHTML=clutter2
}) 

gsap.to("#page7 #text-cont4 h3 span",{
    color:"#434B34",
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page7 #text-cont4 h3 span",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3
    }
})

gsap.to("#page7 #systum #pic1",{
    left:"-30%",
    scrollTrigger:{
        trigger:"#page7 #systum #pic1",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3
    }
})
gsap.to("#page7 #systum #pic2",{
    left:"80%",
    scrollTrigger:{
        trigger:"#page7 #systum #pic1",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3
    }
})
gsap.from("#page7 #systum #text h1",{
    y : "20%",
    opacity:0,
    scrollTrigger:{
        trigger:"#page7 #systum #text h1",
        scroller:"body",
        start:"top 40%",
        end:"top 30%",
        scrub:3
    }
})
gsap.from("#page7 #systum #text h2",{
    y : "20%",
    opacity:0,
    scrollTrigger:{
        trigger:"#page7 #systum #text h2",
        scroller:"body",
        start:"top 40%",
        end:"top 30%",
        scrub:3
    }
})
gsap.from("#page7 #systum #text h3",{
    y : "20%",
    opacity:0,
    scrollTrigger:{
        trigger:"#page7 #systum #text h3",
        scroller:"body",
        start:"top 40%",
        end:"top 30%",
        scrub:3
    }
})
gsap.to("#page8 img",{
    height:"100%",
    scrollTrigger:{
        trigger:"#page8 img",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3
    }
})
gsap.to("#page9 #svgggg1",{
    x:"-30%",
    scrollTrigger:{
        trigger:"#page9 #svgggg1",
        scroller:"body",
        start:"top 60%",
        end:"top -10%",
        scrub:3,

    }
})
gsap.to("#page9 #svgggg2",{
    x:"-35%",
    scrollTrigger:{
        trigger:"#page9 #svgggg2",
        scroller:"body",
        start:"top 60%",
        end:"top -10%",
        scrub:3,

    }
})

var data2=document.querySelectorAll("#page9 #text-cont5 h6")
data2.forEach(function(elem2){
    var sdata2 = elem2.textContent
    var splitter2=sdata2.split("")
var clutter2 = ""
splitter2.forEach(function(e2){
    clutter2 += `<span>${e2}</span>`
})
elem2.innerHTML=clutter2
}) 

gsap.to("#page9 #text-cont5 h6 span",{
    color:"#E3E3C4",
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page9 #text-cont5 h6 span",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3
    }
})
gsap.from("#page9 h5",{
    y : "20%",
    opacity:0,
    scrollTrigger:{
        trigger:"#page9 h5",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3
    }
})
gsap.from("#page9 #picture1 ",{
    y : "10%",
    opacity:0,
    scrollTrigger:{
        trigger:"#page9 #picture1 ",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3
    }
})
gsap.from("#page9 #picture2",{
    y : "10%",
    opacity:0,
    scrollTrigger:{
        trigger:"#page9 #picture2 ",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3
    }
})
gsap.from("#page9 #picture3",{
    y : "10%",
    opacity:0,
    scrollTrigger:{
        trigger:"#page9 #picture3 ",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3
    }
})
gsap.from("#page9 h4",{
    y : "10%",
    opacity:0,
    scrollTrigger:{
        trigger:"#page9 h4 ",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3
    }
})
gsap.from("#page10 h1",{
    y : "10%",
    opacity:0,
    scrollTrigger:{
        trigger:"#page10 h1 ",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3
    }
})
gsap.from("#page10 h2",{
    y : "10%",
    opacity:0,
    scrollTrigger:{
        trigger:"#page10 h2 ",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3
    }
})
gsap.from("#page10 #photo1",{
    y : "10%",
    opacity:0,
    scrollTrigger:{
        trigger:"#page10 #photo1 ",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3
    }
})
gsap.from("#page10 h3",{
    y : "10%",
    opacity:0,
    scrollTrigger:{
        trigger:"#page10 h3 ",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3
    }
})
gsap.from("#page10 h4",{
    y : "10%",
    opacity:0,
    scrollTrigger:{
        trigger:"#page10 h4 ",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3
    }
})
gsap.from("#page10 h5",{
    y : "10%",
    opacity:0,
    scrollTrigger:{
        trigger:"#page10 h5 ",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3
    }
})
gsap.from("#page10 #photo2",{
    y : "10%",
    opacity:0,
    scrollTrigger:{
        trigger:"#page10 #photo2 ",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3
    }
})
gsap.from("#page10 h6",{
    y : "10%",
    opacity:0,
    scrollTrigger:{
        trigger:"#page10 h6 ",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3
    }
})
gsap.from("#page10 p",{
    y : "10%",
    opacity:0,
    scrollTrigger:{
        trigger:"#page10 p ",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3
    }
})
gsap.to("#page11 img",{
    height:"120%",
    scrollTrigger:{
        trigger:"#page11 img",
        scroller:"body",
        start:"top 70%",
        end:"top 30%",
        scrub:3
    }
})
gsap.from("#page11 #boxter",{
    y : "10%",
    opacity:0,
    scrollTrigger:{
        trigger:"#page11 #boxter",
        scroller:"body",
        start:"top 98%",
        end:"top 30%",
        scrub:3
    }
})
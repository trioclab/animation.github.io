const tl = gsap.timeline()
 tl.from(".left-nav, .right-nav",{
    y:-300,
    duration:1,
    stagger:0.5,

})
tl.from('.one, .two, .three, .four, .five, .six',{
     y:-300,
     duration:1,
     stagger:0.5

 })
tl.from('#para1, #button1',{
    scale:2,
    duration:1,
    stagger:0.5,
    opacity:0
})
gsap.from(".card2, .card1, .card3", {
    x: -200,
    duration:4,
    stagger:1,
    opacity:0,
    scrollTrigger: {
        trigger: ".card2, .card1, .card3",
        start: "top center",
        end: "bottom center",
        scrub: true,
    }
});
// gsap.from(".main, .btnn", {
//     x: -200,
//     duration:4,
//     stagger:1,
//     opacity:0,
//     scrollTriger: {
//         trigger:".main, .btnn",
//         // start: "top center",
//         // end: "bottom center",
//         scrub:true,
//     }
// });
gsap.from(".main, .btnn", {
    x: 200,
    duration:4,
    stagger:1,
    opacity:0,
    scrollTrigger: {
        trigger: ".main, .btnn",
        scrub: true,
    }
});
gsap.from(".left-foot, .right-foot", {
    scale:0.001,
    duration:2,
    stagger:0.2,
    opacity:0,
    scrollTrigger: {
        trigger: ".left-foot, .right-foot",
        // scrub: true,
    }
});


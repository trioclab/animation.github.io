let tl = gsap.timeline()
// tl.from('#image1',{
//     x:0,
//     opacity:0,
//     duration:2
// })
tl.to('#image1',{
    // y:10,
    // x:10,
    // y:-10,
    // x:-10,
    duration:2,
    position:'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    repeat:-1,
    yoyo:true
})
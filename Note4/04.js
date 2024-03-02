// gsap.to("#box",{
//      x:900,
//      y:300,
//      duration:5,
//      delay:1,
//      backgroundColor: 'blue',
//      rotate:360,
//      scale:0.5,
//      iterationCount: 'infinite'
// })

// stagger ek ek kr k elements ho ge in gsap




// gsap.from("#box",{
//     x:900,
//     y:300,
//     duration:5,
//     delay:1,
//     backgroundColor: 'blue',
//     rotate:360,
//     scale:0.5,
//     repeat: -1,
//     yoyo: true
// })
// gsap.to("#heading",{
//     x:200,
//     y:100,
//     duration:3,
//     delay:1,
//     color: 'white',
//     repeat: -1,
//     yoyo: true
// })


// timeline

let animate = gsap.timeline()

animate.to('#box',{
    y:300,
    duration: 6,
    color: 'pink',
    rotate: 360,
    repeat: -1,
    yoyo: true
})



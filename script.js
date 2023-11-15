const toggleBtn = document.getElementById("toggleBtn")
const optionList = document.getElementById("option")

toggleBtn.addEventListener("click", () => {
    if (optionList.style.transform == "translateY(-100%)"){
        optionList.style.transform = "translateY(0)";
    } else {
        optionList.style.transform = "translateY(-100%)";
    }
});

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);


//------nav--bg-------//

gsap.set(".nav-bg-active",{
    opacity: 0
})

const tl = gsap.timeline({
    scrollTrigger:{
        start: "top+=50",
        end: "+=1",
        toggleActions: "play none none reverse",
        scrub: true,
        ease: "linear"
    }
})

tl.to(".nav-bg-active", {
    opacity: 1
})

//------text--changing------//

gsap.to(".bg-text-1", {

    text: "It's a GHOST",
    duration: 1,
    scrollTrigger: {
        trigger: ".bg-img-1",
        start: "top 0%",
        end: "bottom bottom",
        ease: "linear",
        // scrub: 2,
        toggleActions: "restart none reverse reset",
        //              play pause resume reverse restart reset complete none
        //              onEnter onLeave onEnterBack onLeaveBack
        pin: ".bg-text-1",
        // pinSpacing: true,
        // markers: true,
    }
})

// gsap.to(".main-head", {

//     // text: "It's a GHOST",
//     duration: 1,
//     scrollTrigger: {
//         trigger: ".header",
//         start: "top",
//         end: "bottom",
//         ease: "linear",
//         // scrub: 2,
//         toggleActions: "restart none reverse reset",
//         //              play pause resume reverse restart reset complete none
//         //              onEnter onLeave onEnterBack onLeaveBack
//         pin: true,
//         // pinSpacing: true,
//         // markers: true,
//     }
// })

//-------About--img--------//

gsap.fromTo(".abt-img", {
    scale: 1.2,
}, {
    duration: 3,
    scale: 1.5,
    scrollTrigger: {
        trigger:".about-sec",
        start: "top top",
        end: "bottom bottom",
        ease: "linear",
        // markers: true,
        scrub: 1,
        pin: ".abt-img"
    }
})

gsap.to(".abt-header", {
    duration: 3,
    // paddingTop: "5%",
    scrollTrigger: {
        trigger:".about-sec",
        start: "top 0%",
        end: "bottom bottom",
        ease: "linear",
        // markers: true,
        scrub: 1,
        pin: ".abt-header"
    }
})

gsap.to(".abt-p", {
    // x:700,
    text: "A software-defined vehicle does not work in a vacuum. It operates at the intersection of different technologies, entities, and diverse needs. The parties to the issue are not just the driver and the OEM, but also the Internet provider, the software company or the developer of the road infrastructure, and even the lawmaker. If we want to create an effective and market-responsive monetization strategy and thus generate new revenue streams for the company, we need to be mindful of that. That is why in our paper, we do not focus solely on the technology that is in charge of retrieving data from the car. We also write about the type of services that are the most popular among modern drivers, show practical use cases, and highlight the mega-trends shaping the automotive industry. And most importantly we avoid the programming jargon because it is useful in the programming stage, not when establishing a dialogue between the parties involved in the monetization process.",
    duration: 6,
    scrollTrigger: {
        trigger: ".about-sec",
        start: "top 0%",
        end: "0%",
        ease: "linear",
        // scrub: 2,
        // toggleActions: "restart none reverse reset",
        //              play pause resume reverse restart reset complete none
        //              onEnter onLeave onEnterBack onLeaveBack
        pin: ".abt-p",
        pinSpacing: true,
        // markers: true,
    }
})

//--------------------------------//

// var tl2 = gsap.timeline({scrollTrigger:{
//     trigger:"#main",
//    //  markers:true,
//     start:"50% 50%",
//     end:"150% 50%",
//     scrub:2,
//     pin:true
// }});
// tl2
// .to("#center",{
//    height: "100vh",
// },'a')
// .to("#top",{
//     top: "-50%",
//  },'a')
//  .to("#bottom",{
//     bottom: "-50%",
//  },'a')
// .to("#top-h1",{
//     top: "60%"
//  },'a')
//  .to("#bottom-h1",{
//     bottom: "-30%"
//  },'a')
// .to("#center-h1",{
//    top: "-30%"
// },'a')
// .to(".content",{
//     delay: -0.2,
//     marginTop: "0%"
//  })
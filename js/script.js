

const obs=new IntersectionObserver((e)=>{
e.forEach((i)=>{
if(i.isIntersecting){
    i.target.classList.add('show')
    setTimeout(() => {
        document.querySelectorAll('.cards').forEach(card => {
            card.style.display="flex"
        });
    }, 1600);
}
else{
    i.target.classList.remove('show')
    document.querySelectorAll('.cards').forEach(card=>{
        card.style.display="none"
    })
}
})
})
const bg=document.querySelector(".bg");
obs.observe(bg)
document.querySelectorAll('.card').forEach(card => obs.observe(card));



const second=new IntersectionObserver((a)=>{
    a.forEach((element)=>{
        if(element.isIntersecting){
            element.target.classList.add("visible")
            console.log('Class was added');
            
        }
        else{
            element.target.classList.add("hide")
            console.log('Class was removed');
            
        }
    })
})
const y=document.querySelector(".page3")
second.observe(y)

// const third = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       // Add your cinematic effect
//       entry.target.classList.add("jadoo");
//       entry.target.classList.remove("not-jadoo");
//       console.log("Page4 cinematic effect triggered");

//       // After 1.1 seconds, reveal footwear cards
//       setTimeout(() => {
//         document.querySelectorAll(".page4 .card").forEach(card => {
//           card.classList.add("step-in-active")
//           card.classList.remove("stepin")
          
//         });
//         console.log("Footwear cards revealed");
//       }, 1100); // between 900ms–1200ms is ideal
//     } else {
//       entry.target.classList.remove("jadoo");
//       entry.target.classList.add("not-jadoo");
//       console.log('Cards removed');
      

//       // Hide cards again when page4 exits
//       document.querySelectorAll(".page4 .card").forEach(card => {
//           card.classList.remove("stepin-active");
//         card.classList.add("stepin");
//       });
//     }
//   });
// }, { threshold: 0.05,
//   rootMargin: "0px 0px -10% 0px"
//  });

// third.observe(document.querySelector(".page4"));




var loader=document.querySelector(".loader video")
setTimeout(function(){
    loader.style.top="-100%"
}, 5500);
var oneloader=document.querySelector(".loader")

setTimeout(() => {
    oneloader.style.top="-100%"
}, 5500);



const bottom=new IntersectionObserver((l)=>{
l.forEach((h)=>{
if(h.isIntersecting){

 h.target.classList.add("jadoo");
      h.target.classList.remove("not-jadoo");
      console.log("Page4 cinematic effect triggered");

    setTimeout(() => {
        document.querySelectorAll('.footwear').forEach(patta => {
            patta.style.display="flex"
        });
    }, 1600);
}
else{
    h.target.classList.remove('show')
    document.querySelectorAll('.footwear').forEach(patta=>{
        patta.style.display="none"
   h.target.classList.remove("jadoo");
      h.target.classList.add("not-jadoo");
      console.log('Cards removed');
    })
}
})
})
const bot=document.querySelector(".page4");
bottom.observe(bot)
document.querySelectorAll('.shoe').forEach(patta => bottom.observe(patta));


const links1=[
  'https://buy.stripe.com/test_dRmaEXapl6bRfP73Mc5os02',
 ' https://buy.stripe.com/test_28EcN51SPeIneL3dmM5os03',
 'https://buy.stripe.com/test_eVqaEXdBxdEj46p5Uk5os04',
 'https://buy.stripe.com/test_5kQcN51SPbwbbyR6Yo5os05',
 'https://buy.stripe.com/test_5kQ6oH1SP6bR1Yh3Mc5os06',
 'https://buy.stripe.com/test_7sYdR99lhbwb5at6Yo5os07'
]
document.querySelectorAll(".card button").forEach((btn, index) => {
  if (links1[index]) {
    btn.addEventListener("click", () => {
      window.open(links1[index].trim(), "_blank", "noopener"); // opens in new tab safely
    });
  }
});
const links2=[
 'https://buy.stripe.com/test_dRmaEXapl6bRfP73Mc5os02',
 'https://buy.stripe.com/test_28EcN51SPeIneL3dmM5os03',
 'https://buy.stripe.com/test_eVqaEXdBxdEj46p5Uk5os04',
 'https://buy.stripe.com/test_5kQcN51SPbwbbyR6Yo5os05',
 'https://buy.stripe.com/test_5kQ6oH1SP6bR1Yh3Mc5os06',
 'https://buy.stripe.com/test_7sYdR99lhbwb5at6Yo5os07'
]
document.querySelectorAll(".pt button").forEach((btn, index) => {
  if (links2[index]) {
    btn.addEventListener("click", () => {
      window.open(links1[index].trim(), "_blank", "noopener"); // opens in new tab safely
    });
  }
});
const links3=[
  "https://buy.stripe.com/test_4gM4gzdBxcAfgTbaaA5os08",
  "https://buy.stripe.com/test_eVqdR9fJFcAffP73Mc5os09",
  "https://buy.stripe.com/test_3cI28r9lhgQv5at3Mc5os0a",
  "https://buy.stripe.com/test_eVq7sL40X0Rx1YhgyY5os0b",
  "https://buy.stripe.com/test_6oUcN540XeIneL35Uk5os0c",
'https://buy.stripe.com/test_00w7sL7d96bRgTbdmM5os0d'
];
document.querySelectorAll(".footwear button").forEach((element,r) => {
  if(links3[r]){
    element.addEventListener("click",()=>{
      window.open(links3[r].trim(),"_blank","noopener");
    });
  };
});
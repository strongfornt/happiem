// faq item selector
const faqItem = document.querySelectorAll(".faq-item");
// review card item
const reviewCard = document.querySelectorAll(".card");
const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");
//assistant section card ==================
const assistantCard = document.querySelectorAll(".assistant-card");
const assistantCard1 = document.querySelector(".assistant-card-1");
const assistantCard2 = document.querySelector(".assistant-card-2");
const assistantCard3 = document.querySelector(".assistant-card-3");




// access all faq items in how it works section =
faqItem.forEach((item) => {
  const questionBtn = item.querySelector(".faq-question");
  const answer = item.querySelector(".answer");
  const arrow = item.querySelector(".arrow-icon");
  questionBtn.addEventListener("click", () => {
    if (answer.classList.contains("hidden")) {
      answer.classList.remove("hidden");
      answer.classList.add("block");
      arrow.classList.remove("fa-arrow-down"); // Switch arrow down to up
      arrow.classList.add("fa-arrow-up");
    } else {
      answer.classList.remove("block");
      answer.classList.add("hidden");
      arrow.classList.remove("fa-arrow-up");
      arrow.classList.add("fa-arrow-down");
    }
  });
});

// Access all card from review section =============
reviewCard.forEach((card, index) => {
  if (index === 0) return;

  const readMore = document.querySelector(".read-more");
  const readMore1 = document.querySelector(".read-more-1");
  const readMore2 = document.querySelector(".read-more-2");
  const readMore3 = document.querySelector(".read-more-3");
  const restDescription = document.querySelector(".rest-description");
  const restDescription1 = document.querySelector(".rest-description-1");
  const restDescription2 = document.querySelector(".rest-description-2");
  const restDescription3 = document.querySelector(".rest-description-3");

  card.addEventListener("mouseover", (e) => {
    if (index === 1) {
      // card 2 ========================
      readMore2.classList.add("hidden");
      restDescription2.classList.remove("hidden");
      card2.classList.add("bg-[#D08875]", "text-white");
      card2.classList.remove("bg-white", "text-[#131313]");

      //card 3
      readMore3.classList.remove("hidden");
      restDescription3.classList.add("hidden");
      card3.classList.remove("bg-[#D08875]", "text-white");
      card3.classList.add("bg-white", "text-[#131313]");
    } else if (index === 2) {
      // card 3 ===============
      readMore3.classList.add("hidden");
      restDescription3.classList.remove("hidden");
      card3.classList.add("bg-[#D08875]", "text-white");
      card3.classList.remove("bg-white", "text-[#131313]");

      //card 2 ==
      readMore2.classList.remove("hidden");
      restDescription2.classList.add("hidden");
      card2.classList.remove("bg-[#D08875]", "text-white");
      card2.classList.add("bg-white", "text-[#131313]");
    }

    //card 1 ====================================
    card1.classList.add("bg-white", "text-black");
    card1.classList.remove("bg-[#D08875]", "text-white");
    restDescription1.classList.add("hidden");
    readMore1.classList.remove("hidden");
  });

  card.addEventListener("mouseout", () => {
    //card 2 start ==================================
    readMore2.classList.remove("hidden");
    restDescription2.classList.add("hidden");
    card2.classList.remove("bg-[#D08875]", "text-white");
    card2.classList.add("bg-white", "text-[#131313]");
    //card 2 end =====================================

    //card 3 start =================================
    readMore3.classList.remove("hidden");
    restDescription3.classList.add("hidden");
    card3.classList.remove("bg-[#D08875]", "text-white");
    card3.classList.add("bg-white", "text-[#131313]");
    //card 3 end =========================================

    //card 1 start ========================================
    card1.classList.remove("bg-white", "text-black");
    card1.classList.add("bg-[#D08875]", "text-white");
    restDescription1.classList.remove("hidden");
    readMore1.classList.add("hidden");
    //card 1 end =====================================
  });
});

// //Access all assistant card =====================
const assistantCardEffect = () => {
  assistantCard.forEach((card, idx) => {
    if (idx === 2) return;
  
    const card1Designation = document.querySelector(".card1-designation");
  const card1Paragraphs = card1Designation.querySelectorAll("p");
  const card2Designation = document.querySelector(".card2-designation");
  const card2Paragraphs = card2Designation.querySelectorAll("p");
  const card3Designation = document.querySelector(".card3-designation");
  const card3Paragraphs = card3Designation.querySelectorAll("p");
  
  // if mouse in ====================
  card.addEventListener("mouseover", () => {
    if (idx === 0) {
      // assistantCard1.style.transition = "all 1s ease"; 
        assistantCard1.classList.add('col-span-2')
        card1Designation.classList.add('group-hover:px-6','group-hover:py-3','group-hover:border')
        card1Paragraphs.forEach((p,pid) => {
            if(pid === 0){
              p.classList.add('group-hover:hidden')
            }else if(pid === 1 || pid === 2) {
              p.classList.add('group-hover:block')
            }
        })

    }else if (idx === 1) {
      assistantCard2.classList.add('col-span-2')
      card2Designation.classList.add('group-hover:px-6','group-hover:py-3','group-hover:border')
      card2Paragraphs.forEach((p,pid) => {
          if(pid === 0){
            p.classList.add('group-hover:hidden')
          }else if(pid === 1 || pid === 2) {
            p.classList.add('group-hover:block')
          }
      })

  }


  //remove all list of class from card 3 =============
  assistantCard3.classList.remove('col-span-2')
  card3Designation.classList.remove('px-6','py-3','border')
  card3Paragraphs.forEach((p,pid) => {
      if(pid === 0){
        p.classList.remove('hidden')
      }else if(pid === 1 || pid === 2) {
        p.classList.add('hidden')
      }
    })
    
  });

// if mouse out ===========================
card.addEventListener("mouseout", () => {
  if (idx === 0) {
      assistantCard1.classList.remove('col-span-2')
      card1Designation.classList.remove('px-6','py-3','border')
      card1Paragraphs.forEach((p,pid) => {
          if(pid === 0){
            p.classList.remove('hidden')
          }else if(pid === 1 || pid === 2) {
            p.classList.remove('block')
          }
      })

  }else if (idx === 1) {
    assistantCard2.classList.remove('col-span-2')
    card2Designation.classList.remove('px-6','py-3','border')
    card2Paragraphs.forEach((p,pid) => {
        if(pid === 0){
          p.classList.remove('hidden')
        }else if(pid === 1 || pid === 2) {
          p.classList.remove('block')
        }
    })

}


//remove all list of class from card 3 =============
assistantCard3.classList.add('col-span-2')
card3Designation.classList.add('px-6','py-3','border')
card3Paragraphs.forEach((p,pid) => {
    if(pid === 0){
      p.classList.add('hidden')
    }else if(pid === 1 || pid === 2) {
      p.classList.remove('hidden')
    }
  })
  
});
  });
}
const isSmallDevice = window.innerWidth <= 767;
if(!isSmallDevice){
  assistantCardEffect()
}











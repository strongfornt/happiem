// faq item selector
const faqItem = document.querySelectorAll(".faq-item");
// review card item
const reviewCard = document.querySelectorAll(".card");
const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");

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
// there is a mouseover problem . and also mouseout
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
    
    if(index === 1) {
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

    }else if(index === 2){
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

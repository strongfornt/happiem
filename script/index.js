// faq item selector
const faqItem = document.querySelectorAll(".faq-item");
// review card item
const reviewCard = document.querySelectorAll(".card");
const card1 = document.querySelector(".card-1");

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
  const readMore1 = document.querySelector(".read-more1");
  const restDescription = document.querySelector(".rest-description");
  const restDescription1 = document.querySelector(".rest-description1");

  card.addEventListener("mouseover", (e) => {
    readMore.classList.add("hidden");
    if (readMore.classList.contains("flex")) {
      readMore.classList.remove("flex");
    }
    restDescription.classList.remove("hidden");
    if (restDescription.classList.contains("flex")) {
      restDescription.classList.add("flex");
    }

    card.classList.add("bg-[#D08875]", "text-white");
    card.classList.remove("bg-white", "text-[#131313]");

    card1.classList.add("bg-white", "text-black");
    card1.classList.remove("bg-[#D08875]", "text-white");
    restDescription1.classList.add("hidden");
    readMore1.classList.remove("hidden");
  });

  card.addEventListener("mouseout", () => {
    readMore.classList.remove("hidden");

    restDescription.classList.add("hidden");

    card.classList.remove("bg-[#D08875]", "text-white");
    card.classList.add("bg-white", "text-[#131313]");

    card1.classList.remove("bg-white", "text-black");
    card1.classList.add("bg-[#D08875]", "text-white");
    restDescription1.classList.remove("hidden");
    readMore1.classList.add("hidden");
  });
});

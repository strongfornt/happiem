// faq item selector 
const faqItem = document.querySelectorAll('.faq-item');

// access all faq items in how it works section =
faqItem.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.answer');
    const arrow = item.querySelector('.arrow-icon')
    questionBtn.addEventListener('click', () => {
        if (answer.classList.contains('hidden')) {
            answer.classList.remove('hidden');
            answer.classList.add('block');
            arrow.classList.remove('fa-arrow-down'); // Switch arrow down to up
             arrow.classList.add('fa-arrow-up');
          } else {
            answer.classList.remove('block');
            answer.classList.add('hidden');
            arrow.classList.remove('fa-arrow-up');
            arrow.classList.add('fa-arrow-down')
          }

              // Toggle arrow icon
        // if (isVisible) {
        //     arrow.classList.remove('fa-arrow-up-long');
        //     arrow.classList.add('fa-arrow-down-long ');
        //   } else {
        //     arrow.classList.remove('fa-arrow-down-long ');
        //     arrow.classList.add('fa-arrow-up-long ');
        //   }
            
    })
})
  // Toggle FAQ answer visibility
    document.querySelectorAll('.faq').forEach(faq => {
      faq.addEventListener('click', () => {
        faq.classList.toggle('active');
      });
    });

    // Add new question to the list
    function submitQuestion() {
      const questionInput = document.getElementById('user-question');
      const questionText = questionInput.value.trim();

      if (questionText !== "") {
        const faqList = document.getElementById('faq-list');

        const newFaq = document.createElement('div');
        newFaq.className = 'faq';
        newFaq.innerHTML = `
          <div class="faq-question">${questionText}</div>
          <div class="faq-answer">Thanks for your question! We’ll get back to you soon.</div>
        `;

        newFaq.addEventListener('click', () => {
          newFaq.classList.toggle('active');
        });

        faqList.appendChild(newFaq);
        questionInput.value = '';
      } else {
        alert("Please enter a question before submitting.");
      }
    }
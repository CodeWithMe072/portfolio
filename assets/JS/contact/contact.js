let questionAnswers = document.querySelectorAll(".questionAnswer")
questionAnswers.forEach(question => {
    question.addEventListener("click", () => {
        question.classList.toggle("active")
        let answer = question.querySelector(".answer")
        let arrow=question.querySelector(".question .arrowIcon")
        let icon=question.querySelector(".question .arrowIcon svg .iconpolyline")
        if (question.classList.contains("active")) {
            arrow.style.transform="rotate(180deg)"
            icon.setAttribute("stroke","rgb(145, 75, 241)")
            setTimeout(() => {
                answer.style.display = "block"
            }, 300)
        } else {
            answer.style.display = "none"
            icon.setAttribute("stroke","#FFFFFF")
            arrow.style.transform="rotate(0deg)"
        }
    })
})

// Function to show toast notifications
const showToast = (message, type = 'success') => {
    // Check if container exists, otherwise create it
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const iconSvg = type === 'success' 
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

    toast.innerHTML = `
        <div class="toast-icon">
            ${iconSvg}
        </div>
        <div class="toast-message">${message}</div>
    `;

    container.appendChild(toast);

    // Trigger transition entry
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    // Auto remove after 4 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
            if (container.childNodes.length === 0) {
                container.remove();
            }
        }, 400);
    }, 4000);
};

// Contact Form submission logic for Contact Hub
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('input[type="submit"]');
        const originalBtnValue = submitBtn.value;
        submitBtn.value = 'Sending...';
        submitBtn.disabled = true;

        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="gmail"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;

        try {
            const response = await fetch('https://bytewise-dashboard.up.railway.app/api/v1/contact/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': 'hk_d07c4b0d46f110cb0e82f0f01cc8f48eca94f5f0dc8acecce6cc49788b2f18de'
                },
                body: JSON.stringify({ name, email, message })
            });

            const result = await response.json();
            if (response.ok && result.success) {
                showToast('Thank you! Your message has been sent successfully.', 'success');
                contactForm.reset();
            } else {
                showToast(result.error || 'Failed to send message. Please try again.', 'error');
            }
        } catch (error) {
            console.error('Contact submission error:', error);
            showToast('A network error occurred. Please verify your connection and try again.', 'error');
        } finally {
            submitBtn.value = originalBtnValue;
            submitBtn.disabled = false;
        }
    });
}
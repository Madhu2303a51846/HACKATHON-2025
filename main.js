// Opportunity Data
const opportunities = [
    {
        title: "AI in Diagnostics",
        description: "Develop AI-powered diagnostic tools for early disease detection.",
        category: "Technology"
    },
    {
        title: "Mobile Health Apps",
        description: "Create innovative mobile applications for patient monitoring and health tracking.",
        category: "Digital Health"
    },
    {
        title: "Smart Medical Devices",
        description: "Design IoT-enabled medical devices for improved patient care.",
        category: "Devices"
    },
    {
        title: "Healthcare Analytics",
        description: "Build data analytics solutions for better healthcare management.",
        category: "Data"
    }
];

// Stats Counter Animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    if (stats.length === 0) return;
    
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.round(current);
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target;
            }
        };

        updateCounter();
    });
}

// Populate Opportunities
function displayOpportunities() {
    const opportunityList = document.getElementById('opportunityList');
    if (!opportunityList) return;
    
    opportunities.forEach(opportunity => {
        const opportunityElement = document.createElement('div');
        opportunityElement.className = 'opportunity-item';
        opportunityElement.innerHTML = `
            <h3>${opportunity.title}</h3>
            <p>${opportunity.description}</p>
            <span class="category">${opportunity.category}</span>
        `;
        opportunityList.appendChild(opportunityElement);
    });
}

// Form Submission
const ideaForm = document.getElementById('ideaForm');
if (ideaForm) {
    ideaForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for submitting your innovation idea! We will review it shortly.');
        this.reset();
    });
}

// Add animation to challenge cards on scroll
const cards = document.querySelectorAll('.challenge-card');
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(card);
});

// Initialize
window.addEventListener('load', () => {
    displayOpportunities();
    animateStats();
});
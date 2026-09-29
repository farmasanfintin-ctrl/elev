// script.js
// Gestion du formulaire de contact et animations légères

document.addEventListener('DOMContentLoaded', function() {
    
    // Gestion de la soumission du formulaire
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des valeurs
            const nom = this.querySelector('input[type="text"]').value.trim();
            const email = this.querySelector('input[type="email"]').value.trim();
            const message = this.querySelector('textarea').value.trim();
            
            // Validation simple
            if (nom === '' || email === '' || message === '') {
                alert('Veuillez remplir tous les champs du formulaire.');
                return;
            }
            
            // Simulation d'envoi (à remplacer par un vrai traitement)
            alert(`Merci ${nom} ! Votre message a bien été envoyé. Nous vous répondrons à l'adresse ${email} dans les plus brefs délais.`);
            
            // Réinitialisation du formulaire
            this.reset();
        });
    }
    
    // Défilement fluide pour les liens d'ancrage
    const navLinks = document.querySelectorAll('nav a, .btn[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Ignorer les liens vides ou "#"
            if (targetId === '#' || !targetId.startsWith('#')) return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                const headerOffset = 80; // hauteur du header sticky
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animation légère : apparition des cartes produits au scroll
    const productCards = document.querySelectorAll('.product-card');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Appliquer l'état initial et observer les cartes
    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    galleryItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
    
    // Ajout d'un effet de survol sur les liens de navigation
    const navItems = document.querySelectorAll('nav a');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transition = 'color 0.3s';
        });
    });
    
    console.log('Site FermeÉlevage chargé avec succès !');
});
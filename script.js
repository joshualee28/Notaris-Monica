// Toggle Menu Navigasi di Mobile / HP
const menuToggle = id = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll untuk Link Navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Tutup menu mobile jika sedang terbuka
        navLinks.classList.remove('active');

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});// --- ANIMASI PARTIKEL GELEMBUNG ---
if (document.getElementById('particles-js')) {
    particlesJS("particles-js", {
      "particles": {
        "number": { "value": 40, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#00d2ff" }, // Warna gelembung biru muda
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": true },
        "size": { "value": 15, "random": true }, // Ukuran bervariasi
        "line_linked": { "enable": false }, // Garis penghubung dimatikan agar mirip gelembung
        "move": {
          "enable": true,
          "speed": 2, // Kecepatan gerak
          "direction": "top", // Bergerak perlahan ke atas
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": { "enable": true, "mode": "bubble" }, // Interaktif saat kursor mendekat
          "onclick": { "enable": true, "mode": "repulse" }, // Gelembung menjauh saat diklik
          "resize": true
        },
        "modes": {
          "bubble": { "distance": 200, "size": 20, "duration": 2, "opacity": 1, "speed": 3 },
          "repulse": { "distance": 200, "duration": 0.4 }
        }
      },
      "retina_detect": true
    });
}
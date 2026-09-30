import { renderLogin } from './pages/login/login.js';

// Dummy accounts – password sama: "admin123"
const ACCOUNTS = [
    { email: 'walas@smpn1tirtajaya.sch.id', password: 'admin123', role: 'walas', redirect: 'walas.html' },
    { email: 'mapel@smpn1tirtajaya.sch.id', password: 'admin123', role: 'mapel', redirect: 'mapel.html' },
    { email: 'admin@smpn1tirtajaya.sch.id', password: 'admin123', role: 'superadmin', redirect: 'superadmin.html' },
];

document.addEventListener('DOMContentLoaded', () => {
    // Render login page into body
    document.body.innerHTML = renderLogin();

    const btnLogin = document.getElementById('btn-login');
    const emailInput = document.getElementById('login-email');
    const passInput = document.getElementById('login-password');
    const errorBox = document.getElementById('login-error');

    // Focus highlight on inputs
    [emailInput, passInput].forEach(el => {
        el.addEventListener('focus', () => el.style.borderColor = '#2563eb');
        el.addEventListener('blur', () => el.style.borderColor = '#d1d5db');
    });

    // Allow Enter key to submit
    [emailInput, passInput].forEach(el => {
        el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') handleLogin();
        });
    });

    btnLogin.addEventListener('click', handleLogin);

    function handleLogin() {
        const email = emailInput.value.trim().toLowerCase();
        const password = passInput.value;

        const account = ACCOUNTS.find(a => a.email === email && a.password === password);

        if (account) {
            errorBox.style.display = 'none';

            // Animate button
            btnLogin.textContent = 'Memuat...';
            btnLogin.style.opacity = '0.7';

            setTimeout(() => {
                window.location.href = account.redirect;
            }, 600);
        } else {
            // Show error
            errorBox.style.display = 'block';
            passInput.value = '';
            passInput.focus();

            // Shake effect on card
            const card = document.querySelector('[style*="max-width: 420px"]');
            if (card) {
                card.style.animation = 'shake 0.3s ease';
                setTimeout(() => card.style.animation = '', 400);
            }
        }
    }
});

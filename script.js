// Language Switching
function changeLanguage(lang) {
    const content = {
        en: {
            // Home Page
            heroTitle: "Unlimited Movies, TV Shows, and More",
            heroSubtitle: "Watch anywhere. Cancel anytime.",
            button: "Get Started",
            categories: ["Trending Now", "Top Picks for You", "New Releases"],
            navHome: "Home",
            navTVShows: "TV Shows",
            navMovies: "Movies",
            reasonsTitle: "More Reasons to Join",
            reason1Title: "Enjoy on your TV",
            reason1Description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            reason2Title: "Download your shows to watch offline",
            reason2Description: "Save your favorites easily and always have something to watch.",
            reason3Title: "Watch everywhere",
            reason3Description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
            authSubtitle: "Ready to watch? Enter your email to create or restart your membership.",
            authEmailPlaceholder: "Email address",
            authGetStarted: "Sign Up",

            // Login Page
            loginTitle: "Login",
            labelEmailOrUsername: "Email or Username",
            labelPasswordLogin: "Password",
            loginButton: "Login",
            signupLink: "Don't have an account?",

            // Signup Page
            signupTitle: "Sign Up",
            labelName: "Full Name",
            labelEmail: "Email",
            labelPhone: "Phone Number",
            labelPassword: "Password",
            labelConfirmPassword: "Confirm Password",
            labelPaymentMethod: "Payment Method",
            selectPayment: "Select a payment method",
            labelTerms: "I agree to the Terms and Conditions",
            signupButton: "Sign Up",
            loginLink: "Already have an account?",

            // Contact Page
            contactTitle: "Contact Us",
            labelName: "Name",
            labelEmail: "Email",
            labelMessage: "Message",
            sendMessage: "Send Message",
        },
        ku: {
            // Home Page
            heroTitle: "فیلم و درامای بێ سنوور",
            heroSubtitle: "لەگەڵ ئێمە جیهان لە بەردەستە",
            button: "دەست پێ بکە",
            categories: ["ئێستا بەناوبانگە", "باشترین بۆ تۆ", "بەرهەمە نوێیەکان"],
            navHome: "ماڵەوە",
            navTVShows: "زنجیرە تەلەفزیۆنییەکان",
            navMovies: "فیلمەکان",
            reasonsTitle: "هۆکاری زیاتر بۆ بەشداریکردن",
            reason1Title: "چێژ لە تەلەفزیۆن وەربگرە",
            reason1Description: "لەسەر تەلەفزیۆنی زیرەک، پلەیستەیشن، ئێکس بۆکس، کرۆم کاست، ئەپڵ تیڤی، و زیاتر بینەر بە.",
            reason2Title: "لە مۆبایلەکەتەوە لە هەموو شوێنێک بینەر بە",
            reason2Description: "خێرا و بێ ڕیکلام",
            reason3Title: "لە هەموو شوێنێک بینەر بە",
            reason3Description: "فیلم و بەرنامە تەلەفزیۆنییەکان لەسەر مۆبایل، تابلێت، کۆمپیوتەر، و تەلەفزیۆن بینەر بە.",
            authSubtitle: "ئامادەی بینەر بیت ؟ ئیمەیڵەکەت بنووسە بۆ دەستپێکردن بە ئەندامێتی.",
            authEmailPlaceholder: "ناونیشانی ئیمەیڵ",
            authGetStarted: "خۆت تۆمار بکە",

            // Login Page
            loginTitle: "چوونەژوورەوە",
            labelEmailOrUsername: "ئیمەیڵ یان ناوی تەواوی بەکارهێنەر",
            labelPasswordLogin: "وشەی نهێنی",
            loginButton: "چوونەژوورەوە",
            signupLink: "هەژمارت نییە؟",

            // Signup Page
            signupTitle: "خۆت تۆمار بکە",
            labelName: "ناوی تەواو",
            labelEmail: "ئیمەیڵ",
            labelPhone: "ژمارەی مۆبایل",
            labelPassword: "وشەی نهێنی",
            labelConfirmPassword: "دووبارەکردنەوەی وشەی نهێنی",
            labelPaymentMethod: "شێوازی پارەدان",
            selectPayment: "شێوازی پارەدان هەڵبژێرە",
            labelTerms: "من ڕازیم بە مەرجەکان",
            signupButton: "خۆت تۆمار بکە",
            loginLink: "هەژمارت هەیە؟",

            // Contact Page
            contactTitle: "پەیوەندی بکە پێمانەوە",
            labelName: "ناو",
            labelEmail: "ئیمەیڵ",
            labelMessage: "پەیام",
            sendMessage: "پەیام بنێرە",
        }
    };

    // Update Home Page
    if (document.getElementById("hero-title")) {
        document.getElementById("hero-title").innerText = content[lang].heroTitle;
        document.getElementById("hero-subtitle").innerText = content[lang].heroSubtitle;
        document.getElementById("hero-button").innerText = content[lang].button;

        const categories = document.querySelectorAll(".categories h2");
        categories.forEach((el, idx) => el.innerText = content[lang].categories[idx]);

        document.getElementById("nav-home").innerText = content[lang].navHome;
        document.getElementById("nav-tv-shows").innerText = content[lang].navTVShows;
        document.getElementById("nav-movies").innerText = content[lang].navMovies;

        document.getElementById("reasons-title").innerText = content[lang].reasonsTitle;
        document.getElementById("reason1-title").innerText = content[lang].reason1Title;
        document.getElementById("reason1-description").innerText = content[lang].reason1Description;
        document.getElementById("reason2-title").innerText = content[lang].reason2Title;
        document.getElementById("reason2-description").innerText = content[lang].reason2Description;
        document.getElementById("reason3-title").innerText = content[lang].reason3Title;
        document.getElementById("reason3-description").innerText = content[lang].reason3Description;

        document.getElementById("auth-subtitle").innerText = content[lang].authSubtitle;
        document.getElementById("auth-email").placeholder = content[lang].authEmailPlaceholder;
        document.getElementById("auth-get-started").innerText = content[lang].authGetStarted;
    }

    // Update Login Page
    if (document.getElementById("login-title")) {
        document.getElementById("login-title").innerText = content[lang].loginTitle;
        document.getElementById("label-email-or-username").innerText = content[lang].labelEmailOrUsername;
        document.getElementById("label-password").innerText = content[lang].labelPasswordLogin;
        document.getElementById("login-button").innerText = content[lang].loginButton;
        document.getElementById("signup-link").innerText = content[lang].signupLink;
    }

    // Update Signup Page
    if (document.getElementById("signup-title")) {
        document.getElementById("signup-title").innerText = content[lang].signupTitle;
        document.getElementById("label-name").innerText = content[lang].labelName;
        document.getElementById("label-email").innerText = content[lang].labelEmail;
        document.getElementById("label-phone").innerText = content[lang].labelPhone;
        document.getElementById("label-password").innerText = content[lang].labelPassword;
        document.getElementById("label-confirm-password").innerText = content[lang].labelConfirmPassword;
        document.getElementById("label-payment-method").innerText = content[lang].labelPaymentMethod;
        document.getElementById("select-payment").innerText = content[lang].selectPayment;
        document.getElementById("label-terms").innerText = content[lang].labelTerms;
        document.getElementById("signup-button").innerText = content[lang].signupButton;
        document.getElementById("login-link").innerText = content[lang].loginLink;
    }

    // Update Contact Page
    if (document.getElementById("contact-title")) {
        document.getElementById("contact-title").innerText = content[lang].contactTitle;
        document.getElementById("label-name").innerText = content[lang].labelName;
        document.getElementById("label-email").innerText = content[lang].labelEmail;
        document.getElementById("label-message").innerText = content[lang].labelMessage;
        document.getElementById("send-message").innerText = content[lang].sendMessage;
    }

    // Add Kurdish text styling
    if (lang === 'ku') {
        document.querySelectorAll("h1, label, button, p, a").forEach(el => el.classList.add('kurdish-text'));
    } else {
        document.querySelectorAll("h1, label, button, p, a").forEach(el => el.classList.remove('kurdish-text'));
    }
}

// Scroll Functionality
function scrollCategory(direction, categoryId) {
    const category = document.getElementById(categoryId);
    const scrollAmount = 300;
    if (direction === 'left') {
        category.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right') {
        category.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

// Sign Up Form Submission
document.getElementById('signup-form')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    const paymentMethod = document.getElementById('payment-method').value;
    const terms = document.getElementById('terms').checked;

    if (!name || !email || !phone || !password || !confirmPassword || !paymentMethod || !terms) {
        alert('Please fill in all fields and agree to the terms.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!isValidPhone(phone)) {
        alert('Please enter a valid phone number.');
        return;
    }

    simulateSignUp(name, email, phone, password, paymentMethod);
});

// Login Form Submission
document.getElementById('login-form')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailOrUsername = document.getElementById('email-or-username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!emailOrUsername || !password) {
        alert('Please fill in all fields.');
        return;
    }

    simulateLogin(emailOrUsername, password);
});

// Contact Form Submission
document.getElementById('contact-form')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    simulateContactFormSubmission(name, email, message);
});

// Helper Functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

function simulateSignUp(name, email, phone, password, paymentMethod) {
    console.log(`Signing up with:
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Password: ${password}
    Payment Method: ${paymentMethod}`);

    alert(`Thank you for signing up, ${name}! You will receive a confirmation email at ${email}.`);
    window.location.href = 'index.html';
}

function simulateLogin(emailOrUsername, password) {
    console.log(`Logging in with:
    Email/Username: ${emailOrUsername}
    Password: ${password}`);

    alert(`Welcome back! You are now logged in as ${emailOrUsername}.`);
    window.location.href = 'index.html';
}

function simulateContactFormSubmission(name, email, message) {
    console.log(`Contact form submitted:
    Name: ${name}
    Email: ${email}
    Message: ${message}`);

    alert(`Thank you, ${name}! Your message has been sent.`);
    window.location.href = 'index.html';
}
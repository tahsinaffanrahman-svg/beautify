/* ==========================================================================
   Beautify Brand - Core JavaScript Application Logic (Upgraded with OpenAI)
   ========================================================================== */

// 1. Extended Real Skincare Product Database (10 Products)
const products = [
    {
        id: 1,
        name: "COSRX Advanced Snail 96 Essence",
        price: 25.00,
        image: "assets/images/cosrx_snail.png",
        rating: 4.8,
        reviews: 4850,
        description: "Formulated with 96.3% Snail Secretion Filtrate, this essence protects the skin from moisture loss while improving skin elasticity. Snail mucin helps repair, soothe, and hydrate red, sensitive skin after breakouts by replenishing moisture.",
        activeIngredients: "Snail Secretion Filtrate (96.3%), Sodium Hyaluronate, Allantoin, Panthenol",
        concern: "hydration",
        skinTypes: ["dry", "acne", "sensitive", "combination"],
        badge: "Best Seller",
        clinicalNote: "Snail mucin is a natural cell-regenerator. Excellent for stabilizing compromised lipid barriers.",
        useInstructions: "Apply 2-3 pumps onto clean face and neck. Gently pat for absorption. Follow with moisturizer.",
        safetyProfile: "Hypoallergenic, dermatologist-tested, cruelty-free, safe for highly sensitive skin."
    },
    {
        id: 2,
        name: "The Ordinary Niacinamide 10% + Zinc 1%",
        price: 9.00,
        image: "assets/images/ordinary_niacinamide.png",
        rating: 4.5,
        reviews: 12540,
        description: "A high-strength vitamin and mineral blemish formula. Niacinamide (Vitamin B3) reduces the appearance of skin blemishes and congestion. A 1% concentration of zinc PCA helps balance visible aspects of sebum activity.",
        activeIngredients: "Niacinamide (10%), Zinc PCA (1%)",
        concern: "blemish",
        skinTypes: ["oily", "acne", "combination"],
        badge: "Cult Favorite",
        clinicalNote: "Highly effective for regulating oily T-zones. Do not use in the same application step as pure Vitamin C.",
        useInstructions: "Apply 2-3 drops to entire face morning and evening before heavier creams.",
        safetyProfile: "Vegan, oil-free, silicone-free. Safe for daily use, but avoid layering with strong acids."
    },
    {
        id: 3,
        name: "CeraVe Moisturizing Cream",
        price: 16.00,
        image: "assets/images/cerave_cream.png",
        rating: 4.9,
        reviews: 9820,
        description: "A rich, non-greasy moisturizing cream formulated with three essential ceramides and hyaluronic acid to lock in moisture and protect the skin's natural protective barrier. Uses MultiVesicular Emulsion (MVE) delivery technology.",
        activeIngredients: "Ceramides 1/3/6-II, Hyaluronic Acid, Glycerin, Cholesterol",
        concern: "barrier",
        skinTypes: ["dry", "sensitive"],
        badge: "Dermatologist Approved",
        clinicalNote: "Excellent basic barrier lipid builder. Non-comedogenic, fragrance-free, and hypoallergenic.",
        useInstructions: "Apply liberally to face and body as often as needed, or as directed by a physician.",
        safetyProfile: "Accepted by the National Eczema Association. Safe for baby skin and irritated skin barrier."
    },
    {
        id: 4,
        name: "Paula's Choice 2% BHA Liquid Exfoliant",
        price: 35.00,
        image: "assets/images/paulas_choice.png",
        rating: 4.7,
        reviews: 18450,
        description: "A unique, leave-on liquid exfoliant with Salicylic Acid (BHA) that unclogs pores, smooths wrinkles, and brightens skin tone. Removes built-up dead skin layers to reveal radiant, hydrated skin.",
        activeIngredients: "Salicylic Acid (BHA) (2%), Green Tea Extract, Methylpropanediol",
        concern: "blemish",
        skinTypes: ["oily", "acne", "combination"],
        badge: "Award Winner",
        clinicalNote: "Salicylic acid is oil-soluble, allowing it to penetrate deep inside pore walls. Buffer application if skin is dry.",
        useInstructions: "Apply gently with fingers or cotton pad over face and neck after cleansing. Start every other day.",
        safetyProfile: "Must pair with daytime sunscreen SPF 30+. Avoid direct eye contact."
    },
    {
        id: 5,
        name: "La Roche-Posay Anthelios Sunscreen SPF 60",
        price: 28.00,
        image: "assets/images/laroche_sunscreen.png",
        rating: 4.8,
        reviews: 3200,
        description: "An award-winning, broad-spectrum UVA/UVB sunscreen designed for face and body. Fast-absorbing, velvet-finish texture that leaves skin hydrated and protected. Contains Cell-Ox Shield antioxidant technology.",
        activeIngredients: "Avobenzone (3%), Homosalate (10%), Octisalate (5%), Octocrylene (7%)",
        concern: "spf",
        skinTypes: ["dry", "oily", "sensitive", "acne", "combination"],
        badge: "Clinical Sunscreen",
        clinicalNote: "Sunscreen is the absolute foundation of skincare. Essential when using active ingredients like Retinol or Salicylic Acid.",
        useInstructions: "Apply generously 15 minutes before sun exposure. Reapply every 2 hours after swimming or sweating.",
        safetyProfile: "Oxybenzone-free, octinoxate-free, non-comedogenic, dermatologist tested for sensitive skin."
    },
    {
        id: 6,
        name: "Drunk Elephant Protini Polypeptide Cream",
        price: 68.00,
        image: "assets/images/drunkelephant_protini.png",
        rating: 4.6,
        reviews: 2150,
        description: "A breakthrough protein moisturizer that combines an unprecedented array and concentration of signal peptides, growth factors, and supportive amino acids to improve skin tone, texture, and firmness.",
        activeIngredients: "Signal Peptide Complex (9), Pygmy Waterlily Extract, Soybean Folic Acid Ferment",
        concern: "anti-aging",
        skinTypes: ["dry", "oily", "sensitive", "combination"],
        badge: "Luxury Peptide",
        clinicalNote: "An outstanding structural support cream that rejuvenates cell collagen pathways. Apply morning and night.",
        useInstructions: "Apply one pump morning and night to clean, dry face, neck, and chest. Press down to dispense.",
        safetyProfile: "100% free of essential oils, silicones, and fragrances. Safe for all skin layers."
    },
    {
        id: 7,
        name: "Kiehl's Ultra Facial Cream",
        price: 38.00,
        image: "assets/images/kiehls_cream.png",
        rating: 4.7,
        reviews: 6420,
        description: "A 24-hour daily face moisturizing cream that hydrates skin with double the hydration. Formulated with Glacial Glycoprotein and olive-derived Squalane, this lightweight moisturizer leaves skin softer and healthier-looking.",
        activeIngredients: "Glacial Glycoprotein, Squalane, Glycerin",
        concern: "hydration",
        skinTypes: ["dry", "oily", "sensitive", "combination"],
        badge: "Clean Classic",
        clinicalNote: "Ultra-clean skin barrier hydrator. Fits all skin profiles seamlessly.",
        useInstructions: "Apply a dime-sized amount to clean skin day or night. Press gently into cheeks and neck.",
        safetyProfile: "Fragrance-free, paraben-free, safe for sensitive skins and during acid exfoliations."
    },
    {
        id: 8,
        name: "The Ordinary AHA 30% + BHA 2% Peel",
        price: 10.00,
        image: "assets/images/ordinary_peel.png",
        rating: 4.4,
        reviews: 14200,
        description: "A 10-minute exfoliating facial that deep cleans pore walls, balances blemishes, and smooths skin texture. Combines high-concentration Alpha Hydroxy Acids (Glycolic/Lactic) and Beta Hydroxy Acid (Salicylic).",
        activeIngredients: "Glycolic Acid, Lactic Acid, Salicylic Acid (2%)",
        concern: "blemish",
        skinTypes: ["oily", "acne"],
        badge: "High Acidity",
        clinicalNote: "High acidity warning. Do not leave on skin for more than 10 minutes. Do not use on sensitive or peeling barriers.",
        useInstructions: "Apply evenly to clean, dry skin. Leave on for 10 minutes, then rinse thoroughly with lukewarm water. Use once weekly.",
        safetyProfile: "Use sunscreen SPF 30+ daily. Avoid layering with copper peptides or other retinoids."
    },
    {
        id: 9,
        name: "Laneige Lip Sleeping Mask",
        price: 24.00,
        image: "assets/images/laneige_lip.png",
        rating: 4.8,
        reviews: 16800,
        description: "A leave-on lip mask that delivers intense moisture and antioxidants while you sleep. Formulated with Laneige Berry Fruit Complex, Vitamin C, and Coconut Oil to reveal soft, hydrated lips the next morning.",
        activeIngredients: "Berry Fruit Complex, Vitamin C, Coconut Oil",
        concern: "hydration",
        skinTypes: ["dry", "sensitive"],
        badge: "Antioxidant Rich",
        clinicalNote: "Intense hydration locks in trans-epidermal moisture on delicate skin layers.",
        useInstructions: "Apply a generous layer to lips before sleeping using the applicator. Wipe off gently the next morning.",
        safetyProfile: "Dermatologist-tested, safe for dry chapped lips."
    },
    {
        id: 10,
        name: "CeraVe Hydrating Cleanser",
        price: 15.00,
        image: "assets/images/cerave_cleanser.png",
        rating: 4.8,
        reviews: 7420,
        description: "A gentle face wash designed to cleanse and refresh the skin without over-stripping or leaving it feeling tight and dry. Formulated with three essential ceramides to lock in moisture and hyaluronic acid to hydrate.",
        activeIngredients: "Ceramides 1/3/6-II, Hyaluronic Acid, Glycerin",
        concern: "hydration",
        skinTypes: ["dry", "sensitive"],
        badge: "Gentle Wash",
        clinicalNote: "Non-foaming lotion wash. Keeps the protective moisture barrier completely intact during cleansing.",
        useInstructions: "Wet skin with lukewarm water. Massage cleanser in circular motions. Rinse thoroughly.",
        safetyProfile: "Fragrance-free, soap-free, non-comedogenic, safe for highly sensitized skin."
    }
];

// 2. Application State Variables
let cart = [];
let tempSavedCart = []; // Saved state for Buy Now bypass
let isBuyNowBypass = false;
let currentUser = null;
let activeProductContext = null;
let currentConcernFilter = "all";
let currentSkinFilter = "all";

// Chat conversation logs (for OpenAI API key state)
let chatHistory = [];

// AI Diagnostic Quiz state
let quizState = {
    inProgress: false,
    currentStep: 0,
    answers: { feel: null, breakouts: null, objective: null }
};

// 3. Document Element Selectors
document.addEventListener("DOMContentLoaded", () => {
    // Initialize i18n (must be first to translate static DOM)
    if (typeof i18n !== "undefined") {
        i18n.init();
        // Update font on Bangla
        function updateLangFont(lang) {
            document.documentElement.lang = lang;
            if (lang === "bn") {
                document.body.style.fontFamily = "'Noto Sans Bengali', 'Plus Jakarta Sans', sans-serif";
            } else {
                document.body.style.fontFamily = "";
            }
        }
        updateLangFont(i18n.getLang());
        i18n.onLangChange(updateLangFont);
    }

    // UI Panels & Drawers
    const aiClinicDrawer = document.getElementById("ai-clinic-drawer");
    const cartDrawer = document.getElementById("cart-drawer");
    const aiPanelOverlay = document.getElementById("ai-panel-overlay");
    const cartPanelOverlay = document.getElementById("cart-panel-overlay");
    
    // Toggle Buttons
    const themeToggleBtn = document.getElementById("theme-toggle-btn");
    const cartToggleBtn = document.getElementById("cart-toggle-btn");
    const aiActiveIndicator = document.getElementById("ai-active-indicator");
    const navConsultBtn = document.getElementById("nav-consult-btn");
    const btnHeroConsult = document.getElementById("btn-hero-consult");
    const heroQuizTrigger = document.getElementById("hero-quiz-trigger");
    const closeAiBtn = document.getElementById("close-ai-btn");
    const aiFab = document.getElementById("ai-fab");
    const closeCartBtns = document.querySelectorAll(".close-cart-drawer");
    
    // OpenAI Settings Panel Selectors
    const openaiSettingsBtn = document.getElementById("openai-settings-btn");
    const openaiConfigPanel = document.getElementById("openai-config-panel");
    const openaiApiKeyInput = document.getElementById("openai-api-key");
    const btnSaveOpenaiKey = document.getElementById("btn-save-openai-key");
    const btnClearOpenaiKey = document.getElementById("btn-clear-openai-key");
    const apiStatusBadge = document.getElementById("api-status-badge");

    // E-commerce & Checkout Multi-step
    const cartItemsList = document.getElementById("cart-items-list");
    const cartBadgeCount = document.getElementById("cart-badge-count");
    const cartSubtotalElements = document.querySelectorAll(".cart-subtotal-val");
    const cartTotalElements = document.querySelectorAll(".cart-total-val");
    
    const checkoutStep1 = document.getElementById("checkout-step-1");
    const checkoutStep2 = document.getElementById("checkout-step-2");
    const checkoutStep3 = document.getElementById("checkout-step-3");
    
    const btnProceedShipping = document.getElementById("btn-proceed-shipping");
    const btnProceedPayment = document.getElementById("btn-proceed-payment");
    const btnBackCart = document.getElementById("btn-back-cart");
    const btnBackShipping = document.getElementById("btn-back-shipping");
    const btnSubmitOrder = document.getElementById("btn-submit-order");
    
    const shippingForm = document.getElementById("shipping-form");
    const paymentForm = document.getElementById("payment-form");
    const cardNoInput = document.getElementById("card-number");
    const cardExpiryInput = document.getElementById("card-expiry");
    const cardCvvInput = document.getElementById("card-cvv");
    
    const checkoutSuccessModal = document.getElementById("checkout-success-modal");
    const closeModalBtn = document.getElementById("close-modal-btn");
    const modalOverlay = document.getElementById("modal-overlay");
    
    // User Authentication & Profile
    const profileToggleBtn = document.getElementById("profile-toggle-btn");
    const profileStatusDot = document.getElementById("profile-status-dot");
    const profileModal = document.getElementById("profile-modal");
    const profileModalOverlay = document.getElementById("profile-modal-overlay");
    const closeProfileBtn = document.getElementById("close-profile-btn");
    
    const profileLoggedOutView = document.getElementById("profile-logged-out");
    const profileLoggedInView = document.getElementById("profile-logged-in");
    const authForm = document.getElementById("auth-form");
    const authTitle = document.getElementById("auth-title");
    const authSubtitle = document.getElementById("auth-subtitle");
    const btnAuthSubmit = document.getElementById("btn-auth-submit");
    const authToggleLink = document.getElementById("auth-toggle-link");
    
    const userDisplayName = document.getElementById("user-display-name");
    const profileInitials = document.getElementById("profile-initials");
    const profileSkinDisplay = document.getElementById("profile-skin-display");
    const profilePointsDisplay = document.getElementById("profile-points-display");
    const profilePrescriptions = document.getElementById("profile-prescriptions");
    const profileQuizRetrigger = document.getElementById("profile-quiz-retrigger");
    const btnLogout = document.getElementById("btn-logout");
    
    // Chat components
    const chatForm = document.getElementById("chat-form");
    const chatInput = document.getElementById("chat-input");
    const chatMessagesContainer = document.getElementById("chat-messages-container");
    const chatQuickSuggestions = document.getElementById("chat-quick-suggestions");
    const clinicActiveContext = document.getElementById("clinic-active-context");
    const contextProdImg = document.getElementById("context-prod-img");
    const contextProdTitle = document.getElementById("context-prod-title");
    const contextProdDesc = document.getElementById("context-prod-desc");
    const clearContextBtn = document.getElementById("clear-context-btn");
    const clinicUserSkin = document.getElementById("clinic-user-skin");
    
    // Filters & Catalog
    const filterConcernOptions = document.getElementById("filter-concern-options");
    const filterSkinOptions = document.getElementById("filter-skintype-options");
    const productGridContainer = document.getElementById("product-grid-container");
    
    // Toast Container
    const toastContainer = document.getElementById("toast-container");
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const navMenu = document.getElementById("nav-menu");

    /* ==========================================================================
       A. DUAL SYSTEM THEME SWITCHER (Dark/Light mode)
       ========================================================================== */
    function initTheme() {
        const storedTheme = localStorage.getItem("beautify_theme") || "light";
        if (storedTheme === "dark") {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }

    themeToggleBtn.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-mode");
        localStorage.setItem("beautify_theme", isDark ? "dark" : "light");
        showToast(i18n.t(isDark ? "toast.theme_dark" : "toast.theme_light"));
    });

    // Language selector
    const langSelector = document.getElementById("lang-selector");
    if (langSelector && typeof i18n !== "undefined") {
        langSelector.value = i18n.getLang();
        langSelector.addEventListener("change", function () {
            i18n.setLang(this.value);
            showToast(i18n.t("toast.lang_changed", { lang: i18n.langNames[this.value] || this.value }));
        });
    }

    initTheme();

    /* ==========================================================================
       B. USER SESSION & AUTHENTICATION (LocalStorage)
       ========================================================================== */
    let isRegisterMode = true;

    function initUserSession() {
        const storedUser = localStorage.getItem("beautify_user");
        if (storedUser) {
            currentUser = JSON.parse(storedUser);
            profileStatusDot.classList.add("active");
            updateProfileUI();
        } else {
            currentUser = null;
            profileStatusDot.classList.remove("active");
        }
        renderProducts();
    }

    function toggleAuthMode(register = true) {
        isRegisterMode = register;
        if (register) {
            authTitle.innerText = i18n.t("auth.title.register");
            authSubtitle.innerText = i18n.t("auth.subtitle.register");
            document.getElementById("group-auth-name").style.display = "flex";
            document.getElementById("group-auth-skin").style.display = "flex";
            btnAuthSubmit.innerText = i18n.t("auth.btn.register");
            authToggleLink.innerText = i18n.t("auth.toggle.login");
        } else {
            authTitle.innerText = i18n.t("auth.title.login");
            authSubtitle.innerText = i18n.t("auth.subtitle.login");
            document.getElementById("group-auth-name").style.display = "none";
            document.getElementById("group-auth-skin").style.display = "none";
            btnAuthSubmit.innerText = i18n.t("auth.btn.login");
            authToggleLink.innerText = i18n.t("auth.toggle.register");
        }
    }

    authToggleLink.addEventListener("click", (e) => {
        e.preventDefault();
        toggleAuthMode(!isRegisterMode);
    });

    authForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("auth-email").value.trim();
        const password = document.getElementById("auth-password").value;
        
        if (isRegisterMode) {
            const name = document.getElementById("auth-name").value.trim();
            const skinType = document.getElementById("auth-skin").value;
            
            currentUser = {
                name,
                email,
                skinType,
                points: 100, 
                prescriptions: []
            };
            
            localStorage.setItem("beautify_user", JSON.stringify(currentUser));
            showToast(i18n.t("toast.profile_created", { name }));
        } else {
            const storedUser = localStorage.getItem("beautify_user");
            if (storedUser) {
                const parsed = JSON.parse(storedUser);
                if (parsed.email === email) {
                    currentUser = parsed;
                    showToast(i18n.t("toast.welcome_back", { name: currentUser.name }));
                } else {
                    currentUser = { name: email.split("@")[0], email, skinType: "unspecified", points: 100, prescriptions: [] };
                    localStorage.setItem("beautify_user", JSON.stringify(currentUser));
                    showToast(i18n.t("toast.logged_in"));
                }
            } else {
                currentUser = { name: email.split("@")[0], email, skinType: "unspecified", points: 100, prescriptions: [] };
                localStorage.setItem("beautify_user", JSON.stringify(currentUser));
                showToast(i18n.t("toast.logged_in"));
            }
        }
        
        if (currentUser.skinType !== "unspecified") {
            clinicUserSkin.value = currentUser.skinType;
        }

        profileStatusDot.classList.add("active");
        updateProfileUI();
        toggleProfileModal(false);
        renderProducts();
        authForm.reset();
    });

    btnLogout.addEventListener("click", () => {
        localStorage.removeItem("beautify_user");
        currentUser = null;
        profileStatusDot.classList.remove("active");
        clinicUserSkin.value = "unspecified";
        currentSkinFilter = "all";
        
        filterSkinOptions.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
        filterSkinOptions.querySelector("[data-skin='all']").classList.add("active");
        
        showToast(i18n.t("toast.logged_out"));
        updateProfileUI();
        toggleProfileModal(false);
        renderProducts();
    });

    function updateProfileUI() {
        if (currentUser) {
            profileLoggedOutView.classList.remove("active");
            profileLoggedInView.classList.add("active");
            userDisplayName.innerText = currentUser.name;
            const names = currentUser.name.split(" ");
            const initials = names.map(n => n[0]).join("").substring(0, 2).toUpperCase();
            profileInitials.innerText = initials || "B";
            profileSkinDisplay.innerText = getFormattedSkinType(currentUser.skinType);
            profilePointsDisplay.innerText = i18n.t("auth.logged_in.points", { points: currentUser.points });
            
            profilePrescriptions.innerHTML = "";
            if (currentUser.prescriptions && currentUser.prescriptions.length > 0) {
                currentUser.prescriptions.forEach(p => {
                    const el = document.createElement("div");
                    el.style.borderBottom = "1px solid hsl(var(--color-sand-dark))";
                    el.style.padding = "8px 0";
                    el.style.marginBottom = "4px";
                    el.innerHTML = `
                        <strong style="color: hsl(var(--color-slate-black))">${p.productName}</strong>
                        <p style="margin-top: 4px; font-size: 0.8rem; color: hsl(var(--color-slate-gray))">${p.note}</p>
                    `;
                    profilePrescriptions.appendChild(el);
                });
            } else {
                profilePrescriptions.innerHTML = `<p class="empty-note">${i18n.t("auth.logged_in.empty")}</p>`;
            }
        } else {
            profileLoggedOutView.classList.add("active");
            profileLoggedInView.classList.remove("active");
            toggleAuthMode(true);
        }
    }

    function toggleProfileModal(open = true) {
        if (open) {
            updateProfileUI();
            profileModal.setAttribute("aria-hidden", "false");
        } else {
            profileModal.setAttribute("aria-hidden", "true");
        }
    }

    profileToggleBtn.addEventListener("click", () => toggleProfileModal(profileModal.getAttribute("aria-hidden") === "true"));
    closeProfileBtn.addEventListener("click", () => toggleProfileModal(false));
    profileModalOverlay.addEventListener("click", () => toggleProfileModal(false));

    function getFormattedSkinType(type) {
        if (typeof i18n !== "undefined") {
            var key = "ai.skin." + type;
            var translated = i18n.t(key);
            if (translated !== key) return translated;
        }
        switch(type) {
            case "dry": return "Dry Skin";
            case "oily": return "Oily Skin";
            case "sensitive": return "Sensitive Skin";
            case "acne": return "Acne-Prone Skin";
            case "combination": return "Combination Skin";
            default: return "Unspecified";
        }
    }

    /* ==========================================================================
       C. CATALOG RENDERING & DYNAMIC MATCH BADGES
       ========================================================================== */
    function calculateMatchScore(product, skinType) {
        if (!skinType || skinType === "unspecified" || skinType === "all") {
            return { score: null, labelKey: "catalog.match.click", label: "Click to Match", cssClass: "neutral-match" };
        }
        
        const isDirectlySuitable = product.skinTypes.includes(skinType);
        
        // Mismatch logic overrides
        if (product.id === 4 && (skinType === "sensitive" || skinType === "dry")) {
            return { score: 55, labelKey: "catalog.match.caution", label: "Caution Match", cssClass: "caution-match" };
        }
        if (product.id === 8 && skinType === "sensitive") {
            return { score: 40, labelKey: "catalog.match.unsuitable", label: "Not Suitable", cssClass: "caution-match" };
        }
        if (product.id === 2 && skinType === "dry") {
            return { score: 72, labelKey: "catalog.match.medium", label: "Medium Match", cssClass: "medium-match" };
        }
        if (product.id === 3 && skinType === "oily") {
            return { score: 68, labelKey: "catalog.match.medium", label: "Medium Match", cssClass: "medium-match" };
        }

        if (isDirectlySuitable) {
            if (product.id === 1 || product.id === 3 || product.id === 7 || product.id === 10) {
                return { score: 98, labelKey: "catalog.match.high", label: "High Match", cssClass: "high-match" };
            }
            return { score: 92, labelKey: "catalog.match.high", label: "High Match", cssClass: "high-match" };
        }
        return { score: 80, labelKey: "catalog.match.medium", label: "Medium Match", cssClass: "medium-match" };
    }

    function renderProducts() {
        productGridContainer.innerHTML = "";
        const activeSkinType = currentUser ? currentUser.skinType : clinicUserSkin.value;

        const filteredProducts = products.filter(product => {
            const matchesConcern = (currentConcernFilter === "all" || product.concern === currentConcernFilter);
            const matchesSkin = (currentSkinFilter === "all" || product.skinTypes.includes(currentSkinFilter));
            return matchesConcern && matchesSkin;
        });

        if (filteredProducts.length === 0) {
            productGridContainer.innerHTML = `
                <div class="empty-catalog-message" style="grid-column: 1/-1; text-align: center; padding: 48px 0; color: hsl(var(--color-slate-gray));">
                    <p>${i18n.t("catalog.empty")}</p>
                </div>
            `;
            return;
        }

        filteredProducts.forEach(product => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.style.animation = "slide-up 0.5s ease forwards";
            
            const matchInfo = calculateMatchScore(product, activeSkinType);
            const badgeContent = matchInfo.score 
                ? matchInfo.score + "% " + i18n.t("catalog.match.label")
                : i18n.t(matchInfo.labelKey || "catalog.match.click");
            
            card.innerHTML = `
                <span class="product-badge">${product.badge || i18n.t("catalog.product.badge_default")}</span>
                <span class="product-match-badge ${matchInfo.cssClass}">${badgeContent}</span>
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-img">
                </div>
                <div class="product-content">
                    <div class="product-rating-wrap">
                        ${"★".repeat(Math.floor(product.rating))}${"☆".repeat(5 - Math.floor(product.rating))}
                        <span class="product-rating-count">(${product.reviews.toLocaleString()} ${i18n.t("catalog.product.reviews")})</span>
                    </div>
                    <span class="product-suitability">${product.skinTypes.join(" • ")} ${i18n.t("catalog.product.skin")}</span>
                    <h3 class="product-title" style="font-size: 1.45rem;">${product.name}</h3>
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <p class="product-desc" style="margin-bottom: 12px;">${product.description}</p>
                    <div class="product-ingredients" style="margin-bottom: 16px;">
                        <span class="ingredient-label">${i18n.t("catalog.product.actives")}</span>
                        <span class="ingredient-text">${product.activeIngredients}</span>
                    </div>
                    <div class="product-actions">
                        <div class="product-actions-row">
                            <button class="btn btn-card-buy buy-now-btn" data-id="${product.id}">${i18n.t("catalog.product.buy")}</button>
                            <button class="btn btn-card-cart add-to-cart-btn" data-id="${product.id}">${i18n.t("catalog.product.cart")}</button>
                        </div>
                        <button class="btn btn-card-consult consult-product-btn" data-id="${product.id}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                            ${i18n.t("catalog.product.consult")}
                        </button>
                    </div>
                </div>
            `;
            productGridContainer.appendChild(card);
        });

        // Event listener binds
        document.querySelectorAll(".add-to-cart-btn").forEach(btn => {
            btn.addEventListener("click", (e) => addToCart(parseInt(e.currentTarget.getAttribute("data-id"))));
        });

        document.querySelectorAll(".buy-now-btn").forEach(btn => {
            btn.addEventListener("click", (e) => triggerBuyNow(parseInt(e.currentTarget.getAttribute("data-id"))));
        });

        document.querySelectorAll(".consult-product-btn").forEach(btn => {
            btn.addEventListener("click", (e) => setConsultationContext(parseInt(e.currentTarget.getAttribute("data-id"))));
        });
    }

    /* ==========================================================================
       D. SHOPPING CART & INSTANT BUY NOW BYPASS FLOW
       ========================================================================== */
    function addToCart(id) {
        const product = products.find(p => p.id === id);
        if (!product) return;

        const existingItem = cart.find(item => item.product.id === id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ product, quantity: 1 });
        }

        updateCartUI();
        showToast(i18n.t("toast.added_to_cart", { product: product.name }));
    }

    // Direct Buy Now Bypass
    function triggerBuyNow(id) {
        const product = products.find(p => p.id === id);
        if (!product) return;

        // Save current cart configuration
        tempSavedCart = [...cart];
        isBuyNowBypass = true;

        // Replace cart with only selected item
        cart = [{ product, quantity: 1 }];
        updateCartUI();

        // Slide Drawer Open directly to Shipping Form (Step 2)
        closeAllPanels();
        cartDrawer.setAttribute("aria-hidden", "false");
        
        checkoutStep1.classList.remove("active");
        checkoutStep2.classList.add("active");

        if (currentUser) {
            document.getElementById("ship-name").value = currentUser.name;
            document.getElementById("ship-email").value = currentUser.email;
        }
        showToast(i18n.t("toast.buy_now", { product: product.name }));
    }

    function removeFromCart(id) {
        cart = cart.filter(item => item.product.id !== id);
        updateCartUI();
        showToast(i18n.t("toast.removed_from_cart"));
    }

    function updateQuantity(id, newQty) {
        if (newQty <= 0) {
            removeFromCart(id);
            return;
        }
        const item = cart.find(item => item.product.id === id);
        if (item) {
            item.quantity = newQty;
            updateCartUI();
        }
    }

    function updateCartUI() {
        cartItemsList.innerHTML = "";
        let totalItems = 0;
        let subtotalVal = 0.0;

        if (cart.length === 0) {
            cartItemsList.innerHTML = `
                <div class="empty-cart-message">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                    <p>${i18n.t("cart.empty")}</p>
                </div>
            `;
            btnProceedShipping.disabled = true;
        } else {
            btnProceedShipping.disabled = false;
            
            cart.forEach(item => {
                totalItems += item.quantity;
                subtotalVal += item.product.price * item.quantity;

                const cartItemEl = document.createElement("div");
                cartItemEl.className = "cart-item";
                cartItemEl.innerHTML = `
                    <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-img">
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.product.name}</div>
                        <div class="cart-item-desc">${item.product.activeIngredients.split(",")[0]}</div>
                        <div class="cart-item-price">$${(item.product.price * item.quantity).toFixed(2)}</div>
                        <div class="cart-item-controls">
                            <div class="quantity-picker">
                                <button class="qty-btn qty-minus" data-id="${item.product.id}">-</button>
                                <span class="qty-val">${item.quantity}</span>
                                <button class="qty-btn qty-plus" data-id="${item.product.id}">+</button>
                            </div>
                            <button class="remove-item-btn" data-id="${item.product.id}">${i18n.t("cart.remove")}</button>
                        </div>
                    </div>
                `;
                cartItemsList.appendChild(cartItemEl);
            });

            // Re-bind controls
            document.querySelectorAll(".qty-minus").forEach(btn => {
                btn.addEventListener("click", (e) => {
                    const id = parseInt(e.currentTarget.getAttribute("data-id"));
                    const item = cart.find(i => i.product.id === id);
                    if (item) updateQuantity(id, item.quantity - 1);
                });
            });

            document.querySelectorAll(".qty-plus").forEach(btn => {
                btn.addEventListener("click", (e) => {
                    const id = parseInt(e.currentTarget.getAttribute("data-id"));
                    const item = cart.find(i => i.product.id === id);
                    if (item) updateQuantity(id, item.quantity + 1);
                });
            });

            document.querySelectorAll(".remove-item-btn").forEach(btn => {
                btn.addEventListener("click", (e) => {
                    const id = parseInt(e.currentTarget.getAttribute("data-id"));
                    removeFromCart(id);
                });
            });
        }

        cartBadgeCount.innerText = totalItems;
        cartSubtotalElements.forEach(el => el.innerText = `$${subtotalVal.toFixed(2)}`);
        cartTotalElements.forEach(el => el.innerText = `$${subtotalVal.toFixed(2)}`);
        btnSubmitOrder.innerText = i18n.t("cart.btn.place_order", { total: "$" + subtotalVal.toFixed(2) });
    }

    btnProceedShipping.addEventListener("click", () => {
        if (cart.length > 0) {
            checkoutStep1.classList.remove("active");
            checkoutStep2.classList.add("active");
            if (currentUser) {
                document.getElementById("ship-name").value = currentUser.name;
                document.getElementById("ship-email").value = currentUser.email;
            }
        }
    });

    btnBackCart.addEventListener("click", () => {
        checkoutStep2.classList.remove("active");
        checkoutStep1.classList.add("active");
        if (isBuyNowBypass) {
            // Restore previous shopping configuration if they back out of a direct buy
            cart = [...tempSavedCart];
            isBuyNowBypass = false;
            updateCartUI();
        }
    });

    btnProceedPayment.addEventListener("click", () => {
        if (shippingForm.checkValidity()) {
            checkoutStep2.classList.remove("active");
            checkoutStep3.classList.add("active");
            if (currentUser) {
                document.getElementById("card-holder").value = currentUser.name;
            }
        } else {
            shippingForm.reportValidity();
        }
    });

    btnBackShipping.addEventListener("click", () => {
        checkoutStep3.classList.remove("active");
        checkoutStep2.classList.add("active");
    });

    // Credit Card auto formatting validators
    cardNoInput.addEventListener("input", (e) => {
        let val = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        let formatted = "";
        for (let i = 0; i < val.length; i++) {
            if (i > 0 && i % 4 === 0) formatted += " ";
            formatted += val[i];
        }
        e.target.value = formatted;
    });

    cardExpiryInput.addEventListener("input", (e) => {
        let val = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        if (val.length > 2) {
            e.target.value = val.substring(0, 2) + "/" + val.substring(2, 4);
        } else {
            e.target.value = val;
        }
    });

    cardCvvInput.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/gi, '');
    });

    btnSubmitOrder.addEventListener("click", (e) => {
        e.preventDefault();
        if (paymentForm.checkValidity()) {
            const cardNo = cardNoInput.value.replace(/\s+/g, '');
            if (cardNo.length < 16) {
                showToast(i18n.t("toast.card_invalid"));
                cardNoInput.focus();
                return;
            }
            
            btnSubmitOrder.disabled = true;
            btnSubmitOrder.innerText = i18n.t("cart.btn.place_order_processing");
            
            setTimeout(() => {
                checkoutStep3.classList.remove("active");
                checkoutStep1.classList.add("active");
                toggleCart(false);
                checkoutSuccessModal.setAttribute("aria-hidden", "false");
                
                if (currentUser) {
                    currentUser.points += 50; 
                    localStorage.setItem("beautify_user", JSON.stringify(currentUser));
                }
                
                cart = [];
                isBuyNowBypass = false;
                updateCartUI();
                shippingForm.reset();
                paymentForm.reset();
                btnSubmitOrder.disabled = false;
            }, 1800);
        } else {
            paymentForm.reportValidity();
        }
    });

    function closeAllPanels() {
        toggleAiClinic(false);
        toggleCart(false);
        toggleProfileModal(false);
    }

    function toggleCart(open = true) {
        if (open) {
            closeAllPanels();
            cartDrawer.setAttribute("aria-hidden", "false");
        } else {
            cartDrawer.setAttribute("aria-hidden", "true");
            checkoutStep2.classList.remove("active");
            checkoutStep3.classList.remove("active");
            checkoutStep1.classList.add("active");
            if (isBuyNowBypass) {
                cart = [...tempSavedCart];
                isBuyNowBypass = false;
                updateCartUI();
            }
        }
    }

    cartToggleBtn.addEventListener("click", () => toggleCart(cartDrawer.getAttribute("aria-hidden") === "true"));
    closeCartBtns.forEach(btn => btn.addEventListener("click", () => toggleCart(false)));
    cartPanelOverlay.addEventListener("click", () => toggleCart(false));

    closeModalBtn.addEventListener("click", () => checkoutSuccessModal.setAttribute("aria-hidden", "true"));
    modalOverlay.addEventListener("click", () => checkoutSuccessModal.setAttribute("aria-hidden", "true"));

    /* ==========================================================================
       E. OPENAI INTEGRATION & API SETUP CONFIG
       ========================================================================== */
    function initOpenaiConfig() {
        const key = localStorage.getItem("openai_api_key");
        if (key) {
            openaiApiKeyInput.value = key;
            apiStatusBadge.innerHTML = i18n.t("ai.settings.mode_connected");
            apiStatusBadge.className = "api-status-badge connected";
            btnClearOpenaiKey.style.display = "block";
        } else {
            openaiApiKeyInput.value = "";
            apiStatusBadge.innerHTML = i18n.t("ai.settings.mode_simulation");
            apiStatusBadge.className = "api-status-badge simulation";
            btnClearOpenaiKey.style.display = "none";
        }
    }

    openaiSettingsBtn.addEventListener("click", () => {
        const disp = openaiConfigPanel.style.display;
        openaiConfigPanel.style.display = disp === "none" ? "flex" : "none";
    });

    btnSaveOpenaiKey.addEventListener("click", () => {
        const key = openaiApiKeyInput.value.trim();
        if (key.startsWith("sk-")) {
            localStorage.setItem("openai_api_key", key);
            showToast(i18n.t("ai.settings.key_saved"));
            openaiConfigPanel.style.display = "none";
            initOpenaiConfig();
            
            // Send connection notice
            appendMessage("doctor", i18n.t("openai.connected"));
        } else {
            showToast(i18n.t("ai.settings.invalid"));
        }
    });

    btnClearOpenaiKey.addEventListener("click", () => {
        localStorage.removeItem("openai_api_key");
        showToast(i18n.t("ai.settings.key_cleared"));
        openaiConfigPanel.style.display = "none";
        initOpenaiConfig();
    });

    initOpenaiConfig();

    /* ==========================================================================
       F. AI CLINIC & Guided Skin Quiz
       ========================================================================== */
    function toggleAiClinic(open = true) {
        if (open) {
            closeAllPanels();
            aiClinicDrawer.setAttribute("aria-hidden", "false");
            aiActiveIndicator.classList.add("active");
            if (aiFab) aiFab.classList.add("fab-hidden");
            if (chatMessagesContainer.children.length === 0) {
                sendInitialGreetings();
            }
        } else {
            aiClinicDrawer.setAttribute("aria-hidden", "true");
            aiActiveIndicator.classList.remove("active");
            if (aiFab) aiFab.classList.remove("fab-hidden");
        }
    }

    navConsultBtn.addEventListener("click", (e) => { e.preventDefault(); toggleAiClinic(true); });
    if (aiFab) { aiFab.addEventListener("click", () => toggleAiClinic(true)); }
    btnHeroConsult.addEventListener("click", () => startGuidedQuiz());
    heroQuizTrigger.addEventListener("click", () => startGuidedQuiz());
    closeAiBtn.addEventListener("click", () => toggleAiClinic(false));
    aiPanelOverlay.addEventListener("click", () => toggleAiClinic(false));

    function setConsultationContext(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        activeProductContext = product;
        contextProdImg.src = product.image;
        contextProdImg.alt = product.name;
        contextProdTitle.innerText = product.name;
        contextProdDesc.innerText = product.description.substring(0, 75) + "...";
        clinicActiveContext.style.display = "block";
        
        toggleAiClinic(true);
        clearMessages();
        
        const activeSkinType = currentUser ? currentUser.skinType : clinicUserSkin.value;
        
        let greetingText;
        if (activeSkinType !== "unspecified") {
            greetingText = i18n.t("greeting.product_context", {
                product: product.name,
                skinType: getFormattedSkinType(activeSkinType)
            });
        } else {
            greetingText = i18n.t("greeting.product_context", {
                product: product.name,
                skinType: "your"
            });
        }
        appendMessage("doctor", greetingText);
        populateSuggestions(product);
    }

    clearContextBtn.addEventListener("click", () => {
        activeProductContext = null;
        clinicActiveContext.style.display = "none";
        sendInitialGreetings();
    });

    clinicUserSkin.addEventListener("change", () => {
        const skinType = clinicUserSkin.value;
        if (skinType !== "unspecified") {
            if (currentUser) {
                currentUser.skinType = skinType;
                localStorage.setItem("beautify_user", JSON.stringify(currentUser));
            }
            showToast(i18n.t("toast.profile_updated", { skinType: getFormattedSkinType(skinType) }));
            renderProducts();
            if (activeProductContext) {
                setConsultationContext(activeProductContext.id);
            } else {
                appendMessage("user", i18n.t("auth.skin_change", { skinType: getFormattedSkinType(skinType) }));
                simulateDrAvaTyping(() => {
                    const advice = getGeneralSkinAdvice(skinType);
                    appendMessage("doctor", advice);
                    populateSuggestions(null);
                });
            }
        }
    });

    profileQuizRetrigger.addEventListener("click", () => {
        toggleProfileModal(false);
        startGuidedQuiz();
    });

    function clearMessages() {
        chatMessagesContainer.innerHTML = "";
        chatHistory = [];
    }

    function sendInitialGreetings() {
        clearMessages();
        let greeting;
        if (currentUser) {
            if (currentUser.skinType && currentUser.skinType !== "unspecified") {
                // Returning user — acknowledge and offer new value
                greeting = i18n.t("greeting.returning", {
                    skinType: getFormattedSkinType(currentUser.skinType)
                });
            } else {
                // Registered but no skin type — ask gently
                greeting = i18n.t("greeting.new.no_skin");
            }
        } else {
            // New visitor, no account — warm welcome
            greeting = i18n.t("greeting.new.no_skin");
        }
        appendMessage("doctor", greeting);
        populateSuggestions(null);
    }

    function appendMessage(sender, text, clinicalNote = null) {
        const bubble = document.createElement("div");
        bubble.className = `message-bubble ${sender}`;
        bubble.innerHTML = text;

        if (clinicalNote) {
            const noteEl = document.createElement("div");
            noteEl.className = "clinical-recommendation";
            noteEl.innerHTML = `
                <span class="recommendation-title">Dr. Ava's Prescription Tip</span>
                <p>${clinicalNote}</p>
            `;
            bubble.appendChild(noteEl);
        }

        chatMessagesContainer.appendChild(bubble);
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
        
        // Save to completions log
        chatHistory.push({
            role: sender === "doctor" ? "assistant" : "user",
            content: text.replace(/<[^>]*>/g, '') // strip tags for clean logs
        });
    }

    function showTypingIndicator() {
        const indicator = document.createElement("div");
        indicator.className = "message-bubble doctor typing-indicator-bubble";
        indicator.innerHTML = `
            <div class="typing-indicator">
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
            </div>
        `;
        indicator.id = "chat-typing-indicator";
        chatMessagesContainer.appendChild(indicator);
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    }

    function hideTypingIndicator() {
        const indicator = document.getElementById("chat-typing-indicator");
        if (indicator) indicator.remove();
    }

    function simulateDrAvaTyping(callback) {
        showTypingIndicator();
        const delay = Math.max(700, Math.min(1500, Math.random() * 1200));
        setTimeout(() => {
            hideTypingIndicator();
            callback();
        }, delay);
    }

    function populateSuggestions(product) {
        chatQuickSuggestions.innerHTML = "";
        const activeSkinType = currentUser ? currentUser.skinType : clinicUserSkin.value;
        
        if (activeSkinType === "unspecified" && !quizState.inProgress) {
            const quizPill = document.createElement("button");
            quizPill.className = "suggestion-pill";
            quizPill.style.borderColor = "hsl(var(--color-rose-gold))";
            quizPill.style.color = "hsl(var(--color-rose-gold))";
            quizPill.style.fontWeight = "bold";
            quizPill.innerText = i18n.t("quiz.suggestion.quiz");
            quizPill.addEventListener("click", () => startGuidedQuiz());
            chatQuickSuggestions.appendChild(quizPill);
        }

        let questions = [];
        if (product) {
            const skinLabel = activeSkinType === "unspecified" || activeSkinType === "all" ? i18n.t("suggestion.my_skin") : getFormattedSkinType(activeSkinType);
            questions = [
                i18n.t("suggestion.safe", { skinType: skinLabel }),
                i18n.t("suggestion.apply"),
                i18n.t("suggestion.ingredients"),
                product.id === 4 || product.id === 8 ? i18n.t("suggestion.peeling") : i18n.t("suggestion.layer")
            ];
        } else {
            const skinTypeKey = activeSkinType !== "unspecified" && activeSkinType !== "all" ? activeSkinType : "dry";
            questions = [
                i18n.t("suggestion.routine_" + skinTypeKey),
                i18n.t("suggestion.blemishes"),
                i18n.t("suggestion.red_irritated"),
                i18n.t("suggestion.tech")
            ];
        }

        questions.forEach(q => {
            const pill = document.createElement("button");
            pill.className = "suggestion-pill";
            pill.innerText = q;
            pill.addEventListener("click", () => handleUserQuery(q));
            chatQuickSuggestions.appendChild(pill);
        });
    }

    // Guided Quiz Step Managers
    function startGuidedQuiz() {
        toggleAiClinic(true);
        clearMessages();
        quizState.inProgress = true;
        quizState.currentStep = 1;
        
        appendMessage("doctor", i18n.t("quiz.q1"));
        injectQuizOptionButtons([
            { text: i18n.t("quiz.q1.opt1"), val: "dry" },
            { text: i18n.t("quiz.q1.opt2"), val: "oily" },
            { text: i18n.t("quiz.q1.opt3"), val: "combination" },
            { text: i18n.t("quiz.q1.opt4"), val: "sensitive" }
        ]);
    }

    function handleQuizAnswer(val, displayText) {
        appendMessage("user", displayText);
        
        if (quizState.currentStep === 1) {
            quizState.answers.feel = val;
            quizState.currentStep = 2;
            
            simulateDrAvaTyping(() => {
                appendMessage("doctor", i18n.t("quiz.q2"));
                injectQuizOptionButtons([
                    { text: i18n.t("quiz.q2.opt1"), val: "dry_sens" },
                    { text: i18n.t("quiz.q2.opt2"), val: "acne" },
                    { text: i18n.t("quiz.q2.opt3"), val: "combination" },
                    { text: i18n.t("quiz.q2.opt4"), val: "sensitive" }
                ]);
            });
        } 
        else if (quizState.currentStep === 2) {
            quizState.answers.breakouts = val;
            quizState.currentStep = 3;
            
            simulateDrAvaTyping(() => {
                appendMessage("doctor", i18n.t("quiz.q3"));
                injectQuizOptionButtons([
                    { text: i18n.t("quiz.q3.opt1"), val: "hydration" },
                    { text: i18n.t("quiz.q3.opt2"), val: "blemish" },
                    { text: i18n.t("quiz.q3.opt3"), val: "anti_aging" },
                    { text: i18n.t("quiz.q3.opt4"), val: "barrier" }
                ]);
            });
        } 
        else if (quizState.currentStep === 3) {
            quizState.answers.objective = val;
            quizState.inProgress = false;
            quizState.currentStep = 0;
            
            simulateDrAvaTyping(() => {
                const resultSkin = determineSkinResult(quizState.answers);
                
                if (currentUser) {
                    currentUser.skinType = resultSkin;
                    const recProduct = getRecommendedProductBySkin(resultSkin);
                    const prescriptionNote = {
                        productName: recProduct.name,
                        note: `Analyzed as ${getFormattedSkinType(resultSkin)}. Recommended: apply ${recProduct.name} daily to support lipids.`
                    };
                    if (!currentUser.prescriptions) currentUser.prescriptions = [];
                    const exists = currentUser.prescriptions.some(p => p.productName === recProduct.name);
                    if (!exists) currentUser.prescriptions.push(prescriptionNote);
                    localStorage.setItem("beautify_user", JSON.stringify(currentUser));
                }
                
                clinicUserSkin.value = resultSkin;
                showToast(i18n.t("toast.quiz_complete", { skinType: getFormattedSkinType(resultSkin) }));
                renderProducts();
                
                const recProduct = getRecommendedProductBySkin(resultSkin);
                const skinTypeLabel = getFormattedSkinType(resultSkin);
                
                const matchesText = i18n.t("quiz.report.body", { skinType: skinTypeLabel });
                const recNote = i18n.t("quiz.report.rec", { product: recProduct.name, price: "$" + recProduct.price.toFixed(2) });
                
                appendMessage("doctor", matchesText, recNote);
                populateSuggestions(null);
            });
        }
    }

    function determineSkinResult(answers) {
        if (answers.feel === "sensitive" || answers.breakouts === "sensitive" || answers.objective === "barrier") return "sensitive";
        if (answers.feel === "oily" || answers.breakouts === "acne") return answers.breakouts === "acne" ? "acne" : "oily";
        if (answers.feel === "dry") return "dry";
        if (answers.feel === "combination") return "combination";
        return "dry";
    }

    function getRecommendedProductBySkin(skin) {
        if (skin === "sensitive") return products[2]; // CeraVe Cream
        if (skin === "acne" || skin === "oily") return products[3]; // Paula's Choice
        if (skin === "dry") return products[0]; // COSRX snail
        return products[6]; // Kiehl's
    }

    function injectQuizOptionButtons(options) {
        chatQuickSuggestions.innerHTML = "";
        const wrap = document.createElement("div");
        wrap.className = "chat-quiz-options-container";
        
        options.forEach(opt => {
            const btn = document.createElement("button");
            btn.className = "chat-quiz-option-btn";
            btn.innerText = opt.text;
            btn.addEventListener("click", () => handleQuizAnswer(opt.val, opt.text));
            wrap.appendChild(btn);
        });
        
        chatMessagesContainer.appendChild(wrap);
        chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
    }

    // Process user queries (either OpenAI or Local Simulation rules)
    function handleUserQuery(query) {
        appendMessage("user", query);
        
        const apiKey = localStorage.getItem("openai_api_key");
        if (apiKey) {
            // CALL LIVE OPENAI ENDPOINT
            showTypingIndicator();
            callOpenAiCompletions(query, apiKey);
        } else {
            // LOCAL SIMULATION FALLBACK
            simulateDrAvaTyping(() => {
                const activeSkinType = currentUser ? currentUser.skinType : clinicUserSkin.value;
                const reply = processQueryAI(query, activeProductContext, activeSkinType);
                appendMessage("doctor", reply.text, reply.clinicalNote);
                populateSuggestions(activeProductContext);
            });
        }
    }

    chatForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (!text) return;
        
        chatInput.value = "";
        
        if (quizState.inProgress) {
            appendMessage("doctor", i18n.t("quiz.block"));
            return;
        }

        handleUserQuery(text);
    });

    /* ==========================================================================
       G. OPENAI API ENDPOINT COMMUNICATIONS PIPELINE
       ========================================================================== */
    async function callOpenAiCompletions(userQuery, apiKey) {
        const activeSkinType = currentUser ? currentUser.skinType : clinicUserSkin.value;
        
        // Build product catalog instructions for System Prompt
        const catalogDetails = products.map(p => 
            `- ID: ${p.id}, Product: ${p.name}, Price: $${p.price.toFixed(2)}, Actives: ${p.activeIngredients}, Concern: ${p.concern}, Suitabilities: ${p.skinTypes.join(",")}, Note: ${p.clinicalNote}`
        ).join("\n");

        const lang = typeof i18n !== "undefined" ? i18n.getLang() : "en";
        const systemPrompt = `You are Dr. Ava, a highly professional, warm, and expert clinical dermatologist virtual assistant at Beautify, an online skincare store.
        
        Your objective is to provide scientific analysis regarding skincare concerns, matching active molecules with user skin profiles.
        
        OUR PRODUCTS INVENTORY:
        ${catalogDetails}
        
        USER SKIN PROFILE:
        - Diagnosed skin type: ${getFormattedSkinType(activeSkinType)}
        - Currently focused product context: ${activeProductContext ? activeProductContext.name : "None"}
        
        LANGUAGE: You MUST respond in the same language as the user's message. The user's current UI language is: "${lang}". If they write in Spanish, answer in Spanish. If they write in Hindi, answer in Hindi. If they write in Bangla, answer in Bangla. If they write in English, answer in English.
        
        DIAGNOSTIC RULES:
        1. Always maintain a warm, expert clinical tone.
        2. Evaluate chemical layers carefully (e.g. explain that high AHA peeling solutions or 2% BHA Salicylic Acid must not be layered in the same routine step with Retinol to protect the epidermal barrier).
        3. Restrict recommendations strictly to products within our inventory. Recommend product names exactly as listed above.
        4. If the user mentions concerns like dry, oily, red/sensitive, or anti-aging, map their concerns to our matching products.
        5. Keep responses structured, professional, and relatively concise (under 4-5 sentences where possible). Use clean html tags (like <strong> or <br>) for formatting. Do not use markdown (such as asterisks) since the output is rendered directly as HTML.`;

        // Format history payload
        const messagesPayload = [
            { role: "system", content: systemPrompt },
            ...chatHistory.slice(-6).map(h => ({
                role: h.role,
                content: h.content
            }))
        ];

        try {
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: "gpt-4o-mini",
                    messages: messagesPayload,
                    temperature: 0.7,
                    max_tokens: 280
                })
            });

            hideTypingIndicator();

            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.error?.message || "Connection refused.");
            }

            const data = await response.json();
            const replyText = data.choices[0].message.content;
            
            // Inject reply with product note snippet if focusing on a product
            let clinicalNote = null;
            if (activeProductContext) {
                clinicalNote = activeProductContext.clinicalNote;
            }
            appendMessage("doctor", replyText, clinicalNote);
            populateSuggestions(activeProductContext);

        } catch (error) {
            hideTypingIndicator();
            showToast(i18n.t("openai.disconnected"));
            console.error("OpenAI Error:", error);
            
            // API key failure fallback
            appendMessage("doctor", i18n.t("openai.error", { error: error.message }));
            populateSuggestions(activeProductContext);
        }
    }

    /* ==========================================================================
       H. LOCAL REASONING ENGINE (Fallback rules)
       ========================================================================== */
    const avaResponses = {
        general: [
            "Hello! I am Dr. Ava. Let's create your optimized skincare regimen. Please select your skin type above or share your concerns so I can configure your steps.",
            "Welcome! I can provide safety reviews for active ingredients like ceramides, peptides, and peeling acids. What specific issues can I resolve for you?"
        ],
        fallback: "That is an interesting clinical question. beautify formulations are strictly tested and non-comedogenic. Can I assist in designing a custom routine step for this product?"
    };

    function getGeneralSkinAdvice(skinType) {
        var key = "response.skin_advice." + skinType;
        var translated = i18n.t(key);
        if (translated !== key) return translated;
        switch(skinType) {
            case "dry":
                return `For <strong>dry skin</strong>, the main objective is rebuilding cell hydration. I recommend applying the <strong>COSRX Snail 96 Mucin Essence</strong> followed by a thick lipid seal like <strong>CeraVe Moisturizing Cream</strong>. Avoid active alcohols.`;
            case "oily":
                return `For <strong>oily skin</strong>, we need to balance sebum output. The <strong>Ordinary Niacinamide 10% + Zinc 1%</strong> is highly recommended, paired with <strong>Paula's Choice 2% BHA Liquid</strong> to dissolve oil blockages in deep pore lining.`;
            case "sensitive":
                return `<strong>Sensitive skin</strong> has an easily compromised cellular barrier. You should isolate active chemical exfoliants and prioritize lipids. Our <strong>CeraVe Moisturizing Cream</strong> with biosimilar ceramides is the gold standard for restoration.`;
            case "acne":
                return `For <strong>acne-prone skin</strong>, maintaining clear cellular pathways inside pores is critical. Using <strong>Paula's Choice 2% BHA</strong> Salicylic Acid helps break down blackheads, while <strong>COSRX Snail Mucin</strong> accelerates tissue healing post-acne breakouts.`;
            case "combination":
                return `For <strong>combination skin</strong>, zone-application is key. Apply oil control (The Ordinary Niacinamide) to shiny forehead and nose areas, but apply peptide renewal (Drunk Elephant Protini) to dry cheek layers.`;
            default:
                return avaResponses.general[1];
        }
    }

    function processQueryAI(query, product, skinType) {
        const q = query.toLowerCase();
        const fmtSkin = getFormattedSkinType(skinType);
        
        if (product) {
            if (q.includes("safe") || q.includes("suitable") || q.includes("compatible")) {
                if (skinType === "unspecified") {
                    return {
                        text: i18n.t("response.safety.unspecified", { product: product.name, safety: product.safetyProfile }),
                        clinicalNote: product.clinicalNote
                    };
                }
                const isCompatible = product.skinTypes.includes(skinType);
                return {
                    text: isCompatible 
                        ? i18n.t("response.safety.compatible", { product: product.name, skinType: fmtSkin })
                        : i18n.t("response.safety.caution", { product: product.name, skinType: fmtSkin }),
                    clinicalNote: product.clinicalNote
                };
            }
            
            if (q.includes("apply") || q.includes("how to use") || q.includes("directions") || q.includes("use this")) {
                return {
                    text: i18n.t("response.usage", { product: product.name, instructions: product.useInstructions }),
                    clinicalNote: "Skincare requires 28 days (one full cell-turnover cycle) to display macro results."
                };
            }
            
            if (q.includes("ingredients") || q.includes("actives") || q.includes("contain") || q.includes("what is") || q.includes("molecule")) {
                return {
                    text: i18n.t("response.ingredients", { product: product.name, ingredients: product.activeIngredients }),
                    clinicalNote: "Beautify products are strictly clean, cruelty-free, and paraben-free."
                };
            }

            if (q.includes("retinol") || q.includes("combine") || q.includes("layer") || q.includes("together") || q.includes("mix")) {
                if (product.id === 4 || product.id === 8) {
                    return {
                        text: i18n.t("response.retinol.caution", { product: product.name }),
                        clinicalNote: "Always keep strong acids and retinol separated to prevent chemical skin irritation."
                    };
                }
                return {
                    text: i18n.t("response.retinol.safe", { product: product.name }),
                    clinicalNote: "Apply your hydrating layer first, let absorb, then apply Retinol."
                };
            }
        }

        if (q.includes("hydrate") || q.includes("dry") || q.includes("moisturize") || q.includes("hydration")) {
            return {
                text: i18n.t("response.hydration"),
                clinicalNote: "Always apply hydrating serums to slightly damp skin to maximize absorption."
            };
        }

        if (q.includes("acne") || q.includes("blemish") || q.includes("pimple") || q.includes("oily")) {
            return {
                text: i18n.t("response.acne"),
                clinicalNote: "Zinc helps reduce blemish swelling, while BHA clears blockages."
            };
        }

        if (q.includes("barrier") || q.includes("irritat") || q.includes("red") || q.includes("sensitive") || q.includes("eczema")) {
            return {
                text: i18n.t("response.barrier"),
                clinicalNote: "Isolate high-strength retinols or ascorbic acids until stinging stops."
            };
        }

        if (q.includes("aging") || q.includes("wrinkle") || q.includes("line") || q.includes("renew")) {
            return {
                text: i18n.t("response.aging"),
                clinicalNote: "Combine with sunscreen SPF 60 daily to prevent sun-induced collagen loss."
            };
        }

        if (q.includes("sunscreen") || q.includes("spf") || q.includes("sun") || q.includes("uv")) {
            return {
                text: i18n.t("response.spf"),
                clinicalNote: "Sunscreen is the final mandatory step of every morning skincare routine."
            };
        }

        return {
            text: i18n.t("response.fallback"),
            clinicalNote: "Select the quiz above to calculate compatibility ratings."
        };
    }

    /* ==========================================================================
       I. TOAST & INITIALIZATION RUNNERS
       ========================================================================== */
    function showToast(message) {
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <span>${message}</span>
        `;
        toastContainer.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    // Header scroll background aesthetic change
    window.addEventListener("scroll", () => {
        const header = document.getElementById("main-header");
        if (window.scrollY > 50) {
            header.style.backgroundColor = document.body.classList.contains("dark-mode") 
                ? "rgba(16, 18, 20, 0.95)" 
                : "rgba(250, 248, 245, 0.95)";
            header.style.boxShadow = "var(--shadow-subtle)";
        } else {
            header.style.backgroundColor = document.body.classList.contains("dark-mode") 
                ? "rgba(16, 18, 20, 0.85)" 
                : "rgba(250, 248, 245, 0.85)";
            header.style.boxShadow = "";
        }
    });

    // Mobile Menu Toggle
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener("click", () => {
            mobileMenuBtn.classList.toggle("active");
            if (navMenu.style.display === "flex") {
                navMenu.style.display = "";
            } else {
                navMenu.style.display = "flex";
                navMenu.style.flexDirection = "column";
                navMenu.style.position = "absolute";
                navMenu.style.top = "var(--header-height)";
                navMenu.style.left = "0";
                navMenu.style.width = "100%";
                navMenu.style.backgroundColor = document.body.classList.contains("dark-mode") ? "hsl(220, 15%, 8%)" : "hsl(var(--color-sand-light))";
                navMenu.style.padding = "24px";
                navMenu.style.borderBottom = "1px solid hsl(var(--color-sand-medium))";
                navMenu.style.gap = "16px";
            }
        });
    }

    // Language change re-render listener
    if (typeof i18n !== "undefined") {
        document.addEventListener("languagechange", function () {
            // Re-render dynamic UI (static DOM is handled by i18n.setLang -> _translateDOM)
            if (currentUser) updateProfileUI();
            updateCartUI();
            renderProducts();
            initOpenaiConfig();
            if (profileLoggedOutView.classList.contains("active")) {
                toggleAuthMode(isRegisterMode);
            }
            if (activeProductContext) {
                contextProdTitle.innerText = activeProductContext.name;
            }
            if (aiClinicDrawer.getAttribute("aria-hidden") === "false") {
                populateSuggestions(activeProductContext);
            }
        });
    }

    // Initialize state
    initUserSession();
    updateCartUI();
});

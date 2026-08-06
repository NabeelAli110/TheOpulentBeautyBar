/*==================================
        LUXURY NAVBAR
===================================*/

// Header
const header = document.querySelector(".header");

// Mobile Menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// Progress Bar
const progress =
    document.querySelector(".progress") ||
    document.getElementById("progressBar");

/*==================================
      HEADER SCROLL EFFECT
===================================*/

window.addEventListener("scroll", () => {

    if (header) {

        if (window.scrollY > 60) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

});

/*==================================
      MOBILE MENU
===================================*/

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuToggle.classList.toggle("active");

    });

}

/*==================================
      CLOSE MENU AFTER CLICK
===================================*/

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) navLinks.classList.remove("active");

        if (menuToggle) menuToggle.classList.remove("active");

    });

});

/*==================================
      HAMBURGER ANIMATION
===================================*/

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        const bars = menuToggle.querySelectorAll("span");

        if (bars.length < 3) return;

        if (menuToggle.classList.contains("active")) {

            bars[0].style.transform =
                "rotate(45deg) translateY(12px)";

            bars[1].style.opacity = "0";

            bars[2].style.transform =
                "rotate(-45deg) translateY(-12px)";

        } else {

            bars[0].style.transform = "";

            bars[1].style.opacity = "1";

            bars[2].style.transform = "";

        }

    });

}

/*==================================
      SCROLL PROGRESS BAR
===================================*/

window.addEventListener("scroll", () => {

    if (!progress) return;

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progressWidth =
        (scrollTop / scrollHeight) * 100;

    progress.style.width = progressWidth + "%";

});

/*==================================
      ACTIVE MENU LINK
===================================*/

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});

/*==================================
        HERO PARALLAX
===================================*/

const heroImage =
    document.querySelector(".hero-image");

if (heroImage) {

    window.addEventListener("mousemove", e => {

        const x =
            (window.innerWidth / 2 - e.pageX) / 35;

        const y =
            (window.innerHeight / 2 - e.pageY) / 35;

        heroImage.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}

/*==================================
      HERO BUTTON EFFECT
===================================*/

const heroButtons =
    document.querySelectorAll(
        ".primary-btn, .secondary-btn"
    );

heroButtons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform =
            "translateY(-8px) scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform =
            "translateY(0) scale(1)";

    });

});

/*==================================
      WHY CHOOSE US ANIMATION
===================================*/

const whyCards = document.querySelectorAll(".why-card");

if (whyCards.length > 0) {

    const whyObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry, index) => {

            if (entry.isIntersecting) {

                setTimeout(() => {

                    entry.target.classList.add("show");

                }, index * 180);

            }

        });

    }, {

        threshold: 0.20

    });

    whyCards.forEach(card => {

        whyObserver.observe(card);

    });

}

/*==================================
      GALLERY ANIMATION
===================================*/

const galleryItems =
document.querySelectorAll(".gallery-item");

if (galleryItems.length > 0) {

    const galleryObserver =
    new IntersectionObserver((entries) => {

        entries.forEach((entry, index) => {

            if (entry.isIntersecting) {

                setTimeout(() => {

                    entry.target.classList.add("show");

                }, index * 120);

            }

        });

    }, {

        threshold: 0.15

    });

    galleryItems.forEach(item => {

        galleryObserver.observe(item);

    });

}

/*==================================
     TESTIMONIAL ANIMATION
===================================*/

const testimonialCards =
document.querySelectorAll(".testimonial-card");

if (testimonialCards.length > 0) {

    const testimonialObserver =
    new IntersectionObserver((entries) => {

        entries.forEach((entry, index) => {

            if (entry.isIntersecting) {

                setTimeout(() => {

                    entry.target.classList.add("show");

                }, index * 180);

            }

        });

    }, {

        threshold: 0.20

    });

    testimonialCards.forEach(card => {

        testimonialObserver.observe(card);

    });

}

/*==================================
         COUNTER
===================================*/

const counters =
document.querySelectorAll(".counter");

const counterWrapper =
document.querySelector(".counter-wrapper");

if (counterWrapper && counters.length > 0) {

    const startCounter = () => {

        counters.forEach(counter => {

            const updateCounter = () => {

                const target =
                Number(counter.dataset.target);

                const count =
                Number(counter.innerText);

                const increment =
                target / 80;

                if (count < target) {

                    counter.innerText =
                    Math.ceil(count + increment);

                    setTimeout(updateCounter, 25);

                } else {

                    counter.innerText = target;

                }

            };

            updateCounter();

        });

    };

    const counterObserver =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounter();

                counterObserver.disconnect();

            }

        });

    });

    counterObserver.observe(counterWrapper);

}

/*==================================
      SMOOTH SCROLL
===================================*/

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            e.preventDefault();

            window.scrollTo({

                top: target.offsetTop - 80,

                behavior: "smooth"

            });

        }

    });

});

/*==================================
    APPOINTMENT ANIMATION
===================================*/

const appointmentContent =
document.querySelector(".appointment-content");

const appointmentForm =
document.querySelector(".appointment-form");

if (appointmentContent && appointmentForm) {

    const appointmentObserver =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.20

    });

    appointmentObserver.observe(appointmentContent);
    appointmentObserver.observe(appointmentForm);

}

/*==================================
    WHATSAPP BOOKING FORM
===================================*/

const bookingForm =
document.getElementById("appointmentForm");

if (bookingForm) {

bookingForm.addEventListener("submit", function(e){

e.preventDefault();

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

const phone =
document.getElementById("phone").value;

const service =
document.getElementById("service").value;

const date =
document.getElementById("date").value;

const time =
document.getElementById("time").value;

const message =
document.getElementById("message").value;

const whatsappMessage =
`🌸 *New Appointment Request*

👤 Name : ${name}

📧 Email : ${email}

📱 Phone : ${phone}

💄 Service : ${service}

📅 Date : ${date}

🕒 Time : ${time}

📝 Message :
${message}

━━━━━━━━━━━━━━━━━━━━━━

The Opulent Beauty Bar`;

const whatsappURL =
`https://wa.me/923282651011?text=${encodeURIComponent(whatsappMessage)}`;

window.open(whatsappURL,"_blank");

bookingForm.reset();

});

}

/*==================================
      CONTACT FORM
===================================*/

const contactForm =
document.querySelector(".contact-form form");

if (contactForm) {

contactForm.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you! Your message has been sent successfully.");

contactForm.reset();

});

}

/*==================================
      BACK TO TOP BUTTON
===================================*/

const topBtn =
document.getElementById("topBtn");

if (topBtn) {

window.addEventListener("scroll", () => {

if (window.scrollY > 500) {

topBtn.style.opacity = "1";
topBtn.style.visibility = "visible";

} else {

topBtn.style.opacity = "0";
topBtn.style.visibility = "hidden";

}

});

topBtn.addEventListener("click", () => {

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/*==================================
      PAGE LOADER (OPTIONAL)
===================================*/

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.classList.add("hide");

setTimeout(()=>{

loader.remove();

},600);

}

});

/*==================================
      CONSOLE MESSAGE
===================================*/

console.log(
"%c✨ The Opulent Beauty Bar Website Loaded Successfully",
"color:#D4AF8B;font-size:16px;font-weight:bold;"
);

/*==================================
    CONTACT SCROLL ANIMATION
===================================*/

const contactElements = document.querySelectorAll(
".contact-content, .contact-map"
);

if(contactElements.length){

const contactObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

contactElements.forEach(item=>{

contactObserver.observe(item);

});

}

/*==================================
      FOOTER ANIMATION
===================================*/

const footerItems = document.querySelectorAll(
".footer-about, .footer-links, .footer-services, .footer-contact, .footer-newsletter"
);

if (footerItems.length) {

const footerObserver = new IntersectionObserver((entries)=>{

entries.forEach((entry,index)=>{

if(entry.isIntersecting){

setTimeout(()=>{

entry.target.classList.add("show");

},index*180);

}

});

},{
threshold:0.2
});

footerItems.forEach(item=>{

footerObserver.observe(item);

});

}

/*==================================
      NEWSLETTER FORM
===================================*/

const newsletterForm = document.querySelector(".newsletter-form");

if(newsletterForm){

newsletterForm.addEventListener("submit",function(e){

e.preventDefault();

alert("🎉 Thank you for subscribing!");

newsletterForm.reset();

});

}
const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// NAV
const setNavLinkContent = () => {
  const navContent = Object.values(siteContent.nav);
  const navLinks = document.querySelectorAll("header nav a");
  navLinks.forEach((link, index) => {
    link.style.color = "green";
    link.textContent = navContent[index]
  });

  return navLinks;
}

// CTA
const setCtaSectionContent = () => {
  const ctaHeading = document.querySelector(".cta .cta-text h1");
  const ctaButton = document.querySelector(".cta .cta-text button");
  const ctaImage = document.querySelector(".cta #cta-img");

  ctaHeading.textContent = siteContent.cta.h1;
  ctaButton.textContent = siteContent.cta.button;
  ctaImage.setAttribute("src", siteContent.cta["img-src"]);
}

// MAIN SECTION
const setMainSectionContent = () => {
  const textContentArray = Object.values(siteContent["main-content"]);
  const headings = document.querySelectorAll(".main-content h4");
  const paragraphs = document.querySelectorAll(".main-content p");
  const headingsAndParagraphs = [];
  const middleImage = document.querySelector(".main-content .middle-img");

  // Remove the image source value from the textContentarray and store it in this variable
  const middleImageSrc = textContentArray.splice(4, 1);
  
  middleImage.setAttribute("src", middleImageSrc);

  for(let i = 0; i < textContentArray.length; i++) {
    headingsAndParagraphs.push(headings[i]);
    headingsAndParagraphs.push(paragraphs[i]);
  }

  textContentArray.forEach((content, index) => {
    headingsAndParagraphs[index].textContent = content;
  })
}

// FOOTER
const setContactSectionContent = () => {
  const contactContent = document.querySelector(".contact").children;
  const contactArray = Object.values(siteContent.contact);

  contactArray.forEach((content, index) => contactContent[index].textContent = content);
}

const setFooterContent = () => {
  const footerContent = document.querySelector("footer p");
  const copyrightText = siteContent.footer.copyright;

  footerContent.textContent = copyrightText;
}


setNavLinkContent();
setCtaSectionContent();
setMainSectionContent();
setContactSectionContent();
setFooterContent();
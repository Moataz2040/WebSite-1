/*nav js*/

let mynav = document.createElement("div");
mynav.className = "nav-container";
let nav = document.createElement("nav");
let ul = document.createElement("ul");
let li1 = document.createElement("li");
li1.className = "liNav";
let li2 = document.createElement("li");
li2.id = "liNav";
let li3 = document.createElement("li");
li3.className = "liNav";
let h3 = document.createElement("h3");
h3.className = "logo";
h3.textContent = "مرحبا بيك";
let a1 = document.createElement("a");
a1.href = "#hero-section";
a1.title = "go to Home page";
a1.className = "a";
a1.id = "home";
a1.textContent = "Home";

let a2 = document.createElement("a");
a2.href = "#contact";
a2.className = "a";
a2.textContent = "contact us";

let a3 = document.createElement("a");
a3.href = "#qualites-2";
a3.title = "go to who we are secton";
a3.className = "a";
a3.textContent = "who we are";

let conDiv = document.getElementById("container");
conDiv.prepend(mynav);
mynav.appendChild(nav);
nav.appendChild(h3);
nav.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
li1.appendChild(a1);
li2.appendChild(a2);
li3.appendChild(a3);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    // we can put this instead of anchor
    document.querySelector(anchor.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

/*nav js end*/

/*scroll button js*/
let btf = document.getElementById("btx");

scrollA = function () {
  if (window.scrollY >= 300) {
    btf.style.display = "block";
  } else {
    btf.style.display = "none";
  }
};

btf.onclick = function () {
  scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
/*scroll button js end*/

/* sections js*/

let sections = document.querySelectorAll("section");

let active = addEventListener('scroll', function () {
  
 // const section = sections[i]
 // let sectionTop = section.geyBoundingClientRect().top
  
  if (scrollY >= 10 && scrollY < 200) {

    sections[0].classList.add("your-active-class1")
    sections[1].classList.remove("your-active-class")
  } else if(scrollY >= 300 && scrollY < 1226) {
    sections[1].classList.add("your-active-class")
    sections[0].classList.remove("your-active-class1")
    sections[2].classList.remove("your-active-class")
  } else if(scrollY >= 1227 && scrollY < 1726) {
    sections[2].classList.add("your-active-class")
    sections[1].classList.remove("your-active-class")
    sections[3].classList.remove("your-active-class")
  } else if(scrollY >= 900 ) {
    sections[3].classList.add("your-active-class")
    sections[2].classList.remove("your-active-class")
  } 
}
)
window.onscroll = function () {
  console.log(scrollY)
  scrollA();
};


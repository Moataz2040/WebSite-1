/*nav js*/
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

/*nav js end*/

/*scroll button js*/
let btf = document.getElementById("btx");

onscroll = function () {
  if (scrollY >= 100) {
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

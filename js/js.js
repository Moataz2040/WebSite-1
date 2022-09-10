let btf = document.getElementById("btx");



  onscroll = function () {
    if (scrollY >= 100) {
      btf.style.display = "block";
    } else {
        btf.style.display ="none"
    }
  };
  



  btf.onclick = function () {
    scroll({
        top:0,
        left:0,
        behavior:"smooth"
    });
  };

  console.log(screen.width)



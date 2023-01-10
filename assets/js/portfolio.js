window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.documentElement.scrollTop > 500) {
      document.getElementById("navbar").style.padding = "0 4rem 0 0";
      document.getElementById("logo").style.width = "150px";
      document.getElementById("logo").style.height = "60px";
      document.getElementById("navbar").style.backgroundColor =
        "rgba(0, 0, 0, 0.8)";
      document.getElementById("arrow").style.display = "none"
      document.querySelectorAll("a")[0].style.color =
      document.querySelectorAll("a")[1].style.color =
      document.querySelectorAll("a")[2].style.color =
      "#fff";

    } else {
      document.getElementById("navbar").style.padding = ".5rem 4rem 0 0";
      document.getElementById("logo").style.width = "200px";
      document.getElementById("logo").style.height = "60px";
      document.getElementById("navbar").style.color =
        "black !important";
      document.querySelectorAll("a")[0].style.color =
      "#000";
      document.querySelectorAll("a")[1].style.color =
      "#000";
      document.querySelectorAll("a")[2].style.color =
      "#000";
      document.getElementById("arrow").style.display = "block"
    }
  }

  let toggle = document.getElementById("toggle")
  let show = document.getElementById("ul")

  toggle.addEventListener("click", () => {
    if(show.classList.contains("show")) {
        show.classList.remove("show")
        show.classList.add("hide")

    } else {
        show.classList.add("show")
        show.classList.remove("hide")
    }
  })

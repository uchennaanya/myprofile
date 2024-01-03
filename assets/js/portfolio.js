window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.documentElement.scrollTop > 500) {
      document.getElementById("navbar").style.padding = "1rem";
     
      document.getElementById("navbar").style.backgroundColor =
        "rgba(0, 0, 0, 1)";
      document.getElementById("arrow").style.display = "none"
      document.querySelectorAll("a")[0].style.color =
      document.querySelectorAll("a")[1].style.color =
      document.querySelectorAll("a")[2].style.color =
      "#fff";

    } else {
      document.getElementById("navbar").style.padding = "1rem";
      
      document.getElementById("navbar").style.color =
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

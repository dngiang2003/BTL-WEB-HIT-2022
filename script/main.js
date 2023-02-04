var check = false;
function changeLan() {
    if (check) {
        document.getElementById("popup_langue").style.display = "none";
        check = false;
    } else {
        document.getElementById("popup_langue").style.display = "block";
        check = true;
    }
    // dùng toggle tối ưu hơn nè
}

function showMenu() {
    var x = document.getElementsByClassName('nav-main');
    for (let i = 0; i < x.length; i++)
      x[i].classList.toggle('show');
}

function goToTop() {
    document.body.scrollIntoView({
        behavior: "smooth",
    });
  };

window.onscroll = function() {
    if (document.documentElement.scrollTop > 0) {
        document.querySelector(".banner_nav").classList.add("fixed");
    } else {
        document.querySelector(".banner_nav").classList.remove("fixed");
    }
    if (document.documentElement.scrollTop > 400) {
        document.getElementById("btn-top").style.display = "block";
    } else {
    document.getElementById("btn-top").style.display = "none";
    }
};

function showMenuC() {
    var x = document.getElementsByClassName('page_scroll');
    for (let i = 0; i < x.length; i++)
      x[i].classList.toggle('show');
}
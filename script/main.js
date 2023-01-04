var check = false;
function changeLan() {
    if (check) {
        document.getElementById("popup_langue").style.display = "none";
        check = false;
    } else {
        document.getElementById("popup_langue").style.display = "block";
        check = true;
    }
}

// var checkMenu = true;
// function showMenu() {
//     if (checkMenu) {
//         document.getElementById("main-menu").style.display = "none";
//         checkMenu = false;
//     } else {
//         document.getElementById("main-menu").style.display = "block";
//         checkMenu = true;
//     }
// }

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
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("btn-top").style.display = "block";
    } else {
    document.getElementById("btn-top").style.display = "none";
    }
};
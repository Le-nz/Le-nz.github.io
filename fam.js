window.onhashchange = () => {
    pages(location.hash);
};
function pages(e) {
    const menu = document.querySelectorAll('#menu li a');
    const page = document.querySelectorAll('#main page')
    // menu
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].getAttribute('href') == e) {
            menu[i].setAttribute('class', 'active')
        } else {
            menu[i].removeAttribute('class')
        }
    }
    for (let i = 0; i < page.length; i++) {
        if (page[i].getAttribute('page') == e) {
            page[i].style.display = 'block';
        } else {
            page[i].style.display = 'none';
        }
    }
    location.hash = e;
}
pages('#home')


leiste();

function arrowdownfun() {
    scrollTo(0, 1000)
}


function ei() {
    scrollTo(0, 800)
}

window.onscroll = function () {
    leiste()
    //  ,lista()
};


function leiste() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("menu").className = "leist";
    } else {
        document.getElementById("menu").className = "lei";
    }
}

// NAVIGATIONBAR HANDY

// function openNav() {
//     document.getElementById("mysidebar").style.width = "250px";
//   }
  
//   function closeNav() {
//     document.getElementById("mysidebar").style.width = "0";
//   }

  
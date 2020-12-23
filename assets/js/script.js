function setActiveLinkStatus(element, status) {
    const activeClassName = "nav__link--active";

    if (status === false) {
        element.classList.remove(activeClassName);
    } else {
        element.classList.add(activeClassName);
    }
}

const headerLinks = document.querySelectorAll(".nav__link");

headerLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const clickedLink = event.target;

        document.querySelectorAll(".nav__link--active").forEach(function (activeLink) {
            setActiveLinkStatus(activeLink, false);
        });
        
        setActiveLinkStatus(clickedLink, true);
    });
});


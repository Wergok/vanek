function changeClassActive(element) {
    if (element.classList.contains("animation-active")) return;
    element.classList.remove("animation-disable");
    element.classList.add("animation-active");
}

function animation(elementSelector) {
    const elements = document.querySelectorAll(elementSelector);
    const options = {
        threshold: 0.5,
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((element) => {
            if (element.isIntersecting) {
                changeClassActive(element.target);
                observer.unobserve(element.target);
            }
        });
    }, options);

    elements.forEach((element) => {
        observer.observe(element);
    });
}

animation(".title");
animation(".benefits__list-item");
animation(".card-price");
animation(".mistake__list-item");
animation(".questions__details");
animation(".consultation__form");
animation(".consultation__slogan");

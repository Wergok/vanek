"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".consultation__form");
    form.addEventListener("submit", formSend);

    async function formSend(element) {
        element.preventDefault();
        console.log(4);

        const resultValidate = formValidate(form);

        const formData = new FormData(form);

        if (resultValidate) {
            document.querySelector(".wrapper").classList.add("loading-body");
            let response = await fetch("php/mail.php", {
                method: "POST",
                body: formData,
            });

            console.log(3);

            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                console.log(2);
                form.reset();
                document
                    .querySelector(".wrapper")
                    .classList.remove("loading-body");
            } else {
                alert("Ошибка");
                console.log(1);
                form.reset();
                document
                    .querySelector(".wrapper")
                    .classList.remove("loading-body");
            }
        }
    }

    function formValidate(form) {
        const formInputs = form.querySelectorAll(".consultation__input");

        for (const input of formInputs) {
            if (input.classList.contains("email")) {
                if (
                    !input.validity.patternMismatch &&
                    !input.validity.valueMissin
                ) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
});

let form1 = document.querySelector(".filter__form-segment");
let form2 = document.querySelector(".filter__form-truck-type");
let form3 = document.querySelector(".filter__form-axle-type");
let form4 = document.querySelector(".filter__form-regions");
let form5 = document.querySelector(".filter__form-period");
let fotmBtn = document.querySelector(".filter-btn");
let btns1 = form1.querySelectorAll("input");
let btns2 = form2.querySelectorAll("input");
let btns3 = form3.querySelectorAll("input");
let btns4 = form4.querySelectorAll("input");
let btns5 = form5.querySelectorAll("span");
btns1.forEach((btn) => {
    btn.addEventListener("change", () => {
        form2.classList.add("activeForm");
    });
});
console.log(btns2);

btns2.forEach((btn) => {
    btn.addEventListener("change", () => {
        form3.classList.add("activeForm");
    });
});
btns3.forEach((btn) => {
    btn.addEventListener("change", () => {
        form4.classList.add("activeForm");
        form5.classList.add("activeForm");
        fotmBtn.classList.add("activeForm");
    });
});

let spansPeriod = document.querySelectorAll(".period-span");

spansPeriod.forEach((span) => {
    span.addEventListener("click", () => {
        spansPeriod.forEach((item) => {
            // remove class
        });
        let currentSpan = span.dataset.period;
        for (let i = 0; i < currentSpan; i++) {
            // let temp = document.querySelector(
            //     '[data-period]="' + String(i) + '"'
            // );
            console.log('[data-period]="' + String(i) + '"');

            // document
            //     .querySelector('[data-period]="' + String(i) + '"')
            //     .classList.add("activeSpan");
        }
    });
});

fotmBtn.addEventListener("click", (btn) => {
    fetch("http://localhost:8080/9m2023tractors4x2")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Если ожидаете JSON ответ от сервера
        })
        .then((data) => {
            console.log("Данные с сервера:", data);
            // Здесь можно обработать полученные данные
        })
        .catch((error) => {
            console.error("Ошибка запроса:", error);
        });
});

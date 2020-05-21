var form = document.querySelector(".form");

if (form) {
  var modalSuccessful = document.querySelector(".modal--successful");
  var buttonSuccessful = document.querySelector(".modal__button--successful");

  var modalFailed = document.querySelector(".modal--failed");
  var buttonFailed = document.querySelector(".modal__button--failed");

//обязательные поля
  let surname = form.querySelector(".user-surname-js");
  let name = form.querySelector(".user-name-js");
  let email = form.querySelector(".user-email-js");

//убираем required
  surname.removeAttribute("required");
  name.removeAttribute("required");
  email.removeAttribute("required");

// проверка формы на заполненые поля
  form.addEventListener("submit", function (evt) {
    if (!surname.value || !name.value || !email.value) {
      evt.preventDefault();
      modalFailed.classList.add("modal--show");
      buttonFailed.focus();

      if (!surname.value) {
        surname.setAttribute("style", "border-color: red; background-color: pink; border-width: 2px");
      }

      if (!name.value) {
        name.setAttribute("style", "border-color: red; background-color: pink; border-width: 2px");
      }

      if (!email.value) {
        email.setAttribute("style", "border-color: red; background-color: pink; border-width: 2px");
      }

    } else {
      evt.preventDefault();
      modalSuccessful.classList.add("modal--show");
      buttonSuccessful.focus();
      console.log(surname.value);
      console.log(name.value);
      console.log(email.value);

    }
  });

//закрываем попапы
  buttonFailed.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalFailed.classList.remove("modal--show");

    surname.removeAttribute("style");
    name.removeAttribute("style");
    email.removeAttribute("style");
  });

  buttonSuccessful.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalSuccessful.classList.remove("modal--show");
  });
}

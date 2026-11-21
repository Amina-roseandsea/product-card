export class Form {
  constructor(formSelector) {
    // Находим форму на странице по селектору
    this.form = document.querySelector(formSelector);

    if (!this.form) {
      console.error(`Форма с селектором "${formSelector}" не найдена!`);
    }
  }

  // I. Метод для получения всех значений формы в виде объекта
  getData() {
    if (!this.form) return {};

    const formDataObj = new FormData(this.form);
    const data = {};

    for (let [key, value] of formDataObj.entries()) {
      data[key] = value;
    }

    return data;
  }

  // II. Метод для проверки валидности формы (возвращает true/false)
  isValid() {
    if (!this.form) return false;
    return this.form.checkValidity();
  }

  // III. Метод для сброса значений формы
  reset() {
    if (this.form) {
      this.form.reset();
    }
  }
}

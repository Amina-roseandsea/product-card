export class Modal {
  constructor(modalSelector, overlaySelector) {
    // Находим модальное окно и оверлей по переданным селекторам
    this.modal = document.querySelector(modalSelector);
    this.overlay = document.querySelector(overlaySelector);

    if (!this.modal) {
      console.error(`Модальное окно с селектором "${modalSelector}" не найдено!`);
      return;
    }

    // Вызываем метод прослушивания кнопки (крестика) в конструкторе
    this._initCloseButton();
  }

  // I. Метод для открытия модального окна
  open() {
    this.modal.classList.add('modal-showed');
    if (this.overlay) {
      this.overlay.classList.add('modal-showed');
    }
  }

  // II. Метод для закрытия модального окна
  close() {
    this.modal.classList.remove('modal-showed');
    if (this.overlay) {
      this.overlay.classList.remove('modal-showed');
    }
  }

  // III. Метод для проверки, открыто ли сейчас модальное окно
  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  // IV. Метод, который слушает кнопку (крестик) для закрытия
  _initCloseButton() {
    const closeBtn = this.modal.querySelector('#closeModalBtn');

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        this.close();
      });
    } else {
      console.warn('Кнопка закрытия не найдена!');
    }
  }
}

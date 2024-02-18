document.addEventListener('DOMContentLoaded', async function() {
  // иконки
  let addContactIcon = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path d="M7.00001 3.66659C6.63334 3.66659 6.33334 3.96659 6.33334 4.33325V6.33325H4.33334C3.96668 6.33325 3.66668 6.63325 3.66668 6.99992C3.66668 7.36659 3.96668 7.66659 4.33334 7.66659H6.33334V9.66659C6.33334 10.0333 6.63334 10.3333 7.00001 10.3333C7.36668 10.3333 7.66668 10.0333 7.66668 9.66659V7.66659H9.66668C10.0333 7.66659 10.3333 7.36659 10.3333 6.99992C10.3333 6.63325 10.0333 6.33325 9.66668 6.33325H7.66668V4.33325C7.66668 3.96659 7.36668 3.66659 7.00001 3.66659ZM7.00001 0.333252C3.32001 0.333252 0.333344 3.31992 0.333344 6.99992C0.333344 10.6799 3.32001 13.6666 7.00001 13.6666C10.68 13.6666 13.6667 10.6799 13.6667 6.99992C13.6667 3.31992 10.68 0.333252 7.00001 0.333252ZM7.00001 12.3333C4.06001 12.3333 1.66668 9.93992 1.66668 6.99992C1.66668 4.05992 4.06001 1.66659 7.00001 1.66659C9.94001 1.66659 12.3333 4.05992 12.3333 6.99992C12.3333 9.93992 9.94001 12.3333 7.00001 12.3333Z"/>
                               </svg>`;
  let deleteContactIcon = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z"/>
                                  </svg>`;
  let phoneIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g opacity="0.7">
                          <circle cx="8" cy="8" r="8"/>
                          <path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z"/>
                          </g>
                          </svg>`;
  let mailIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z"/>
                         </svg>`;
  let vkIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <g opacity="0.7">
                       <path d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z"/>
                       </g>
                       </svg>`;
  let fbIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <g opacity="0.7">
                       <path d="M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z"/>
                       </g>
                       </svg>`;
  let otherIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z"/>
                          </svg>`;
  let changeClientIcon = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M0 9.49996V12H2.5L9.87333 4.62662L7.37333 2.12662L0 9.49996ZM11.8067 2.69329C12.0667 2.43329 12.0667 2.01329 11.8067 1.75329L10.2467 0.193291C9.98667 -0.066709 9.56667 -0.066709 9.30667 0.193291L8.08667 1.41329L10.5867 3.91329L11.8067 2.69329Z" fill="#9873FF"/>
                                 </svg>`;
  let deleteClientIcon = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z" fill="#F06A4D"/>
                                 </svg>`;

  // спиннеры
  const tableSpinner = document.createElement('div');
  tableSpinner.className = 'spinner-border table-spinner';
  const mainBtnSpinner = document.createElement('div');
  mainBtnSpinner.className = 'spinner-border main-btn-spinner';
  const changeBtnSpinner = document.createElement('div');
  changeBtnSpinner.className = 'spinner-border change-btn-spinner';
  const deleteBtnSpinner = document.createElement('div');
  deleteBtnSpinner.className = 'spinner-border delete-btn-spinner';

  // при загрузке страницы отрисовываем таблицу клиентов
  document.getElementById('tbody').append(tableSpinner);
  await renderClientTable(sortList(await dbGet(), 'id', false));
  tableSpinner.remove();

  // функция popupBoxMain() отрисовывает основную часть модального окна
  function popupBoxMain() {
    const mainPage = document.querySelector('.clients');
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.id = 'client-popup';
    mainPage.append(popup);
    const popupBox = document.createElement('div');
    popupBox.className = 'popup__box';
    popup.append(popupBox);

    const popupBoxContainer = document.createElement('div');
    popupBoxContainer.className = 'popup__box-container flex';
    popupBox.append(popupBoxContainer);
    const popupBoxTitle = document.createElement('h2');
    popupBoxTitle.className = 'popup__box-title';
    popupBoxContainer.append(popupBoxTitle);
    const closeBtn = document.createElement('button');
    closeBtn.className = 'close';
    popupBox.append(closeBtn);

    const popupBoxForm = document.createElement('form');
    popupBoxForm.id = 'popup__box-form';
    popupBoxForm.noValidate = true;
    popupBoxContainer.append(popupBoxForm);
    const floatingSurname = document.createElement('div');
    floatingSurname.className = 'form-floating flex';
    popupBoxForm.append(floatingSurname);
    const floatingSurnameInput = document.createElement('input');
    floatingSurnameInput.type = 'text';
    floatingSurnameInput.className = 'form-control';
    floatingSurnameInput.id = 'floatingSurname';
    floatingSurnameInput.placeholder = 'floatingSurname';
    floatingSurnameInput.required = true;
    floatingSurname.append(floatingSurnameInput);
    const floatingSurnameLabel = document.createElement('label');
    floatingSurnameLabel.for = 'floatingSurname';
    floatingSurnameLabel.innerHTML = 'Фамилия<span>*</span>';
    floatingSurname.append(floatingSurnameLabel);
    const floatingName = document.createElement('div');
    floatingName.className = 'form-floating flex';
    popupBoxForm.append(floatingName);
    const floatingNameInput = document.createElement('input');
    floatingNameInput.type = 'text';
    floatingNameInput.className = 'form-control';
    floatingNameInput.id = 'floatingName';
    floatingNameInput.placeholder = 'floatingName';
    floatingNameInput.required = true;
    floatingName.append(floatingNameInput);
    const floatingNameLabel = document.createElement('label');
    floatingNameLabel.for = 'floatingName';
    floatingNameLabel.innerHTML = 'Имя<span>*</span>';
    floatingName.append(floatingNameLabel);
    const floatingLastName = document.createElement('div');
    floatingLastName.className = 'form-floating flex';
    popupBoxForm.append(floatingLastName);
    const floatingLastNameInput = document.createElement('input');
    floatingLastNameInput.type = 'text';
    floatingLastNameInput.className = 'form-control';
    floatingLastNameInput.id = 'floatingLastName';
    floatingLastNameInput.placeholder = 'floatingLastName';
    floatingLastName.append(floatingLastNameInput);
    const floatingLastNameLabel = document.createElement('label');
    floatingLastNameLabel.for = 'floatingLastName';
    floatingLastNameLabel.innerHTML = 'Отчество';
    floatingLastName.append(floatingLastNameLabel);

    const contactsContainer = document.createElement('div');
    contactsContainer.className = 'popup__box-form-contacts flex';
    popupBoxForm.append(contactsContainer);
    const addContactBtn = document.createElement('button');
    addContactBtn.className = 'add-contact-btn btn-reset';
    addContactBtn.textContent = 'Добавить контакт';

    contactsContainer.append(addContactBtn);

    addContactBtn.addEventListener('click', function(e) {
      e.preventDefault();

      if (contactsContainer.querySelectorAll('.input-group').length < 10) {
        popupBoxAddContact();
      }
      if (contactsContainer.querySelectorAll('.input-group').length === 10) {
        addContactBtn.style.display = 'none';
      }
    })

    const popupMainBtn = document.createElement('button');
    popupMainBtn.className = 'popup-main-btn btn-reset';
    popupMainBtn.type = 'submit';
    popupBoxContainer.append(popupMainBtn);

    const secondaryBtn = document.createElement('button');
    secondaryBtn.className = 'popup-secondary-btn btn-reset';
    popupBoxContainer.append(secondaryBtn);
  }

  // функция popupBoxAddContact() без аргументов отрисовывает форму контакта,
  // а с аргументами отрисовывает заполненную из базы форму контакта
  // аргументы:
  // selectValue - тип контакта
  // inputValue - значение контакта
  function popupBoxAddContact(selectValue = undefined, inputValue = undefined) {
    const clientContactItem = document.createElement('div');
    clientContactItem.className = 'input-group';
    const typeSelect = document.createElement('select');
    typeSelect.className = 'contact-type-select';
    const selectOptionTel = document.createElement('option');
    selectOptionTel.textContent = 'Телефон';
    selectOptionTel.value = 'tel';
    const selectOptionEmail = document.createElement('option');
    selectOptionEmail.textContent = 'Email';
    selectOptionEmail.value = 'email';
    const selectOptionVk = document.createElement('option');
    selectOptionVk.textContent = 'VK';
    selectOptionVk.value = 'vk';
    const selectOptionFacebook = document.createElement('option');
    selectOptionFacebook.textContent = 'Facebook';
    selectOptionFacebook.value = 'fb';
    const selectOptionOther = document.createElement('option');
    selectOptionOther.textContent = 'Другое';
    selectOptionOther.value = 'other';
    const typeInput = document.createElement('input');
    typeInput.className = 'form-control';
    const im = new Inputmask("+7 (999) 999-99-99");
    im.mask(typeInput);
    typeInput.type = 'tel';
    const deleteContactBtn = document.createElement('button');
    deleteContactBtn.className = 'delete-contact-btn btn-reset';
    deleteContactBtn.type = 'button';
    deleteContactBtn.setAttribute('data-bs-toggle', 'tooltip');
    deleteContactBtn.setAttribute('data-bs-title', 'Удалить контакт');
    deleteContactBtn.innerHTML = deleteContactIcon;

    clientContactItem.append(typeSelect);
    typeSelect.append(selectOptionTel);
    typeSelect.append(selectOptionEmail);
    typeSelect.append(selectOptionVk);
    typeSelect.append(selectOptionFacebook);
    typeSelect.append(selectOptionOther);
    clientContactItem.append(typeInput);
    clientContactItem.append(deleteContactBtn);

    document.querySelector('.popup__box-form-contacts').insertBefore(clientContactItem, document.querySelector('.add-contact-btn'))

    if (document.querySelector('.popup__box-form-contacts').children.length > 1) {
      document.querySelector('.popup__box-form-contacts').classList.add('filled');
    }

    if (selectValue !== undefined && inputValue !== undefined) {
      typeInput.inputmask.remove();
      if (selectValue === 'Телефон') {
        selectOptionTel.setAttribute('selected', 'selected');
        typeInput.type = 'tel';
        const im = new Inputmask("+7 (999) 999-99-99");
        im.mask(typeInput);
      } else if (selectValue === 'Email') {
        selectOptionEmail.setAttribute('selected', 'selected');
        typeInput.type = 'email';
      } else if (selectValue === 'VK') {
        selectOptionVk.setAttribute('selected', 'selected');
        typeInput.type = 'url';
      } else if (selectValue === 'Facebook') {
        selectOptionFacebook.setAttribute('selected', 'selected');
        typeInput.type = 'url';
      } else if (selectValue === 'Другое') {
        selectOptionOther.setAttribute('selected', 'selected');
        typeInput.type = 'text';
      }
      typeInput.value = inputValue;
    }

    typeSelect.addEventListener('change', function() {
      if (typeSelect.value === 'tel') {
        typeInput.type = 'tel';
        const im = new Inputmask("+7 (999) 999-99-99");
        im.mask(typeInput);
      }
      if (typeSelect.value === 'email') {
        typeInput.type = 'email';
        if (typeInput.inputmask) typeInput.inputmask.remove();
      }
      if (typeSelect.value === 'vk') {
        typeInput.type = 'url';
        if (typeInput.inputmask) typeInput.inputmask.remove();
      }
      if (typeSelect.value === 'fb') {
        typeInput.type = 'url';
        if (typeInput.inputmask) typeInput.inputmask.remove();
      }
      if (typeSelect.value === 'other') {
        typeInput.type = 'text';
        if (typeInput.inputmask) typeInput.inputmask.remove();
      }
    });

    const choices = new Choices(typeSelect, {
      allowHTML: true,
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
      position: 'bottom'
    });

    deleteContactBtn.addEventListener('click', function(e) {
      e.preventDefault();
      clientContactItem.remove();
      if (document.querySelector('.popup__box-form-contacts').children.length === 1) {
        document.querySelector('.popup__box-form-contacts').classList.remove('filled');
      }
      document.querySelector('.tooltip').remove();
      if (document.querySelector('.popup__box-form-contacts').querySelectorAll('.input-group').length === 9) {
        document.querySelector('.add-contact-btn').style.display = 'flex';
      }
    });

    useTooltip();
  }

  // функция clientData() получает из формы и возвращает заполненные данные клиента
  function clientData() {
    let name = document.getElementById('floatingName').value
    let surname = document.getElementById('floatingSurname').value
    let lastName = document.getElementById('floatingLastName').value
    let contacts = [];

    if (document.getElementsByClassName('popup__box-form-contacts')[0].children.length > 1) {
      document.querySelectorAll('.input-group').forEach(function (contactItem) {
        if (contactItem.children[0].children[0].innerText === 'Телефон') {
          if (contactItem.children[1].inputmask.undoValue.replace(/[^0-9+]/g, '').length > 2) {
            contacts.push({
              type: contactItem.children[0].children[0].innerText,
              value: contactItem.children[1].inputmask.undoValue.replace(/[^0-9+]/g, '')
            });
          } else {
            contacts.push({
              type: contactItem.children[0].children[0].innerText,
              value: ''
            });
          }
        } else {
          contacts.push({
            type: contactItem.children[0].children[0].innerText,
            value: contactItem.children[1].value
          });
        }
      });
    }


    return [name, surname, lastName, contacts]
  }

  // функция useTooltip() включает подсказки
  function useTooltip() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  }

  // функция openPopup() открывает модальное окно
  function openPopup() {
    setTimeout(function () {
        document.getElementById('client-popup').classList.add('open')
      }, 100);
  }

  // функция actionClosePopup() закрывает модальное окно после внесенных в карточку клиента изменений
  function actionClosePopup() {
    document.getElementById('client-popup').classList.remove('open');
    setTimeout(function () {
      document.querySelector('.popup').remove()
    }, 801);
    window.location.hash = '';
  }

  // функция closePopup() закрывает модальное окно без сохранения изменений в карточке клиента
  function closePopup() {
    // Закрыть модальное окно при клике вне его
    document.querySelector('#client-popup .popup__box').addEventListener('click', function (e) {
      e._isClickWithInModal = true;
    });
    document.getElementById('client-popup').addEventListener('click', function (e) {
      if (e._isClickWithInModal) return;
      e.currentTarget.classList.remove('open');
      setTimeout(function () {
        document.querySelector('.popup').remove();
      }, 810);
      window.location.hash = '';
    });
    // Закрыть модальное окно при нажатии на кнопку (крестик)
    document.querySelector('.close').addEventListener('click', function () {
      document.getElementById('client-popup').classList.remove('open');
      setTimeout(function () {
        document.querySelector('.popup').remove();
      }, 810);
      window.location.hash = '';
    });
    // Закрыть модальное окно при нажатии на кнопку (Отмена)
    if (document.querySelector('.popup-secondary-btn').classList.contains('cancel')) {
      document.querySelector('.cancel').addEventListener('click', function () {
        document.getElementById('client-popup').classList.remove('open');
        setTimeout(function () {
          document.querySelector('.popup').remove();
        }, 810);
        window.location.hash = '';
      });
    }
    // Закрыть модальное окно при нажатии на ESC
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        document.getElementById('client-popup').classList.remove('open');
        setTimeout(function () {
          document.querySelector('.popup').remove();
        }, 810);
        window.location.hash = '';
      }
    });
  }

  // функция dbPost() сохраняет данные клиента в базу данных
  // аргументы:
  // name - имя клиента
  // surname - фамилия клиента
  // lastName - отчество клиента
  // contacts - список контактов клиента
  async function dbPost(name, surname, lastName, contacts) {
    await fetch('http://localhost:3000/api/clients', {
      method: 'POST',
      body: JSON.stringify({
        name: name, surname: surname, lastName: lastName,
        contacts: contacts,
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }

  // функция dbPatch() изменяет данные клиента в базе данных
  // аргументы:
  // id - ID клиента
  // name - имя клиента
  // surname - фамилия клиента
  // lastName - отчество клиента
  // contacts - список контактов клиента
  async function dbPatch(id, name, surname, lastName, contacts) {
    await fetch(`http://localhost:3000/api/clients/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({name: name, surname: surname, lastName: lastName, contacts: contacts}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  // функция dbGet() получает данные всех клиентов из базы данных,
  // а при передаче ID клиента, получает данные только этого клиента
  // аргументы:
  // id - ID клиента (по умолчанию пустое)
  async function dbGet(id='') {
    const response = await fetch(`http://localhost:3000/api/clients/${id}`);
    return await response.json();
  }

  // функция dbDelete() удаляет из базы данных клиента с указанным ID
  // аргументы:
  // id - ID клиента
  async function dbDelete(id) {
    await fetch(`http://localhost:3000/api/clients/${id}`, {
      method: 'DELETE',
    });
  }

  // функция sortList() сортирует массив
  function sortList(arr, prop, dir) {
    return arr.sort(function (a, b) {
      let dirIf = a[prop] < b[prop];
      if (dir === true) dirIf = a[prop] > b[prop];
      if (dirIf === true) return -1;
    });
  }

  // функция searchFilter() фильтрует массив
  // аргументы:
  // value - значение для фильтра(поиска)
  async function searchFilter(value) {
    return (await dbGet()).filter(({surname, name, lastName}) => {
      return surname.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
          name.toLowerCase().indexOf(value.toLowerCase()) > -1 ||
          lastName.toLowerCase().indexOf(value.toLowerCase()) > -1
    });
  }

  // сортировка
  // находим заголовки таблицы
  const idSortButton = document.getElementById('id');
  idSortButton.classList.add('sorted');
  idSortButton.children[1].classList.add('sorted');
  const nameSortButton = document.getElementById('FCs');
  const createDateSortButton = document.getElementById('create-date');
  const lastChangesSortButton = document.getElementById('last-changes');
  // переменная для определения направления сортировки
  let dir = true;
  // сортировка по клику на заголовок ID
  idSortButton.addEventListener('click', async function() {
    idSortButton.classList.add('sorted');
    nameSortButton.classList.remove('sorted');
    nameSortButton.children[1].classList.remove('sorted');
    createDateSortButton.classList.remove('sorted');
    createDateSortButton.children[1].classList.remove('sorted');
    lastChangesSortButton.classList.remove('sorted');
    lastChangesSortButton.children[1].classList.remove('sorted');
    if (dir === false) {
      await renderClientTable(sortList(await dbGet(), 'id', dir))
      idSortButton.children[1].classList.add('sorted');
      dir = !dir;
    } else {
      await renderClientTable(sortList(await dbGet(), 'id', dir))
      idSortButton.children[1].classList.remove('sorted');
      dir = !dir;
    }
  });
  // сортировка по клику на заголовок ФИО
  nameSortButton.addEventListener('click', async function() {
    idSortButton.classList.remove('sorted');
    idSortButton.children[1].classList.remove('sorted');
    nameSortButton.classList.add('sorted');
    createDateSortButton.classList.remove('sorted');
    createDateSortButton.children[1].classList.remove('sorted');
    lastChangesSortButton.classList.remove('sorted');
    lastChangesSortButton.children[1].classList.remove('sorted');
    if (dir === false) {
      await renderClientTable(sortList(await dbGet(), 'surname', dir))
      nameSortButton.children[1].classList.add('sorted');
      dir = !dir;
    } else {
      await renderClientTable(sortList(await dbGet(), 'surname', dir))
      nameSortButton.children[1].classList.remove('sorted');
      dir = !dir;
    }
  });
  // сортировка по клику на заголовок даты создания
  createDateSortButton.addEventListener('click', async function() {
    idSortButton.classList.remove('sorted');
    idSortButton.children[1].classList.remove('sorted');
    nameSortButton.classList.remove('sorted');
    nameSortButton.children[1].classList.remove('sorted');
    createDateSortButton.classList.add('sorted');
    lastChangesSortButton.classList.remove('sorted');
    lastChangesSortButton.children[1].classList.remove('sorted');
    if (dir === false) {
      await renderClientTable(sortList(await dbGet(), 'createdAt', dir))
      createDateSortButton.children[1].classList.add('sorted');
      dir = !dir;
    } else {
      await renderClientTable(sortList(await dbGet(), 'createdAt', dir))
      createDateSortButton.children[1].classList.remove('sorted');
      dir = !dir;
    }
  });
  // сортировка по клику на заголовок даты изменения
  lastChangesSortButton.addEventListener('click', async function() {
    idSortButton.classList.remove('sorted');
    idSortButton.children[1].classList.remove('sorted');
    nameSortButton.classList.remove('sorted');
    nameSortButton.children[1].classList.remove('sorted');
    createDateSortButton.classList.remove('sorted');
    createDateSortButton.children[1].classList.remove('sorted');
    lastChangesSortButton.classList.add('sorted');
    if (dir === false) {
      await renderClientTable(sortList(await dbGet(), 'updatedAt', dir))
      lastChangesSortButton.children[1].classList.add('sorted');
      dir = !dir;
    } else {
      await renderClientTable(sortList(await dbGet(), 'updatedAt', dir))
      lastChangesSortButton.children[1].classList.remove('sorted');
      dir = !dir;
    }
  });

  // поиск
  // находим инпут поиска
  const searchInput = document.getElementById('search-filter');
  const searchOptions = document.getElementById('search-options');
  let timer = null;
  searchInput.addEventListener('input',async function(e) {
    let options = await searchFilter(searchInput.value);
    searchOptions.innerHTML = '';
    options.forEach(elem => {
      const optionElem = document.createElement('li');
      optionElem.innerHTML = `${elem.surname} ${elem.name} ${elem.lastName}`
      if (searchInput.value !== '') {
        searchOptions.appendChild(optionElem);
      }
      optionElem.addEventListener('click', async function() {
        searchInput.value = optionElem.textContent;
        searchOptions.innerHTML = '';
        document.getElementById('tbody').append(tableSpinner);
            let result;
            for (let value of searchInput.value.trim().split(' ')) {
              result = await searchFilter(value);
            }
            await renderClientTable(result);
            tableSpinner.remove();
      });
    });

    clearTimeout(timer);
    timer = setTimeout(async function() {
      document.getElementById('tbody').append(tableSpinner);
      let result;
      for (let value of searchInput.value.trim().split(' ')) {
        result = await searchFilter(value);
      }
      await renderClientTable(result);
      tableSpinner.remove();
    }, 3000);

    // навигация стрелками
    let optionElemNum = -1;
    searchInput.addEventListener('keydown', async function(e) {
      const options = document.querySelectorAll('.header__container-form-options li');
      if (e.key === 'ArrowDown') {
        e.preventDefault();

        if (optionElemNum >= options.length - 1) {
          optionElemNum = -1;
        }

        for (let elem of options) {
          if (elem.classList.contains('focused')) {
            elem.classList.remove('focused');
          }
        }

        optionElemNum++;
        options[optionElemNum].classList.add('focused');
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault();

        if (optionElemNum === 0) {
          optionElemNum = -1;
        }

        for (let elem of options) {
          if (elem.classList.contains('focused')) {
            elem.classList.remove('focused');
          }
        }

        if (optionElemNum === -1) {
          optionElemNum = options.length + optionElemNum;
          options[optionElemNum].classList.add('focused');
        } else {
          optionElemNum--;
          options[optionElemNum].classList.add('focused');
        }
      }

      if (e.key === 'Escape') {
        searchOptions.innerHTML = '';
        optionElemNum = -1;
      }

      if (e.key === 'Enter') {
        e.preventDefault();
        if (options.length > 0) {
          if (options[optionElemNum]) {
            searchInput.value = options[optionElemNum].textContent;
            searchOptions.innerHTML = '';
            optionElemNum = -1;
            document.getElementById('tbody').append(tableSpinner);
            let result;
            for (let value of searchInput.value.trim().split(' ')) {
              result = await searchFilter(value);
            }
            await renderClientTable(result);
            tableSpinner.remove();
          }
        }
      }
    });
  });

  // функция renderClientTable() отрисовывает таблицу с клиентами
  // аргументы:
  // clientsArray - список клиентов
  async function renderClientTable(clientsArray) {
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = '';

    for (const client of clientsArray) {
      const contactListContainer = document.createElement('div');
      const contactList = document.createElement('ul');
      contactList.className = 'contacts-list list-reset flex';
      contactListContainer.append(contactList);
      const clientCard = document.createElement('tr');

      const createdDate = new Date(client.createdAt).toLocaleDateString();
      const createdTime = new Date(client.createdAt).toLocaleTimeString('default', {
        hour: '2-digit',
        minute: '2-digit'
      });
      const updatedDate = new Date(client.updatedAt).toLocaleDateString();
      const updatedTime = new Date(client.updatedAt).toLocaleTimeString('default', {
        hour: '2-digit',
        minute: '2-digit'
      });

      for (const contact of client.contacts) {
        const tooltip = document.createElement('a');
        tooltip.href = '#';
        tooltip.setAttribute('data-bs-toggle', 'tooltip');

        const contactListItem = document.createElement('li');
        contactListItem.className = 'contacts-list-item';
        if (contact.type === 'Телефон') {
          contactListItem.classList.add('phone');
          tooltip.setAttribute('data-bs-title', `Телефон: ${contact.value}`);
          tooltip.innerHTML = phoneIcon;
        } else if (contact.type === 'Email') {
          contactListItem.classList.add('email');
          tooltip.setAttribute('data-bs-title', `Email: ${contact.value}`);
          tooltip.innerHTML = mailIcon;
        } else if (contact.type === 'VK') {
          contactListItem.classList.add('vk');
          tooltip.setAttribute('data-bs-title', `VK: ${contact.value}`);
          tooltip.innerHTML = vkIcon;
        } else if (contact.type === 'Facebook') {
          contactListItem.classList.add('fb');
          tooltip.setAttribute('data-bs-title', `Facebook: ${contact.value}`);
          tooltip.innerHTML = fbIcon;
        } else if (contact.type === 'Другое') {
          contactListItem.classList.add('other');
          tooltip.setAttribute('data-bs-title', `Другое: ${contact.value}`);
          tooltip.innerHTML = otherIcon;
        }
        contactListItem.append(tooltip);
        contactList.append(contactListItem)
      }

      const actionsBtn = document.createElement('div');
      const changeClientBtn = document.createElement('button');
      changeClientBtn.className = 'client-btn change-client-btn btn-reset flex';
      changeClientBtn.id = client.id;
      changeClientBtn.innerHTML = changeClientIcon + 'Изменить';
      actionsBtn.append(changeClientBtn);
      const deleteClientBtn = document.createElement('button');
      deleteClientBtn.className = 'client-btn delete-client-btn btn-reset flex';
      deleteClientBtn.id = client.id;
      deleteClientBtn.innerHTML = deleteClientIcon + 'Удалить';
      actionsBtn.append(deleteClientBtn);

      clientCard.innerHTML =
        '<td class="id">' + client.id.slice(-6) + '</td>' +
        '<td class="FCs">' + client.surname + ' ' + client.name + ' ' + client.lastName + '</td>' +
        '<td class="create-date">' + '<span class="date">' + createdDate + '</span>' + ' ' + '<span class="time">' + createdTime + '</span>' + '</td>' +
        '<td class="last-changes">' + '<span class="date">' + updatedDate + '</span>' + ' ' + '<span class="time">' + updatedTime + '</span>' + '</td>' +
        '<td class="contacts">' + contactListContainer.innerHTML + '</td>' +
        '<td class="actions flex">' + actionsBtn.innerHTML + '</td>';
      tbody.append(clientCard)
    }

    useTooltip();

    hiddenContacts();
  }

  // функция hiddenContacts() скрывает и показывает контакты больше 4-х
  function hiddenContacts() {
    for (let contactsList of document.querySelectorAll('.contacts-list')) {
      let contactsCount = 0;
      for (let contactsListItem of contactsList.querySelectorAll('.contacts-list-item')) {
        contactsCount++
        if (contactsCount > 4) {
          contactsListItem.classList.add('hide-contact')
        }
        if (contactsCount === 5) {
          const showContactsBtn = document.createElement('button');
          showContactsBtn.classList.add('show-contacts-btn');
          showContactsBtn.classList.add('btn-reset');
          showContactsBtn.textContent = `+${contactsList.querySelectorAll('.contacts-list-item').length - 4}`
          contactsList.append(showContactsBtn);

          showContactsBtn.addEventListener('click', function() {
            let afterShowCount = 0;
            contactsList.querySelectorAll('.contacts-list-item').forEach(function (elem) {
              afterShowCount++
              elem.classList.remove('hide-contact')
              if (afterShowCount <= 5) {
                elem.style.marginBottom = '7px'
              }
            });
            showContactsBtn.remove();
          });
        }
      }
    }
  }

  // функция validation() производит валидацию полей формы
  function validation(name, surname, lastName, contacts) {
    let validName = false;
    let validSurname = false;
    let validLastName = false;
    let validContacts = true;

    if (document.querySelector('.validation-errors')) {
      document.querySelector('.validation-errors').remove();
    }

    const validationErrors = document.createElement('div');
    validationErrors.className = 'validation-errors';

    if (surname.length === 0) {
      document.getElementById('floatingSurname').classList.add('invalid');
      const errorMsg = document.createElement('p');
      errorMsg.textContent = 'Необходимо ввести Фамилию';
      validationErrors.append(errorMsg);
    } else if (surname.length < 3) {
      document.getElementById('floatingSurname').classList.add('invalid');
      const errorMsg = document.createElement('p');
      errorMsg.textContent = 'В фамилии должно быть минимум 3 буквы';
      validationErrors.append(errorMsg);
    } else {
      validSurname = true;
    }
    if (name.length === 0) {
      document.getElementById('floatingName').classList.add('invalid');
      const errorMsg = document.createElement('p');
      errorMsg.textContent = 'Необходимо ввести Имя';
      validationErrors.append(errorMsg);
    } else if (name.length < 2) {
      document.getElementById('floatingName').classList.add('invalid');
      const errorMsg = document.createElement('p');
      errorMsg.textContent = 'В имени должно быть минимум 2 буквы';
      validationErrors.append(errorMsg);
    } else {
      validName = true;
    }
    if (lastName.length !== 0 && lastName.length < 3) {
      document.getElementById('floatingLastName').classList.add('invalid');
      const errorMsg = document.createElement('p');
      errorMsg.textContent = 'В отчестве должно быть минимум 3 буквы';
      validationErrors.append(errorMsg);
    } else {
      validLastName = true;
    }

    if (contacts.length > 0) {
      let contactNum = -1;
      const inputGroup = document.querySelectorAll('.input-group');
      console.log(inputGroup)
      for (let contact of contacts) {
        contactNum++;
        console.log(inputGroup[contactNum])

        if (contact.value.length > 0) {
          if (contact.type === 'Телефон') {
            const regex = /^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
            if (!regex.test(contact.value)) {
              const errorMsg = document.createElement('p');
              errorMsg.textContent = 'Телефон введён неверно';
              validationErrors.append(errorMsg);
              validContacts = false;
            } else {
              validContacts = true;
            }
          }
          if (contact.type === 'Email') {
            const regex = /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i;
            if (!regex.test(contact.value)) {
              const errorMsg = document.createElement('p');
              errorMsg.textContent = 'Почта введёна неверно';
              validationErrors.append(errorMsg);
              validContacts = false;
            } else {
              validContacts = true;
            }
          }
          if (contact.type === 'VK') {
            if (!contact.value.includes('vk.com/id')) {
              const errorMsg = document.createElement('p');
              errorMsg.textContent = 'Ссылка VK введёна неверно';
              validationErrors.append(errorMsg);
              validContacts = false;
            } else {
              validContacts = true;
            }
          }
          if (contact.type === 'Facebook') {
            if (!contact.value.includes('facebook.com')) {
              const errorMsg = document.createElement('p');
              errorMsg.textContent = 'Ссылка Facebook введёна неверно';
              validationErrors.append(errorMsg);
              validContacts = false;
            } else {
              validContacts = true;
            }
          }
        } else {
          const errorMsg = document.createElement('p');
          if (contact.value === '') {
            inputGroup[contactNum].classList.add('invalid');
            errorMsg.textContent = `Необходимо ввести ${contact.type}`;
          }
          validationErrors.append(errorMsg);
          validContacts = false;
        }
      }
    }

    document.querySelector('.popup__box-form-contacts').after(validationErrors);
    document.querySelector('.popup-main-btn').style.marginTop = '0';

    if (validName === true && validSurname === true && validLastName === true && validContacts === true) {
      return true
    }
  }

  // функция changeClient() открывает модальное окно выбранного клиента
  // аргументы:
  // id - ID клиента
  async function changeClient(id) {
    popupBoxMain();

    (document.getElementById(id)).children[0].parentNode.replaceChild(changeBtnSpinner, (document.getElementById(id)).children[0])
    document.getElementById(id).classList.add('active');

    document.querySelector('.popup__box-title').innerHTML = `Изменить данные<span>ID: ${window.location.hash.slice(-6)}</span>`;
    document.querySelector('.popup-main-btn').textContent = 'Сохранить';
    document.querySelector('.popup-secondary-btn').textContent = 'Удалить клиента';

    let clientDbData = await dbGet(window.location.hash.slice(1));

    openPopup();
    document.getElementById('floatingSurname').value = clientDbData.surname;
    document.getElementById('floatingName').value = clientDbData.name;
    document.getElementById('floatingLastName').value = clientDbData.lastName;

    if (clientDbData.contacts.length === 10) {
      document.querySelector('.add-contact-btn').style.display = 'none';
    }

    for (let contact of clientDbData.contacts) {
      popupBoxAddContact(contact.type, contact.value);
    }

    (document.getElementById(id)).children[0].parentNode.replaceChild(new DOMParser().parseFromString(changeClientIcon, "text/xml").children[0], (document.getElementById(id)).children[0])
    document.getElementById(id).classList.remove('active');

    document.querySelector('.popup-main-btn').addEventListener('click', async function () {
      const [nameData, surnameData, lastNameData, contactsData] = clientData();
      if (validation(nameData, surnameData, lastNameData, contactsData)) {
        document.querySelector('.popup-main-btn').prepend(mainBtnSpinner);
        await dbPatch(window.location.hash.slice(1), nameData, surnameData, lastNameData, contactsData)
        mainBtnSpinner.remove();

        actionClosePopup();

        document.getElementById('tbody').append(tableSpinner);
        await renderClientTable(await dbGet());
        tableSpinner.remove();
      }
    });

    document.querySelector('.popup-secondary-btn').addEventListener('click', async function () {
      await dbDelete(window.location.hash.slice(1));

      actionClosePopup();

      document.getElementById('tbody').append(tableSpinner);
      await renderClientTable(await dbGet());
      tableSpinner.remove();
    });
    closePopup();
  }

  // обработчик клика на кнопку add-client-btn (Добавить клиента)
  document.querySelector('.add-client-btn').addEventListener('click', function() {
    popupBoxMain();
    document.querySelector('.popup__box-title').textContent = 'Новый клиент';
    document.querySelector('.popup-main-btn').textContent = 'Сохранить';
    document.querySelector('.popup-secondary-btn').textContent = 'Отмена';
    document.querySelector('.popup-secondary-btn').classList.add('cancel');

    openPopup();

    document.querySelector('.popup-main-btn').addEventListener('click', async function () {
      const [nameData, surnameData, lastNameData, contactsData] = clientData();
      if (validation(nameData, surnameData, lastNameData, contactsData)) {
        document.querySelector('.popup-main-btn').prepend(mainBtnSpinner);
        await dbPost(nameData, surnameData, lastNameData, contactsData);
        mainBtnSpinner.remove();

        actionClosePopup();

        document.getElementById('tbody').append(tableSpinner);
        await renderClientTable(await dbGet());
        tableSpinner.remove();
      }
    });

    closePopup();
  });

  // обработчик кнопок change-client-btn (Изменить) и delete-client-btn (Удалить)
  const container = document.querySelector('tbody')
  container.addEventListener('click', async function(event) {
    if (event.target.matches('button')) {
      if (event.target.classList.contains('change-client-btn')) {
        window.location.hash = event.target.id;
      }

      if (event.target.classList.contains('delete-client-btn')) {
        popupBoxMain();

        event.target.children[0].parentNode.replaceChild(deleteBtnSpinner, event.target.children[0]);
        event.target.classList.add('active');

        const clientDbData = await dbGet(event.target.id);

        document.querySelector('#popup__box-form').remove();
        document.querySelector('.popup__box-container').style.alignItems = 'center';
        document.querySelector('.popup__box-title').innerHTML = `Удалить клиента<span>ID: ${event.target.id.slice(-6)}</span>`;
        if (clientDbData.lastName) {
          document.querySelector('.popup__box-title').insertAdjacentHTML('afterend',
          `<p>Вы действительно хотите удалить клиента ${clientDbData.surname} ${clientDbData.name} ${clientDbData.lastName}?</p>`);
        } else {
          document.querySelector('.popup__box-title').insertAdjacentHTML('afterend',
          `<p>Вы действительно хотите удалить клиента ${clientDbData.surname} ${clientDbData.name}?</p>`);
        }
        document.querySelector('.popup-main-btn').textContent = 'Удалить';
        document.querySelector('.popup-secondary-btn').textContent = 'Отмена';
        document.querySelector('.popup-secondary-btn').classList.add('cancel');

        openPopup();
        event.target.children[0].parentNode.replaceChild(new DOMParser().parseFromString(deleteClientIcon, "text/xml").children[0], event.target.children[0]);
        event.target.classList.remove('active');

        document.querySelector('.popup-main-btn').addEventListener('click', async function () {
          await dbDelete(event.target.id);

          actionClosePopup();

          document.getElementById('tbody').append(tableSpinner);
          await renderClientTable(await dbGet());
          tableSpinner.remove();
        });
        closePopup();
      }
    }
  });

  // обработчик события изменения hash страницы
  window.addEventListener('hashchange', function(e) {
    if (window.location.hash !== '') {
      if (document.getElementById('client-popup')) {
        document.getElementById('client-popup').classList.remove('open');
        setTimeout(function () {
          document.querySelector('.popup').remove();
        }, 810);
        setTimeout(function () {
          changeClient(window.location.hash.slice(1));
        }, 820);
      } else {
        changeClient(window.location.hash.slice(1));
      }
    }

  }, false);

  // при переходе по ссылке с указанным hash, открыть модальное окно нужного клиента
  let hash = document.location.hash;
  if (hash) {
    await changeClient(hash.slice(1));
  }
});

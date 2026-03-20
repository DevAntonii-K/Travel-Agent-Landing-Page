//  DATEPICKER
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import localeUk from 'air-datepicker/locale/uk';

export const initDatePicker = () => {
    const dateInput = document.querySelector('#datepicker-input');

    if (!dateInput) return; // Захист від помилок, якщо інпута немає на сторінці

    new AirDatepicker(dateInput, {
        locale: localeUk,
        autoClose: true,
        minDate: new Date(),
        dateFormat: 'dd MMMM yyyy',
        buttons: ['today'],
        onSelect({ date }) {
            console.log('Обрана дата:', date);
        }
    });
};


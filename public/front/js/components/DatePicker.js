import BaseWidget from './BaseWidget.js';
import { settings, select } from '../settings.js';
import utils from '../utils.js';
/* global flatpickr*/

class DatePicker extends BaseWidget {
    constructor(wrapper) {
        super(wrapper, utils.dateToStr(new Date()));

        const thisWidget = this;

        thisWidget.dom.input = thisWidget.dom.wrapper.querySelector(select.widgets.datePicker.input);

        thisWidget.initPlugin();
    }

    initPlugin() {
        const thisWidget = this;

        thisWidget.minDate = new Date(thisWidget.value);
        thisWidget.maxDate = utils.addDays(thisWidget.minDate, settings.datePicker.maxDaysInFuture);

        flatpickr(thisWidget.dom.input, {

            defaultDate: thisWidget.minDate,
            minDate: thisWidget.minDate,
            maxDate: thisWidget.maxDate,

            disable: [
                function (date) {

                    return (date.getDay() === 1);
                }
            ],

            locale: {
                'firstDayOfWeek': 1
            },

            onChange: function (selectedDates, dateStr) {

                thisWidget.value = dateStr;
            }
        });
    }

    parseValue(value) {
        return value;
    }

    isValid() {
        return true;
    }

    renderValue() {

    }
}

export default DatePicker;
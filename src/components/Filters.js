import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import moment from 'moment'
import DayPicker, { DateUtils } from "react-day-picker"

import 'react-select/dist/react-select.css'
import 'react-day-picker/lib/style.css';

const weekdaysLong = {
    // Make sure you start with the right day of the week!
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
};
const weekdaysShort = {
    // Idem
    ru: ['По', 'Вт', 'Ср', 'Че', 'Пя', 'Су', 'Во'],
    en: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
};
const months = {
    ru: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'ноябрь', 'Декабрь'],
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
};
const firstDayOfWeek = {
    ru: 1,
    en: 0,
};

moment.lang('ru');

const localeUtils = {
    formatDay: (d, locale = 'en') =>
      `${weekdaysLong[locale][d.getDay()]}, ${d.getDate()} ${months[locale][d.getMonth()]} ${d.getFullYear()}`,
    formatWeekdayShort: (index, locale = 'en') => weekdaysShort[locale][index],
    formatWeekdayLong: (index, locale = 'en') => weekdaysLong[locale][index],
    getFirstDayOfWeek: (locale) => firstDayOfWeek[locale],
    getMonths: (locale) => months[locale],
    formatMonthTitle: (d, locale) => `${months[locale][d.getMonth()]} ${d.getFullYear()}`,
};


class Filters extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    state = {
        locale: 'ru',
        isSelectingLastDay: false,
        from: null,
        to: null
    }

    handleChange = selected => this.setState({ selected })

    handleDayClick(e, day) {
        const { from, isSelectingLastDay } = this.state;
        // Enable day selection on mouse enter
        if (!isSelectingLastDay) {
            this.setState({
                isSelectingLastDay: true,
                from: day,
                to: null,
            });
        }
        if (isSelectingLastDay && from && day < from) {
            // Reset the from-day if the clicked day is before the current from-day
            this.setState({
                from: day,
                to: null,
            });
        }
        if (isSelectingLastDay && DateUtils.isSameDay(day, from)) {
            // Reset everything if the clicked day is the same as the current from-day
            this.reset();
        }
        if (isSelectingLastDay) {
            // Unset the day selection on mouse enter
            this.setState({
                isSelectingLastDay: false,
            });
        }
    }

    handleDayMouseEnter(e, day) {
        const { isSelectingLastDay, from } = this.state;
        if (!isSelectingLastDay || (from && day < from) || DateUtils.isSameDay(day, from)) {
            return;
        }
        this.setState({
            to: day,
        });
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        const { locale, from, to } = this.state;

        return (
            <div>
                <Select
                    options = {options}
                    value = {this.state.selected}
                    onChange = {this.handleChange}
                    multi={true}
                />
                <div>
                    <DayPicker
                      ref="daypicker"
                      locale={ locale }
                      localeUtils={ localeUtils }
                      numberOfMonths={ 2 }
                      fromMonth={ from }
                      selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                      disabledDays={ day => this.state.from && day < this.state.from }
                      modifiers={ {
                        from: day => DateUtils.isSameDay(day, from),
                        to: day => DateUtils.isSameDay(day, to),
                      } }
                      onDayClick={ ::this.handleDayClick }
                      onDayMouseEnter={ ::this.handleDayMouseEnter }
                    />
                    { !from && !to && <p>Выберите <strong>первый день</strong>.</p> }
                    { from && !to && <p>Выберите <strong>последний день</strong>.</p> }
                    { from && to &&
                    <p>
                        С { moment(from).format('LL') } по { moment(to).format('LL') } надо играть в лоттерею.
                    </p>
                    }
                </div>
            </div>
        )
    }
}

export default Filters
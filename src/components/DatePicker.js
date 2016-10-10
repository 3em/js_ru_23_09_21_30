import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { dateFilterValue } from '../AC/filter'
import { connect } from 'react-redux'

import 'react-day-picker/lib/style.css';

class DatePicker extends Component {

    handleDayClick = (e, day) => {
        const {date, dateFilterValue} = this.props
        const range = DateUtils.addDayToRange(day, date)
        dateFilterValue(range);
    }

    render() {
        const { from, to } = this.props.date;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
          <div className="date-range">
              <DayPicker
                ref="daypicker"
                selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                onDayClick={ this.handleDayClick }
              />
              {selectedRange}
          </div>
        );
    }

}

export default connect(state => ({
    date: state.filterDate
}),{dateFilterValue})(DatePicker)
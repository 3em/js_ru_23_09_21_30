import React, { Component, PropTypes } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import { selectFilterValue } from '../AC/filter'
import { connect } from 'react-redux'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
        // какой Props для null
        //filters: PropTypes.object.isRequired
    };

    handleChange = selected => {
        this.props.selectFilterValue(selected)
    }

    render() {
        const { articles, filters } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={filters}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect(state => ({
    articles: state.articles,
    filters: state.filterSelect
}),{selectFilterValue})(SelectFilter)
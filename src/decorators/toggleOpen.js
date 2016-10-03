// decorator === HOC === Higher Order Component
import React, {PropTypes} from 'react'

export default function toggleOpen(Component) {
    return class WrapperComponent extends React.Component {
        static PropTypes = {
            comments: PropTypes.array
        }

        state = {
            isOpen: false
        }

        toggleOpen = ev => {
            ev.preventDefault()
            this.setState({
                isOpen: !this.state.isOpen
            })
        }



        render() {
            return <Component {...this.props} {...this.state} toggleOpen = {this.toggleOpen}/>
        }
    }
}
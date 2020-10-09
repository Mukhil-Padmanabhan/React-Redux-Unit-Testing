import React from 'react';
import "./styles.scss";
import PropTypes from 'prop-types'

class HeadLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dummy: false
        }
    }

    componentWillMount() {
        const windowAlias = window.testing;
        console.log("testingGlobals", windowAlias)
    }

    

    componentDidMount() {
        if ( this.props && this.props && this.props.dispatch)
        this.props.dispatch();
        
    }

    render() {
        const { header, desc } = this.props;
        if (!header) {
            return null
        }
        return (
            <div data-test="HeadLineComponent">
                <h1 data-test="header">
                    {header}
                </h1>
                <p data-test="descWrapper">
                    {desc}
                </p>
            </div>
        )
    }
}

HeadLine.propTypes = {
    header: PropTypes.string,
    desc: PropTypes.string,
    dispatch: PropTypes.func,
    tempArr: PropTypes.arrayOf(PropTypes.shape({
        fName: PropTypes.string,
        lName:PropTypes.string,
        email: PropTypes.string,
        age:PropTypes.number,
        onlineStatus: PropTypes.string.bool
    }))
}

export default HeadLine
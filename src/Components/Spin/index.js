import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    spinVisible: state.spinVisible
})

const Spin = ({ spinVisible }) => {

    return(
        <div className="spin" style={spinVisible ? {display: 'flex'} : {display: 'none'}}>
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
}
export default connect(mapStateToProps)(Spin);
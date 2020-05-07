import React from 'react';
import Toast from 'react-bootstrap/Toast';
import { connect } from 'react-redux';

function toggleToast (flag) {
    return {
        type: 'TOOGLE_TOAST',
        showToast: flag
    }
}

const Toaster = ({ state, dispatch }) => {
    
    return (
        <div>
            <Toast onClose={() => dispatch(toggleToast(false))} show={state.toastShow} delay={3000} autohide>
                <Toast.Body><strong>Este item não está na lista</strong></Toast.Body>
            </Toast>
        </div>
    )
}

const mapStateToProps = (state) => ({
    state: state
});

export default connect(mapStateToProps)(Toaster);
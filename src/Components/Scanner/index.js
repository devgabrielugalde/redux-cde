import React from 'react';
import BarcodeReader from 'react-barcode-reader';
import { connect } from 'react-redux';

function toggleToast (flag) {
    return {
        type: 'TOGGLE_TOAST',
        showToast: flag
    }
}

const Scanner = ({ state, dispatch }) => {

    function handleScan (code) {
        let find = false;
        let click = '';
        var union = [...new Set([...state.activeItens, ...state.pendingItens])];
        union.forEach(element => {
            if (element.ean === code) {
                find = true;
                click = `button${element.index}`;
            }
        });
        find === true ? document.getElementById(click).click() : dispatch(toggleToast(true));

    }

    return (
        <div>
            <BarcodeReader onError={(error) => {console.log(error)}} onScan={(data) => {handleScan(data)}}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    state: state
})

export default connect(mapStateToProps)(Scanner);
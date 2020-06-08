import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import Item from '../Item/index';

const ActiveItem = ({ state }) => {

    return (
        state.itens.map((item) => {
            return <Item key={item.index} paramModalShow={state.modalShow} index={item.index} url={item.url} cliente={item.cliente} descricao={item.descricao}/>
        })
    )

}

const mapStateToProps = (state) => ({
    state: state
})

export default connect(mapStateToProps)(ActiveItem);
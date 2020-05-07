import React from 'react';
import { useEffect } from "react";
import './body.css';
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TitleItemBox from "../TitleItemBox/index";
import Spin from '../Spin/index';
import ActiveItem from '../ActiveItem/index';
import PendingItem from '../PendingItem/index';
import BarcodeReader from '../Scanner/index';
import Toaster from '../Toast/index';

function setItens (activeItens, pendingItens) {
    return {
        type: 'SET_ITENS',
        activeItens: activeItens,
        pendingItens: pendingItens
    }
}

const Body = ({ activeItens, pendingItens, props, dispatch }) => {    

    useEffect(() => {

        fetch(`http://localhost:9000/${props.content}`).then(results => results.json()).then(data => {
            let arrActiveItens = [];
            let arrPendingItens = [];
            let index = 0;
            data.map((item) => {
                let auxData = new Date(item.data);
                if (auxData.getDay() === new Date().getDay()) {
                    arrActiveItens.push({index: index, id_item: item._id, ean: item.ean, cliente: item.cliente, descricao: item.descricao_produto, url: item.url});
                } else {
                    arrPendingItens.push({index: index, id_item: item._id, ean: item.ean, cliente: item.cliente, descricao: item.descricao_produto, url: item.url});
                }
                index += 1;
                return item
            });
            dispatch(setItens(arrActiveItens, arrPendingItens))
        });
    }, [])
    
    return (
        <Container fluid>
        <Row>
            <Col md={8}>
                <TitleItemBox title={'Entregas'} qtd={activeItens.length}/>
                <ActiveItem list={activeItens}/>
            </Col>
            <Col md={4}>
                <TitleItemBox title={'Notas Pendentes'} qtd={pendingItens.length}/>
                <PendingItem/>
            </Col>
        </Row>
        <Row className="spin-row">
            <Spin/>
        </Row>
        <Row>
            <BarcodeReader/>
        </Row>
        <Row>
            <Toaster/>
        </Row>
    </Container>
    );
};

const mapStateToProps = (state, props) => ({
    activeItens: state.activeItens,
    pendingItens: state.pendingItens,
    props: props
})

// const mapDispatchToProps = dispatch => ({

// })

export default connect(mapStateToProps)(Body);
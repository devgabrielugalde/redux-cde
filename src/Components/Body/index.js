import React from 'react';
import { useEffect } from "react";
import './body.css';
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TitleItemBox from "../TitleItemBox/index";
import Spin from '../Spin/index';
import Item from '../Item/index';
import BarcodeReader from '../Scanner/index';
import Toaster from '../Toast/index';

function setItens (itens) {
    return {
        type: 'SET_ITENS',
        itens: itens
    }
}

const Body = ({ state, props, dispatch }) => {

    useEffect(() => {

        console.log(process.env.REACT_APP_VAR_TEST)

        let opt = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8' 
            },
            body: JSON.stringify({user: "gabriel",pwd: "bemol"})
        }

        fetch(`http://localhost:9000/login`, opt).then(results => results.json()).then(async data => {
            var myHeaders = new Headers();
        
            myHeaders.append("x-access-token", data.token);

            fetch(`http://localhost:9000/${props.content}`, { headers: myHeaders }).then(results => results.json()).then(data => {
                let itens = [];
                let index = 0;
                data.map((item) => {
                    itens.push({index: index, item});
                    index += 1;
                    return item
                });
                dispatch(setItens(itens))
            });
        });
    }, [])
    
    return (
        <Container fluid>
            <Row>
                <Col md={12}>
                    <TitleItemBox title={'Entregas'} qtd={state.itens.length}/>
                    {
                        state.itens.map((row) => {
                            return <Item
                                        key             = {row.index} 
                                        paramModalShow  = {state.modalShow} 
                                        index           = {row.index} 
                                        id_bopis        = {row.item.ID_BOPIS} 
                                        url             = {row.item.url} 
                                        cliente         = {row.item.cliente} 
                                        descricao       = {row.item.descricao_produto}
                                        status          = {row.item.STATUS_PEDIDO_ALMOX}>
                                    </Item>
                        })
                    }
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
    state: state,
    props: props
})

// const mapDispatchToProps = dispatch => ({

// })

export default connect(mapStateToProps)(Body);
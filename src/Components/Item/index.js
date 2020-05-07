import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

const ButtonContent = (params) => {
    return (
        <div className="buttonContent">
            <div className="imgbuttonContent">
                <img alt={params.descricao} src={params.url}></img>
            </div>
            <div className="buttonContentDescription">
                {params.cliente} - {params.descricao}
            </div>
        </div>
    )
}

export default function Item (props) {
    
    const [modalShow, setShow] = useState(props.paramModalShow);
    
    return (
        <div>
            <Button id={'button' + props.index} variant="info" className="pendingItem" onClick={() => setShow(true)}>
                <ButtonContent url={props.url} cliente={props.cliente} descricao={props.descricao}/>
            </Button>

            <Modal show={modalShow} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Detalhes</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Olá, esse é o produto do {props.cliente}.<br></br>
                    Ele comprou um {props.descricao}<br></br>
                    <Image alt={props.descricao} src={props.url} fluid />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Entregar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
    
}

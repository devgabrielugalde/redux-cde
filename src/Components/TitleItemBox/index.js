import React from 'react';
import './style.css';

export default function TitleItemBox(params) {
    return (
        <div className="mainActive">
            <div>{params.title}</div>
            <div>{params.qtd}</div>
        </div>
    )
}
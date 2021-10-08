// Write your Character component here
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

const StyledBar = styled.div`
display: flex;
width: 100%;
justify-content:center;
margin-top: 20px;
font-size: 3rem;

.top{
    display: flex;
    justify-content: space-between;
    width: 110%;
    border: 2px solid #c2b280;
}
`

export default function Character (props) {
    const [displayOn, setDisplayOn] = useState(false)

return (
    <StyledBar>
    <nav className = 'NavBarItems'>
        <div className = 'top'><h1 className = 'navbar-logo'>{props.data.name}</h1>
        <div className= 'fas fa-bars' onClick={()=> displayOn === false ? setDisplayOn(true) : setDisplayOn(false)}>
        </div></div>
        {displayOn && <ul>
            <li>Gender: {props.data.gender}</li>
            <li>Height: {props.data.height}</li>
            <li>Mass: {props.data.mass}</li>
            <li>Birth Year: {props.data.birth_year}</li>
            <li>Eye Color: {props.data.eye_color}</li>
            <li>Hair Color: {props.data.hair_color}</li>
        </ul>}
    </nav>
    </StyledBar>
)
}
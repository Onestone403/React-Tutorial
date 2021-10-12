import React from "react";
import { Link } from 'react-router-dom';

//Styles
import { Wrapper, Content } from './BreadCrumb.styles';

function BreadCrumb({ MovieTitle }) {
    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <span>Home</span>
                </Link>
                <span>|</span>
                <span>{MovieTitle}</span>
            </Content>
        </Wrapper>
    )
}

export default BreadCrumb;
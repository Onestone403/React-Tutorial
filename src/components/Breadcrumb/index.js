import React from "react";
import PropTypes from 'prop-types';
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

BreadCrumb.propTypes ={
    MovieTitle: PropTypes.string
}

export default BreadCrumb;
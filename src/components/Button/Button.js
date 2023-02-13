import React from "react";
import PropTypes from 'prop-types';
import { LoadMoreButton } from "./Button.styled";


const Button = ({onClick, onLoadMoreBtn}) =>{
    
    return (
        <LoadMoreButton  
        type="button" 
        onClick={onClick} 
        disabled = {!onLoadMoreBtn}
        >LoadMore...</LoadMoreButton>
    )
}

export default Button;

Button.propTypes = {
    onLoadMoreBtn: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };


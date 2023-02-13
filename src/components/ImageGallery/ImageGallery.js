import React from "react";
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

const ImageGallery = ({images, onClickImage}) =>{
    return (                                  
        <Gallery>
            {images.map(({id, webformatURL, largeImageURL}) =>(
                <ImageGalleryItem
                key= {id}
                smallImage= {webformatURL}
                largeImageURL= {largeImageURL}
                onClickImage= {onClickImage}
                />      
            ))}  
        </Gallery>        
    )   
}

export default ImageGallery;

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClickImage: PropTypes.func.isRequired,
  };

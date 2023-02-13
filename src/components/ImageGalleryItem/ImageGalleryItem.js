import React from "react";
import PropTypes from 'prop-types';
import { GalleryImage, GalleryItem } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({smallImage, largeImageURL, onClickImage}) => {
    return (
      <GalleryItem onClick={()=> onClickImage(largeImageURL)}>
        <GalleryImage src={smallImage} alt="small" />
      </GalleryItem>
    )
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  smallImage: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClickImage: PropTypes.func.isRequired,
};

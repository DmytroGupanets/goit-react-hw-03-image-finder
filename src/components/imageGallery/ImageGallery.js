import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ pictures, toggleModal }) => {
  return (
    <ul className="ImageGallery">
      {pictures.map((picture) => (
        <ImageGalleryItem
          key={picture.id}
          {...picture}
          toggleModal={toggleModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  pictures: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default ImageGallery;

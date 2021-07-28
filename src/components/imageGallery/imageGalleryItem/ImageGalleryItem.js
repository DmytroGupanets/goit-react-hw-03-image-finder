import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({
  webformatURL,
  tags,
  largeImageURL,
  toggleModal,
}) => {
  const onImgClick = () => {
    toggleModal(largeImageURL, tags);
  };

  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={onImgClick}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

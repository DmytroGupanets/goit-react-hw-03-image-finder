import React, { Component } from "react";

import ImageGallery from "./imageGallery/ImageGallery";
import Searchbar from "./searchbar/Searchbar";
import Modal from "./modal/Modal";
import Button from "./button/Button";

import fetchPicturesApi from "../services/pixabayApi";
import Loader from "react-loader-spinner";

class App extends Component {
  state = {
    pictures: [],
    searchQuery: "",
    currentPage: 1,
    showModal: false,
    originalPictureSize: "",
    originalPictureTag: "",
    loaderVisible: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPictures();
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  onFormSubmit = (query) => {
    this.setState({ searchQuery: query, currentPage: 1, pictures: [] });
  };

  fetchPictures = () => {
    const { searchQuery, currentPage } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ loaderVisible: true });

    fetchPicturesApi(options)
      .then((response) =>
        this.setState((prevState) => ({
          pictures: [...prevState.pictures, ...response],
          currentPage: prevState.currentPage + 1,
        }))
      )
      .catch(console.log)
      .finally(() => this.setState({ loaderVisible: false }));
  };

  toggleModal = (url, tag) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      originalPictureSize: url,
      originalPictureTag: tag,
    }));
  };

  render() {
    const { pictures, originalPictureSize, originalPictureTag, loaderVisible } =
      this.state;
    const shouldRenderShowMoreButton = pictures.length > 0;

    return (
      <>
        <Searchbar onSubmit={this.onFormSubmit} />
        <ImageGallery pictures={pictures} toggleModal={this.toggleModal} />
        {shouldRenderShowMoreButton && (
          <Button loadMore={this.fetchPictures}>
            {loaderVisible ? (
              <Loader type="ThreeDots" color="#FFFFFF" height={18} width={30} />
            ) : (
              <span>Load more</span>
            )}
          </Button>
        )}

        {this.state.showModal && (
          <Modal
            url={originalPictureSize}
            alt={originalPictureTag}
            toggleModal={this.toggleModal}
          />
        )}
      </>
    );
  }
}

export default App;

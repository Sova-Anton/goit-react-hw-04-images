// import PropTypes from 'prop-types';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';
import { ModalImage } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => {
      return {
        isModalOpen: !isModalOpen,
      };
    });
  };

  render() {
    const { tags, webformatURL, largeImageURL } = this.props;
    const { toggleModal } = this;
    const { isModalOpen } = this.state;
    return (
      <>
        <GalleryItem onClick={toggleModal}>
          <GalleryItemImage src={webformatURL} alt={tags} />
        </GalleryItem>
        {isModalOpen && (
          <ModalImage toggleModal={toggleModal} >
            <img src={largeImageURL} alt={tags}/>
          </ModalImage>
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
   webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
}
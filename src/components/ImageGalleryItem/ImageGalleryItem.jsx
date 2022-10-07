// import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.styled";

export function ImageGalleryItem({tags, webformatURL, largeImageURL}) {
  return (
    <GalleryItem >
      <GalleryItemImage src={webformatURL} alt={tags} />
    </GalleryItem>
  );
}

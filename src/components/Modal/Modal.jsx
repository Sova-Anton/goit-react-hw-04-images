import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Overlay, Modal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function ModalImage({ toggleModal, children }) {
  useEffect(() => {
    const onEscapeClick = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', onEscapeClick);

    return () => {
      window.removeEventListener('keydown', onEscapeClick);
    };
  }, [toggleModal]);

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return createPortal(
    <Overlay onClick={onBackdropClick}>
      <Modal>{children}</Modal>
    </Overlay>,
    modalRoot
  );
}

ModalImage.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

// export class ModalImage extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.onEscapeClick);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.onEscapeClick);
//   }

//   onEscapeClick = e => {
//     if (e.code === 'Escape') {
//       this.props.toggleModal();
//     }
//   };

//   onBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.toggleModal();
//     }
//   };

//   render() {
//     return createPortal(
//       <Overlay onClick={this.onBackdropClick}>
//         <Modal>{this.props.children}</Modal>
//       </Overlay>,
//       modalRoot
//     );
//   }
// }

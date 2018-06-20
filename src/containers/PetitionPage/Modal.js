import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#___gatsby');

const customStyles = {
  overlay: {
    background: 'rgba(0, 0, 0, 0.7)',
    zIndex: 99,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    border: 'none',
    overflow: 'visible',
  },
};

export default (props) => (
  <ReactModal
    style={customStyles}
    shouldCloseOnEsc={false}
    shouldCloseOnOverlayClick={false}
    {...props}
  />
);

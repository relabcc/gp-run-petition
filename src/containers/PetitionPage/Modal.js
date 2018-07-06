import React, { PureComponent } from 'react';
import ReactModal from 'react-modal';

import disableScroll from '../../utils/disable-scroll';

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

export default class Modal extends PureComponent {
  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      if (this.props.isOpen) {
        disableScroll.on(document.body, { whitelist: [this.modalEle] });
      } else {
        disableScroll.off();
      }
    }
  }

  handleRef = ({ node }) => {
    this.modalEle = node;
  }

  render() {
    return (
      <ReactModal
        style={customStyles}
        shouldCloseOnEsc={false}
        shouldCloseOnOverlayClick={false}
        ref={this.handleRef}
        {...this.props}
      />
    );
  }
}

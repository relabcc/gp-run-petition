import React, { PureComponent } from 'react';
import ReactModal from 'react-modal';
import scroll from 'window-scroll';

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
        this.freeze();
      } else {
        this.unfreeze();
      }
    }
  }

  freeze = () => {
    this.scrollY = scroll.getScrollY();
    document.body.style.setProperty('position', 'fixed');
    document.body.style.setProperty('top', `-${this.scrollY}px`);
  }

  unfreeze = () => {
    document.body.style.setProperty('position', 'static');
    document.body.style.setProperty('top', 'auto');
    window.scrollTo(0, this.scrollY);
  }

  handleRef = ({ node }) => {
    this.modalEle = node;
  }

  render() {
    return (
      <ReactModal
        style={customStyles}
        shouldCloseOnOverlayClick={false}
        shouldCloseOnEsc={false}
        ref={this.handleRef}
        {...this.props}
      />
    );
  }
}

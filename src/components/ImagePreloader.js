import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import chunk from 'lodash/chunk';
import Box from './Box';
import Text from './Text';
import Runner from './Runner';

class Preloader extends PureComponent {
  static getDerivedStateFromProps({ images }) {
    return {
      itemsCount: images.length,
    };
  }

  state = {
    loadedCount: 0,
  }

  componentDidMount() {
    const { perBatch, images } = this.props;
    Promise.all(chunk(images, perBatch).map(this.loadBatch))
      .then(this.handleLoaded);
  }

  handleLoaded = () => {
    const { onLoaded } = this.props;
    if (onLoaded) onLoaded();
    this.setState({ loaded: true });
  }

  loadBatch = (srcs) => Promise.all(srcs.map(this.loadImage))

  loadImage = (src) => new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      this.setState({
        loadedCount: this.state.loadedCount + 1,
      });
      resolve();
    };
    img.onerror = (error) => {
      console.error(error);
      resolve();
    };
    img.src = src;
  })

  render() {
    const { loaded, loadedCount, itemsCount } = this.state;
    if (loaded) return this.props.children;
    return (
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="orange"
      >
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          w="20em"
        >
          <Runner animate />
          <Text
            f="1.25em"
            fontWeight="bold"
            textAlign="center"
            mt="1em"
          >
            Loading...{Math.ceil((loadedCount / itemsCount) * 100)}%
          </Text>
        </Box>
      </Box>
    );
  }
}

Preloader.propTypes = {
  perBatch: PropTypes.number,
  images: PropTypes.array,
  onLoaded: PropTypes.func,
};

Preloader.defaultProps = {
  perBatch: 5,
};

export default polyfill(Preloader);

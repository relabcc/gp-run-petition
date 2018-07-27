import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withContentRect } from 'react-measure';

import Box from './Box';

class VerticalCenter extends PureComponent {
  componentDidMount() {
    this.props.measure();
  }

  render() {
    const {
      children,
      measure,
      measureRef,
      contentRect: { bounds: { height } },
      ...props
    } = this.props;
    const shouldCenter = typeof window !== 'undefined' && window.innerHeight > height;
    // const shouldCenter = 1;
    // console.log(window.innerHeight, height);
    return (
      <Box
        position="relative"
        height="100%"
        {...props}
      >
        <Box
          position={shouldCenter && 'absolute'}
          top={shouldCenter ? '50%' : 0}
          w={1}
          transform={shouldCenter && 'translateY(-50%)'}
          innerRef={measureRef}
        >
          {children}
        </Box>
      </Box>
    );
  }
}

VerticalCenter.propTypes = {
  children: PropTypes.node,
  measure: PropTypes.func,
  measureRef: PropTypes.func,
  contentRect: PropTypes.object,
};

export default withContentRect('bounds')(VerticalCenter);

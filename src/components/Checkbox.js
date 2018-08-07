import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Box from './Box';
import Text from './Text';

const Input = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const LabelBox = Box.extend`
  cursor: pointer;
  padding-left: 2em;
  display: flex;
  position: relative;
  .checkmark {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 1.1em;
    width: 1.1em;
    font-size: 1.25em;
    box-sizing: border-box;
    border: 2px solid black;
    &:after {
      opacity: 0;
      content: "";
      position: absolute;
      left: 0;
      right:0;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 0.1em;
      height: 0.1em;
      background: transparent;
      box-sizing: content-box;
      transition: all 0.25s ease;
      width: 0.25em;
      height: 0.5em;
      border: solid black;
      border-width: 0 0.125em 0.125em 0;
      transform: rotate(45deg) translateY(-1px) translateX(-1px);
      box-sizing: content-box;
    }
  }
  input:checked + .checkmark {
    &:after {
      display: block;
      width: 0.25em;
      height: 0.5em;
      opacity: 1;
    }
  }
`;

function Checkbox({
  children,
  name,
  error,
  onChange,
  ...props
}) {
  return (
    <LabelBox is="label" align="flex-start" {...props}>
      <Box>
        <Input onChange={onChange} name={name} />
        <span className="checkmark" />
      </Box>
      <Box flex="1">
        {children}
        {error && <Text color="orange" fontSize="0.8em" position="absolute" left="1em" bottom="-2em">{error}</Text>}
      </Box>
    </LabelBox>
  );
}


Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
};

export default Checkbox;


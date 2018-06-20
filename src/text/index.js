import get from 'lodash/get';
import template from 'lodash/template';
import petition from './petition';
import placeholder from './placeholder';
import validation from './validation';

const messages = {
  petition,
  placeholder,
  validation,
};

export default (id, values) => {
  const message = get(messages, id, '');
  if (values && message) {
    return template(message)(values);
  }
  return message;
};

import { PureComponent, createElement } from 'react';

import toPairs from 'lodash/toPairs';
import snakeCase from 'lodash/snakeCase';

import request from '../../utils/request';

const API_ENDPOINT = 'https://act.greenpeace.org/page/widget/230312';
const SUBMIT_ENDPOINT = 'https://act.greenpeace.org/page/26316/petition/2';

export default (SubComp) => {
  class WithData extends PureComponent {
    state = {
      data: {},
    }

    componentWillMount() {
      this.request();
    }

    request = (params) => {
      this.setState({ isLoading: true });
      request(API_ENDPOINT).then((res) => {
        this.setState({ isLoading: false, data: JSON.parse(res.jsonContent) });
      }).catch((error) => {
        console.error(error);
        this.setState({ isLoading: false, error });
      });
    }

    submit = (data) => {
      this.setState({ isLoading: true });
      const formData = new FormData();
      formData.set('owned_taiwan', 'TW');
      toPairs(data).forEach(([key, value]) => formData.set(snakeCase(key), value));
      return request(SUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData,
      }).then(() => {
        this.setState({ isLoading: false });
      }).catch((error) => {
        console.error(error);
        this.setState({ isLoading: false, error });
      });
    }

    render() {
      return createElement(SubComp, {
        ...this.props,
        ...this.state,
        submitForm: this.submit,
      });
    }
  }
  return WithData;
};

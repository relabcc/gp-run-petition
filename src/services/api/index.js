import { PureComponent, createElement } from 'react';
import uuidv1 from 'uuid/v1';
import queryString from 'query-string';

import request from '../../utils/request';

const API_ENDPOINT = 'https://act.greenpeace.org/page/widget/230312';
const SUBMIT_ENDPOINT = 'https://act.greenpeace.org/page/26316/petition/2';

export default (SubComp) => {
  class WithData extends PureComponent {
    state = {
      data: {},
    }

    componentDidMount() {
      this.request();
      this.uuid = uuidv1().replace(/-/g, '');
    }

    request = () => {
      this.setState({ isLoading: true });
      request(API_ENDPOINT).then((res) => {
        this.setState({ isLoading: false, data: res });
      }).catch((error) => {
        console.error(error);
        this.setState({ isLoading: false, error });
      });
    }

    submit = (data) => {
      this.setState({ isLoading: true });
      data['supporter.NOT_TAGGED_28'] = 'TW';
      data['supporter.NOT_TAGGED_6'] = `01/01/${data['supporter.NOT_TAGGED_6']}`;
      data.sessionId = `${this.uuid}-server10228`;
      return request(SUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: queryString.stringify(data),
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
        updateStat: this.request,
      });
    }
  }
  return WithData;
};

import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import injectReducer from '../../utils/injectReducer';
import reducer, { setAnswer } from './reducer';

const mapStateToProps = (state) => ({
  answers: state.getIn(['questions', 'answers']).toJS() || [],
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setAnswer,
}, dispatch);

export const withReducer = injectReducer({ key: 'questions', reducer });

export const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withReducer, withConnect);

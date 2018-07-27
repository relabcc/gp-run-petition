import { fromJS } from 'immutable';

// action type 用來分辨現在的Action是哪個Action
export const SET_ANSWER = 'App/QuestionPage/SET_ANSWER';

export const setAnswer = (qId, optId) => ({
  type: SET_ANSWER,
  qId,
  optId,
});

const initialState = fromJS({
  answers: [],
});

export default function QuestionReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ANSWER:
      return state.setIn(['answers', action.qId], action.optId);
    default:
      return state;
  }
}

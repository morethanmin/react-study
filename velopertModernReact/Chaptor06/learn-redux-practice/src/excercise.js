import { createStore } from "redux";

const initialState = {
  counter: 0,
  text: "",
  list: [],
};

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

function increase() {
  return {
    type: INCREASE,
  };
}

const decrease = () => ({ type: DECREASE });

const changeText = (text) => ({ type: CHANGE_TEXT, payload: { text: text } });

const addToList = (item) => ({ type: ADD_TO_LIST, payload: { item: item } });

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREASE:
      return { ...state, counter: state.counter + 1 };
    case DECREASE:
      return { ...state, counter: state.counter - 1 };
    case CHANGE_TEXT:
      return { ...state, ...payload };
    case ADD_TO_LIST:
      return { ...state, list: state.list.concat(payload.item) };

    default:
      return state;
  }
};

const store = createStore(reducer);

console.log(store.getState());

// 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);
// 구독을 해제하고 싶을 때는 unsubscribe() 를 호출하면 됩니다.

// 액션들을 디스패치 해봅시다.
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕하세요"));
store.dispatch(addToList({ id: 1, text: "와우" }));

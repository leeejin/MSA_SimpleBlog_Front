import {legacy_createStore as createStore} from "redux";

const loginState={userId:0,nickname:"",postId:null};

function reducer (state=loginState, action)  {
    //console.log('리덕스에서의 값들 = ',action.data);
    switch (action.type) {
        case "Login":
          // 로그인 액션 처리 로직
          return { ...state, userId: action.data.userId, nickname: action.data.nickname, postId: action.data.postId };
        case "Logout":
          // 로그아웃 액션 처리 로직
          return { ...state, userId: 0, nickname: '', postId: action.data.postId };
       
        default:
          return state;
      }
};

export default createStore(reducer);
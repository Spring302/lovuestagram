import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  // 상태 정의
  state() {
    return {
      name: "kim",
      age: 20,
      likes: 30,
      isLikes: false,
      more : {},
    };
  },
  // state를 수정되도록 방법 정의
  mutations: {
    setMore(state, data){
      state.more = data
    },
    이름변경(state) {
      state.name = "park";
    },
    나이변경(state, data) {
      state.age += data;
    },
    좋아요(state) {
      if (!state.isLikes) {
        state.likes++;
        state.isLikes = true;
      } else {
        state.likes--;
        state.isLikes = false;
      }
    },
  },
  // ajax 하는 곳 혹은 오래걸리는 작업들
  actions: {
    getData(store){
      axios.get(`https://codingapple1.github.io/vue/more0.json`).then((res) => {
        console.log(res.data);
        store.commit('setMore', res.data)
      });
    },
  }
});

export default store;

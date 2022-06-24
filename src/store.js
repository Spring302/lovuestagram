import axios from "axios";
import { createStore } from "vuex";
import instaData from "@/assets/instaData";

const store = createStore({
  // 상태 정의
  state() {
    return {
      instaData,
      page: 0,
      step: 0,
      uploadImage: "",
      writeText: "",
      filter: "",
    };
  },
  // state를 수정되도록 방법 정의
  mutations: {
    upload(state, data) {
      state.uploadImage = data;
    },
    setMore(state, data) {
      state.instaData.push(data);
      state.page += 1;
    },
    setFilter(state, data) {
      state.filter = data;
    },
    addPage(state) {
      state.page += 1;
    },
    addStep(state, data) {
      state.step += data;
    },
    publish(state) {
      var myPost = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: state.uploadImage,
        likes: 36,
        date: "May 15",
        liked: false,
        content: state.writeText,
        filter: state.filter,
      };
      state.instaData.unshift(myPost);
      state.step = 0;
      state.uploadImage = "";
      state.writeText = "";
      state.filter = "";
    },
    cancel(state) {
      if (state.step == 1) {
        state.uploadImage = "";
      }
      if (state.step > 0) {
        state.step--;
      }
    },
    write(state, data) {
      state.writeText = data;
    },
  },
  getters: {
    getImageStyle: function (state) {
      return { backgroundImage: `url(${state.uploadImage}` };
    },
  },
  // ajax 하는 곳 혹은 오래걸리는 작업들
  actions: {
    getData(store) {
      axios.get(`https://codingapple1.github.io/vue/more${store.state.page}.json`).then((res) => {
        console.log(res.data);
        store.commit("setMore", res.data);
        store.commit("addPage");
      });
    },
  },
});

export default store;

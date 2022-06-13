<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <h4>안녕 {{ $store.state.name }}</h4>
  <button @click="$store.commit('이름변경')">이름변경</button>
  <h4>{{$store.state.age}}년 동안 수고많았어!</h4>
  <button @click="$store.commit('나이변경', 10)">나이변경</button>
  <p>{{$store.state.more}}</p>
  <button @click="$store.dispatch('getData')">더보기</button>

  <!-- <div><button @click="step = 0">게시글</button><button @click="step = 1">이미지필터선택</button><button @click="step = 2">글작성</button></div> -->
  <Container :filter="filter" :instaData="instaData" :step="step" :uploadImage="uploadImage" @write="작성한글 = $event" />

  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from "@/components/Container.vue";
import instaData from "@/assets/instaData";
import axios from "axios";

export default {
  name: "App",
  components: {
    Container,
  },
  data() {
    return {
      instaData,
      page: 0,
      step: 0,
      uploadImage: "",
      작성한글: "",
      filter: "",
    };
  },
  methods: {
    more() {
      axios.get(`https://codingapple1.github.io/vue/more${this.page}.json`).then((res) => {
        console.log(res.data);
        this.instaData.push(res.data);
        this.page += 1;
      });
    },
    upload(e) {
      let 파일 = e.target.files;
      console.log(파일);
      let url = URL.createObjectURL(파일[0]);
      console.log(url);
      this.uploadImage = url;
      this.step++;
    },
    publish() {
      var myPost = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.uploadImage,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.작성한글,
        filter: this.filter,
      };
      this.instaData.unshift(myPost);
      this.step = 0;
    },
  },
  mounted() {
    this.emitter.on("박스클릭함", (filter) => {
      this.filter = filter;
    });
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>

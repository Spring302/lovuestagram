<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li @click="cancle">Cancel</li>
      </ul>
      <ul class="header-button-right">
        <!-- <li v-if="step == 0">
          <input @change="upload" type="file" id="file" class="inputfile" />
          <label for="file" class="input-plus">글작성</label>
        </li> -->
        <li v-if="step == 0" @click="step++">글작성</li>
        <li v-if="step == 1" @click="step++">Next</li>
        <li v-if="step == 2" @click="publish">발행</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>
    <Container :filter="filter" :instaData="instaData" :step="step" :uploadImage="uploadImage" @write="작성한글 = $event" />
    <div v-if="step == 0" class="footer">
      <ul class="footer-button-plus">
        <label @click="more" class="input-plus">+</label>
      </ul>
    </div>
  </div>
</template>

<script>
import Container from "@/components/Container.vue";
import instaData from "@/assets/instaData";
import axios from "axios";
import { mapMutations, mapState } from "vuex";

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
      카운터: 0,
    };
  },
  methods: {
    ...mapMutations(["setMore", "이름변경", "나이변경", "좋아요"]),
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
    cancle() {
      if (this.step == 1) {
        this.uploadImage = "";
      }
      if (this.step > 0) {
        this.step--;
      }
    },
  },
  //계산절약용. 한번 사용하면 변경 전까지 계산없이 재사용 가능함
  //computed 함수는 return이 반드시 필요하다. 결과 내뱉는게 주 목적
  computed: {
    name() {
      return this.$store.state.name;
    },
    // vuex data computed 로 쉽게 쓰기 (위 함수 축약형)
    ...mapState(["name", "age", "likes"]),
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
  width: 70px;
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

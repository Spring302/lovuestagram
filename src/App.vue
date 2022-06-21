<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li @click="cancel()">Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="step == 0" @click="addStep(1)">글작성</li>
        <li v-if="step == 1 && uploadImage" @click="addStep(1)">Next</li>
        <!-- <li v-if="step == 1 && !uploadImage" @click="publish">발행</li> -->
        <li v-if="step == 2" @click="publish">발행</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>
    <Container />
    <div v-if="step == 0" class="footer">
      <ul class="footer-button-plus">
        <label @click="getData" class="input-plus">+</label>
      </ul>
    </div>
  </div>
</template>

<script>
import Container from "@/components/Container.vue";
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Container,
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["upload", "addStep", "addPage", "publish", "cancel"]),
    ...mapActions(["getData"]),
  },
  computed: {
    ...mapState(["instaData", "page", "step", "uploadImage",]),
  },
};
</script>

<style>
body {
  margin: 0;
}
.header > ul {
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
  height: 50px;
  background-color: white;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
  z-index: 1;
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

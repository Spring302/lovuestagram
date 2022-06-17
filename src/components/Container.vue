<template>
  <div>
    <div v-if="step == 0">
      <div>
        <Post v-for="(data, i) in instaData" :key="i" :data="data" />
      </div>
    </div>
    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
      <div class="border">
        <div class="upload-image" :class="filter" :style="{ backgroundImage: `url(${uploadImage})` }"></div>
        <p class="text-center border">필터</p>
        <div class="filters">
          <FilterBox v-for="(filter, i) in filters" :key="i" :filter="filter" :uploadImage="uploadImage">
            <span class="filter-name">{{ filter }}</span>
          </FilterBox>
        </div>
      </div>
    </div>
    <!-- 글작성페이지 -->
    <div v-if="step == 2">
      <div class="border">
        <div class="upload-image" :class="filter" :style="{ backgroundImage: `url(${uploadImage})` }"></div>
      </div>
      <div class="border">
        <div class="write">
          <textarea v-model="writeText" @input="$emit('write', writeText)" class="write-box" placeholder="문구 입력..."></textarea>
        </div>
      </div>
    </div>
    <div v-if="step == 3">
      <MyPage :one="1" />
    </div>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";
import FilterBox from "@/components/FilterBox.vue";
import MyPage from "@/components/MyPage.vue";

export default {
  components: {
    Post,
    FilterBox,
    MyPage,
  },
  props: {
    instaData: Array,
    step: Number,
    uploadImage: String,
    filter: String,
  },
  data() {
    return {
      writeText: "",
      filters: ["aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
    };
  },
};
</script>

<style>
.upload-image {
  height: 0;
  padding: 0; /* remove any pre-existing padding, just in case */
  padding-bottom: 75%; /* for a 4:3 aspect ratio */
  background-position: center center;
  background-size: 100%;
  background-repeat: no-repeat;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
.filter-name {
  background-color: black;
}
</style>

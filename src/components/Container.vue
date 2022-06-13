<template>
  <div>
    <!-- <div><button @click="step = 0">게시글</button><button @click="step = 1">이미지필터선택</button><button @click="step = 2">글작성</button></div> -->
    <div v-if="step == 0">
      <Post v-for="(data, i) in instaData" :key="i" :data="data"/>
    </div>
    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
      <div class="upload-image" :class="filter" :style="{ backgroundImage: `url(${uploadImage})` }"></div>
      <div class="filters">
        <FilterBox v-for="(filter, i) in filters" :key="i" :filter="filter" :uploadImage="uploadImage">
          <span>{{ filter }}</span>
        </FilterBox>
      </div>
    </div>
    <!-- 글작성페이지 -->
    <div v-if="step == 2">
      <p>이미지:</p>
      <div class="upload-image" :class="filter" :style="{ backgroundImage: `url(${uploadImage})` }"></div>
      <p>내용:</p>
      <div class="write">
        <!-- <textarea @input="$emit('write', $event.target.value)" class="write-box">write!</textarea> -->
        <textarea v-model="writeText" @input="$emit('write', writeText)" class="write-box"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";
import FilterBox from "@/components/FilterBox.vue";

export default {
  components: {
    Post,
    FilterBox,
  },
  props: {
    instaData: Array,
    step: Number,
    uploadImage: String,
    filter: String,
  },
  data() {
    return {
      writeText: "write",
      filters: ["aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
    };
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
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
</style>

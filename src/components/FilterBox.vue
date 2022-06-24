<template>
  <div @click="setFilter(this.filter)" class="filter-item" :class="filter" :style="getImageStyle">
    <slot></slot>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "filterbox",
  props: {
    uploadImage: String,
    filter: String,
  },
  methods: {
    ...mapMutations(["write", "setFilter"]),
  },
  computed: {
    ...mapGetters(["getImageStyle"]),
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>

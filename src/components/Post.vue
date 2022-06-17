<template>
  <div class="post">
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">{{ data.name }}</span>
    </div>
    <div class="post-body" :class="data.filter" :style="{ backgroundImage: `url(${data.postImage})` }" @click="$store.commit('좋아요')"></div>
    <div class="post-content">
      <p>{{ $store.state.likes }} Likes</p>
      <p>
        <strong>{{ data.name }}</strong> {{ data.content }}
      </p>
      <p class="date">{{ data.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    filter: String,
  },
};
</script>

<style>
.post {
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 20px;
  margin: 10px 0;
}
.profile {
  background-image: url("https://placeimg.com/100/100/arch");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 50px;
  padding: 10px;
}
.post-body {
  height: 0;
  padding: 0; /* remove any pre-existing padding, just in case */
  padding-bottom: 75%; /* for a 4:3 aspect ratio */
  background-position: center center;
  background-size: 100%;
  background-repeat: no-repeat;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>

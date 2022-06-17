<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="🔍" v-model="myInput" @input="search(myInput)" />
    <div class="post-header" v-for="(a, i) in follower2" :key="i">
      <div class="profile" :style="{ backgroundImage: `url(${a.image})` }"></div>
      <span class="profile-name">{{ a.name }}</span>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, toRefs, watch } from "vue";
import axios from "axios";
import { useStore } from "vuex";
export default {
  name: "mypage",
  props: {
    one: Number,
  },
  // Composition API를 사용하려면 setup 등록
  // 첫번째 변수는 항상 props, 두번째는 context($attrs, slots, emit 등)
  setup(props, context) {
    let { one } = toRefs(props); //Composition API에서 props 사용하려면 이거 써야함
    // console.log(one.value);
    // console.log(context);

    watch(one, () => {});

    // 모든 데이터를 reference data type으로 감싸야 실시간 반영이 가능하다
    let follower = ref([]);
    let follower2 = ref([]);
    let myInput = ref([]);

    onMounted(() => {
      axios.get("/follower.json").then((a) => {
        //ref데이터에 value로 접근해야 한다.
        follower.value = a.data;
        follower2.value = a.data;
      });
    });

    // let re = computed(() => {
    //   return follower.value.length;
    // });

    // console.log(re.value);

    // let store = useStore();
    // console.log(store);
    // console.log(store.state.name);
    // console.log(store.commit());

    function search(myInput) {
      console.log(follower.value.filter((man) => man.name.includes(myInput)));
      follower2.value = (follower.value.filter((man) => man.name.includes(myInput)));
    }

    let re = computed(() => {
      return follower.value.length;
    });

    return { follower, follower2, myInput, search };
  },
  data() {
    return {};
  },
};
</script>

<style></style>

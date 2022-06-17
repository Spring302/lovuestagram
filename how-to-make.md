# vuestagram

## 상위상위컴포넌트에 데이터 전송은 mitt

```js
mounted() {
    this.emitter.on('작명', (a)=> {
      console.log(a);
    })
}
```
요론 식으로 수신하면 되겠다.

## 모든 vue파일에서 공용으로 쓸 모듈은 프로퍼티에 저장한다.
아래와 같이 사용

```js
import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

let emitter = mitt();
let app = createApp(App)

app.config.globalProperties.emitter = emitter;

app.mount('#app')
```

TODO : axios도 해보자

## Vuex4 셋팅
store.js 파일만들고

main.js 셋팅

```js
import store from './store.js'
app.use(store).mount('#app')
```

(모든 vue app이 store.js를 공유한다.)


## (Vuex 국룰) state 수정하고 싶으면 mutations
1. 미리 store.js에 수정방법을 정의해두고
2. 그 방법을 컴포넌트에서 소환해서 수정해야한다.

여기서 수정하면 안 됨

```html
  <h4>안녕 {{ $store.state.name }}</h4>
  <button @click="$store.state.name = '박'"></button>
  땡땡땡
```

## actions는 ajax 하는 곳 혹은 오래걸리는 작업들에 사용한다.
actions의 함수 호출은 다음과 같이 한다.

```html
  <button @click="$store.dispatch('더보기')">더보기</button>
```

##  vuex data computed 로 쉽게 쓰기

```html
...mapState(['name','age','likes']),
```

## pwa 기능을 제공하는 라이브러리
> vue add pwa

설치후 build하면 자동으로 pwa 기능 제공

## Options API
지금처럼 computed, methods .... 

## Compotision API
관련있는 코드를 한 곳에 모을 수 있다.

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'lovuestagram',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    // 캐싱 목록에서 제외하기
    workboxOptions: {
      exclude: [/\.map$/, /manifest\.json$/, 'index.html']
    }
  }
})

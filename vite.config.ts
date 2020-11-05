import path from 'path'
//详情可参考https://github.com/vitejs/vite/blob/master/src/node/config.ts
module.exports = {
  alias: { // 导入文件夹别名
    '/@/': path.resolve(__dirname, './src'),
    '/@views/': path.resolve(__dirname, './src/views'),
    '/@components/': path.resolve(__dirname, './src/components'),
    '/@utils/': path.resolve(__dirname, './src/utils'),
  },
  optimizeDeps: { // 配置Dep优化行为
    include: ['lodash'],
  },
  port: 8077, // 服务端口
  proxy: { // 代理
    "/xxx": "http://localhost:8080/xxx",
    "/api": {
      target: "http://doublebrain.cn",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
}
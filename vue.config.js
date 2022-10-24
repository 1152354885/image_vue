// eslint-disable-next-line no-unused-vars
const { defineConfig } = require('@vue/cli-service')
module.exports = {
    runtimeCompiler: true,
    lintOnSave: false,
  devServer:{
        host:"localhost",
        port:8081,
         proxy:{
          '/api':{
            target:'http://192.168.3.246:8088',
            changeOrigin:true,
            pathRewrite:{

              '^/api':'/api',
            },
          },
         },
        },
      };

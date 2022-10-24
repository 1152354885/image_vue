<template>
  <div>

    <div class="nav">

    </div>
    <div class="record">
      <div class="details">
        <tr v-for="(data,id) in tableData" :key="id">
          <dl>
            <dt><img :src="data.imageUrl" ></dt>
            <dt>{{data.imageUrl}}</dt>
            <dt>{{data.uploadTime}}</dt>
            <button class="button" data-type="danger" v-on:click="Download(data)">
              下载
            </button>
            <dd>
              <s class="space"></s>
            </dd>
          </dl>
        </tr>

      </div>
    </div></div>
</template>

<script>



export default{
  data(){
    return{
      tableData:[],
    }
  },

  mounted(){
    this.getPlanList();
  },
  methods:{
    getPlanList(){
      this.axios.get('/api/image/queryAll').then((res)=>{
        console.log(res.data)
        console.log(res)
        if(res.status===200){
          this.tableData=res.data.data
          console.log(this.tableData)
        }
      })
          .catch(err=>{
            console.log(err);
          })
    },
    getUrlBase64(url) {
      return new Promise(resolve => {
        let canvas = document.createElement('canvas')
        let ctx = canvas.getContext('2d')
        let img = new Image()
        img.crossOrigin = 'Anonymous' //允许跨域
        img.src = url
        img.onload = function() {
          canvas.height = 300
          canvas.width = 300
          ctx.drawImage(img, 0, 0, 300, 300)
          let dataURL = canvas.toDataURL('image/png')
          canvas = null
          resolve(dataURL)
        }
      })
    },
    Download(data) {
      this.getUrlBase64(data.imageUrl).then(base64 => {
        let link = document.createElement('a')
        link.href = base64
        link.download = 'qrCode.png'
        link.click()
      })
    },


  }
}
</script>
<style>
body {
  background-color: #ffffff;
}
</style>








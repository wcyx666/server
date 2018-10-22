<template>
  <div class="components-container">
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="文章标题">
        <el-input v-model="formLabelAlign.title"></el-input>
      </el-form-item>
      <el-form-item label="文章作者">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="文章地区">
        <el-input v-model="formLabelAlign.local"></el-input>
      </el-form-item>
      <el-form-item label="文章展示图">
        <el-input v-model="formLabelAlign.url"></el-input>
      </el-form-item>
    </el-form>
    <div ref="editor" style="text-align:left" :defaultMsg=defaultMsg :config=config></div>
    <el-button @click="getContent">默认按钮</el-button>
  </div>
</template>
<style scoped>
  .info{
    border-radius: 10px;
    line-height: 20px;
    padding: 10px;
    margin: 10px;
    background-color: #ffffff;
  }
</style>
<script>
  import E from 'wangeditor'
  import http from '../../static/http'
  import api from '../../static/api'
  export default {
    components: {
      
    },
    data() {
      return {
        editorContent: '',
        defaultMsg: '这里是UE测试',
        config: {
          initialFrameWidth: null,
          initialFrameHeight: 350
        },
        labelPosition: 'top',
        formLabelAlign: {
          name: '',
          local: '',
          title: '',
          url:""
        }
      }
    },
    mounted() {
      var editor = new E(this.$refs.editor);
      editor.customConfig.onchange = (html) => {
        this.editorContent = html
      }
      // 配置服务器端地址
      editor.customConfig.uploadImgServer = '/api/php/Upload.php';
      editor.customConfig.uploadFileName = "file";      //文件名称  也就是你在后台接受的 参数值
      editor.customConfig.uploadImgShowBase64 = false;   // 使用 base64 保存图片
      // editor.customConfig.customAlert = function (info) { //自己设置alert错误信息
      //     // info 是需要提示的内容
      //     alert('自定义提示：' + '图片上传失败，请重新上传')
      // };
      editor.customConfig.debug = true; //是否开启Debug 默认为false 建议开启 可以看到错误
      // editor.customConfig.debug = location.href.indexOf('wangeditor_debug_mode=1') > 0; // 同上 二选一
      //图片在编辑器中回显
      editor.customConfig.uploadImgHooks = {  
          error: function (xhr, editor) {
              alert("2：" + xhr + "请查看你的json格式是否正确，图片并没有上传");
              // 图片上传出错时触发  如果是这块报错 就说明文件没有上传上去，直接看自己的json信息。是否正确
              // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
          },
          fail: function (xhr, editor, result) {
              console.log(result)
              //  如果在这出现的错误 就说明图片上传成功了 但是没有回显在编辑器中，我在这做的是在原有的json 中添加了
              //  一个url的key（参数）这个参数在 customInsert也用到
              //  
              alert("1：" + xhr + "请查看你的json格式是否正确，图片上传了，但是并没有回显");
          },
          success:function(xhr, editor, result){
              //成功 不需要alert 当然你可以使用console.log 查看自己的成功json情况 
              //console.log(result)
              // insertImg('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png')
          },
          customInsert: function (insertImg, result, editor) {
              // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
              // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果
              // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
              insertImg(result.url);
          }
      };
      editor.customConfig.showLinkImg = true; //是否开启网络图片，默认开启的。

      editor.create();
    },
    methods: {
      getContent: function () {
        let that = this;
        let params = {
            title:that.formLabelAlign.title,
            name:that.formLabelAlign.name,
            local:that.formLabelAlign.local,
            img:that.formLabelAlign.url,
            content:that.editorContent
        }
        console.log(params);
        const res = http.post(api.Article, params); 
        console.log(res);
      }
    }
  };
</script>
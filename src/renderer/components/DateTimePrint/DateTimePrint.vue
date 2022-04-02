<template>
  <div class="container">
    <div class="d1">
      <el-input class="json_input" type="textarea" resize="none" autofocus="true"
                max="100%" min="100%"
                placeholder="欢迎使用jsonman 请在此输入json字符串" @input="change" @blur="translate()" v-model="textarea1">
      </el-input>
    </div>
    <div class="d2">
      <div class="json_output" v-html="textarea2" style="" @click="action($event)"></div>
    </div>
  </div>
</template>

<script>
import {JSONFormat} from "../../service/print";
import {closeObj, openObj} from "../../service/open";

export default {
  name: "DateTimePrint",
  data: function () {
    return {
      textarea1: "",
      textarea2: "",
      timeout: null,
    }
  },
  methods: {
    change: function (){
      if(this.timeout){
        clearTimeout(this.timeout)
      }
      this.timeout = setTimeout(() => {
        this.translate();
      }, 2000);
    },
    /**
     * 进行翻译
     */
    translate: function () {
      if(!this.textarea1){
        this.textarea2 = "";
        return;
      }
      try {

        let parse = JSON.parse(this.textarea1);

        let jsonFormat = new JSONFormat();

        this.textarea2 = jsonFormat.getJSONFormattedHtmlStr(parse);
      }catch (e) {
        this.textarea2 = `<span class="parse-fail">json解析失败:${e.message}</span>`;
      }
    },
    /**
     * 处理点击+-
     * @param event
     */
    action: function (event) {
      if(!event.target.className){
        return;
      }
      // 要折叠起来
      if (event.target.className.includes('minus-flag')) {
        closeObj(event.target);
      }
      // 需要展开
      if (event.target.className.includes('plus-flag')) {
        openObj(event.target);
      }
    }
  }
}
</script>

<style scoped>

</style>

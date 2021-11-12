<template>
  <div class="container">
    <div class="d1">
      <el-input class="json_input" type="textarea" resize="none" autofocus="true"
                max="100%" min="100%"
                placeholder="请在此输入json字符串" @blur="translate()" v-model="textarea1">
      </el-input>
    </div>
    <div class="d2">
      <div class="json_output" v-html="textarea2" style="" @click="action($event)"></div>
    </div>
  </div>
</template>

<script>
import {JSONFormat} from '../../service/print';
import {closeObj, openObj} from '../../service/open';

export default {
  name: "JsonPrint",
  data: function () {
    return {
      textarea1: "",
      textarea2: "",
    }
  },
  methods: {
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

<style>
.container{
  width: 100%;
  height: 100%;
}

.d1, .d2 {
  display: inline-block;
  width: 47%;
  height: 92%;
  /*border: solid 1px black;*/
  float: left;
}

.d1 {
  background-color: #e7edeb;
  margin: 1% 0 1% 1%;
  padding: 1%;
}

.d2 {
  background-color: #e7edeb;
  margin: 1% 1% 1% 0;
  padding: 1%;
}

/* 字符图标*/
.obj-open:before {
  font-weight: normal;
  font-style: normal;
  content: "\e900";
}
/* 字符图标*/
.array-open:before {
  content: "\e901";
}

.json_input {
  /*display: inline-block;*/
  width: 100%;
  height: 100%;
}
.json_input textarea {
  width: 100%;
  height: 100%;
  min-height: 100%;
}

.json_output {
  display: inline-block;
  font-weight: bold;
  font-size: 14px;
  text-align: left;
  /*border: solid 1px grey;*/
  background-color: white;
  width: 100%;
  height: 100%;
  resize: none;
  overflow: scroll;
}
.type-number {
  color: #25aae2;
}
.type-string {
  color: #3ab54a;
}
.type-null {
  color: #f1592a;
}
.type-key {
  color: #92278f;
}
.type-boolean {
  color: #f98280;
}
.parse-fail{
  color: red;
}


</style>

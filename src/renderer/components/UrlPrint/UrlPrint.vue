<template>
  <div class="container">
    <div class="d1">
      <el-input style="margin: 0px;padding: 0px;border-width: 0px;" class="url_input" type="textarea" resize="none" autofocus="true" max="100%" min="100%"
                placeholder="欢迎使用jsonman 请在此输入url字符串" v-model="textarea1">
      </el-input>
    </div>
    <div class="b1">
      <el-button type="primary" @click="decode">decode</el-button>
      <el-button type="primary" @click="encode">encode</el-button>
    </div>
    <div class="d2">
      <div style="margin: 0px;border-width: 0px; width: 100%;height: 100%" class="url_output" v-html="textarea2"></div>
    </div>
    <div class="b2">
      <el-button type="info" size="mini" @click="format('&')">& format</el-button>
    </div>
  </div>

</template>

<script>
import {splitStrPrint} from '../../service/strparse'
import {remote, ipcRenderer} from 'electron'
import {FindInPage} from 'electron-find'


let findInPage = new FindInPage(remote.getCurrentWebContents(), {
  preload: true,
  offsetTop: 6,
  offsetRight: 10
})

ipcRenderer.on('on-find', (e, args) => {
  findInPage.openFindWindow()
})

export default {
  name: "UrlPrint",
  data: function () {
    return {
      textarea1: "",
      textarea2: "",
      timeout: null,
    }
  },
  methods: {
    format: function (separator) {
      this.textarea2 = splitStrPrint(separator, this.textarea2, '<br>');
    },
    decode: function () {
      if (!this.textarea1) {
        this.textarea2 = "";
        return;
      }
      try {
        this.textarea2 = decodeURIComponent(this.textarea1);
      } catch (e) {
        this.textarea2 = `<span class="parse-fail">url解码失败:${e.message}</span>`;
      }
    },
    encode: function () {
      if (!this.textarea1) {
        this.textarea2 = "";
        return;
      }
      try {
        this.textarea2 = encodeURIComponent(this.textarea1);
      } catch (e) {
        this.textarea2 = `<span class="parse-fail">url编码失败:${e.message}</span>`;
      }
    },
  }


}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.d1, .d2 {
  display: block;
  width: 96%;
  height: 40%;
  border-width: 0px;
}


.d1 {
  background-color: #e7edeb;
  margin: 1% 1% 4px 1%;
  padding: 1%;
}

.d2 {
  background-color: #e7edeb;
  margin: 0% 1% 4px 1%;
  padding: 1%;
}




.b1 {
  width: 202px;
  height: 5%;
  margin: 0 auto;
}

.b2 {
  width: 202px;
  height: 2%;
  margin: 0 auto;
}

.b1,.b2{
  border-width: 0px;
  padding: 0px;
}

.url_input {
  width: 100%;
  height: 100%;
}

.url_output {
  display: inline-block;
  font-weight: bold;
  font-size: 14px;
  text-align: left;
  background-color: white;
  width: 98%;
  height: 100%;
  resize: none;
  overflow-wrap: break-word;
  overflow: auto;
  padding: 0.5rem;
}


</style>

<style>
.url_input textarea {
  width: 100%;
  height: 100%;
  min-height: 100%;
  margin: 0px;
  padding: 0px;
}

.url_output {
  overflow-wrap: break-word;
  line-height: 1.5rem;
}
.d1 div,.d2 div{
  padding: 0;
  margin: 0;
  border-width: 0;
}

</style>

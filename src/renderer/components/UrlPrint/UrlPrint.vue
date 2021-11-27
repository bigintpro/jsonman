<template>
  <div class="container">

    <div class="d1">
      <el-input class="url_input" type="textarea" resize="none" autofocus="true" max="100%" min="100%"
                placeholder="欢迎使用jsonman 请在此输入url字符串" v-model="textarea1">
      </el-input>
    </div>
    <div class="b1">
      <el-button type="primary" @click="decode">decode</el-button>
      <el-button type="primary" @click="encode">encode</el-button>
    </div>
    <div class="d2">
      <div class="url_output" v-html="textarea2" style=""></div>
    </div>
  </div>

</template>

<script>

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
}


.d1 {
  background-color: #e7edeb;
  margin: 1%;
  padding: 1%;
}

.d2 {
  background-color: #e7edeb;
  margin: 1%;
  padding: 1%;
}

.b1 {
  width: 202px;
  height: 2.5rem;
  margin: 0 auto;
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
  width: 100%;
  height: 100%;
  resize: none;
  overflow: scroll;
}


</style>

<style>
.url_input textarea {
  width: 100%;
  height: 100%;
  min-height: 100%;
}
</style>

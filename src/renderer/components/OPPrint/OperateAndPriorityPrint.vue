<template>
  <div>
    <el-table
        :data="tableData"
        height="250"
        border
        style="width: 100%">
      <el-table-column
          prop="date"
          label="优先级"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="运算符"
          width="180">
      </el-table-column>
      <el-table-column
          prop="address"
          label="含义">
      </el-table-column>
      <el-table-column
          prop="address"
          label="使用形式">
      </el-table-column>
      <el-table-column
          prop="address"
          label="结合性">
      </el-table-column>
      <el-table-column
          prop="address"
          label="说明">
      </el-table-column>
    </el-table>
  </div>

</template>
<!--参考数据地址-->
<!--https://fishc.com.cn/forum.php?mod=viewthread&tid=67664&extra=page%3D1%26filter%3Dtypeid%26typeid%3D571-->

<script>
export default {
  name: "OperateAndPriorityPrint",
  data(){
    return  {
      tableData: [{
        priority: 1,
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
    }
  }
}
</script>

<style scoped>

</style>

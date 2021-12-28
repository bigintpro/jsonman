<template>
  <div>
    <el-table :data="tableData" height="1000" stripe :span-method="objectSpanMethod" border style="width: 100%; margin-top: 20px">
      <el-table-column prop="priority" label="优先级" width="180">
      </el-table-column>
      <el-table-column prop="operator" label="运算符">
      </el-table-column>
      <el-table-column prop="meaning" label="含义">
      </el-table-column>
      <el-table-column prop="usage" label="使用形式">
      </el-table-column>
      <el-table-column prop="direct" label="结合性">
      </el-table-column>
      <el-table-column prop="note" label="说明">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "OperateAndPriorityPrint",
  data() {
    return {
      rowCount: 0,
      colFields: ['priority', 'operator', 'meaning', 'usage', 'direct', 'note'],
      spanArr: [],
      tableData: [
        {
          priority: '1',
          operator: '[ ]',
          meaning: '数组下标',
          usage: '数组名[整型表达式]',
          direct: '左到右→',
          note: ' ',
        },
        {
          priority: '1',
          operator: '( )',
          meaning: '圆括号',
          usage: '(表达式)',
          direct: '左到右→',
          note: ' ',
        },
        {
          priority: '1',
          operator: '.',
          meaning: '成员选择（对象）',
          usage: '对象.成员名',
          direct: '左到右→',
          note: ' ',
        },
        {
          priority: '1',
          operator: '->',
          meaning: '成员选择（指针）',
          usage: '对象指针->成员名',
          direct: '左到右→',
          note: ' ',
        },
        {
          priority: '1',
          operator: '++',
          meaning: '自增运算符',
          usage: '变量名++',
          direct: '左到右→',
          note: '单目运算符',
        },
        {
          priority: '1',
          operator: '--',
          meaning: '自减运算符',
          usage: '变量名--',
          direct: '左到右→',
          note: '单目运算符',
        },
        {
          priority: '2',
          operator: '-',
          meaning: '负号运算符',
          usage: '-表达式',
          direct: '右到左←',
          note: '单目运算符',
        },
        {
          priority: '2',
          operator: '(类型)',
          meaning: '强制类型转换',
          usage: '(数据类型)表达式',
          direct: '右到左←',
          note: '单目运算符',
        },
        {
          priority: '2',
          operator: '++',
          meaning: '自增运算符',
          usage: '++变量名',
          direct: '右到左←',
          note: '单目运算符',
        },
        {
          priority: '2',
          operator: '--',
          meaning: '自减运算符',
          usage: '--变量名',
          direct: '右到左←',
          note: '单目运算符',
        },
        {
          priority: '2',
          operator: '*',
          meaning: '取值运算符',
          usage: '*指针表达式',
          direct: '右到左←',
          note: '单目运算符',
        },
        {
          priority: '2',
          operator: '&',
          meaning: '取地址运算符',
          usage: '&左值表达式',
          direct: '右到左←',
          note: '单目运算符',
        },
        {
          priority: '2',
          operator: '!',
          meaning: '逻辑非运算符',
          usage: '!表达式',
          direct: '右到左←',
          note: '单目运算符',
        },
        {
          priority: '2',
          operator: '~',
          meaning: '按位取反运算符',
          usage: '~表达式',
          direct: '右到左←',
          note: '单目运算符',
        },
        {
          priority: '2',
          operator: 'sizeof',
          meaning: '长度运算符',
          usage: 'sizeof 表达式或sizeof(类型)',
          direct: '右到左←',
          note: '单目运算符',
        },
        {
          priority: '3',
          operator: '/',
          meaning: '除',
          usage: '表达式 / 表达式',
          direct: '左到右→',
          note: '双目运算符',
        },
        {
          priority: '3',
          operator: '*',
          meaning: '乘',
          usage: '表达式 * 表达式',
          direct: '左到右→',
          note: '双目运算符',
        },
        {
          priority: '3',
          operator: '%',
          meaning: '余数（取模）',
          usage: '整型表达式 % 整型表达式',
          direct: '左到右→',
          note: '双目运算符',
        },
        {
          priority: '4',
          operator: '+',
          meaning: '加',
          usage: '表达式 + 表达式',
          direct: '左到右→',
          note: '双目运算符',
        },
        {
          priority: '4',
          operator: '-',
          meaning: '减',
          usage: '表达式 - 表达式',
          direct: '左到右→',
          note: '双目运算符',
        },
        {
          priority: '5',
          operator: '<<',
          meaning: '左移',
          usage: '表达式 << 表达式',
          direct: '左到右→',
          note: '双目运算符',
        },
        {
          priority: '5',
          operator: '>>',
          meaning: '右移',
          usage: '表达式 >> 表达式',
          direct: '左到右→',
          note: '双目运算符',
        },
        {
          priority: '6',
          operator: '>',
          meaning: '大于',
          usage: '表达式 > 表达式',
          direct: '左到右→',
          note: '双目运算符',
        },
        {
          priority: '6',
          operator: '>=',
          meaning: '大于等于',
          usage: '表达式 >= 表达式',
          direct: '左到右→',
          note: '双目运算符',
        },
        {
          priority: '6',
          operator: '<',
          meaning: '小于',
          usage: '表达式 < 表达式',
          direct: '左到右→',
          note: '双目运算符',
        },
        {
          priority: '6',
          operator: '<=',
          meaning: '小于等于',
          usage: '表达式 <= 表达式',
          direct: '左到右→',
          note: '双目运算符',
        },
        {
          priority: '7',
          operator: '==',
          meaning: '等于',
          usage: '表达式 == 表达式',
          direct: '左到右→',
          note: '双目运算符',
        },
        {
          priority: '7',
          operator: '!=',
          meaning: '不等于',
          usage: '表达式 != 表达式',
          direct: '左到右→',
          note: '双目运算符',
        },
        {
          priority: '8',
          operator: '&',
          meaning: '按位与',
          usage: '整型表达式 & 整型表达式',
          direct: '左到右→',
          note: '双目运算符',
        },
        {
          priority: '9',
          operator: '^',
          meaning: '按位异或',
          usage: '整型表达式 ^ 整型表达式',
          direct: '左到右→',
          note: '双目运算符',
        },
        {
          priority: '10',
          operator: '|',
          meaning: '按位或',
          usage: '整型表达式 | 整型表达式',
          direct: '左到右→',
          note: '双目运算符',
        },
        {
          priority: '11',
          operator: '&&',
          meaning: '逻辑与',
          usage: '表达式 && 表达式',
          direct: '左到右→',
          note: '双目运算符',
        },
        {
          priority: '12',
          operator: '||',
          meaning: '逻辑或',
          usage: '表达式 || 表达式',
          direct: '左到右→',
          note: '双目运算符',
        },
        {
          priority: '13',
          operator: '?:',
          meaning: '条件运算符',
          usage: '表达式1? 表达式2: 表达式3',
          direct: '右到左←',
          note: '三目运算符',
        },
        {
          priority: '14',
          operator: '=',
          meaning: '赋值运算符',
          usage: '变量 = 表达式',
          direct: '右到左←',
          note: '双目运算符',
        },
        {
          priority: '14',
          operator: '/=',
          meaning: '除后赋值',
          usage: '变量 /= 表达式',
          direct: '右到左←',
          note: '双目运算符',
        },
        {
          priority: '14',
          operator: '*=',
          meaning: '乘后赋值',
          usage: '变量 *= 表达式',
          direct: '右到左←',
          note: '双目运算符',
        },
        {
          priority: '14',
          operator: '%=',
          meaning: '取模后赋值',
          usage: '变量 %= 表达式',
          direct: '右到左←',
          note: '双目运算符',
        },
        {
          priority: '14',
          operator: '+=',
          meaning: '加后赋值',
          usage: '变量 += 表达式',
          direct: '右到左←',
          note: '双目运算符',
        },
        {
          priority: '14',
          operator: '-=',
          meaning: '减后赋值',
          usage: '变量 -= 表达式',
          direct: '右到左←',
          note: '双目运算符',
        },
        {
          priority: '14',
          operator: '<<=',
          meaning: '左移后赋值',
          usage: '变量 <<= 表达式',
          direct: '右到左←',
          note: '双目运算符',
        },
        {
          priority: '14',
          operator: '>>=',
          meaning: '右移后赋值',
          usage: '变量 >>= 表达式',
          direct: '右到左←',
          note: '双目运算符',
        },
        {
          priority: '14',
          operator: '&=',
          meaning: '按位与后赋值',
          usage: '变量 &= 表达式',
          direct: '右到左←',
          note: '双目运算符',
        },
        {
          priority: '14',
          operator: '^=',
          meaning: '按位异或后赋值',
          usage: '变量 ^= 表达式',
          direct: '右到左←',
          note: '双目运算符',
        },
        {
          priority: '14',
          operator: '|=',
          meaning: '按位或后赋值',
          usage: '变量 |= 表达式',
          direct: ' 右到左←',
          note: '双目运算符',
        },
        {
          priority: '15',
          operator: ',',
          meaning: '逗号运算符',
          usage: '表达式1,表达式2,表达式3,…',
          direct: '左到右→',
          note: '无',
        },
      ]
    };
  },
  mounted: function () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.getSpanArr();
  },

  methods: {
    /**
     * 分析每一列，找出相同的
     * @param data
     */
    getSpanArr() {

      for (let i = 0; i < this.tableData.length; i++) {
        let row = i;
        // let col = i % this.colCount;
        if (row === 0) {
          for (let j = 0; j < this.colFields.length; j++) {
            this.spanArr[i * this.colFields.length + j] = {
              rowspan: 1,
              colspan: 1
            };
          }
        } else {

          for (let j = 0; j < this.colFields.length; j++) {
            // 当前和上一次的一样
            if (this.tableData[row][this.colFields[j]] === this.tableData[row - 1][this.colFields[j]]) {
              let beforeItem = this.spanArr[(row - 1) * this.colFields.length + j];
              this.spanArr[row * this.colFields.length + j] = {
                rowspan: 1 + beforeItem.rowspan,
                colspan: 1
              };
              beforeItem.rowspan = 0;
              beforeItem.colspan = 0;
            } else {
              this.spanArr[row * this.colFields.length + j] = {
                rowspan: 1,
                colspan: 1
              };
            }
          }
        }
      }
      // 对数据进行倒序
      let stack = [];

      for (let i = 0; i < this.colFields.length; i++) {
        for (let j = 0; j < this.tableData.length; j++) {
          console.log("i=" + i + " j=" + j);
          // i 表示列 j表示行
          if (j === 0) {
            if (this.spanArr[j * this.colFields.length + i].rowspan === 0) {
              stack.push(this.spanArr[j * this.colFields.length + i]);
            }
          } else {
            if (this.spanArr[j * this.colFields.length + i].rowspan === 0) {
              stack.push(this.spanArr[j * this.colFields.length + i]);
            } else {
              stack.push(this.spanArr[j * this.colFields.length + i]);
              while (stack.length > 0) {
                let pop = stack.pop();
                let len = stack.length;
                this.spanArr[(j - len) * this.colFields.length + i] = pop;
              }
            }
          }
        }
      }
    },
    objectSpanMethod({row, column, rowIndex, columnIndex}) {
      return this.spanArr[rowIndex * this.colFields.length + columnIndex];
    }
  }
}
</script>

<style scoped>

</style>

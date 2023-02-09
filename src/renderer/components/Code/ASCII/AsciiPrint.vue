<template>
  <div class="container">
    <el-table :data="tableData" height="98%" stripe border
              style="width: 97%; height: 96%;  margin: 0 3% 2% 3%;font-size: 1rem;font-weight: bold;">
      <el-table-column prop="decimal" label="十进制" width="80">
      </el-table-column>
      <el-table-column prop="binary" label="二进制">
      </el-table-column>
      <el-table-column prop="hex" label="十六进制">
      </el-table-column>
      <el-table-column prop="ABR" label="缩写">
      </el-table-column>
      <el-table-column prop="mean" label="含义">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "AsciiPrint",
  data() {
    return {
      tableData: [
        {
          binary: "0000 0000",
          decimal: "0",
          hex: "00",
          ABR: "NUL",
          mean: "空字符"
        },
        {
          binary: "0000 0001",
          decimal: "1",
          hex: "01",
          ABR: "SOH",
          mean: "标题开始"
        },
        {
          binary: "0000 0010",
          decimal: "2",
          hex: "02",
          ABR: "STX",
          mean: "文本开始"
        },
        {
          binary: "0000 0011",
          decimal: "3",
          hex: "03",
          ABR: "ETX",
          mean: "文本结束"
        },
        {
          binary: "0000 0100",
          decimal: "4",
          hex: "04",
          ABR: "EOT",
          mean: "传输结束"
        },
        {
          binary: "0000 0101",
          decimal: "5",
          hex: "05",
          ABR: "ENQ",
          mean: "请求"
        },
        {
          binary: "0000 0110",
          decimal: "6",
          hex: "06",
          ABR: "ACK",
          mean: "确认响应"
        },
        {
          binary: "0000 0111",
          decimal: "7",
          hex: "07",
          ABR: "BEL",
          mean: "响铃"
        },
        {
          binary: "0000 1000",
          decimal: "8",
          hex: "08",
          ABR: "BS ",
          mean: "退格"
        },
        {
          binary: "0000 1001",
          decimal: "9",
          hex: "09",
          ABR: "HT ",
          mean: "水平制表符"
        },
        {
          binary: "0000 1010",
          decimal: "10",
          hex: "0A",
          ABR: "LF ",
          mean: "换行符"
        },
        {
          binary: "0000 1011",
          decimal: "11",
          hex: "0B",
          ABR: "VT ",
          mean: "垂直制表符"
        },
        {
          binary: "0000 1100",
          decimal: "12",
          hex: "0C",
          ABR: "FF ",
          mean: "换页符"
        },
        {
          binary: "0000 1101",
          decimal: "13",
          hex: "0D",
          ABR: "CR ",
          mean: "回车键"
        },
        {
          binary: "0000 1110",
          decimal: "14",
          hex: "0E",
          ABR: "SO ",
          mean: "取消变换（Shift out）"
        },
        {
          binary: "0000 1111",
          decimal: "15",
          hex: "0F",
          ABR: "SI ",
          mean: "启动变换（Shift in）"
        },
        {
          binary: "0001 0000",
          decimal: "16",
          hex: "10",
          ABR: "DLE",
          mean: "数据链路转义"
        },
        {
          binary: "0001 0001",
          decimal: "17",
          hex: "11",
          ABR: "DC1",
          mean: "设备控制一（XON 激活软件速度控制）"
        },
        {
          binary: "0001 0010",
          decimal: "18",
          hex: "12",
          ABR: "DC2",
          mean: "设备控制二"
        },
        {
          binary: "0001 0011",
          decimal: "19",
          hex: "13",
          ABR: "DC3",
          mean: "设备控制三（XOFF 停用软件速度控制）"
        },
        {
          binary: "0001 0100",
          decimal: "20",
          hex: "14",
          ABR: "DC4",
          mean: "设备控制四"
        },
        {
          binary: "0001 0101",
          decimal: "21",
          hex: "15",
          ABR: "NAK",
          mean: "拒绝接收"
        },
        {
          binary: "0001 0110",
          decimal: "22",
          hex: "16",
          ABR: "SYN",
          mean: "同步空闲"
        },
        {
          binary: "0001 0111",
          decimal: "23",
          hex: "17",
          ABR: "ETB",
          mean: "区块传输结束"
        },
        {
          binary: "0001 1000",
          decimal: "24",
          hex: "18",
          ABR: "CAN",
          mean: "取消"
        },
        {
          binary: "0001 1001",
          decimal: "25",
          hex: "19",
          ABR: "EM ",
          mean: "连接介质中断"
        },
        {
          binary: "0001 1010",
          decimal: "26",
          hex: "1A",
          ABR: "SUB",
          mean: "替换"
        },
        {
          binary: "0001 1011",
          decimal: "27",
          hex: "1B",
          ABR: "ESC",
          mean: "退出键"
        },
        {
          binary: "0001 1100",
          decimal: "28",
          hex: "1C",
          ABR: "FS ",
          mean: "文件分区符"
        },
        {
          binary: "0001 1101",
          decimal: "29",
          hex: "1D",
          ABR: "GS ",
          mean: "组群分隔符"
        },
        {
          binary: "0001 1110",
          decimal: "30",
          hex: "1E",
          ABR: "RS ",
          mean: "记录分隔符"
        },
        {
          binary: "0001 1111",
          decimal: "31",
          hex: "1F",
          ABR: "US ",
          mean: "单元分隔符"
        },
        {
          binary: "0010 0000",
          decimal: "32",
          hex: "20",
          ABR: "空格",
          mean: ""
        },
        {
          binary: "0010 0001",
          decimal: "33",
          hex: "21",
          ABR: "!  ",
          mean: ""
        },
        {
          binary: "0010 0010",
          decimal: "34",
          hex: "22",
          ABR: "\"",
          mean: ""
        },
        {
          binary: "0010 0011",
          decimal: "35",
          hex: "23",
          ABR: "#  ",
          mean: ""
        },
        {
          binary: "0010 0100",
          decimal: "36",
          hex: "24",
          ABR: "$  ",
          mean: ""
        },
        {
          binary: "0010 0101",
          decimal: "37",
          hex: "25",
          ABR: "%  ",
          mean: ""
        },
        {
          binary: "0010 0110",
          decimal: "38",
          hex: "26",
          ABR: "&  ",
          mean: ""
        },
        {
          binary: "0010 0111",
          decimal: "39",
          hex: "27",
          ABR: "'  ",
          mean: ""
        },
        {
          binary: "0010 1000",
          decimal: "40",
          hex: "28",
          ABR: "(  ",
          mean: ""
        },
        {
          binary: "0010 1001",
          decimal: "41",
          hex: "29",
          ABR: ")  ",
          mean: ""
        },
        {
          binary: "0010 1010",
          decimal: "42",
          hex: "2A",
          ABR: "*  ",
          mean: ""
        },
        {
          binary: "0010 1011",
          decimal: "43",
          hex: "2B",
          ABR: "+  ",
          mean: ""
        },
        {
          binary: "0010 1100",
          decimal: "44",
          hex: "2C",
          ABR: ",  ",
          mean: ""
        },
        {
          binary: "0010 1101",
          decimal: "45",
          hex: "2D",
          ABR: "-  ",
          mean: ""
        },
        {
          binary: "0010 1110",
          decimal: "46",
          hex: "2E",
          ABR: ".  ",
          mean: ""
        },
        {
          binary: "0010 1111",
          decimal: "47",
          hex: "2F",
          ABR: "/  ",
          mean: ""
        },
        {
          binary: "0011 0000",
          decimal: "48",
          hex: "30",
          ABR: "0  ",
          mean: ""
        },
        {
          binary: "0011 0001",
          decimal: "49",
          hex: "31",
          ABR: "1  ",
          mean: ""
        },
        {
          binary: "0011 0010",
          decimal: "50",
          hex: "32",
          ABR: "2  ",
          mean: ""
        },
        {
          binary: "0011 0011",
          decimal: "51",
          hex: "33",
          ABR: "3  ",
          mean: ""
        },
        {
          binary: "0011 0100",
          decimal: "52",
          hex: "34",
          ABR: "4  ",
          mean: ""
        },
        {
          binary: "0011 0101",
          decimal: "53",
          hex: "35",
          ABR: "5  ",
          mean: ""
        },
        {
          binary: "0011 0110",
          decimal: "54",
          hex: "36",
          ABR: "6  ",
          mean: ""
        },
        {
          binary: "0011 0111",
          decimal: "55",
          hex: "37",
          ABR: "7  ",
          mean: ""
        },
        {
          binary: "0011 1000",
          decimal: "56",
          hex: "38",
          ABR: "8  ",
          mean: ""
        },
        {
          binary: "0011 1001",
          decimal: "57",
          hex: "39",
          ABR: "9  ",
          mean: ""
        },
        {
          binary: "0011 1010",
          decimal: "58",
          hex: "3A",
          ABR: ":  ",
          mean: ""
        },
        {
          binary: "0011 1011",
          decimal: "59",
          hex: "3B",
          ABR: ";  ",
          mean: ""
        },
        {
          binary: "0011 1100",
          decimal: "60",
          hex: "3C",
          ABR: "<  ",
          mean: ""
        },
        {
          binary: "0011 1101",
          decimal: "61",
          hex: "3D",
          ABR: "=  ",
          mean: ""
        },
        {
          binary: "0011 1110",
          decimal: "62",
          hex: "3E",
          ABR: ">  ",
          mean: ""
        },
        {
          binary: "0011 1111",
          decimal: "63",
          hex: "3F",
          ABR: "?  ",
          mean: ""
        },
        {
          binary: "0100 0000",
          decimal: "64",
          hex: "40",
          ABR: "@  ",
          mean: ""
        },
        {
          binary: "0100 0001",
          decimal: "65",
          hex: "41",
          ABR: "A  ",
          mean: ""
        },
        {
          binary: "0100 0010",
          decimal: "66",
          hex: "42",
          ABR: "B  ",
          mean: ""
        },
        {
          binary: "0100 0011",
          decimal: "67",
          hex: "43",
          ABR: "C  ",
          mean: ""
        },
        {
          binary: "0100 0100",
          decimal: "68",
          hex: "44",
          ABR: "D  ",
          mean: ""
        },
        {
          binary: "0100 0101",
          decimal: "69",
          hex: "45",
          ABR: "E  ",
          mean: ""
        },
        {
          binary: "0100 0110",
          decimal: "70",
          hex: "46",
          ABR: "F  ",
          mean: ""
        },
        {
          binary: "0100 0111",
          decimal: "71",
          hex: "47",
          ABR: "G  ",
          mean: ""
        },
        {
          binary: "0100 1000",
          decimal: "72",
          hex: "48",
          ABR: "H  ",
          mean: ""
        },
        {
          binary: "0100 1001",
          decimal: "73",
          hex: "49",
          ABR: "I  ",
          mean: ""
        },
        {
          binary: "0100 1010",
          decimal: "74",
          hex: "4A",
          ABR: "J  ",
          mean: ""
        },
        {
          binary: "0100 1011",
          decimal: "75",
          hex: "4B",
          ABR: "K  ",
          mean: ""
        },
        {
          binary: "0100 1100",
          decimal: "76",
          hex: "4C",
          ABR: "L  ",
          mean: ""
        },
        {
          binary: "0100 1101",
          decimal: "77",
          hex: "4D",
          ABR: "M  ",
          mean: ""
        },
        {
          binary: "0100 1110",
          decimal: "78",
          hex: "4E",
          ABR: "N  ",
          mean: ""
        },
        {
          binary: "0100 1111",
          decimal: "79",
          hex: "4F",
          ABR: "O  ",
          mean: ""
        },
        {
          binary: "0101 0000",
          decimal: "80",
          hex: "50",
          ABR: "P  ",
          mean: ""
        },
        {
          binary: "0101 0001",
          decimal: "81",
          hex: "51",
          ABR: "Q  ",
          mean: ""
        },
        {
          binary: "0101 0010",
          decimal: "82",
          hex: "52",
          ABR: "R  ",
          mean: ""
        },
        {
          binary: "0101 0011",
          decimal: "83",
          hex: "53",
          ABR: "S  ",
          mean: ""
        },
        {
          binary: "0101 0100",
          decimal: "84",
          hex: "54",
          ABR: "T  ",
          mean: ""
        },
        {
          binary: "0101 0101",
          decimal: "85",
          hex: "55",
          ABR: "U  ",
          mean: ""
        },
        {
          binary: "0101 0110",
          decimal: "86",
          hex: "56",
          ABR: "V  ",
          mean: ""
        },
        {
          binary: "0101 0111",
          decimal: "87",
          hex: "57",
          ABR: "W  ",
          mean: ""
        },
        {
          binary: "0101 1000",
          decimal: "88",
          hex: "58",
          ABR: "X  ",
          mean: ""
        },
        {
          binary: "0101 1001",
          decimal: "89",
          hex: "59",
          ABR: "Y  ",
          mean: ""
        },
        {
          binary: "0101 1010",
          decimal: "90",
          hex: "5A",
          ABR: "Z  ",
          mean: ""
        },
        {
          binary: "0101 1011",
          decimal: "91",
          hex: "5B",
          ABR: "[  ",
          mean: ""
        },
        {
          binary: "0101 1100",
          decimal: "92",
          hex: "5C",
          ABR: "\\",
          mean: ""
        },
        {
          binary: "0101 1101",
          decimal: "93",
          hex: "5D",
          ABR: "]  ",
          mean: ""
        },
        {
          binary: "0101 1110",
          decimal: "94",
          hex: "5E",
          ABR: "^  ",
          mean: ""
        },
        {
          binary: "0101 1111",
          decimal: "95",
          hex: "5F",
          ABR: "_  ",
          mean: ""
        },
        {
          binary: "0110 0000",
          decimal: "96",
          hex: "60",
          ABR: "`  ",
          mean: ""
        },
        {
          binary: "0110 0001",
          decimal: "97",
          hex: "61",
          ABR: "a  ",
          mean: ""
        },
        {
          binary: "0110 0010",
          decimal: "98",
          hex: "62",
          ABR: "b  ",
          mean: ""
        },
        {
          binary: "0110 0011",
          decimal: "99",
          hex: "63",
          ABR: "c  ",
          mean: ""
        },
        {
          binary: "0110 0100",
          decimal: "100",
          hex: "64",
          ABR: "d  ",
          mean: ""
        },
        {
          binary: "0110 0101",
          decimal: "101",
          hex: "65",
          ABR: "e  ",
          mean: ""
        },
        {
          binary: "0110 0110",
          decimal: "102",
          hex: "66",
          ABR: "f  ",
          mean: ""
        },
        {
          binary: "0110 0111",
          decimal: "103",
          hex: "67",
          ABR: "g  ",
          mean: ""
        },
        {
          binary: "0110 1000",
          decimal: "104",
          hex: "68",
          ABR: "h  ",
          mean: ""
        },
        {
          binary: "0110 1001",
          decimal: "105",
          hex: "69",
          ABR: "i  ",
          mean: ""
        },
        {
          binary: "0110 1010",
          decimal: "106",
          hex: "6A",
          ABR: "j  ",
          mean: ""
        },
        {
          binary: "0110 1011",
          decimal: "107",
          hex: "6B",
          ABR: "k  ",
          mean: ""
        },
        {
          binary: "0110 1100",
          decimal: "108",
          hex: "6C",
          ABR: "l  ",
          mean: ""
        },
        {
          binary: "0110 1101",
          decimal: "109",
          hex: "6D",
          ABR: "m  ",
          mean: ""
        },
        {
          binary: "0110 1110",
          decimal: "110",
          hex: "6E",
          ABR: "n  ",
          mean: ""
        },
        {
          binary: "0110 1111",
          decimal: "111",
          hex: "6F",
          ABR: "o  ",
          mean: ""
        },
        {
          binary: "0111 0000",
          decimal: "112",
          hex: "70",
          ABR: "p  ",
          mean: ""
        },
        {
          binary: "0111 0001",
          decimal: "113",
          hex: "71",
          ABR: "q  ",
          mean: ""
        },
        {
          binary: "0111 0010",
          decimal: "114",
          hex: "72",
          ABR: "r  ",
          mean: ""
        },
        {
          binary: "0111 0011",
          decimal: "115",
          hex: "73",
          ABR: "s  ",
          mean: ""
        },
        {
          binary: "0111 0100",
          decimal: "116",
          hex: "74",
          ABR: "t  ",
          mean: ""
        },
        {
          binary: "0111 0101",
          decimal: "117",
          hex: "75",
          ABR: "u  ",
          mean: ""
        },
        {
          binary: "0111 0110",
          decimal: "118",
          hex: "76",
          ABR: "v  ",
          mean: ""
        },
        {
          binary: "0111 0111",
          decimal: "119",
          hex: "77",
          ABR: "w  ",
          mean: ""
        },
        {
          binary: "0111 1000",
          decimal: "120",
          hex: "78",
          ABR: "x  ",
          mean: ""
        },
        {
          binary: "0111 1001",
          decimal: "121",
          hex: "79",
          ABR: "y  ",
          mean: ""
        },
        {
          binary: "0111 1010",
          decimal: "122",
          hex: "7A",
          ABR: "z  ",
          mean: ""
        },
        {
          binary: "0111 1011",
          decimal: "123",
          hex: "7B",
          ABR: "{  ",
          mean: ""
        },
        {
          binary: "0111 1100",
          decimal: "124",
          hex: "7C",
          ABR: "|  ",
          mean: ""
        },
        {
          binary: "0111 1101",
          decimal: "125",
          hex: "7D",
          ABR: "}  ",
          mean: ""
        },
        {
          binary: "0111 1110",
          decimal: "126",
          hex: "7E",
          ABR: "~  ",
          mean: ""
        },
        {
          binary: "0111 1111",
          decimal: "127",
          hex: "7F",
          ABR: "DEL",
          mean: "删除"
        }
      ]
    }
  },
  methods: {}

}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>

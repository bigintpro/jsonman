# jsonman
json formater，安全的json格式化工具

## 已开发功能
+ json格式化
+ url编码和解码
+ url编码和解码新增智能切割
+ 运算符的结核性和优先性
+ ascii 码转换


## 待开发功能
+ xml格式解析
+ int最大值（数据类型最大值）
+ json解析支持扁平格式
+ mysql，oracel关键字
+ base64解码和编码
+ 时间格式转换
```
{\"fid\":\"1478292080236175360\",\"originalFileName\":\"签名.png\",\"businessId\":\"1476371555268218880\",\"remark\":\"\",\"auditValue\":10,\"sid\":\"1478292081267974144\",\"storeFileName\":\"签名.png\",\"currentTime\":\"2022-01-06 17:38:39\",\"createBy\":\"zhengfapei\",\"createTime\":\"2022-01-04 17:07:52\",\"fileSize\":11966,\"appId\":10001,\"name\":\"郑法配\",\"businessType\":\"Approve\",\"fileType\":\"png\"}
```




## 待修复bug
+ json print显示不下，未自动换行

```
{"forms":[{"formColDeclareList":[{"appId":10001,"colBussForm":"{\"displaySign\":0,\"editableSign\":1}","colBussList":"{\"listSign\":1,\"searchSign\":1,\"containSign\":1,\"index\":999}","colDeclareSign":1,"colInspect":"{}","colLayout":"{\"labelCol\":8,\"wrapperCol\":16,\"colSize\":12,\"colRow\":10,\"colIndex\":5}","colName":"str1","colProps":"{\"mode\":\"default\",\"maxLength\":2,\"minLength\":32}","colTitle":"标题","colType":"FormText","containSign":1,"defaultVal":"","disableSign":0,"fid":1466651528822554624,"formName":"Test1","searchSign":1,"sid":1466652684852428800},{"appId":10001,"colBussForm":"{\"displaySign\":0,\"editableSign\":1}","colBussList":"{\"listSign\":1,\"searchSign\":0,\"containSign\":0,\"index\":999}","colDeclareSign":1,"colInspect":"{}","colLayout":"{\"labelCol\":8,\"wrapperCol\":16,\"colSize\":12}","colName":"desc","colProps":"{\"mode\":\"default\"}","colTitle":"描述","colType":"FormTextarea","containSign":0,"defaultVal":"","disableSign":0,"fid":1466651528822554624,"formName":"Test1","searchSign":0,"sid":1466653066949328896}],"formColStoreList":{},"formDeclare":{"appId":10001,"disableSign":1,"formGroup":"emg","formName":"Test1","formTitle":"Test动态表单","mainColName":"","sid":1466651528822554624,"thirdBusiness":"{\"props\":{\"options\":[]},\"attrs\":{}}"}}],"formsHash":"9b8f6454996c1838512fa03d013deca0"}
```



![界面1](./snapshots/p2.jpg)

![界面2](./snapshots/p1.jpg)

![界面2](./snapshots/url_decode.png)

![界面3](./snapshots/ascii.png)

![界面4](./snapshots/c_o.png)


### 欢迎入群交流

![钉钉群](./snapshots/qun.jpg)



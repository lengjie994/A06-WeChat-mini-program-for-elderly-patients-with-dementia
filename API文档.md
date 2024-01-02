# API接口文档

## 登录（完成）

### 功能说明

​	使用code换取openid并登录

### url

​	'http://127.0.0.1:8000/api/user/login/'

### 参数

| 属性名 | 类型   |
| ------ | ------ |
| code   | string |

### 返回内容

| 属性名    | 说明                                           | 类型   |
| --------- | ---------------------------------------------- | ------ |
| openid    | 用户唯一识别标志                               | string |
| msg       | 成功返回标志“success”                          | string |
| session   | 用户session_key                                | string |
| role      | 用户身份，初次登录为newUser，否则为其已有身份  | string |
| specialid | 用户小程序id，自动创建且同身份中唯一，用于绑定 | string |



## 身份选择（完成）

### 功能说明

​	通过openid以及选择的身份将用户身份保存，为用户创建specialid

### url

​	'http://127.0.0.1:8000/api/user/role/'

### 参数

| 属性名 | 说明                    | 类型   |
| ------ | ----------------------- | ------ |
| openid | ——                      | string |
| role   | doctor/guardian/patient | string |

### 返回内容

| 属性名    | 说明                                           | 类型   |
| --------- | ---------------------------------------------- | ------ |
| openid    | 用户唯一识别标志                               | string |
| msg       | 成功返回标志“success”                          | string |
| role      | doctor/guardian/patient                        | string |
| specialid | 用户小程序id，自动创建且同身份中唯一，用于绑定 | string |



## 获取患者信息（完成）

### 功能说明

​	通过openid获取患者个人信息

### url

​	'http://127.0.0.1:8000/api/user/getPatientInfo/'

### 参数

| 属性名 | 说明 | 类型   |
| ------ | ---- | ------ |
| openid | ——   | string |

### 返回内容

| 属性名        | 说明                  | 类型   |
| ------------- | --------------------- | ------ |
| openid        | 用户唯一识别标志      | string |
| msg           | 成功返回标志“success” | string |
| Guardian_id   | 绑定监护人specialid   | string |
| Patient_id    | 本人specialid         | string |
| Status        | 绑定状态              | bool   |
| Name          | 备忘录姓名            | string |
| Address       | 备忘录地址            | string |
| Phone_contact | 备忘录紧急联系人      | string |
| Medicine      | 服药提醒数据          | list   |
| Memoir        | 回忆录数据            | list   |
| Healthdata    | 健康数据              | list   |

#### ##拓展说明##

##### Medicine 列表项json格式

| 属性名          | 说明                            | 类型   |
| --------------- | ------------------------------- | ------ |
| Medicine_name   | 药物名称                        | string |
| Medicine_time   | “一天n次”                       | string |
| Medicine_usage  | “一次m粒”                       | string |
| Medicine_status | 服用状态 已服用/未服用/立即服用 | string |

##### Memoir 列表项json格式

| 属性名 | 说明     | 类型   |
| ------ | -------- | ------ |
| text   | 文本内容 | string |
| urls   | 图片地址 | list   |
| time   | 发送时间 | string |

##### Healthdata 列表项json格式

| 属性名      | 说明         | 类型   |
| ----------- | ------------ | ------ |
| date        | 日期         | string |
| heart       | 心率         | int    |
| temperature | 体温         | float  |
| dbp         | 血压（低压） | int    |
| sbp         | 血压（高压） | int    |



## 获取监护人信息（更新）

### 功能说明

​	通过openid获取监护人个人信息

### url

​	'http://127.0.0.1:8000/api/user/getGuardianInfo/'

### 参数

| 属性名 | 说明 | 类型   |
| ------ | ---- | ------ |
| openid | ——   | string |

### 返回内容

| 属性名        | 说明                  | 类型   |
| ------------- | --------------------- | ------ |
| openid        | 用户唯一识别标志      | string |
| msg           | 成功返回标志“success” | string |
| Guardian_id   | 本人specialid         | string |
| Patient_id    | 绑定的患者specialid   | string |
| Doctor_id     | 绑定的医生id          | string |
| Status        | 绑定状态              | bool   |
| Name          | 备忘录姓名            | string |
| Address       | 备忘录地址            | string |
| Phone_contact | 备忘录紧急联系人      | string |
| Medicine      | 服药提醒数据          | list   |
| Healthdata    | 健康数据              | list   |
| Reservation   | 预约事项              | json   |
| Chatlist      | 聊天记录              | list   |
| Flag          | 聊天记录是否更新标识  | bool   |

#### ##拓展说明##

##### Reservation json格式

| 属性名   | 说明       | 类型 |
| -------- | ---------- | ---- |
| Ready    | 待就诊列表 | list |
| Finished | 已就诊列表 | list |



## 获取医生信息（更新）

### 功能说明

​	通过openid获取医生个人信息

### url

​	'http://127.0.0.1:8000/api/user/getDoctorInfo/'

### 参数

| 属性名 | 说明 | 类型   |
| ------ | ---- | ------ |
| openid | ——   | string |

### 返回内容

| 属性名           | 说明                  | 类型   |
| ---------------- | --------------------- | ------ |
| openid           | 用户唯一识别标志      | string |
| msg              | 成功返回标志“success” | string |
| Doctor_id        | 本人id                | string |
| Doctor_info      | 医生资料              | json   |
| Reservation      | 预约事项              | json   |
| Reservation_info | 预约信息              | json   |
| Guardian_id_list | 联系人列表            | list   |

#### ##拓展说明##

##### Doctor_info json格式

| 属性名   | 说明     | 类型   |
| -------- | -------- | ------ |
| Name     | 姓名     | string |
| Career   | 职称     | string |
| Intro    | 简介     | string |
| Hospital | 就诊医院 | string |
| Address  | 医院地址 | string |

##### Reservation json格式

| 属性名   | 说明       | 类型 |
| -------- | ---------- | ---- |
| Ready    | 待就诊列表 | list |
| Finished | 已就诊列表 | list |



## 监护人修改备忘录（完成）

### 功能说明

​	通过openid获取监护人绑定的患者，然后将患者备忘录修改为传入的信息并保存

### url

​	'http://127.0.0.1:8000/api/user/modifyMemorial/'

### 参数

| 属性名 | 说明       | 类型   |
| ------ | ---------- | ------ |
| openid | ——         | string |
| name   | 姓名       | string |
| place  | 地址       | string |
| phone  | 紧急联系人 | string |

### 返回内容

| 属性名 | 说明                  | 类型   |
| ------ | --------------------- | ------ |
| openid | 用户唯一识别标志      | string |
| msg    | 成功返回标志“success” | string |



## 监护人绑定患者（完成）

### 功能说明

​	通过patient_id查找患者，将其与该监护人双向绑定

### url

​	'http://127.0.0.1:8000/api/user/GuardianToPatient/'

### 参数

| 属性名     | 说明          | 类型   |
| ---------- | ------------- | ------ |
| openid     | ——            | string |
| patient_id | 患者specialid | string |

### 返回内容

| 属性名     | 说明                  | 类型   |
| ---------- | --------------------- | ------ |
| openid     | 用户唯一识别标志      | string |
| msg        | 成功返回标志“success” | string |
| patient_id | 患者specialid         | string |



## 监护人绑定医生

### 功能说明

​	将该监护人内的医生id修改为传入的参数，另外需要将该监护人加入该医生数据下的Guardian_id_list

### url

​	'http://127.0.0.1:8000/api/user/GuardianToDoctor/'

### 参数

| 属性名    | 说明   | 类型   |
| --------- | ------ | ------ |
| openid    | ——     | string |
| doctor_id | 医生id | string |

### 返回内容

| 属性名 | 说明                  | 类型   |
| ------ | --------------------- | ------ |
| openid | 用户唯一识别标志      | string |
| msg    | 成功返回标志“success” | string |



## 监护人发送健康数据（完成）

### 功能说明

​	通过openid获取监护人，将其健康数据部分与其绑定的患者和医生的健康数据部分修改为传入的信息并保存

### url

​	'http://127.0.0.1:8000/api/user/SendHealthdata/'

### 参数

| 属性名     | 说明                       | 类型   |
| ---------- | -------------------------- | ------ |
| openid     | ——                         | string |
| healthdata | 包含血压、体温、心率等数据 | json   |

### 返回内容

| 属性名     | 说明                       | 类型   |
| ---------- | -------------------------- | ------ |
| openid     | 用户唯一识别标志           | string |
| msg        | 成功返回标志“success”      | string |
| healthdata | 包含血压、体温、心率等数据 | json   |



## 患者上传回忆录

### 功能说明

​	通过openid获取患者，将其回忆录数据修改为传入的信息，需要将每次更新的图片内容取出并上传至云端换取云端储存地址并代替原本地址保存

### url

​	'http://127.0.0.1:8000/api/user/SendMemoir/'

### 参数

| 属性名 | 说明                 | 类型   |
| ------ | -------------------- | ------ |
| openid | ——                   | string |
| memoir | 包含文字，图片等数据 | list   |

### 返回内容

| 属性名 | 说明                  | 类型   |
| ------ | --------------------- | ------ |
| openid | 用户唯一识别标志      | string |
| msg    | 成功返回标志“success” | string |
| memoir | 包含文字，图片等数据  | list   |

#### ##拓展说明##

##### Memoir 列表项json格式

| 属性名 | 说明     | 类型   |
| ------ | -------- | ------ |
| text   | 文本内容 | string |
| urls   | 图片地址 | list   |
| time   | 发送时间 | string |



## 回忆录照片上传

### 功能说明

​	前端向后端发送图片的本地地址，由后端保存并返回云端地址

### url

​	'http://127.0.0.1:8000/api/user/UploadImage/'

### 参数

| 属性名   | 说明         | 类型   |
| -------- | ------------ | ------ |
| name     | “image”      | string |
| filepath | 图片本地路径 | stirng |

### 返回内容

| 属性名 | 说明         | 类型   |
| ------ | ------------ | ------ |
| msg    | 图片云端地址 | string |



## 监护人修改服药提醒

### 功能说明

​	通过openid获取监护人，将其与其绑定的患者服药提醒数据修改为传入信息

### url

​	'http://127.0.0.1:8000/api/user/SendReminder/'

### 参数

| 属性名   | 说明                     | 类型   |
| -------- | ------------------------ | ------ |
| openid   | ——                       | string |
| reminder | 包含药名、服用状态等数据 | json   |

### 返回内容

| 属性名   | 说明                     | 类型   |
| -------- | ------------------------ | ------ |
| openid   | 用户唯一识别标志         | string |
| msg      | 成功返回标志“success”    | string |
| reminder | 包含药名、服用状态等数据 | json   |



## 存储聊天记录（完成）

### 功能说明

​	通过openid获取对应用户，然后两个用户通过后端作为中转站进行通信，前端处理好聊天记录发送给后端保存

### url

​	'http://127.0.0.1:8000/api/user/SaveChatlist/'

### 参数

| 属性名      | 说明                        | 类型   |
| ----------- | --------------------------- | ------ |
| openid      | ——                          | string |
| opposite_id | 聊天对象id                  | string |
| chatlist    | 聊天记录                    | list   |
| identity    | 当前用户身份guardian/doctor | string |

### 返回内容

| 属性名 | 说明                  | 类型   |
| ------ | --------------------- | ------ |
| openid | 用户唯一识别标志      | string |
| msg    | 成功返回标志“success” | string |



## 返回聊天记录（完成）

### 功能说明

​	通过openid获取对应用户，然后两个用户通过后端作为中转站进行通信，每一次返回历史聊天记录

### url

​	'http://127.0.0.1:8000/api/user/ReturnChatlist/'

### 参数

| 属性名      | 说明                        | 类型   |
| ----------- | --------------------------- | ------ |
| openid      | ——                          | string |
| opposite_id | 聊天对象id                  | string |
| identity    | 当前用户身份guardian/doctor | string |

### 返回内容

| 属性名   | 说明                  | 类型   |
| -------- | --------------------- | ------ |
| openid   | 用户唯一识别标志      | string |
| msg      | 成功返回标志“success” | string |
| chatlist | 聊天记录              | list   |



## 修改监护人聊天信息更新标识

### 功能说明

​	将监护人数据下的Flag标识置为false

### url

​	'http://127.0.0.1:8000/api/user/GuardianFlagFalse/'

### 参数

| 属性名 | 说明 | 类型   |
| ------ | ---- | ------ |
| openid | ——   | string |

### 返回内容

| 属性名 | 说明                  | 类型   |
| ------ | --------------------- | ------ |
| openid | 用户唯一识别标志      | string |
| msg    | 成功返回标志“success” | string |



## 修改医生聊天信息更新标识

### 功能说明

​	将医生数据下的Flag标识置为false

### url

​	'http://127.0.0.1:8000/api/user/DoctorFlagFalse/'

### 参数

| 属性名      | 说明       | 类型   |
| ----------- | ---------- | ------ |
| openid      | ——         | string |
| guardian_id | 聊天对象id | string |

### 返回内容

| 属性名 | 说明                  | 类型   |
| ------ | --------------------- | ------ |
| openid | 用户唯一识别标志      | string |
| msg    | 成功返回标志“success” | string |



## 上传医生信息

### 功能说明

​	将医生的个人信息储存

### url

​	'http://127.0.0.1:8000/api/user/ModifyDoctorInfo/'

### 参数

| 属性名 | 说明         | 类型   |
| ------ | ------------ | ------ |
| openid | ——           | string |
| info   | 医生个人信息 | json   |

### 返回内容

| 属性名 | 说明                  | 类型   |
| ------ | --------------------- | ------ |
| openid | 用户唯一识别标志      | string |
| msg    | 成功返回标志“success” | string |



## 医生获取健康数据

### 功能说明

​	将医生绑定的监护人对应的患者健康数据发送给医生

### url

​	'http://127.0.0.1:8000/api/user/DoctorFindHealthData/'

### 参数

| 属性名      | 说明 | 类型   |
| ----------- | ---- | ------ |
| guardian_id | ——   | string |

### 返回内容

| 属性名     | 说明                  | 类型   |
| ---------- | --------------------- | ------ |
| Healthdata | 患者健康数据          | list   |
| msg        | 成功返回标志“success” | string |



## 患者输入UID

### 功能说明

​	将患者输入的公众号uid存入数据库

### url

​	'http://127.0.0.1:8000/api/user/WriteUid/'

### 参数

| 属性名 | 说明                  | 类型   |
| ------ | --------------------- | ------ |
| openid | ——                    | string |
| uid    | 患者关注公众号后的uid | string |

### 返回内容

| 属性名 | 说明                  | 类型   |
| ------ | --------------------- | ------ |
| openid | ——                    | string |
| msg    | 成功返回标志“success” | string |
| uid    | 患者关注公众号后的uid | string |



## 修改监护人昵称

### 功能说明

​	将监护人昵称存入数据库

### url

​	'http://127.0.0.1:8000/api/user/ModifyGaurdianNickname/'

### 参数

| 属性名   | 说明       | 类型   |
| -------- | ---------- | ------ |
| openid   | ——         | string |
| nickname | 监护人昵称 | string |

### 返回内容

| 属性名 | 说明                  | 类型   |
| ------ | --------------------- | ------ |
| openid | ——                    | string |
| msg    | 成功返回标志“success” | string |



## 监护人获取患者id

### 功能说明

​	返回监护人绑定的患者id

### url

​	'http://127.0.0.1:8000/api/user/GuardianGetID/'

### 参数

| 属性名 | 说明 | 类型   |
| ------ | ---- | ------ |
| openid | ——   | string |

### 返回内容

| 属性名    | 说明                  | 类型   |
| --------- | --------------------- | ------ |
| patientid | 绑定的患者id          | string |
| msg       | 成功返回标志“success” | string |



## 患者获取监护人id

### 功能说明

​	返回患者绑定的监护人id

### url

​	'http://127.0.0.1:8000/api/user/PatientGetID/'

### 参数

| 属性名 | 说明 | 类型   |
| ------ | ---- | ------ |
| openid | ——   | string |

### 返回内容

| 属性名     | 说明                  | 类型   |
| ---------- | --------------------- | ------ |
| guardianid | 绑定的监护人id        | string |
| msg        | 成功返回标志“success” | string |



## 向公众号发送提醒任务

### 功能说明

​	定时将服药提醒任务发送给公众号，由公众号立即发送服药提醒

### url

​	'http://127.0.0.1:8000/api/user/SendOfficialReminder/'

### 参数

| 属性名       | 说明     | 类型   |
| ------------ | -------- | ------ |
| openid       | ——       | string |
| time         | 发送时间 | string |
| medicineName | 药名     | string |
| count        | 用法用量 | string |

### 返回内容

| 属性名 | 说明                  | 类型   |
| ------ | --------------------- | ------ |
| time   | 发送时间              | string |
| msg    | 成功返回标志“success” | string |



## 删除提醒任务

### 功能说明

​	将后端某个定时提醒任务取消（根据药名）

### url

​	'http://127.0.0.1:8000/api/user/DeleteOneReminder/'

### 参数

| 属性名     | 说明        | 类型   |
| ---------- | ----------- | ------ |
| specialTag | openid+药名 | string |

### 返回内容

| 属性名 | 说明                  | 类型   |
| ------ | --------------------- | ------ |
| msg    | 成功返回标志“success” | string |

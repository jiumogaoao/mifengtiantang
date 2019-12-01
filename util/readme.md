```
#request_UT
```
数据请求类工具
```
##getFetch
```
普通get请求,
(url:请求url 字符串,params:请求参数 JSON)
return JSON
```
##postFetch
```
普通get请求,
(url:请求url 字符串,params:请求参数 JSON)
return JSON
```
#cache_UT
```
缓存内工具
```
##getCookies
```
获取cookie
(name:字段名 字符串)
return JSON
```
##setCookies
```
设置cookie
(name:字段名 字符串,data:内容 JSON)
```
#security_UT
```
安全类工具
```
##encrypt
```
加密
(data:内容 字符串)
return 加密后内容 字符串
```
##decrypt
```
解密
(data:已加密内容 字符串)
return 解密后内容 字符串
```
#log_UT
```
log输出工具
```
##eventTag
```
交互输出
(name:DOM名字 字符串,event:event名字 字符串)
```
##pageTag
```
页面输出
(pageName:页面名 字符串)
```
##errorTag
```
(error:error内容 字符串)
```
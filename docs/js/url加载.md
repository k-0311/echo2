# 大致流程

- url解析
- 缓存检查
- DNS解析
- TCP三次握手
- 数据传输
- TCP四次挥手
- 页面渲染

## 1、url解析

- 地址解析
- URL编码

## 2、缓存检查

- 打开网页：查找`Disk Cache`中是否有匹配，如有则使用，如没有则发送网络请求

- 普通刷新(F5)：因TAB没关闭，因此`Memory Cache`是可用的，会被优先使用，其次才是`Disk Cache`

- 强制刷新：`ctrl+F5`浏览器不使用缓存，因此发送的请求头部均带有 Cache-contro： no-cache(为了兼容，还带了 Pragma：no-cache)，服务器直接返回200和最新内容

  ### 强缓存`Expires/Cache-Control`
  
  > 浏览器对于强缓存的处理：根据第一次请求资源是返回的相应头来判断
  
  - Expires：缓存过期时间，用来指定资源到期的时间(HTTP/1.0)
  - Cache-Control：`cache-contro：max-age=2592000`第一次拿到资源后的2592000秒内(30天)，再次发送请求，读取缓存中的信息(HTTP/1.1)
  - 两者同时存在的话， `Cache-Control`优先级高于 `Expire`
  
  ### 协商缓存`Last-Modified/ETag`
  
  > 协商缓存就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程
  
  - 协商缓存生效，返回 304 和 Not modified
  - 协商缓存失败，返回200和请求结果

## 3、DNS解析

- 浏览器先检查自身缓存中有没有这个域名对应的IP地址，如果有，解析结束
- 检查本地hosts是否记录，有就会返回对应的映射IP
- 查询本地DNS解析器缓存

## 4、TCP三次握手

## 5、数据传输

## 6、TCP四次挥手

## 7、页面渲染

![](./img/render.png)

### 优化

- 减少DNS请求次数
- DNS预获取（DNS Prefetch）

# 性能优化总结

## 利用缓存

- 对于静态资源文件实现强缓存和协商缓存
- 对于不经常更新的接口数据采用本地存储做数据缓存

## DNS优化

- 减少DNS请求次数，页面尽可能少用过多域名，将静态资源文件放在同一个域名下
- DNS预解析(DNS Prefetch)

## 数据传输

- 减少数据传输大小
  - 内容或者数据压缩(webpack等)
  - GZIP压缩
  - 大批量数据分批次请求
- 减少HTTP请求次数
  - 资源文件合并处理
  - 字体图标
  - 雪碧图
  - base64图片

# 参考资料

- [从输入URL地址到看到页面，到网络性能优化](https://blog.csdn.net/wangxinyue_blog/article/details/112179461?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-0&spm=1001.2101.3001.4242)
- 


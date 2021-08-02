(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{364:function(t,a,_){t.exports=_.p+"assets/img/render.67a3bc4a.png"},380:function(t,a,_){"use strict";_.r(a);var v=_(44),e=Object(v.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"大致流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#大致流程"}},[t._v("#")]),t._v(" 大致流程")]),t._v(" "),v("ul",[v("li",[t._v("url解析")]),t._v(" "),v("li",[t._v("DNS解析")]),t._v(" "),v("li",[t._v("缓存检查")]),t._v(" "),v("li",[t._v("TCP三次握手")]),t._v(" "),v("li",[t._v("数据传输")]),t._v(" "),v("li",[t._v("TCP四次挥手")]),t._v(" "),v("li",[t._v("页面渲染")])]),t._v(" "),v("h2",{attrs:{id:"_1、url解析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、url解析"}},[t._v("#")]),t._v(" 1、url解析")]),t._v(" "),v("ul",[v("li",[t._v("地址解析")]),t._v(" "),v("li",[t._v("URL编码")])]),t._v(" "),v("h2",{attrs:{id:"_2、dns解析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、dns解析"}},[t._v("#")]),t._v(" 2、DNS解析")]),t._v(" "),v("ul",[v("li",[t._v("浏览器先检查自身缓存中有没有这个域名对应的IP地址，如果有，解析结束")]),t._v(" "),v("li",[t._v("检查本地hosts是否记录，有就会返回对应的映射IP")]),t._v(" "),v("li",[t._v("查询本地DNS解析器缓存")])]),t._v(" "),v("h2",{attrs:{id:"_3、缓存检查"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、缓存检查"}},[t._v("#")]),t._v(" 3、缓存检查")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("打开网页：查找"),v("code",[t._v("Disk Cache")]),t._v("中是否有匹配，如有则使用，如没有则发送网络请求")])]),t._v(" "),v("li",[v("p",[t._v("普通刷新(F5)：因TAB没关闭，因此"),v("code",[t._v("Memory Cache")]),t._v("是可用的，会被优先使用，其次才是"),v("code",[t._v("Disk Cache")])])]),t._v(" "),v("li",[v("p",[t._v("强制刷新："),v("code",[t._v("ctrl+F5")]),t._v("浏览器不使用缓存，因此发送的请求头部均带有 Cache-contro： no-cache(为了兼容，还带了 Pragma：no-cache)，服务器直接返回200和最新内容")]),t._v(" "),v("h3",{attrs:{id:"强缓存expires-cache-control"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#强缓存expires-cache-control"}},[t._v("#")]),t._v(" 强缓存"),v("code",[t._v("Expires/Cache-Control")])]),t._v(" "),v("blockquote",[v("p",[t._v("浏览器对于强缓存的处理：根据第一次请求资源是返回的相应头来判断")])]),t._v(" "),v("ul",[v("li",[t._v("Expires：缓存过期时间，用来指定资源到期的时间(HTTP/1.0)")]),t._v(" "),v("li",[t._v("Cache-Control："),v("code",[t._v("cache-contro：max-age=2592000")]),t._v("第一次拿到资源后的2592000秒内(30天)，再次发送请求，读取缓存中的信息(HTTP/1.1)")]),t._v(" "),v("li",[t._v("两者同时存在的话， "),v("code",[t._v("Cache-Control")]),t._v("优先级高于 "),v("code",[t._v("Expire")])])]),t._v(" "),v("h3",{attrs:{id:"协商缓存last-modified-etag"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存last-modified-etag"}},[t._v("#")]),t._v(" 协商缓存"),v("code",[t._v("Last-Modified/ETag")])]),t._v(" "),v("blockquote",[v("p",[t._v("协商缓存就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程")])]),t._v(" "),v("ul",[v("li",[t._v("协商缓存生效，返回 304 和 Not modified")]),t._v(" "),v("li",[t._v("协商缓存失败，返回200和请求结果")])])])]),t._v(" "),v("h2",{attrs:{id:"_4、tcp三次握手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、tcp三次握手"}},[t._v("#")]),t._v(" 4、TCP三次握手")]),t._v(" "),v("h2",{attrs:{id:"_5、数据传输"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5、数据传输"}},[t._v("#")]),t._v(" 5、数据传输")]),t._v(" "),v("h2",{attrs:{id:"_6、tcp四次挥手"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6、tcp四次挥手"}},[t._v("#")]),t._v(" 6、TCP四次挥手")]),t._v(" "),v("h2",{attrs:{id:"_7、页面渲染"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7、页面渲染"}},[t._v("#")]),t._v(" 7、页面渲染")]),t._v(" "),v("p",[v("img",{attrs:{src:_(364),alt:""}})]),t._v(" "),v("h3",{attrs:{id:"优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优化"}},[t._v("#")]),t._v(" 优化")]),t._v(" "),v("ul",[v("li",[t._v("减少DNS请求次数")]),t._v(" "),v("li",[t._v("DNS预获取（DNS Prefetch）")])]),t._v(" "),v("h1",{attrs:{id:"性能优化总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#性能优化总结"}},[t._v("#")]),t._v(" 性能优化总结")]),t._v(" "),v("h2",{attrs:{id:"利用缓存"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#利用缓存"}},[t._v("#")]),t._v(" 利用缓存")]),t._v(" "),v("ul",[v("li",[t._v("对于静态资源文件实现强缓存和协商缓存")]),t._v(" "),v("li",[t._v("对于不经常更新的接口数据采用本地存储做数据缓存")])]),t._v(" "),v("h2",{attrs:{id:"dns优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#dns优化"}},[t._v("#")]),t._v(" DNS优化")]),t._v(" "),v("ul",[v("li",[t._v("减少DNS请求次数，页面尽可能少用过多域名，将静态资源文件放在同一个域名下")]),t._v(" "),v("li",[t._v("DNS预解析(DNS Prefetch)")])]),t._v(" "),v("h2",{attrs:{id:"数据传输"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据传输"}},[t._v("#")]),t._v(" 数据传输")]),t._v(" "),v("ul",[v("li",[t._v("减少数据传输大小\n"),v("ul",[v("li",[t._v("内容或者数据压缩(webpack等)")]),t._v(" "),v("li",[t._v("GZIP压缩")]),t._v(" "),v("li",[t._v("大批量数据分批次请求")])])]),t._v(" "),v("li",[t._v("减少HTTP请求次数\n"),v("ul",[v("li",[t._v("资源文件合并处理")]),t._v(" "),v("li",[t._v("字体图标")]),t._v(" "),v("li",[t._v("雪碧图")]),t._v(" "),v("li",[t._v("base64图片")])])])]),t._v(" "),v("h1",{attrs:{id:"参考资料"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://blog.csdn.net/wangxinyue_blog/article/details/112179461?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-0&spm=1001.2101.3001.4242",target:"_blank",rel:"noopener noreferrer"}},[t._v("从输入URL地址到看到页面，到网络性能优化"),v("OutboundLink")],1)]),t._v(" "),v("li")])])}),[],!1,null,null,null);a.default=e.exports}}]);
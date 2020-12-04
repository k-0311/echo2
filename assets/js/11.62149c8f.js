(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{441:function(s,t,a){"use strict";a.r(t);var n=a(53),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"基础数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础数据类型"}},[s._v("#")]),s._v(" 基础数据类型")]),s._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[s._v("字符类型 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v("\n所有整数类型，例如 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("i32")]),s._v(" 、 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("u32")]),s._v(" 、 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("i64")]),s._v(" 等\n所有浮点类型，"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("f32")]),s._v(" 和 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("f64")]),s._v("\n布尔类型 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bool")]),s._v("，值为 "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" 或 "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" \n仅包含以上类型数据的元组（"),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Tuples")]),s._v("）"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//上述几种基本类型的集合")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" tup "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ubi"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("996")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.14")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//与JS相似，基础类型可分为 number、string、boolean 三种，其中number类型包含整数和浮点数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//同样具有堆、栈概念，基础类型存在栈中，引用类型也是以指针的形式指向内存地址 ")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//不同点，当 s1 赋值给 s2 以后 s1 将不可以再被使用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" s1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" s2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[s._v("println!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{}, world!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 错误！s1 已经失效")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);
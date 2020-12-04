# 基础数据类型

```rust
字符类型 char
所有整数类型，例如 i32 、 u32 、 i64 等
所有浮点类型，f32 和 f64
布尔类型 bool，值为 true 或 false 
仅包含以上类型数据的元组（Tuples）//上述几种基本类型的集合
let tup = ("ubi", 996, 3.14, false);
let (a,b,c,d) = tup;
//与JS相似，基础类型可分为 number、string、boolean 三种，其中number类型包含整数和浮点数
//同样具有堆、栈概念，基础类型存在栈中，引用类型也是以指针的形式指向内存地址 

//不同点，当 s1 赋值给 s2 以后 s1 将不可以再被使用
let s1 = String::from("hello");
let s2 = s1; 
println!("{}, world!", s1); // 错误！s1 已经失效
```


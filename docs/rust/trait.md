```rust
类似于JS中的继承
为 struct 实现 trait 后可以使用 trait 中的一些方法
多个 struct 可以共用一个 trait

pub trait Summary {
  fn some_fn(&self) -> String{
    String::form("one")
  };
}

pub struct One {
  pub a:String
}
pub struct Two {
  pub b:String
}
impl Summary for One {}
impl Summary for Two {}
```

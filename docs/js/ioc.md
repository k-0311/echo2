```javascript
const isFunction = fn => fn && typeof fn === 'function'

class App {
  constructor(options) {
    this.formatOptions(options)
    this.init()
  }
  static use(plugin) {
    // if (this.$modules.indexOf(plugin) > -1) {
    //   return this
    // }
    const $modules = this.$modules || (this.$modules = [])
    $modules.push([plugin, [...arguments].slice(1)])
    return this
  }
  formatOptions({ onReady, ...options }) {
    this.options = options
    isFunction(onReady) && onReady(this)
  }
  init() {
    this.initModules()
  }
  initModules() {
    App.$modules?.map(([plugin, args]) => {
      const _args = [this, ...args]
      if (isFunction(plugin.install)) {
        plugin.install.apply(plugin, _args)
      } else if (isFunction(plugin)) {
        plugin.apply(null, _args)
      }
    })
  }
}

class Plugin {
  constructor(options) {
    // some options...
  }
  install(app, ...args) {
    // do something...
  }
}
let plugin = new Plugin()

App.use(plugin, 1, 5, 4, 94, 974, 94, 9)
new App({
  name: 'seeker',
  outfit: 'ubi',
  onReady(app) {
    // do something...
  }
})
```

# 参考资料

- [前端中的 IoC 理念](https://zhuanlan.zhihu.com/p/53832991)

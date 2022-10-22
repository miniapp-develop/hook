# 微信小程序 Hook

拦截并增强小程序组件（App, Page, Component）的 Option 方法。

## Usage

开启微信小程序的 npm 支持：
[https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

```shell script
    npm install @mini-dev/hook
```

### 配置钩子

由于 App，Page 等方法是框架提供的，最好是不要覆盖框架的方法，指不定那天就出问题了。

建议使用包装的方式创建新的构造函数。一个示例如下：

app.new.js

```javascript
const { _App, _Page, _Component} = require('@mini-dev/hook');
_App.use({
    onLaunch(host) { //host is App
        return {
            before(options) {
                console.log('App.onLaunch...... before 1', options);
            },
            afterReturn(res, options) {
                console.log('App.onLaunch...... afterReturn 1', options);
            }
        };
    }
})

_Page.use({
    onLoad(host) { //host is page
        return {
            before(query) {
                console.log(this.route, 'Page.onLoad...... before', this.data, query);
            }
        };
    }
});

_Component.use({
    'methods.onTap': function (host) { //host is Component
      return {
          before(e) {
              wx.showModal({
                  content: 'newComponent.onTap'
              });
          }
      }
    }
});

```

app.js

```javascript
import {_App as App} from './app.new';
App({
    onLaunch () {
    }
})
```

如果你的小程序原本就已经包装了 App， Page 等框架方法，那么也可以创建自定义的包装器，以 App 为例：

app.new.js

```javascript
import OldApp from './App.old';
const { _App } = require('@mini-dev/hook');
const newApp = _App.create(OldApp); // OldApp 是你自定义的App包装函数
newApp.use({
    onLaunch() {
        return {
            before(option) {
                console.log('App.onLaunch...... before 1', this.data, option);
            }
        };
    }
})
export default newApp;
```

app.js

```javascript
import {_App as App} from './app.new';
App({
    onLaunch () {
    }
})
```

pages/sample/index.js

```javascript
import {_Page as Page} from './page.new';
Page({
    onLoad () {
    }
})
```

### ChangeLogs

#### 0.0.16
1. 修正示例代码；

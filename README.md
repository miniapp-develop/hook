# 微信小程序 Hook

拦截并增强小程序组件（App, Page, Component）的生命周期方法。


## Usage

开启微信小程序的 npm 支持：
[https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

```shell script
    npm install @mini-dev/hook
```

### 配置钩子

由于 App，Page等方法是框架提供的，最好是不要覆盖框架的方法，指不定那天就出问题了。

建议使用包装的方式创建新的函数。一个示例如下：

app.new.js

```javascript
const { _App, _Page, _Component} = require('@mini-dev/hook');
_App.use({
    onLaunch() {
        return {
            before(options) {
                console.log('new App.onLaunch...... before 1', options);
            },
            after(options) {
                console.log('new App.onLaunch...... after 1', options);
            }
        };
    }
})
_Page.use({
    onLoad() {
        return {
            before() {
                console.log(this.route, 'new Page.onLoad...... before', this.oldName);
            }
        };
    }
});
_Component.use({
    'methods.onTap': function () {
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

如果你的小程序原本就已经包装了 App， Page 等框架方法，那么也可以再包装直接使用，以 App 为例：

app.new.js

```javascript
import OldApp from './App.old';
const { _App } = require('@mini-dev/hook');
const newApp = _App.create(OldPage); // OldApp 是你自定义的App包装函数
newApp.use({
    onLaunch() {
        return {
            before() {
                console.log('new App.onLaunch...... before 1', this.oldName);
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
import {_Page as Page} from './app.new';
Page({
    onLoad () {
    }
})
```
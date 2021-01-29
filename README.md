# 微信小程序 Hook

hook 小程序组件（App, Page, Component）的生命周期方法。


## Usage

开启微信小程序的 npm 支持：
[https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

package.json

```json
{
  "dependencies": {
    "miniapp-hook": "0.1.1"
  }
}

```

```shell script
    npm install
```

app.js

```javascript
const { App, Page, Component, appLogger, pageLogger} = require('miniapp-hook');

App.use(appLogger);
Page.use(pageLogger);

Component.add({
    created() {
        return {
            before() {
                this.onTap = function () {
                    wx.showModal({
                        content: 'dynamic onTap'
                    });
                };
            }
        }
    }
});

App({
    onLaunch: function () {
    }
})

Page({
    onLoad: function () {
    }
})
```
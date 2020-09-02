# 微信小程序 Hook

hook 小程序的生命周期方法


## Usage

开启微信小程序的 npm 支持：
[https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

```javascript
const {App, Page, Component, appLogger, pageLogger} = require('./libs/hook');

App.add(appLogger);
Page.add(pageLogger);

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
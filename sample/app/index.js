const MiniHook = require('@mini-dev/hook');

const _OriginApp = App;

function DefaultApp(option) {
    option.oldName = 'DefaultApp';
    const old = option.onLaunch;
    option.onLaunch = function (option) {
        console.log('[DefaultApp].onLaunch', this.oldName, option);
        old.call(this, option);
    };
    return _OriginApp(option);
}
const NewApp = MiniHook._App
    .create(DefaultApp)
    .use({
        onLaunch(host) {
            return {
                before(options) {
                    console.log('[NewApp].onLaunch before-1', this.oldName, options);
                },
                afterReturn(result, options) {
                    console.log('[NewApp].onLaunch afterReturn', this.oldName, options);
                }
            };
        }
    })
    .use({
        onLaunch(host) {
            return {
                before(options) {
                    console.log('[NewApp].onLaunch before-2', this.oldName, options);
                }
            };
        }
    });

const _OriginPage = Page;
function DefaultPage(option) {
    option.oldName = 'DefaultPageName';
    const old = option.onLoad;
    option.onLoad = function (query) {
        console.log('[DefaultPage].onLoad', this.route, this.data, query);
        old.call(this, query);
    };
    return _OriginPage(option);
}

const NewPage = MiniHook._Page
    .create(DefaultPage)
    .use({
        onLoad(page) {
            return {
                before(query) {
                    console.log('[NewPage].onLoad before', this.route, this.data, query);
                }
            };
        },
        onShareAppMessage(page) {
            if (this.onShareAppMessage) {
                // 如果原来的页面配置框架的分享回调，则拦截
                return {
                    afterReturn(result, { from, target, webViewUrl }) {
                        console.log('[Page].onShareAppMessage', result);
                        return {
                            title: '默认分享标题!',
                            path: '/pages/index/index',
                            imageUrl: 'https://avatars.githubusercontent.com/u/1892804?v=4',
                            ...result
                        };
                    }
                };
            } else {
                // 页面没有配置框架的分享回调
                if (page.shareExcluded) {
                    // 不需要自动注入回调
                    return false;
                } else {
                    //自动注入分享回调
                    return {
                        afterReturn(result, res) {
                            console.log('[Page].onShareAppMessage', result);
                            return {
                                title: '默认分享标题!',
                                path: '/pages/index/index',
                                imageUrl: 'https://avatars.githubusercontent.com/u/1892804?v=4'
                            };
                        }
                    };
                }
            }
        },
        getPageInfo: {
            afterReturn(result) {
                return {
                    NewPage: 'NewPage',
                    ...result
                };
            }
        },
        onTap(host) {
            return {
                before(e) {
                    console.log('[NewApp].onTap', this.getPageInfo(), host, e);
                }
            };
        }
    })
    .use({
        onShow() {
            return {
                before() {
                    console.log('[NewPage].onShow before', this.route, this.data);
                }
            };
        }
    });

const _OriginComponent = Component;
function DefaultComponent(option) {
    if (!option.externalClasses) {
        option.externalClasses = [];
    }
    option.externalClasses.unshift('old-class');
    option.data = option.data || {};
    option.data.name = 'DefaultComponent';
    return _OriginComponent(option);
}

const NewComponent = MiniHook._Component.create(DefaultComponent).use({
    'methods.onTap': function (host) {
        return {
            before(e) {
                console.log('[NewComponent].onTap:showModal', e);
                wx.showModal({
                    content: 'NewComponent methods.onTap:' + this.data.name
                });
            }
        };
    }
});

export { NewApp, NewComponent, NewPage, DefaultApp, DefaultPage, DefaultComponent };

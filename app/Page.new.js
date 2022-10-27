import OldPage from './Page.old';

const {_Page} = require('../libs/index');

const NewPage = _Page.create(OldPage);
NewPage.use({
    onLoad(page) {
        return {
            before(query) {
                console.log('NewPage.onLoad before', this.route, this.data, query);
            }
        };
    },
    onShareAppMessage(page) {
        if (this.onShareAppMessage) { // 如果原来的页面配置框架的分享回调，则拦截
            return {
                afterReturn(result, {from, target, webViewUrl}) {
                    console.log('Page.onShareAppMessage', result)
                    return {
                        title: '默认分享标题!',
                        path: '/pages/index/index',
                        imageUrl: 'https://avatars.githubusercontent.com/u/1892804?v=4',
                        ...result
                    };
                }
            }
        } else { // 页面没有配置框架的分享回调
            if (page.shareExcluded) { // 不需要自动注入回调
                return false;
            } else { //自动注入分享回调
                return {
                    afterReturn(result, res) {
                        console.log('Page.onShareAppMessage', result)
                        return {
                            title: '默认分享标题!',
                            path: '/pages/index/index',
                            imageUrl: 'https://avatars.githubusercontent.com/u/1892804?v=4'
                        };
                    }
                }
            }
        }
    },
    getPageInfo: {
        afterReturn(result) {
            return {
                NewPage: 'NewPage',
                ...result
            }
        }
    },
    onTap(host) {
        return {
            before(e) {
                console.log('NewApp.onTap', this.getPageInfo(), host, e);
            }
        };
    }
}).use({
    onShow() {
        return {
            before() {
                console.log('NewPage.onShow before', this.route, this.data);
            }
        };
    }
});
export default NewPage;

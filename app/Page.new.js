import OldPage from './Page.old';

const {_Page} = require('../libs/index');

const NewPage = _Page.create(OldPage);
NewPage.use({
    onLoad(page) {
        return {
            before(query) {
                console.log('NewPage.onLoad before', this.route, this.date, query);
            }
        };
    },
    onShareAppMessage(page) {
        if (this.onShareAppMessage) {
            return {
                afterReturn(result, {from, target, webViewUrl}) {
                    console.log('NewPage.onShareAppMessage', result)
                    return {
                        title: '默认分享标题!',
                        path: '/pages/index/index',
                        imageUrl: 'https://avatars.githubusercontent.com/u/1892804?v=4',
                        ...result
                    };
                }
            }
        } else if (page.shareExcluded) { // 强制关闭分享
            return false;
        } else { // 默认分享
            return {
                afterReturn() {
                    return {
                        title: '默认分享标题!',
                        path: '/pages/index/index',
                        imageUrl: 'https://avatars.githubusercontent.com/u/1892804?v=4'
                    };
                }
            }
        }
    },
    onTap(e) {
        return {
            before() {
                console.log('NewApp.onTap', e);
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

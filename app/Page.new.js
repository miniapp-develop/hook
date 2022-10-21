import OldPage from './Page.old';

const {_Page} = require('../libs/index');

const NewPage = _Page.create(OldPage);
NewPage.use({
    onLoad() {
        return {
            before(query) {
                console.log(this.route, 'NewPage.onLoad...... before', this.oldName, query);
            }
        };
    },
    onShareAppMessage(page) {
        if (page.onShareAppMessage) {
            return {
                after(res, options) {
                    console.log('NewPage.onShareAppMessage', res)
                    return {
                        title: '默认分享标题!',
                        path: '/pages/index/index',
                        imageUrl: 'https://avatars.githubusercontent.com/u/1892804?v=4',
                        ...res
                    };
                }
            }
        } else if (page.shareExcluded) { // 强制关闭分享
            return false;
        } else { // 默认分享
            return {
                after() {
                    return {
                        title: '默认分享标题!',
                        path: '/pages/index/index',
                        imageUrl: 'https://avatars.githubusercontent.com/u/1892804?v=4'
                    };
                }
            }
        }
    }
}).use({
    onShow() {
        return {
            before() {
                console.log(this.route, 'NewPage.onShow...... before', this.oldName);
            }
        };
    }
});
export default NewPage;

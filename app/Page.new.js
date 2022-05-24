import OldPage from './Page.old';

const {_Page} = require('../libs/index');

const newPage = _Page.create(OldPage);
newPage.use({
    onLoad() {
        return {
            before(query) {
                console.log(this.route, 'new Page.onLoad...... before', this.oldName, query);
            }
        };
    },
    onShareAppMessage() {
        return {
            after(res, options) {
                console.log('onShareAppMessage', res)
                return {
                    title: '默认分享标题!',
                    path: '/pages/index/index',
                    imageUrl: 'https://avatars.githubusercontent.com/u/1892804?v=4',
                    ...res
                };
            }
        }
    }
}).use({
    onShow() {
        return {
            before() {
                console.log(this.route, 'new Page.onShow...... before', this.oldName);
            }
        };
    }
});
export default newPage;

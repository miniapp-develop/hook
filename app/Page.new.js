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

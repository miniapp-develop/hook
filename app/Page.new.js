import OldPage from './Page.old';
import {_Page, pageLogger} from '../libs/index';

const newPage = _Page.create(OldPage);
newPage.use(pageLogger);
newPage.use({
    onLoad() {
        return {
            before() {
                console.log(this.route, 'new Page.onLoad...... before', this.oldName);
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

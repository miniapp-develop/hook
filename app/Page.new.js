import OldPage from './Page.old';
import {_Page} from '../libs/miniapp';
import {pageLogger} from '../libs/logger';

const newPage = _Page.create(OldPage);
newPage.use(pageLogger);
newPage.use({
    onShow() {
        return {
            before() {
                console.log('Page.onShow before1', this.oldName);
            }
        };
    }
}).use({
    onShow() {
        return {
            before() {
                console.log('Page.onShow before2');
            }
        };
    }
});
export default newPage;

import { OldPage } from '../../app/index';

OldPage({
    onLoad(query) {
        console.log('Page.onLoad', this.route, query);
    }
});

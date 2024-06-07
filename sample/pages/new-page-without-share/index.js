import { NewPage } from '../../app/index';

NewPage({
    __name__: 'page_without_share',
    shareExcluded: true,
    onLoad(query) {
        console.log('[Page].onLoad', this.route, query);
    }
});

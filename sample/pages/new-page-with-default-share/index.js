import { NewPage } from '../../app/index';

NewPage({
    __name__: 'page_with_default_share',
    onLoad(query) {
        console.log('[Page].onLoad', this.route, query);
    }
});

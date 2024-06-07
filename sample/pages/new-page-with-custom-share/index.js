import { NewPage } from '../../app/index';

NewPage({
    __name__: 'page_with_custom_share',
    data: {
        name: 'new-page-with-custom-share'
    },
    onLoad(query) {
        console.log('[Page].onLoad', this.route, this.data, query);
    },
    onShareAppMessage({from, target, webViewUrl}) {
        return {
            title: '页面内自定义的标题',
        };
    },
    getPageInfo() {
        return this.data;
    }
});

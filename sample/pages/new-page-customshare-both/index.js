import { NewPage } from '../../app/index';

NewPage({
    __name__: 'new-page-customshare-both',
    shareMode: 'both',
    onLoad(query) {
        console.log('[Page].onLoad', this.route, query);
    },
    onShareAppMessage({ from, target, webViewUrl }) {
        return {
            title: `页面内自定义的标题`
        };
    }
});

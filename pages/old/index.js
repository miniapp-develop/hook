import _Page from '../../app/Page.old';

_Page({
    data: {
        key1: 'value1',
        key2: 'value2'
    },
    onLoad(query) {
        console.log('Page.onLoad', query);
    }
});

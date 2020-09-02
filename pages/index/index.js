const {Page} = require('../../libs/index');

Page({
    data: {
        key1: 'value1',
        key2: 'value2'
    },
    onLoad(query) {
        console.log('onLoad', query);
    }
});

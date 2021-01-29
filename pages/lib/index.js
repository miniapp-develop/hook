const {_Page} = require('../../libs/index');

_Page({
    onLoad(query) {
        console.log(this.route, 'Page.onLoad', query);
    }
});

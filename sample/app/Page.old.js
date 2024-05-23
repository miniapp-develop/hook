function OldPage(option) {
    option.oldName = 'OldPageName';
    const old = option.onLoad;
    option.onLoad = function (query) {
        console.log('OldPage.onLoad', this.route, this.data, query);
        old.call(this, query);
    }
    return Page(option);
}

export default OldPage;
function OldPage(option) {
    option.oldName = 'OldPageName';
    const old = option.onLoad;
    option.onLoad = function (query) {
        console.log(this.route, 'OldPage.onLoad......');
        old.call(this, query);
    }
    return Page(option);
}

export default OldPage;
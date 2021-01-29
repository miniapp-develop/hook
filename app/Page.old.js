function _Page(option) {
    option.oldName = 'oldPageName';
    const old = option.onLoad;
    option.onLoad = function (query) {
        console.log(this.route, 'old Page.onLoad......');
        old.call(this, query);
    }
    return Page(option);
}

export default _Page;
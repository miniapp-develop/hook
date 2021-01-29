function _App(option) {
    option.oldName = 'oldAppName';
    const old = option.onLaunch;
    option.onLaunch = function (query) {
        console.log('old-page App.onLaunch......');
        old.call(this, query);
    }
    return App(option);
}

export default _App;
function OldApp(option) {
    option.oldName = 'oldAppName';
    const old = option.onLaunch;
    option.onLaunch = function (option) {
        console.log('OldApp.onLaunch', this.oldName, option);
        old.call(this, option);
    }
    return App(option);
}

export default OldApp;
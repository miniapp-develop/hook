import OldApp from './App.old';

const {_App} = require('../libs/index');

const NewApp = _App.create(OldApp);
NewApp.use({
    onLaunch(host) {
        return {
            before(options) {
                console.log('NewApp.onLaunch before-1', this.oldName, options);
            },
            afterReturn(result, options) {
                console.log('NewApp.onLaunch afterReturn', this.oldName, options);
            }
        };
    }
}).use({
    onLaunch(host) {
        return {
            before(options) {
                console.log('NewApp.onLaunch before-2', this.oldName, options);
            }
        };
    }
});
export default NewApp;
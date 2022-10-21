import OldApp from './App.old';

const {_App} = require('../libs/index');

const NewApp = _App.create(OldApp);
NewApp.use({
    onLaunch() {
        return {
            before(options) {
                console.log('NewApp.onLaunch. before 1', this.oldName, options);
            },
            after(options) {
                console.log('NewApp.onLaunch. after 1', this.oldName, options);
            }
        };
    }
}).use({
    onLaunch() {
        return {
            before(options) {
                console.log('NewApp.onLaunch. before 2', this.oldName, options);
            }
        };
    }
});
export default NewApp;
import OldApp from './App.old';

const {_App} = require('../libs/index');

const newApp = _App.create(OldApp);
newApp.use({
    onLaunch() {
        return {
            before(options) {
                console.log('new App.onLaunch...... before 1', this.oldName, options);
            },
            after(options) {
                console.log('new App.onLaunch...... after 1', this.oldName, options);
            }
        };
    }
}).use({
    onLaunch() {
        return {
            before(options) {
                console.log('new App.onLaunch...... before 2', this.oldName, options);
            }
        };
    }
});
export default newApp;
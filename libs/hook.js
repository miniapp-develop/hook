const hook = require('@xesam/hook');

const _App = hook.hookable(App);
const _Page = hook.hookable(Page);
const _Component = hook.hookable(Component);

function log(...events) {
    return events.reduce((t, event) => {
        t[event] = function () {
            return {
                before() {
                    console.log(this.route, event);
                }
            }
        };
        return t;
    }, {});
}

const appLogger = {
    onLaunch() {
        return {
            before(options) {
                console.log('App.onLaunch before', options);
            },
            after(options) {
                console.log('App.onLaunch after', options);
            }
        }
    },
    onShow() {
        return {
            before(options) {
                console.log('App.onShow', options);
            }
        }
    }
};

const pageLogger = {
    onLoad() {
        return {
            before(query) {
                console.log(this.route, 'onLoad before', this.data, query);
            },
            after(query) {
                console.log(this.route, 'onLoad after', query);
            }
        }
    },
    ...log('onShow', 'onReady', 'onHide', 'onUnload')
};

exports.App = _App;
exports.Page = _Page;
exports.Component = _Component;
exports.appLogger = appLogger;
exports.pageLogger = pageLogger;
const {hook} = require('@xesam/hook');

function create(constructor) {
    function $Constructor(option) {
        return $Constructor.init(option, constructor);
    }

    $Constructor.stack = [];
    $Constructor.init = function (option, creator) {
        let hookedOption = option;
        this.stack.forEach(decoration => {
            hookedOption = hook(hookedOption, decoration);
        });
        return creator(hookedOption);
    };
    $Constructor.use = function (decoration) {
        this.stack.push(decoration);
        return this;
    };
    $Constructor.create = create;
    return $Constructor;
}

const _App = create(App);
const _Page = create(Page);
const _Component = create(Component);

module.exports = {_App, _Page, _Component};
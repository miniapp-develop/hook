const {hook} = require('@xesam/hook');

function create(creator) {
    function $App(option) {
        return $App.init(option, creator);
    }

    $App.stack = [];
    $App.init = function (option, creator) {
        let hookedOption = option;
        this.stack.forEach(ele => {
            hookedOption = hook(hookedOption, ele);
        });
        return creator(hookedOption);
    };
    $App.use = function (decoration) {
        this.stack.push(decoration);
        return this;
    };
    $App.create = create;
    return $App;
}

const _App = create(App);
const _Page = create(Page);
const _Component = create(Component);

export {
    _App,
    _Page,
    _Component
}
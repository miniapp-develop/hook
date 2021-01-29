function _Component(option) {
    if (!option.externalClasses) {
        option.externalClasses = []
    }
    option.externalClasses.unshift('ext-class');
    option.data = option.data || {};
    option.data.name = 'oldComponent';
    return Component(option);
}

export default _Component;
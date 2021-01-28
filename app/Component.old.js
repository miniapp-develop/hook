function _Component(option) {
    if (!option.externalClasses) {
        option.externalClasses = []
    }
    option.externalClasses.unshift('ext-class');
    return Component(option);
}

export default _Component;
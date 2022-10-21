function OldComponent(option) {
    if (!option.externalClasses) {
        option.externalClasses = []
    }
    option.externalClasses.unshift('old-class');
    option.data = option.data || {};
    option.data.name = 'OldComponent';
    return Component(option);
}

export default OldComponent;
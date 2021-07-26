import OldComponent from './Component.old';

const {_Component} = require('../libs/index');

const newComponent = _Component.create(OldComponent);
newComponent.use({
    'methods.onTap': function () {
        return {
            before(e) {
                console.log('handle tap:showModal', e);
                wx.showModal({
                    content: 'newComponent.onTap:' + this.data.name
                });
            }
        }
    }
});
export default newComponent;
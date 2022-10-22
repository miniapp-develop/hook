import OldComponent from './Component.old';

const {_Component} = require('../libs/index');

const NewComponent = _Component.create(OldComponent);
NewComponent.use({
    'methods.onTap': function (host) {
        return {
            before(e) {
                console.log('NewComponent methods.onTap:showModal', e);
                wx.showModal({
                    content: 'NewComponent methods.onTap:' + this.data.name
                });
            }
        }
    }
});
export default NewComponent;
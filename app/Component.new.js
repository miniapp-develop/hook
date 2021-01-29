import OldComponent from './Component.old';
import {_Component} from '../libs/index';

const newComponent = _Component.create(OldComponent);
newComponent.use({
    'methods.onTap': function () {
        return {
            before(e) {
                wx.showModal({
                    content: 'newComponent.onTap:' + this.data.name
                });
            }
        }
    }
});
export default newComponent;
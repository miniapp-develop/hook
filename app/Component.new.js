import OldComponent from './Component.old';
import {_Component} from "../libs/miniapp";

const newComponent = _Component.create(OldComponent);
newComponent.use({
    'methods.onTap': function () {
        return {
            before() {
                wx.showModal({
                    content: 'newComponent.onTap'
                });
            }
        }
    }
});
export default newComponent;
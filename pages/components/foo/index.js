import {_Component as Component} from '../../../app/index';

Component({
    $_name_: 'foo.$_name_',
    data: {
        $_name_: 'foo.data.$_name_',
    },
    methods: {
        onTap() {
            console.log(this.$_name_);
            console.log(this.data.$_name_);
            console.log('handle tap:nothing');
        },

        onTapInner() {
            console.log(this.$_name_);
            console.log(this.data.$_name_);
            console.log('handle tap:nothing');
        }
    }
});

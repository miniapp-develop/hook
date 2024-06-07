import { NewComponent } from '../../../app/index';

NewComponent({
    $_name_: 'foo-new.$_name_',
    data: {
        $_name_: 'foo-new.data.$_name_'
    },
    methods: {
        onTap(e) {
            console.log(this.$_name_);
            console.log(this.data.$_name_);
            console.log('foo-new onTap', e);
        },

        onTapInner(e) {
            console.log(this);
            console.log(this.$_name_);
            console.log(this.data.$_name_);
            console.log('foo-new onTapInner', e);
        }
    }
});

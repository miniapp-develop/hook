Component({
    $_name_: 'foo-default.$_name_',
    data: {
        $_name_: 'foo-default.data.$_name_',
    },
    methods: {
        onTap(e) {
            console.log(this.$_name_);
            console.log(this.data.$_name_);
            console.log('foo-default onTap', e);
        },

        onTapInner(e) {
            console.log(this.$_name_);
            console.log(this.data.$_name_);
            console.log('foo-default onTapInner', e);
        }
    }
});

import {_App as App} from "./app/index";

App({
    $_name_: 'mini-dev/hook',
    onLaunch(options) {
        console.log('App.onLaunch', this.$_name_, options);
    }
})
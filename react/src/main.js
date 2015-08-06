/**
 * Created by Winsky on 15/8/5.
 */
(function(){
    var React = require('react/addons')
    var Index = require('./component/index.js')

    window.React = React;

    React.render(<Index /> , document.body)
})()
var React = require('react');

var Index = React.createClass({displayName: "Index",
    render: function() {
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Test Test"), 
                React.createElement("h2", null, "success")
            )
        );
    }

});

module.exports = Index;
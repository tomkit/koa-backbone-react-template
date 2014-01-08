/** @jsx React.DOM */
define(['React'], function(React) {
    var Test = React.createClass({
        getInitialState: function () {
            return { todos: [{ text: 'Dishes!', dueDate: new Date() }] };
        },
        render: function() {
            return (
                <div className="react">
                    Sup this is React rendering
                </div>
            );
        }
    });
    return Test;
});
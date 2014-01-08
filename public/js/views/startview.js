define(['jsx!views/test', 'React'], function(Test, React) {
    var view = Test();
    React.renderComponent(view, document.body);
});
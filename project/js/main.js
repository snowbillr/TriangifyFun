require(["js/trianglify-container", "js/trianglify-controls"], function(TrianglifyContainer, TrianglifyControls) {
    TrianglifyContainer.injectPattern();

    var registerSliderCallback = function(eventName) {
        TrianglifyControls.subscribe(eventName, function(newValue) {
            TrianglifyContainer.updateOptions(eventName, newValue);
            TrianglifyContainer.refresh();
        });
    };

    $.each(TrianglifyControls.events, function(key, value) {
        registerSliderCallback(value);
    });

});
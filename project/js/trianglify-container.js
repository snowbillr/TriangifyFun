define(["jquery", "d3", "trianglify", "jquery-ui"], function($, d3, Trianglify) {
    var $trianglifyContainer = $("#trianglify-container");

    //these are Trianglify's default options
    var colorPalette = Trianglify.randomColor();
    var options = {
        cellsize: 150,
        bleed: 150,
        cellpadding: 15,
        noiseIntensity: 0.3,
        x_gradient: colorPalette,
        y_gradient: colorPalette.map(function(c) {
            return d3.rgb(c).brighter(.5)
        })
    };

    var injectPattern = function() {
        var pattern = _createPattern();
        $trianglifyContainer.append(pattern.svg);
    }

    var _createPattern = function() {
        var patternGenerator = new Trianglify(options);
        var pattern = patternGenerator.generate($trianglifyContainer.width(), $trianglifyContainer.height());

        return pattern;
    };

    return {
        injectPattern: injectPattern
    };
});
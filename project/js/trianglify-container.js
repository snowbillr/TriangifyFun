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

    var refresh = function() {
        $trianglifyContainer.empty();
        injectPattern();
    };

    var injectPattern = function() {
        var pattern = _createPattern();
        $trianglifyContainer.append(pattern.svg);
    };

    var _createPattern = function() {
        var patternGenerator = new Trianglify(options);
        var pattern = patternGenerator.generate($trianglifyContainer.width(), $trianglifyContainer.height());

        return pattern;
    };

    var updateOptions = function(option, newValue) {
        options[option] = newValue;
    };

    var updateColors = function() {
        var colorPalette = Trianglify.randomColor();
        options.x_gradient = colorPalette;
        options.y_gradient = _lightenColorArray(colorPalette);
    };

    var randomize = function() {
        options.cellsize = _randomIntBetween(0, 500);
        options.bleed = _randomIntBetween(0, 500);
        options.cellpadding = _randomIntBetween(0, 150);
        options.noiseIntensity = _randomNumberBetween(0, 1);
        options.x_gradient = Trianglify.randomColor();
        options.y_gradient = _lightenColorArray(options.x_gradient);
    };

    var _randomIntBetween = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    
    var _randomNumberBetween = function(min, max) {
        return Math.random() * (max - min + 1) + min;
    }

    var _lightenColorArray = function(colorArray) {
        return d3.rgb(colorArray).brighter(.5);
    };

    return {
        injectPattern: injectPattern,
        refresh: refresh,
        updateOptions: updateOptions,
        updateColors: updateColors,
        randomize: randomize
    };
});
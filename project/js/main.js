require(["jquery", "d3", "trianglify"], function($, d3, Trianglify) {
    var $trianglifyContainer = $("#trianglify-container");
    var t = new Trianglify();
    var pattern = t.generate($trianglifyContainer.width(), $trianglifyContainer.height());
    $trianglifyContainer.append($(pattern.svg));
});
requirejs.config({
    baseUrl: '../../',
    paths: {
        //folders
        js: "project/js",
        "3rd-party": "3rd-party",
        
        //files
        jquery: "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.min",
        trianglify: "3rd-party/js/trianglify",
        d3: "//cdnjs.cloudflare.com/ajax/libs/d3/3.4.5/d3"
    }
});

require(["js/main"], function() {});
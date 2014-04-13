require.config({
    baseUrl: '../../',
    paths: {
        js: "project/js",
        jquery: "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.min"
    }
});

require(["js/main"], function() {});
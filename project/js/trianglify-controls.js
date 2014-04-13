define(["jquery", "jquery-ui"], function($) {
    var events = {
        "cellsize.changed": "cellsize",
        "bleed.changed": "bleed",
        "cellpadding.changed": "cellpadding",
        "noiseIntensity.changed": "noiseIntensity"
    };

    var subscriptions = {};
    $.each(events, function(key, value) {
        subscriptions[value] = [];
    });

    var triggerSubscribers = function(event, newValue) {
        $.each(subscriptions[event], function(index, callback) {
            callback(newValue);
        })
    }

    var subscribe = function(event, callback) {
        subscriptions[event].push(callback);
    }

    var $cellsizeSlider = $("#cellsize-slider").slider({
        min: 0,
        max: 500,
        change: function(event, slider) {
            triggerSubscribers(events["cellsize.changed"], slider.value);
        }
    }).slider("value", 150);
    var $bleedSlider = $("#bleed-slider").slider({
        min: 0,
        max: 500,
        change: function(event, slider) {
            triggerSubscribers(events["bleed.changed"], slider.value);
        }
    }).slider("value", 150);
    var $cellpaddingSlider = $("#cellpadding-slider").slider({
        min: 0,
        max: 150,
        change: function(event, slider) {
            triggerSubscribers(events["cellpadding.changed"], slider.value);
        }
    }).slider("value", 15);
    var $noiseIntensitySlider = $("#noiseIntensity-slider").slider({
        min: 0,
        max: 2,
        step: 0.1,
        change: function(event, slider) {
            triggerSubscribers(events["noiseIntensity.changed"], slider.value);
        }
    }).slider("value", 0.3);

    return {
        events: events,
        subscribe: subscribe
    }
});
$(document).ready(function () {
    $("#form").validate({
        rules: {
            "long": {
                required: true,
                long_coord: true
            },
            "lati": {
                required: true,
                lati_coord: true
            },
            "message": {
            		required: true
            }
        },
        messages: {
            "long": {
                long_coord: "Invalid coordinates"
            },
            "lati": {
                lati_coord: "Invalid coordinates"
            },

        },
        submitHandler: function (form) { // for demo
            var long = parseFloat($('#long').val()),
                lati = parseFloat($('#lati').val()),
                message = $('#message').val()
           console.log(lati, long, message)
            newMarker(lati, long, message);
        }
    });

    $.validator.addMethod("lati_coord", function(value) {
       return /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)$/.test(value) // within -90 to +90
    });

    $.validator.addMethod("long_coord", function(value) {
       return /^[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/.test(value) // within -180 to +180
    });

});

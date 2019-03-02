
$.validator.addMethod("uppercase",
    function (value, element, parameters) {
        debugger;
        regexp = /[A-Z]/;
        if (regexp.test(value)) {
            return true;
        }
        else {
            return false;
        }

    });

$.validator.unobtrusive.adapters.add("uppercase", [], function (options) {
    options.rules.uppercase = {};
    options.messages["uppercase"] = options.message;
});


$.validator.addMethod("lowercase",
    function (value, element, parameters) {
        debugger;
        regexp = /[a-z]/;

        if (regexp.test(value)) {
            return true;
        }
        else {
            return false;
        }

    });

$.validator.unobtrusive.adapters.add("lowercase", [], function (options) {
    options.rules.lowercase = {};
    options.messages["lowercase"] = options.message;
});


$.validator.addMethod("digit",
    function (value, element, parameters) {
        debugger;
        regexp = /[0-9]/;
        if (regexp.test(value)) {
            return true;
        }
        else {
            return false;
        }

    });

$.validator.unobtrusive.adapters.add("digit", [], function (options) {
    options.rules.digit = {};
    options.messages["digit"] = options.message;
});


$.validator.addMethod("nonalphanumeric",
    function (value, element, parameters) {
        debugger;
        regexp = /\W/;
        if (regexp.test(value)) {
            return true;
        }
        else {
            return false;
        }

    });

$.validator.unobtrusive.adapters.add("nonalphanumeric", [], function (options) {
    options.rules.nonalphanumeric = {};
    options.messages["nonalphanumeric"] = options.message;
});

$.validator.addMethod("state",
    function (value, element, parameters) {
        debugger;
        var got = value;
        regexp = /\W/;
        if (regexp.test(value)) {
            return true;
        }
        else {
            return false;
        }

    });

$.validator.unobtrusive.adapters.add("state", [], function (options) {
    options.rules.state = {};
    options.messages["state"] = options.message;
});


$.validator.addMethod("digitlength",
    function (value, element, parameters) {
        debugger;
       // var pattern = new RegExp("^[0-9]{10}$");
        regexp = /^\d{10}$/;
        if (regexp.test(value)) {
            return true;
        }
        else {
            return false;
        }

    });

$.validator.unobtrusive.adapters.add("digitlength", [], function (options) {
    options.rules.digitlength = {};
    options.messages["digitlength"] = options.message;
});





//regexp = /^[0-9]{8}$/;

//if (regexp.test(value)) {
//    alert("true");
//}
//else {
//    alert("false");
//}
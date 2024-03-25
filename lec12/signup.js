$(document).ready(function () {
    $("#submit-form").click(function () {
        if (validate_form()) {
            alert("form is valid");
        }
    })
})

function validate_field(input, error, func, message) {
    if (func()) {
        input.css("background-color", "");
        error.text("");
        return true;
    } else {
        input.css("background-color", "lightsalmon");
        error.text(message);
        return false;
    }
}

function validate_username() {
    var username = $("#input-username");
    var error = $("#error-username");

    return validate_field(
        username,
        error,
        function () { username.val().length > 0; },
        "Username cannot be blank"
    );
}

function validate_email() {
    var email = $("#input-email");
    var error = $("#error-email");


    return validate_field(
        email,
        error,
        function () { email.val().endsWith("utoronto.ca"); },
        "Email address must end with utoronto.ca"
    );
}

function validate_repeat_password() {
    var password = $("#input-password");
    var repeat = $("#input-repeat-password");
    var error = $("#error-repeat-password");

    return validate_field(
        repeat,
        error,
        function () { return password.val() === repeat.val(); },
        "Passwords do not match"
    );
}

function validate_challenge() {
    var answer = $("#input-challenge");
    var error = $("#error-challenge");

    return validate_field(
        answer,
        error,
        function () { return parseInt(answer.val()) === 12; },
        "Challenge answer incorrect"
    );
}

function validate_form() {
    var is_valid = true;
    var error = $("#error-form");

    is_valid = validate_username();
    is_valid = validate_email() && is_valid;
    is_valid = validate_repeat_password() && is_valid;
    is_valid = validate_challenge() && is_valid;

    if (is_valid) {
        error.text("");
    } else {
        error.text("Some field(s) have error(s)");
    }

    return is_valid;
}
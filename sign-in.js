document.addEventListener("DOMContentLoaded", function () {

    const signinForm =
        document.getElementById("signin-form");

    const passwordInput =
        document.getElementById("password");

    const passwordToggle =
        document.getElementById("password-toggle");

    const formMessage =
        document.getElementById("form-message");


    if (passwordToggle && passwordInput) {

        passwordToggle.addEventListener(
            "click",
            function () {

                const showingPassword =
                    passwordInput.type === "text";

                passwordInput.type =
                    showingPassword
                        ? "password"
                        : "text";

                passwordToggle.textContent =
                    showingPassword
                        ? "Show"
                        : "Hide";

                passwordToggle.setAttribute(
                    "aria-label",
                    showingPassword
                        ? "Show password"
                        : "Hide password"
                );

            }
        );

    }


    if (signinForm) {

        signinForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const email =
                    document.getElementById("email").value.trim();

                const password =
                    passwordInput
                        ? passwordInput.value
                        : "";


                if (!email || !password) {

                    if (formMessage) {

                        formMessage.textContent =
                            "Please enter your email and password.";

                    }

                    return;

                }


                if (formMessage) {

                    formMessage.textContent =
                        "Sign in functionality will be connected when authentication is added.";

                }

            }
        );

    }

});
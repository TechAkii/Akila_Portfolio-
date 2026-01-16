$(document).ready(function () {


    // Click project in navbar
    $("#project-link").on("click", function (e) {
        e.preventDefault();

        $("#content_home").fadeOut(300, function () {
            $("#project-section").fadeIn(300);
        });

        $("#services").fadeOut(300, function () {
            $("#project-section").fadeIn(300);
        });

        $("#content_about").fadeOut(300, function () {
            $("#project-section").fadeIn(300);
        });

        $("#contact").fadeOut(300, function () {
            $("#project-section").fadeIn(300);
        });
    });


    // Click home in navbar
    $("#home-link").on("click", function (e) {
        e.preventDefault();

        $("#project-section").fadeOut(300, function () {
            $("#content_home").fadeIn(300);
        });

        $("#services").fadeOut(300, function () {
            $("#content_home").fadeIn(300);
        });

        $("#content_about").fadeOut(300, function () {
            $("#content_home").fadeIn(300);
        });

        $("#contact").fadeOut(300, function () {
            $("#content_home").fadeIn(300);
        });
    });


    // Click about in navbar
    $("#about-link").on("click", function (e) {
        e.preventDefault();

        $("#project-section").fadeOut(300, function () {
            $("#content_about").fadeIn(300);
        });

        $("#services").fadeOut(300, function () {
            $("#content_about").fadeIn(300);
        });

        $("#content_home").fadeOut(300, function () {
            $("#content_about").fadeIn(300);
        });

        $("#contact").fadeOut(300, function () {
            $("#content_about").fadeIn(300);
        });
    });


    // Click service in navbar
    $("#services-link").on("click", function (e) {
        e.preventDefault();

        $("#project-section").fadeOut(300, function () {
            $("#services").fadeIn(300);
        });

        $("#content_about").fadeOut(300, function () {
            $("#services").fadeIn(300);
        });

        $("#content_home").fadeOut(300, function () {
            $("#services").fadeIn(300);
        });

        $("#contact").fadeOut(300, function () {
            $("#services").fadeIn(300);
        });
    });


    // Click contact in navbar
    $("#contact-link").on("click", function (e) {
        e.preventDefault();

        $("#project-section").fadeOut(300, function () {
            $("#contact-section").fadeIn(300);
        });

        $("#content_about").fadeOut(300, function () {
            $("#contact-section").fadeIn(300);
        });

        $("#content_home").fadeOut(300, function () {
            $("#contact-section").fadeIn(300);
        });

        $("#services").fadeOut(300, function () {
            $("#contact-section").fadeIn(300);
        });
    });


    $(document).ready(function () {


        function startSlider(modal) {
            let slides = modal.find(".slide");
            let index = 0;

            clearInterval(modal.data("slider"));

            let interval = setInterval(() => {
                slides.eq(index).removeClass("active");
                index = (index + 1) % slides.length;
                slides.eq(index).addClass("active");
            }, 500); // 0.5s

            modal.data("slider", interval);
        }


        // Open Netflix project
        $("#project-button1").on("click", function () {
            $("#container").addClass("blur-bg");

            let modal = $("#project1");
            modal.fadeIn(300);
            startSlider(modal);
        });


        // Next project (Netflix → LMS)
        $(document).on("click", ".next", function () {
            let current = $(this).closest(".project-modal");
            let next = current.next(".project-modal");

            clearInterval(current.data("slider"));

            current.fadeOut(200, function () {
                next.fadeIn(200);
                startSlider(next);
            });
        });


        // Close any project
        $(document).on("click", ".close", function () {
            $(".project-modal").each(function () {
                clearInterval($(this).data("slider"));
            });

            $(".project-modal").fadeOut(300);
            $("#container").removeClass("blur-bg");
        });

        $("#project-button2").on("click", function () {
            $("#container").addClass("blur-bg");

            let modal = $("#project1");
            modal.fadeIn(300);
            startSlider(modal);
        });


        // Next project (Netflix → LMS)
        $(document).on("click", ".next", function () {
            let current = $(this).closest(".project-modal");
            let next = current.next(".project-modal");

            clearInterval(current.data("slider"));

            current.fadeOut(200, function () {
                next.fadeIn(200);
                startSlider(next);
            });
        });


        // Close any project
        $(document).on("click", ".close", function () {
            $(".project-modal").each(function () {
                clearInterval($(this).data("slider"));
            });

            $(".project-modal").fadeOut(300);
            $("#container").removeClass("blur-bg");
        });

    });


    $("#btn").click(function () {
        $("#hide").toggle();
    });


});


let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 1500);

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("status");

    if (name === "" || email === "" || message === "") {
        status.style.color = "red";
        status.textContent = "Please fill in all fields.";
        return;
    }

    
    alert("Message sent successfully!");

    // Clear form
    this.reset();
});

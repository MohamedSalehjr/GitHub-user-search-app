$(document).ready(function () {

    $(".toggle").on("click", function () {
        if ($("body").hasClass("dark-color")) {
            $("body").removeClass("dark-color");
            $("body").addClass("light-color");
            $("body").addClass("text-color");

            $("h1").removeClass("light-text-color");
            $("h1").addClass("dark-text-color");

            $("h5").removeClass("light-text-color");
            $("h5").addClass("dark-text-color");

            $("main").removeClass("dark-primary");
            $("main").addClass("light-primary");

            $(".search").removeClass("dark-secondary");
            $(".search").addClass("light-secondary");

            $(".form-control").removeClass("dark-secondary");
            $(".form-control").addClass("light-secondary");

            $(".main-section").removeClass("dark-secondary");
            $(".main-section").addClass("light-secondary");

            $(".stats").removeClass("dark-primary");
            $(".stats").addClass("light-primary");

            $(".moon").css("display", "block");
            $(".sun").css("display", "none");

            $(".toggle-text").text("DARK");
        } else if ($("body").hasClass("light-color")) {
            $("body").removeClass("light-color");
            $("body").removeClass("text-color");
            $("body").addClass("dark-color");

            $("h1").removeClass("dark-text-color");
            $("h1").addClass("light-text-color");

            $("h5").removeClass("dark-text-color");
            $("h5").addClass("light-text-color");

            $(".search").removeClass("light-secondary");
            $(".search").addClass("dark-secondary");

            $(".form-control").removeClass("light-secondary");
            $(".form-control").addClass("dark-secondary");

            $(".main-section").removeClass("light-secondary");
            $(".main-section").addClass("dark-secondary");

            $("main").removeClass("light-primary");
            $("main").addClass("dark-primary");

            $(".stats").removeClass("light-primary");
            $(".stats").addClass("dark-primary");

            $(".moon").css("display", "none");
            $(".sun").css("display", "block");

            $(".toggle-text").text("LIGHT");
        }
    });

    const url = "https://api.github.com/users/";
    $("#btn").on('click', function (e) {

        let input = document.getElementById("input").value;
        let newUrl = url + input;
        console.log(newUrl);
        $.ajax({
            url: newUrl,
            type: "GET",
            success: function (result) {
                $(".wrong").css("display", "none");
                var partsArray = result.created_at.split('-');
                var split = partsArray[2].split("", 2);
                console.log(split);
                console.log(partsArray);
                $("#joined").text("Joined " + partsArray[0] + "/" + partsArray[1] + "/" + split[0] + split[1]);
                $("#user").text("@" + result.login);

                $("#repos").text(result.public_repos);
                $("#followers").text(result.followers);
                $("#followers").text(result.following);

                if (result.location === null) {
                    $(".location").text("Not available");
                } else {
                    $(".location").text(result.location);
                }

                if (result.twitter_username === null) {
                    $(".twitter").text("Not available");
                } else {
                    $(".twitter").text(result.twitter_username);
                }

                if (result.blog === null || result.blog === "") {
                    $(".blog").text("Not available");
                } else {
                    $(".blog").text(result.blog);
                }

                if (result.name === null) {
                    $(".card-title").text(result.login);
                    $(".github_username").text("@" + ßresult.login);
                } else {
                    $(".card-title").text(result.name);
                    $(".github_username").text("@" + result.login);
                }

                if (result.bio === null) {
                    $("#bio").text("This profile has no bio");
                } else {
                    $("#bio").text(result.bio);
                }
                console.log(result);
            },
            error: function (error) {
                console.log(`Error ${error}`)
                $(".wrong").css("display", "block");
            }

        })


    })

    $('#checkbox').click(function () {
        var element = document.body;
        element.classList.toggle("dark");
    });


})
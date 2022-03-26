$(document).ready(function () {
    const url = "https://api.github.com/users/";
    $("#btn").on('click', function (e) {

        let input = document.getElementById("input").value;
        let newUrl = url + input;
        console.log(newUrl);
        $.ajax({
            url: newUrl,
            type: "GET",
            success: function (result) {

                var partsArray = result.created_at.split('-');
                var split = partsArray[2].split("",2);
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
            }

        })


    })

})
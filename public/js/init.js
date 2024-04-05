//Hook up the tweet display

$(document).ready(function() {
                           
    $(".countdown").countdown({
                date: "22 August 2024 05:45:00",
                format: "on"
            },
            
            function() {
                // callback function
            });

}); 
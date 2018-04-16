(function () {
    "use strict";

    function getRandom() {  // Generates a random # between 1 & 4
        var min = Math.ceil(1);
        var max = Math.floor(5);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function fadeInAndOut() {  // Takes generated number and fades out then in the corresponding colored div
        var random = [1, 2, 3, 4];
        var randomNumber = getRandom();
        switch (randomNumber){
            case 1:
                $('#red').fadeOut(250);
                $('#red').fadeIn(250);
                return 1;                   // returns 1 to be used in the compare function

            case 2:
                $('#blue').fadeOut(250);
                $('#blue').fadeIn(250);
                return 2;                   // returns 2 to be used in the compare function

            case 3:
                $('#green').fadeOut(250);
                $('#green').fadeIn(250);
                return 3;                   // returns 3 to be used in the compare function

            case 4:
                $('#yellow').fadeOut(250);
                $('#yellow').fadeIn(250);
                return 4;                   // returns 4 to be used in the compare function
        }
    }



    function clickDiv() {
        $('#red').click(function(){  // When red is clicked return 1
            Compare(1);
        });

        $('#blue').click(function(){  // When blue is clicked return 2
            Compare(2);
        });

        $('#green').click(function(){  // When green is clicked return 3
            Compare(3);
        });

        $('#yellow').click(function(){  // When yellow is clicked return 4
            Compare(4);
        });
    }

    var randomColors = [];      // Create a randomColors array

    $('#start').click( function () {
        changeColors();
    });

    clickDiv();



    function changeColors() { // Play sequence of colors already randomly generated

        var color = getRandom(); // Get result of randomly generated color change

        randomColors.push(color);   // Add result of fadeInAndOut to end of randomColors array
        console.log(randomColors);

        var intervalId = setInterval(colorSwitch, 500);
        var i = 0;
        function colorSwitch() {
            if (i < randomColors.length) {
                switch (randomColors[i]) {
                    case 1:
                        $('#red').fadeOut(250);
                        $('#red').fadeIn(250);
                        i++;
                        break;
                    case 2:
                        $('#blue').fadeOut(250);
                        $('#blue').fadeIn(250);
                        i++;
                        break;
                    case 3:
                        $('#green').fadeOut(250);
                        $('#green').fadeIn(250);
                        i++;
                        break;
                    case 4:
                        $('#yellow').fadeOut(250);
                        $('#yellow').fadeIn(250);
                        i++;
                        break;
                }
            } else {
                clearInterval(intervalId);
            }
        }


    }


    var master = []; // Create a master array
    var i = 0;  // Start the counter at 0

    function Compare(clicks) {  // Comparing clicks to the set of random numbers as they're created

        if ((i == randomColors.length - 1) && (clicks == randomColors[i])) {
            changeColors();
            $('#round').html("Round " + (i + 1));
            i=0;
        } else if (clicks == randomColors[i]) { // If the click == index of the array
            i++;
        } else {
            i = 0;
            randomColors = [];
            alert("I'm sorry, that's incorrect! You have to start all over dear....");
        }
    }



})();
(function () {
    "use strict";

    function getRandom() {  // Generates a random # between 1 & 4
        var min = Math.ceil(1);
        var max = Math.floor(5);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function fadeInAndOut() {  // Takes generated number and fades out then in the corresponding colored dive
        var random = [1, 2, 3, 4];
        var randomNumber = getRandom();
        switch (randomNumber){
            case 1:
                $('#red').fadeOut(500);
                $('#red').fadeIn(500);
                return 1;                   // returns 1 to be used in the compare function

            case 2:
                $('#blue').fadeOut(500);
                $('#blue').fadeIn(500);
                return 2;                   // returns 2 to be used in the compare function

            case 3:
                $('#green').fadeOut(500);
                $('#green').fadeIn(500);
                return 3;                   // returns 3 to be used in the compare function

            case 4:
                $('#yellow').fadeOut(500);
                $('#yellow').fadeIn(500);
                return 4;                   // returns 4 to be used in the compare function
        }
    }
    //fadeInAndOut();



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

    changeColors();
    clickDiv();



    function changeColors() { // Play sequence of colors already randomly generated

        var color = getRandom(); // Get result of randomly generated color change

        randomColors.push(color);   // Add result of fadeInAndOut to end of randomColors array
        console.log(randomColors);

        var intervalId = setInterval(colorSwitch, 1500);
        var i = 0;
        function colorSwitch() {
            if (i < randomColors.length) {
                switch (randomColors[i]) {
                    case 1:
                        $('#red').fadeOut(750);
                        $('#red').fadeIn(750);
                        i++;
                        break;
                    case 2:
                        $('#blue').fadeOut(750);
                        $('#blue').fadeIn(750);
                        i++;
                        break;
                    case 3:
                        $('#green').fadeOut(750);
                        $('#green').fadeIn(750);
                        i++;
                        break;
                    case 4:
                        $('#yellow').fadeOut(750);
                        $('#yellow').fadeIn(750);
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

        //var num = getRandom();  // Assign variable num to result of fadeInAndOut function - #
        //master.push(clicks); // Add num variable to end of the master array

        if ((i == randomColors.length - 1) && (clicks == randomColors[i])) {
            changeColors();
        } else if (clicks == randomColors[i]) { // If the click == index of the array
            i++;
        } else {
            i = 0;
        }
    }










    // function thisDiv() {  // Takes the result of user click and adds to the end of the array
    //
    //     var num = clickDiv(); // Assigns result of click to a variable
    //     var clickedDivs = [];  // Creates an empty array
    //
    //     var i = 0;  // Counter for adding elements to the array
    //
    //     if (i < clickedDivs.length) { //
    //         switch (num) {
    //             case 1:
    //                 clickedDivs.push(1);
    //                 console.log(clickedDivs);
    //                 return clickedDivs;
    //             case 2:
    //                 clickedDivs.push(2);
    //                 console.log(clickedDivs);
    //                 return clickedDivs;
    //             case 3:
    //                 clickedDivs.push(3);
    //                 console.log(clickedDivs);
    //                 return clickedDivs;
    //             case 4:
    //                 clickedDivs.push(4);
    //                 console.log(clickedDivs);
    //                 return clickedDivs;
    //         }
    //         i++;
    //     }
    //
    // } thisDiv();
})();
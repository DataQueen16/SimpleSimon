(function () {
    "use strict";



    function getRandom(min, max) {
        var min = Math.ceil(1);
        var max = Math.floor(5);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function fadeInAndOut() {
        var random = [1, 2, 3, 4];
        var randomNumber = getRandom();
        switch (randomNumber){
            case 1:
                $('#red').fadeOut(500);
                $('#red').fadeIn(500);
                console.log(1);
                break;
            case 2:
                $('#blue').fadeOut(500);
                $('#blue').fadeIn(500);
                console.log(2);
                break;
            case 3:
                $('#green').fadeOut(500);
                $('#green').fadeIn(500);
                console.log(3);
                break;
            case 4:
                $('#yellow').fadeOut(500);
                $('#yellow').fadeIn(500);
                console.log(4);
                break;
        }
    } fadeInAndOut();

    function clickDiv() {
        var num = fadeInAndOut();
        var click = [];
        switch (num) {
            case 1:
                click.push('red');
                console.log('red');
                break;
            case 2:
                click.push('blue');
                console.log('blue');
                break;
            case 3:
                click.push('green');
                console.log('green');
                break;
            case 4:
                click.push('yellow');
                console.log('yellow');
                break;
        }
        $(div).click(function(){
            console.log("hello");
        })
    }


})();
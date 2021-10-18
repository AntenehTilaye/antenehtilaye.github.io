function changePage(project) {
    setCookie('sel_project', project, 365);
    window.location.href = "../../project.html";
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


// List of sentences
var _CONTENT = [
    "Anteneh Tilaye",
    'Software Engineer',
    'Computer Vision',
    'Machine Learning',
    ',And Deep Learning',
    'Enthusiast'
];

if (document.querySelector("#text") != null) {
    // Current sentence being processed
    var _PART = 0;

    // Character number of the current sentence being processed 
    var _PART_INDEX = 0;

    // Holds the handle returned from setInterval
    var _INTERVAL_VAL;

    // Element that holds the text
    var _ELEMENT = document.querySelector("#text");

    // Cursor element 
    var _CURSOR = document.querySelector("#cursor");

    // Implements typing effect
    function Type() {
        // Get substring with 1 characater added
        var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
        _ELEMENT.innerHTML = text;
        _PART_INDEX++;

        // If full sentence has been displayed then start to delete the sentence after some time
        if (text === _CONTENT[_PART]) {
            // Hide the cursor
            _CURSOR.style.display = 'none';

            clearInterval(_INTERVAL_VAL);
            setTimeout(function() {
                _INTERVAL_VAL = setInterval(Delete, 50);
            }, 1000);
        }
    }

    // Implements deleting effect
    function Delete() {
        // Get substring with 1 characater deleted
        var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
        _ELEMENT.innerHTML = text;
        _PART_INDEX--;

        // If sentence has been deleted then start to display the next sentence
        if (text === '') {
            clearInterval(_INTERVAL_VAL);

            // If current sentence was last then display the first one, else move to the next
            if (_PART == (_CONTENT.length - 1))
                _PART = 0;
            else
                _PART++;

            _PART_INDEX = 0;

            // Start to display the next sentence after some time
            setTimeout(function() {
                _CURSOR.style.display = 'inline-block';
                _INTERVAL_VAL = setInterval(Type, 100);
            }, 50);
        }
    }

    // Start the typing effect on load
    _INTERVAL_VAL = setInterval(Type, 100);
}

const root = document.documentElement;

document.addEventListener('mousemove', evt => {
    let x = evt.clientX / innerWidth;
    let y = evt.clientY / innerHeight;

    root.style.setProperty('--mouse-x', x);
    root.style.setProperty('--mouse-y', y);
});

function changeTheme(theColor) {
    setCookie('theme', theColor, 365);
    if (theColor == 0) {
        // light mode
        root.style.setProperty('--font-color', 'black');
        root.style.setProperty('--font-color-shade', 'rgb(59, 59, 59)');
        root.style.setProperty('--font-color-shade2', 'rgb(121, 120, 120)');
        root.style.setProperty('--back-color', 'rgb(255, 255, 255)');
        root.style.setProperty('--back-color-shade', '#d7dbe2');
        root.style.setProperty('--border-color', '#b4b4b4');
        root.style.setProperty('--border-color2', '#d4d3d3');
        root.style.setProperty('--back-color-op', 'rgba(245, 245, 245, 0.705)');
    } else if (theColor == 1) {
        // light mode
        root.style.setProperty('--font-color', 'white');
        root.style.setProperty('--font-color-shade', 'rgb(228, 228, 228)');
        root.style.setProperty('--font-color-shade2', 'rgb(218, 218, 218)');
        root.style.setProperty('--back-color', '#252526');
        root.style.setProperty('--back-color-shade', '#303031');
        root.style.setProperty('--border-color', '#646464');
        root.style.setProperty('--border-color2', '#4b4b4b');
        root.style.setProperty('--back-color-op', 'rgba(24, 24, 24, 0.623)');
    } else if (theColor == 2) {
        // light mode
        root.style.setProperty('--font-color', 'white');
        root.style.setProperty('--font-color-shade', 'rgb(228, 228, 228)');
        root.style.setProperty('--font-color-shade2', 'rgb(218, 218, 218)');
        root.style.setProperty('--back-color', '#ab5de1');
        root.style.setProperty('--back-color-shade', '#b574e4');
        root.style.setProperty('--border-color', '#c18fe5');
        root.style.setProperty('--border-color2', '#c49ae2');
        root.style.setProperty('--back-color-op', '#b365eba4');
    } else if (theColor == 3) {
        // light mode
        root.style.setProperty('--font-color', 'white');
        root.style.setProperty('--font-color-shade', '#66fcf1');
        root.style.setProperty('--font-color-shade2', '#66fcf1');
        root.style.setProperty('--back-color', '#252526');
        root.style.setProperty('--back-color-shade', '#66fcf1');
        root.style.setProperty('--border-color', '#66fcf1');
        root.style.setProperty('--border-color2', '#66fcf1');
        root.style.setProperty('--back-color-op', 'rgba(24, 24, 24, 0.623)');
    }
}


$(document).ready(function() {
    var serves = document.getElementsByClassName('service');
    $('#service_holder2').css("width", (serves.length * 100) + '%');
    $('.service').css("width", (100 / serves.length) + '%');
    var left = 0;
    setInterval(slider, 10000);

    function slider() {

        $('#service_holder2').css("width", (serves.length * 100) + '%');
        $('.service').css("width", (100 / serves.length) + '%');
        var width = parseFloat($('.service').width());
        left = left - width;


        if (-(left) > (width * (serves.length - 1))) {
            left = 0;
        }
        // alert(newLeft + 'px');
        $('#service_holder2').css("left", left + 'px');

    }

    $("#rightArrow").click(function() {

        $('#service_holder2').css("width", (serves.length * 100) + '%');
        $('.service').css("width", (100 / serves.length) + '%');
        var width = parseFloat($('.service').width());
        left = left - width;

        if (-(left) > (width * (serves.length - 1))) {
            left = 0;
        }
        // alert(newLeft + 'px');
        $('#service_holder2').css("left", left + 'px');
    });

    $("#leftArrow").click(function() {

        $('#service_holder2').css("width", (serves.length * 100) + '%');
        $('.service').css("width", (100 / serves.length) + '%');
        var width = parseFloat($('.service').width());

        if ((left) == 0) {
            left = -(width * (serves.length - 1));
        } else {
            left = left + width;
        }

        // alert(newLeft + 'px');
        $('#service_holder2').css("left", left + 'px');
    });

    $('#project_nav').click(function() {

        history.go(-1);

    });

    var cursor = document.querySelector('.cursor');
    var cursorinner = document.querySelector('.cursor2');
    var a = document.querySelectorAll('a');

    document.addEventListener('mousemove', function(e) {
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    });

    document.addEventListener('mousemove', function(e) {
        var x = e.clientX;
        var y = e.clientY;
        cursorinner.style.left = x + 'px';
        cursorinner.style.top = y + 'px';
    });

    document.addEventListener('mousedown', function() {
        cursor.classList.add('click');
        cursorinner.classList.add('cursorinnerhover')
    });

    document.addEventListener('mouseup', function() {
        cursor.classList.remove('click')
        cursorinner.classList.remove('cursorinnerhover')
    });

    a.forEach(item => {
        item.addEventListener('mouseover', () => {
            cursor.classList.add('hover');
        });
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    })


});
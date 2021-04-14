

var x = document.getElementById("display-cords");

function getUsersCurrentLocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showUsersPostion, showError);
    }
    else {
        x.innerHTML = "Geolocation is not supported by this browser."
    }
}

function showUsersPostion(position) {
    x.innerHTML = "<i>Dear user your current position's cordinates are:</i> <br /> <b>Lattitude= "+ position.coords.latitude +"<br /> longitude= "+ position.coords.longitude +".</b>";
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

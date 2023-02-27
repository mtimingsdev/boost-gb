function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkImageExists(imageUrl, callBack) {
    var imageData = new Image();
    imageData.onload = function() {
        callBack(true);
    };
    imageData.onerror = function() {
        callBack(false);
    };
    imageData.src = imageUrl;
}

function checkCookie() {
    var affiliateCookieValue = getCookie("affiliateName");
    var affiliatelyCookieValue = getCookie("easy_affiliate");

    if (affiliateCookieValue && affiliatelyCookieValue != "") {

        const toKebabCase = str => str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(x => x.toLowerCase()).join('-');

        var prettyImageFileName = toKebabCase(affiliateCookieValue);
        var imageFileURL = "/product_images/uploaded_images/affiliate-" + prettyImageFileName + ".png";
        var withText = document.createTextNode("with"); 

        checkImageExists(imageFileURL, function(existsImage) {
            if(existsImage == true) {
                document.getElementById("js-affiliateLogo").src = imageFileURL;
                document.getElementById("js-affiliateLogo").alt = affiliateCookieValue;
                document.getElementById("js-affiliateWith").appendChild(withText);
            } else {
                var affiliateName = document.createTextNode(affiliateCookieValue);
                var affiliateHeader = document.getElementById('js-affiliateHeader');
                affiliateHeader.appendChild(affiliateName); 
                document.getElementById("js-affiliateWith").appendChild(withText);
            }
        });
    }
};

checkCookie();

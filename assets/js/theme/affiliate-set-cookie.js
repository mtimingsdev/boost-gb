function setCookie(name, value, days) {
    var d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

var getAffiliateName = document.getElementById("js-AffiliateName");
var getAffiliateNameValue = getAffiliateName.innerHTML;
setCookie("affiliateName", getAffiliateNameValue, 30);

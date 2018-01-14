var searchApp = angular.module("searchApp", []);

searchApp.filter("searchFor", function () {
    return function (arr, searchString) {
        if (!searchString) {
            return arr;
        }
        rezultat = [];
        searchString = searchString.toLowerCase();
        angular.forEach(arr, function (tel) {
            if (tel.name.toLowerCase().indexOf(searchString) !== -1) {
                rezultat.push(tel);
            }
        });
        return rezultat;
    }
});

searchApp.controller("SearchController", function ($scope, $http) {

    let ts = Date.now();
    let privateKey = config.SECRET_KEY;
    let publicKey = config.MY_KEY;
    let hash = md5(ts + privateKey + publicKey);

    $http({
        method: "GET",
        url: "https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=48&offset=12&ts=" + ts + "&apikey=" + publicKey + "&hash=" + hash
    }).then(function (data) {
        $scope.characters = data.data.data.results;
    });
});


function bookmark() {
    var btn = document.getElementsByClassName("unbookmarked");
    var saveName = document.getElementsByClassName("marvel")[i];
    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function () {
            if (this.getAttribute("src") == "img/unbookmarked.svg") {
                this.src = "img/bookmarked.svg";
                localStorage.setItem("name" + i++, this.saveName);
            } else if (this.getAttribute("src") == "img/bookmarked.svg") {
                this.src = "img/unbookmarked.svg";
            }
        });
    }
}
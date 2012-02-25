/**
 * Created by JetBrains WebStorm.
 * User: James
 * Date: 18/02/12
 * Time: 13:21
 * To change this template use File | Settings | File Templates.
 */

function View() {

    this.DrawFriendsAutoComplete = function(friendsJsonData){
        for (i = 0; i < friendsJsonData.data.length; i++) {
            document.writeln(friendsJsonData.data[i].name)
        }
    };

    this.DrawAlbums = function(albumJsonData, clickCallback) {
        var albumGridHTML = '';

        albumGridHTML = "<ul class='gallery'>";

        for (i = 0; i < albumJsonData.length; i++) {
            if (!isNaN(albumJsonData[i].aid)) {
                var imgUrl = 'https://graph.facebook.com/' + albumJsonData[i].object_id + '/picture?access_token=' + window.currentSession.access_token;
                albumGridHTML = albumGridHTML + '<li><span class="photoCell"><div id="' + albumJsonData[i].aid + '" style="background-image: url(' + imgUrl + ')" /></span></li>';
            }
        }

        albumGridHTML = albumGridHTML + "</ul>";

        $("#albumsGrid").append(albumGridHTML);

        $("#albumsGrid .photoCell div").click(function(){
            clickCallback(this);
        });
    };

    this.DrawPhotos = function(photosJsonData, clickCallback) {

        var photosGridHTML = '';

        photosGridHTML = "<ul class='gallery'>";

        for (i = 0; i < photosJsonData.length; i++) {
            var imgUrl = 'https://graph.facebook.com/' + photosJsonData[i].object_id + '/picture?type=album&access_token=' + window.currentSession.access_token;
            photosGridHTML = photosGridHTML + '<li><span class="photoCell"><div id="' + photosJsonData[i].pid + '" style="background-image: url(' + imgUrl + ')" /></span></li>';
        }

        photosGridHTML = photosGridHTML + "</ul>";

        $("#photosGrid").append(photosGridHTML);

        $("#photosGrid .photoCell div").click(function(){
            clickCallback(this);
        });
    };
}
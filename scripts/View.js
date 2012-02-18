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
        for (i = 0; i < albumJsonData.length; i++) {
            var imgUrl = 'https://graph.facebook.com/' + albumJsonData[i].object_id + '/picture?access_token=' + window.currentSession.access_token;
            $("#albumsGrid").append('<span class="photoCell"><img id="' + albumJsonData[i].aid + '" style="background-image: url(' + imgUrl + ')" /></span>');
        }

        $("#albumsGrid .photoCell img").click(function(){
            clickCallback(this);
        });
    };

    this.DrawPhotos = function(photosJsonData, clickCallback) {
        for (i = 0; i < photosJsonData.length; i++) {
            var imgUrl = 'https://graph.facebook.com/' + photosJsonData[i].object_id + '/picture?type=album&access_token=' + window.currentSession.access_token;
            $("#photosGrid").append('<span class="photoCell"><img id="' + photosJsonData[i].pid + '" style="background-image: url(' + imgUrl + ')" /></span>');
        }

        $("#photosGrid .photoCell img").click(function(){
            clickCallback(this);
        });
    };
}
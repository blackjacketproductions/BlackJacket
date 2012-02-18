/**
 * Created by JetBrains WebStorm.
 * User: James
 * Date: 17/02/12
 * Time: 19:07
 * To change this template use File | Settings | File Templates.
 */

function Facebook() {

    this.Authenticate = function(callback) {
        FB.init({
            appId  : '379774782048447',
            status : true, // check login status
            cookie : true, // enable cookies to allow the server to access the session
            xfbml  : true  // parse XFBML
        });

        //Subscribe to the status change event to capture when the FB app has connected successfully
        FB.Event.subscribe('auth.statusChange', function(response) {
            callback(response)
        });
    };

    this.Login = function(callback) {
        FB.login(function(response) {
            if (response.authResponse) {

            }
        }, {scope: 'email, user_photos, friends_photos'});
    };

    this.GetLoggedInUser = function(callback) {
        FB.api('/me', function (data) {
            callback(data);
        });
    };

    this.GetFriends = function(callback) {
        //to display profile picture use https://graph.facebook.com/userid/picture?type=square | small | normal | large
        FB.api('/me/friends', function (data) {
            callback(data);
        });
    };

    this.GetAlbums = function(ownerId, callback) {
        //to display the album cover just set img src to https://graph.facebook.com/album id/picture
        FB.api({method: 'fql.query', query: 'SELECT aid, object_id, name, photo_count FROM album WHERE owner = me()'}, function (data) {
            callback(data);
        });
    };

    this.GetPhotos = function(albumId, callback) {
        //to display the picture use https://graph.facebook.com/object id/picture
        FB.api({method: 'fql.query', query: 'SELECT pid, object_id, caption FROM photo WHERE aid = ' + albumId}, function (data) {
            callback(data);
        });
    };
}
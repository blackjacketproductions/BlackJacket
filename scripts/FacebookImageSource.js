/**
 * Created by JetBrains WebStorm.
 * User: James
 * Date: 17/02/12
 * Time: 08:06
 * To change this template use File | Settings | File Templates.
 */

function FacebookImageSource() {
    //Variables
    this.friendFacebookUser = {};
    this.friendAlbumId = {};
    this.friendPhotoId = {};

    //Methods
    this.GetImageSourceType = function() {
        return FacebookImageSourceType;
    };

    this.GetImage = function() {
        //Return url to jpg file
        var url = "https://graph.facebook.com/" + this.friendPhotoId + "/picture";
        return url;
    };
}
/**
 * Created by JetBrains WebStorm.
 * User: James
 * Date: 17/02/12
 * Time: 08:06
 * To change this template use File | Settings | File Templates.
 */

function FacebookImageSource() {
    //Variables
    var friendFacebookUser = {};
    var friendAlbumId = {};
    var friendPhotoId = {};

    //Methods
    this.prototype.GetImageSourceType = function() {
        return FacebookImageSourceType;
    };

    this.prototype.GetImage = function() {
        //Return url to jpg file
    };
}
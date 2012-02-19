/**
 * Created by JetBrains WebStorm.
 * User: James
 * Date: 17/02/12
 * Time: 08:08
 * To change this template use File | Settings | File Templates.
 */

function LocalImageSource() {
    this.localImageUrl = "";

    //Methods
    this.GetImageSourceType = function() {
        return LocalImageSourceType;
    };

    this.GetImage = function() {
        //Return url to base 64 jpg file
        return this.localImageUrl;
    };

    this.ProcessFile = function (file) {
        var imageType = /image.*/;
        if (!file.type.match(imageType)) return;

        setTimeout(function() {
            if ("URL" in window) {
                this.localImageUrl =  window.URL.createObjectURL(file);
            } else {
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function(e) {
                    this.localImageUrl = e.target.result;
                }
            }
        }, 1000);
    };
}
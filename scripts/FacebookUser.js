/**
 * Created by JetBrains WebStorm.
 * User: James
 * Date: 17/02/12
 * Time: 00:02
 * To change this template use File | Settings | File Templates.
 */


// WHAT IS THE BEST WAY TO MAKE A CLASS IN JS?
// http://stackoverflow.com/questions/387707/whats-the-best-way-to-define-a-class-in-javascript

function FacebookUser(uid, name, profile_pic_url) {
    //Variables
    this.uid = uid;
    this.name = name;
    this.profile_pic_url = profile_pic_url;

    //Methods
    this.prototype.DoSomething = function() {
        // code for move method goes here
        alert(name);
    };
}

//Sample code
var facebookUser = new FacebookUser(1234, 'James', 'test.jpg');
facebookUser.name = 'bob';
facebookUser.DoSomething();

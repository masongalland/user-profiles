var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];
module.exports = {
    getFriendsProfiles: function(req, res, next){
        var currentUserFriends = req.session.currentUser.friends
        console.log(currentUserFriends)
        var arrayOfFriendObjects = [];
        var returnedObj = {currentUser:req.session.currentUser, friends: arrayOfFriendObjects}
        for(var i=0; i<currentUserFriends.length; i++){
            for(var j=0; j<profiles.length; j++){
                if(currentUserFriends[i] === profiles[j].name){
                    arrayOfFriendObjects.push(profiles[j]);
                }
            }
        }
        return res.status(200).send(returnedObj);
    }
}
# SpotifyWebAPI
Technologies/Tools: Angularjs, nodejs, express, webpack, SASS, babel, es6(just a bit), karma, mocha.

### How to run app
just in case run with sudo
```
sh start.sh
```

### How to test app
```
sh test.sh
```

### Functionalities
- Search by artist
- Top tracks
- Related albums
- Full album list

### Refactoring (Challenge 2)

**Old Code**

```javascript
exports.inviteUser = function(req, res) {

    var invitationBody = req.body;
    var shopId = req.params.shopId;
    var authUrl = "https://url.to.auth.system.com/invitation";

    superagent
	    .post(authUrl)
	    .send(invitationBody)
	    .end(function(err, invitationResponse) {

	        if (invitationResponse.status === 201) {

	            User.findOneAndUpdate(

	                {
	                    authId: invitationResponse.body.authId
	                },

	                {
	                    authId: invitationResponse.body.authId,
	                    email: invitationBody.email
	                },
					{upsert: true, new: true},
	                function(err, createdUser) {

	                    Shop.findById(shopId)
		                    .exec(function(err, shop) {

		                        if (err || !shop) {

		                            return res.status(500).send(err || {
		                                message: 'No shop found'
		                            });

		                        }

		                        if (shop.invitations.indexOf(invitationResponse.body.invitationId)) {
		                            shop.invitations.push(invitationResponse.body.invitationId);
		                        }

		                        if (shop.users.indexOf(createdUser._id) === -1) {
		                            shop.users.push(createdUser);
		                        }

		                        shop.save();

		                    });

	                });

	        } else if (invitationResponse.status === 200) {

	            res.status(400).json({
	                error: true,
	                message: 'User already invited to this shop'
	            });
	            return;
	        }
	        res.json(invitationResponse);

	    });

};

```


**New Code**

```javascript

var HTTP_ERROR_STATUS = {
    error: 500,
    badRequest: 400
};

function saveInvitedUser(authId, email) {

    var deferred = ...defer...

    User.findOneAndUpdate({authId: authId}, {authId: authId, email: email}, function(err, user) {

        if (err) {

            deferred.reject({
                status: HTTP_ERROR_STATUS.error, 
                error: err
            });

        }else if (!user) {

            deferred.reject({
                status: HTTP_ERROR_STATUS.badRequest, 
                error: 'No User Found.'
            });

        }else{
            deferred.resolve(user);
        }

    });

    return deferred.promise;

}

function getShopById(id) {

    var deferred = ...defer...

    Shop.findById(id).exec(function(err, shop) {

        if (err) {

            deferred.reject({
                status: HTTP_ERROR_STATUS.error, 
                error: err
            });

        }else if (!shop) {

            deferred.reject({
                status: HTTP_ERROR_STATUS.badRequest,
                error: 'No Shop Found.'
            });

        }else{
            deferred.resolve(shop);
        }

    });

    return deferred.promise;

}

function requestInvitation(authUrl, invitationParams) {

    var deferred = ...defer...

    superagent.post(authUrl).send(invitationParams).end(function(err, invitation) {

        if (err) {

            deferred.reject({
                status: HTTP_ERROR_STATUS.error, 
                error: err
            });

        }else if (!invitation) {

            deferred.reject({
                status: HTTP_ERROR_STATUS.badRequest, 
                error: 'No Invitation Found.'
            });

        }else if (invitation.status==200) {

            deferred.reject({
                status: HTTP_ERROR_STATUS.badRequest,
                error: 'User already invited to this shop.'
            });

        }else if (invitation.status==201) {
            deferred.resolve(invitation);
        }else{

            deferred.reject({
                status: HTTP_ERROR_STATUS.badRequest,
                error: invitation
            });

        }

    });

    return deferred.promise;

}

exports.inviteUser = function(email, shopId, invitationParams, cb) {

    var authUrl = "https://url.to.auth.system.com/invitation";

    var chainResponses = {
        invitation: undefined,
        user: undefined,
        shop: undefined
    };

    requestInvitation(authUrl, invitationParams).then(function(invitationResponse) {

        chainResponses.invitation = invitationResponse;
        return saveInvitedUser(chainResponses.invitation.body.authId, email);

    }, function (err) {
        cb(err);
    }).then(function(userResponse) {

        chainResponses.user = userResponse;
        return getShopById(shopId);

    }, function (err) {
        cb(err);
    }).then(function (shopResponse) {

        chainResponses.shop = shopResponse;

        if (chainResponses.shop.invitations.indexOf(chainResponses.invitation.body.invitationId) === -1) {
            chainResponses.shop.invitations.push(chainResponses.invitation.body.invitationId);
        }

        if (chainResponses.shop.users.indexOf(chainResponses.user._id) === -1) {
            chainResponses.shop.users.push(chainResponses.user._id);
        }

        chainResponses.shop.save();
        cb(undefined, chainResponses.invitation);

    }, function (err) {
        cb(err);
    });

};

```

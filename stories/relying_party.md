Relying Party use of navigator.auth
-----------------------------------

Because the user agent's implementation of authenticate() determines the UI's physical instantiation (iframe, pop-over, etc.), RPs no longer have to manage it or fret that they pick the wrong method for a given user agent.

I. Detection

  // RP code needs minimal changes
  // Assume URLs are defined outside connection code in 'config'
  var config = require('config')
  if (typeof(navigator.auth) == 'undefined') {
    var oauthURL = config.OAUTH_SERVER_URL + '?redirect_uri=' + config.OAUTH_RETURN_URL;
    // Normal Oauth code.
  } else {
    var idp = {authURL: config.OAUTH_SERVER_URL,
               returnURL: config.OAUTH_RETURN_URL}
    navigator.auth.authenticate(idp);
  }

II. Nascar

  // ... becomes a one-liner once you've defined the static data.
  navigator.auth.authenticate.apply(this, config.IDENTITY_PROVIDERS);

III. Silent sign-on

  // Three lines: copy the IdP objects, flag them silent, authenticate.
  var idps = config.IDENTITY_PROVIDERS.slice(0, config.IDENTITY_PROVIDERS.length);
  Array.map(idps, function(idp) {idp.interactive = false;});
  navigator.auth.authenticate.apply(this, idps)

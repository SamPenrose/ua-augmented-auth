/**
 * Example API for Relying Parties.
 *
 * TODO: handle signing out.
 */

/**
 * Request authentication with one or more Identity Providers, as specified
 * by authURL parameters; on success, the User Agent will <load> returnURL.
 *
 * @param providerOne:
 *   {authURL: string,
 *    returnURL: string,
 *    interactive: optional bool, default true}
 * 
 * authURL: should resolve to an IdP's access point, and include any
 * necessary parameters in the queryString (such as an Oauth2 clientID)
 *
 * returnURL: must have the same origin as the RP, and may contain an
 * IdP-specific blob; such as a trailing '#authToken=<authToken'.
 * The RP is responsible to know how to handle IdP return values.
 *
 * interactive: if false, the User Agent guarantees it will not surface
 * UI in response to the request. The User Agent should make best effort to
 * allow sign in if appropriate (i.e. the user has previously granted
 * access to this IdP for this RP).
 * 
 * @param providerTwo (and additional parameters):
 *    If the RP passes in more than one object of the form specified above
 *    in providerOne, the User Agent may attempt to sign the user in with
 *    any of the IdPs, either silently or via a picker UI.
 * @return:
 *    null
 */

navigator.auth.authenticate = function(providerOne, providerTwo=null, ...) {
}

/**
 * Following the chrome.identity API, an event which user agents MAY fire
 * when the currently signed-in account is no longer signed in.
 *
 * There is a tension between supporting this event for sign-IN
 * notification and conforming to Oauth's redirect URL for signin.
 *
 * @param accountObject: implementation-specific blob. The RP is assumed
 *   to understand the format supported by its IdP.
 * @param isSignedIn: bool, defaulting to false.
 */
onSignInChanged.addListener(function(accountObject, isSignedIn=false) {
});

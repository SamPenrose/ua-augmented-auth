/**
 * Example API for Relying Parties.
 *
 * TODO: handle signing out.
 */

/**
 * Request authentication with one or more Identity Providers.
 *
 * @param providerOne:
 *   {authURL: string <URL to IdP access point, with necessary parameters in query string>,
 *    returnURL: string <URL to which user agent will be sent on success>,
 *    interactive: optional bool specifying whether to open UX if the user is not signed in, default true}
 * @param providerTwo (and additional parameters):
 *    If the RP passes in more than one object of the form specified above
 *    in providerOne, the User Agent may attempt to sign the user in with
 *    any of the IdPs, either silently or via a picker UI.
 * @return:
 *    null
 */

navigator.auth.authenticate = function(providerOne, providerTwo=null, ...) {
}

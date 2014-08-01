/**
 * Example API for Relying Parties.
 *
 * TODO: handle signing out.
 */

/**
 * Return a possibly empty array of objects representing accounts with
 * the Identity Provider at the current page's origin that are currently
 * logged into the User Agent.
 *
 * @param authURLs:
 *    An array of URLs mapping to IdPs supported by the calling RP.
 *    Must be non-empty. Maybe support degenerate case of single string.
 * @param returnURL:
 *    where the IdP will redirect the User Agent to. Upon authentication,
 *    the User Agent will send:
 *      GET <RP origin>/returnURL?<queryString>
 *    where queryString is an opaque, possibly-empty IdP-specific blob
 *    that the IdP may require the RP to use to manage authentication state.
 */
navigator.auth.authenticate = function(authURLs, returnURL) {
  if (typeof(authURLs) == 'string') {
    authURLs = [authURLs];
  }
  // Surface UI allowing user to pick one of the IdPs to authenticate with.
  // User Agent then follows IdP-specific authentication protocol,
  // such as opening authURL in a new frame. It might augment authentication
  // in other ways; for example if the user has more than one account with
  // an IdP, this would be the time to offer a picker.
}

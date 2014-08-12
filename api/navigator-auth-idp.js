/**
 * Example API for Identity Providers.
 *
 * getAccounts() and addAccount() can be thought of as augmenting
 * the reading and writing of cookies holding userids and other
 * state for an account.
 *
 * The User Agent MUST verify that the caller of functions which view
 * or edit user data (i.e. everything with the exception of addAccount)
 * only does so on accounts they have created.
 */

/**
 * An IdP-specific blob, which the RP must understand well enough to handle.
 */
Account = {}

/**
 * Return a possibly empty array of objects representing accounts with
 * the Identity Provider at the current page's origin that are currently
 * logged into the User Agent.
 */
navigator.auth.getAccounts = function() {  
}

/**
 * Add an account blob, which should be returned by future calls to
 * getAccounts() (ignoring concurrency issues).
 */
navigator.auth.addAccount = function(accountObject) {
}

/**
 * Sign out the account object uniquely identified by the property
 * name, value pair passed in. Pseudo-code to implement this method:
 *
 *   var accounts = navigator.auth._accounts // returned by getAccounts();
 *   var keeping = [];
 *   var signedOut = null;
 *   accounts.forEach(function(account) {
 *     if (account[accountIdPropertyName] !== accountIdValue) {
 *       keeping.push(account);
 *     } else {
 *       signedOut = account;
 *     }
 *   });
 *   if (accounts.length !== keeping.length + 1) {
 *     throw new Error("Bad key or value specifying account to delete.");
 *   }
 *   navigator.auth._accounts = keeping;
 *
 *   var scope = rpURL ? scopeForRP(rpURL) : scopeForAllRPs;
 *   scope.dispatchEvent('onSignInChanged', signedOut, false);
 */
navigator.auth.signOut = function(accountIdPropertyName, accountIdValue, rpURL=null) {
}

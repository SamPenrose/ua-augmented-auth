/**
 * Example API for Identity Providers.
 *
 * getAccounts() and addAccount() can be thought of as augmenting
 * the reading and writing of cookies holding userids and other
 * state for an account.
 *
 * TODO: define an interface for the account blob.
 */

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
 * Delete the account object uniquely identified by the property
 * name, value pair passed in. Pseudo-code to implement this method:
 *
 *   var accounts = navigator.auth._accounts // returned by getAccounts();
 *   var keeping = [];
 *   accounts.forEach(function(account) {
 *     if (account[accountIdPropertyName] !== accountIdValue) {
 *       keeping.push(account);
 *     }
 *   });
 *   if (accounts.length !== keeping.length + 1) {
 *     throw new Error("Bad key or value specifying account to delete.");
 *   }
 *   navigator.auth._accounts = keeping;
 */
navigator.auth.deleteAccount = function(accountIdPropertyName, accountIdValue) {
}

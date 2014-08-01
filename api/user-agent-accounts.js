/**
 * Example data API for User Agent's "My Accounts" UI.
 */

var identityProvider = {
  url: 'https://provider-example.com/auth',
  name: 'My Example Provider',
}

var relyingParty = {
  url: 'https://relier-example.com/',
  name: 'My Example Relying Party',
}

// Like an SQL JOIN table, the URLs here should always map to stored IdPs and RPs
var anAccount = {
  idpURL: 'https://provider-example.com/auth',
  rpURL: 'https://relier-example.com/',
  accountData: {'arbitrary object': 'controlled by IdP'},
  // The property of accountData that uniquely defines an account for that IdP.
  primaryPropertyName: '',
}

// return array of all the accounts added via navigator.auth.addAccount().
accounts.getAccounts = function() {
}

// TODO
accounts.logout = function(account) {
}

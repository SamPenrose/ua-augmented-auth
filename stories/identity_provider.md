Identity Provider use of navigator.auth
---------------------------------------

I. Simple Single Sign On

  // First RP sign in. Code at Oauth signin URL for this IdP
  accounts = navigator.auth.getAccounts(); // -> empty array
  if (accounts.length) { // false
  } else {
    // Load window with HTML for normal credential challenge, concluding with:
    navigator.auth.addAccount(account);
  }

  // Later (minutes ... months) request from second RP
  accounts = navigator.auth.getAccounts();
  // -> [{idp: 'specific', keys_and: 'values'}]
  if (accounts.length) {
    if (accounts.length > 1) {
      // load account picker UI
    } else {
      // validate account
      // no need to surface UI unless we want "sign in as another user"
    }
  }

II. User Agent Delegated Single Sign On

  // No network trip required.

III. Single Sign Out (with cooperating RPs)

  // HTTP request to sign out URL; passes token or unique account identifier
  // 'idp_account_uuid' some string which the IdP uses to name the field
  // which uniquely identifies this account. I.e. for iTunes: 'AppleID'.
  navigator.auth.deleteAccount({idp_account_uuid: value_for_this_account});
  // User agent will make a best effort to inform RPs signed-in with this
  // account of sign-out; it cannot enforce.
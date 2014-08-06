User Agent Augmented Web Authentication
======================================

People who use the Web need to establish identities and control how they are exposed. We believe that **User Agents** -- web browsers, web-enabled operating systems, and other software used by people to navigate the Web -- can help people by **augmenting** their relationships with the sites that provide identity services ("Identity Providers") and sites that ask for authorization to access those services ("Relying Parties") -- a three-sided relationship called "Federated Identity". For example:

  * Better NASCAR: a Relying Party should be able to ask a User Agent to help the person visiting them choose among a set of Identity Providers.
  * Single Sign-On: If a person's User Agent is currently authenticated with an Identity Provider supported by a given Relying Party, that person should be able to authorize with the RP without re-authenticating.
  * Who Can Do What as Me?: User Agents should be able to show people what Relying Parties are authorized for what purposes on their behalf.

We welcome feedback on the following broad concepts, sample user experiences, and API proposals for giving people better control of the federation of their online identities.

Initial Target
--------------
Define APIs and provide model implementations which allow:

  - people to understand and control how their identities are exposed on the web;

    + example non-Web UX which address this need: Android Account Manager

  - RPs to take advantage of SSO with minimal overhead;
  - and IdPs to take advantage of SSO on non-browser User Agents.

Important Details
-----------------

  * We're interested in integrating with the credentials management proposals here:
    + http://projects.mikewest.org/credentialmanagement/usecases/
  * "Augment" means "improve by supplementing", not "replace."
  * Oauth2 is our first model protocol.
  * We could use second and third model protocols.
  * Mediation APIs we provide should "fit" those protocols.
    + Protocol implementations MAY ask the User Agent if it offers a Mediation API.
      - If the implementation does not ask, it should not incur any cost.
    + The API should not require significantly restructuring existing protocol implementations.
  * User Agents include:
    + Traditional web browsers, meant to run inside a personal computer operating system and accept input from a keyboard and pointing device.
    + Smartphone applications, including general-purpose web browsers, with inferior-to-PC text input and other important usability differences from the PC browser model.
    + Smartphone operating systems.


Glossary
--------

  * User-Agent
  * Identity Provider
  * Authentication
  * Authorization
  * Federation
  * Relying Party

Contributors
------------

  @ianb
  @CKarlof
  @sicking
  @SamPenrose
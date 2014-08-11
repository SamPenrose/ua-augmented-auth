User Agent Augmented Web Authentication
======================================

People who use the Web need to establish identities and control how they are exposed. We believe that **User Agents** -- web browsers, web-enabled operating systems, and other software used by people to navigate the Web -- can help people by **augmenting** their relationships with the sites that provide identity services ("Identity Providers") and sites that ask for authorization to access those services ("Relying Parties").

Augmenting (O)Auth
------------------

A wide range of Identity Providers support the Oauth protocol for authentication and authorization. Oauth is based on HTTP objects, specifically URLs, redirect status codes, and cookies. Traditional web browsers implemented the behavior of those objects in the context of pages, frames, and a common cookie space. In the context of web apps and non-traditional User Agents, those objects can have lessened capabilities. For example, a web app that triggers a redirect may not be able to read cookies set by that redirect, and the redirect may not be able to get to the web app. Traditional browsers themselves could better mediate authentication and authorization (for example, by telling the person browsing which Relying Parties and Identity Providers are using which of their identities) by using the contents of URLs and cookies more effectively.

Initial Target
--------------
Define APIs and provide model implementations which allow:

  - Single Sign On:
    As a person using a web app which supports sign-on with a given Identity Provider, if I am already signed in with that Provider via another web app, I want to be offered the option to sign in without having to re-enter my credentials, and the option to prevent the sign in.
  - Understanding and Control:
    As a person who accesses multiple Identity Providers and Relying Parties, I want my User Agent to show me with which of them I am authenticated, and to provide controls I can use to ask them to revoke my authentication credentials.

Please see the initial efforts in api/ .

Prior Art
---------
Google Chrome Identity API for web apps: https://developer.chrome.com/apps/identity#method-launchWebAuthFlow
Facebook Connect: https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow/v2.1

Glossary
--------

  * User-Agent: software which people use to access the Internet via HTTP and associated protocols. Examples include:
    + Traditional web browsers, meant to run inside a personal computer operating system and accept input from a keyboard and pointing device.
    + Smartphone applications, including general-purpose web browsers, with inferior-to-PC text input and other important usability differences from the PC browser model.
    + Smartphone operating systems such as FirefoxOS.
  * Identity Provider: services which provide people with unique names on the Internet
  * Relying Party: services which use provided identities; for example to access web sites or make purchases online.

Contributors
------------

  @ianb
  @CKarlof
  @sicking
  @SamPenrose
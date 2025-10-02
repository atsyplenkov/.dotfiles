// Disable WebRTC leaks
user_pref("media.peerconnection.enabled", false);

// Force DoH via Mullvad
user_pref("network.trr.mode", 3);
user_pref("network.trr.uri", "https://base.dns.mullvad.net/dns-query");
user_pref("network.trr.custom_uri", "https://base.dns.mullvad.net/dns-query");

// Keep new tab page shortcuts
user_pref("browser.startup.page", 1);
user_pref("browser.startup.homepage", "about:home");
user_pref("browser.newtabpage.enabled", true);

// Disable Form Autofill
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("signon.rememberSignons", false);
user_pref("extensions.formautofill.creditCards.available", false);
user_pref("extensions.formautofill.reauth.enabled", false);

// Strengthen anti-fingerprinting
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.resistFingerprinting.letterboxing", false);
user_pref("privacy.spoof_english", 2);
user_pref("privacy.resistFingerprinting.reduceTimerPrecision.microseconds", 1000);

// Canvas protections
user_pref("privacy.resistFingerprinting.autoDeclineNoUserInputCanvasPrompts", true);
user_pref("privacy.canvas.poisondata", true);

// Audio context fingerprinting
user_pref("dom.webaudio.enabled", false);

// Media device enumeration
user_pref("media.navigator.enabled", false);

// That's all folks!

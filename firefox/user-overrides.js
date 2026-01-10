// Disable WebRTC leaks
user_pref("media.peerconnection.enabled", false);

// Keep Default DNS settings
user_pref("network.trr.mode", 1);

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
user_pref("privacy.spoof_english", 2);
user_pref("privacy.resistFingerprinting.reduceTimerPrecision.microseconds", 1000);

// Disable fingerprinting resistance for a while
user_pref("privacy.resistFingerprinting", false);
user_pref("privacy.resistFingerprinting.letterboxing", false);

// Canvas protections
user_pref("privacy.resistFingerprinting.autoDeclineNoUserInputCanvasPrompts", true);
user_pref("privacy.canvas.poisondata", true);

// Audio context fingerprinting
user_pref("dom.webaudio.enabled", false);

// Media device enumeration
user_pref("media.navigator.enabled", false);

// Remove download history and cookies on exit
user_pref("privacy.clearHistory.historyFormDataAndDownloads", true);
user_pref("privacy.clearSiteData.historyFormDataAndDownloads", true);
user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", true);

user_pref("privacy.clearOnShutdown_v2.browsingHistoryAndDownloads", true);
user_pref("privacy.clearOnShutdown_v2.downloads", true);
user_pref("privacy.clearSiteData.browsingHistoryAndDownloads", true);
user_pref("privacy.clearHistory.browsingHistoryAndDownloads", true);

// Don't close browser on the last tab closure
user_pref("browser.tabs.closeWindowWithLastTab", false);

// Force light mode
user_pref("layout.css.prefers-color-scheme.content-override", 1);

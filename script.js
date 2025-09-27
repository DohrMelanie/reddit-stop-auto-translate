// ==UserScript==
// @name         Reddit: Stop Auto Translate Post
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  If a Reddit URL contains the `tl` query parameter (e.g. /?tl=), remove it and reload the site.
// @author       Melanie Dohr
// @match        *://*.reddit.com/*
// @match        *://reddit.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    try {
        const current = new URL(window.location.href);

        if (current.searchParams.has('tl')) {
            current.searchParams.delete('tl');

            const cleaned = current.toString();

            if (cleaned !== window.location.href) {
                window.location.replace(cleaned);
            }
        }
    } catch (err) {
        console.error('Tampermonkey: error cleaning tl param:', err);
    }
})();

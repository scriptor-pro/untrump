// ==UserScript==
// @name         Replace Word
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remplace un mot spécifique par un autre mot dans une page web
// @author       Vous
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Mot à remplacer et son remplacement
    const targetWord = "Trump"; // Remplacez "mot" par le mot que vous voulez remplacer
    const replacementWord = "Pmurt"; // Remplacez "autre" par le nouveau mot

    // Fonction pour remplacer les mots dans un nœud
    function replaceText(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = node.textContent.replace(new RegExp(`\\b${targetWord}\\b`, 'gi'), replacementWord);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            for (let child of node.childNodes) {
                replaceText(child);
            }
        }
    }

    // Appliquer le remplacement au corps de la page
    replaceText(document.body);
})();

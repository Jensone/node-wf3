// ------------------ IMPORTS ------------------ //

/**
 * Express est un framework pour Node.js qui permet de créer des applications web.
 * Il s'agit d'un framework minimaliste, flexible et rapide, avec lequel on peut créer des applications web, des API et des sites web.
 */
const express = require('express');

/**
 * fs est un module de Node.js qui permet de lire et d'écrire des fichiers.
 * C'est un module qui est installé par défaut avec Node.js, il n'est donc pas nécessaire de l'installer.
 */
const fs = require('fs');

/**
 * Le moteur de template EJS permet de créer des vues HTML à partir de données.
 * Cela permet de créer des pages web dynamiques, c'est-à-dire des pages web qui s'adaptent en fonction des données.
 */
const bodyParser = require('body-parser');

/**
 * json-server est un module qui permet de créer une API REST complète à partir d'un fichier JSON.
 * Cela simplifie grandement la création d'une API REST, car il suffit de créer un fichier JSON pour avoir une API fonctionnelle.
 */
const jsonServer = require('json-server');


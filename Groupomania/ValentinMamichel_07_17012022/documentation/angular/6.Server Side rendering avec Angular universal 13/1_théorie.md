Pour être visité par un grand nombre d'utilisateurs : Le Rendu Côté Serveur ou Server Side Rendering en anglais.

- S'afficher le plus rapidement possible.
- Etre bien référencé par les moteurs de recherche.

- Angular Universal.
  Cette technologie permettra d'améliorer le référencement naturel ou SEO (Search Engine Optimization) de notre site.

Les pages web générées avec des framework javascript utilise javascript.
Les moteurs de recherche ont à l'heure actuelle du mal à interpréter le javascript.

Nous allons vérifier cette notion de façon pratique.

Nous allons éxécuter notre application avec le script correspondant.

# Exécution de l'application

npm run start

# Affichage du site dans le navigateur

http://localhost:4200/
Nous allons vérifier le code source produit dans la page correspondante.
En utilisant le navigateur Chrome il faut taper Ctrl + U pour voir le code html.

On remarque que le code "Features" qui s'affiche dans le navigateur n'apparait pas dans le code.

<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>AngularStarter</title>
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async="" src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'YOUR-ID');
    </script>

    <link rel="stylesheet" href="styles.css">

</head>

<body>
    <app-root></app-root>
    <script src="runtime.js" type="module"></script>
    <script src="polyfills.js" type="module"></script>
    <script src="styles.js" defer></script>
    <script src="scripts.js" defer></script>
    <script src="vendor.js" type="module"></script>
    <script src="main.js" type="module"></script>
</body>

</html>
En cliquant sur main.js nous ouvrons ce fichier qui contient  le texte "Features"

Exécutons une compilation avec npm run build.
Le répertoire dist/angular-starter contient le fichier main.js.
Ouvrons ce fichier avec notre éditeur VS code , puis effectuons une recherche (Ctrl + F) du texte "Features".
Il contient le texte "Features".

Le fichier main.js est un fichier javascript, il sera donc mal interprété par les moteurs de recherche.

Nous verrons plus loin dans ce tutoriel qu'une fois le SSR appliqué le code apparait directement dans le code HTML et sera ainsi bien interprété par les moteurs de recherche.

# 3 principes de sécurité pour garantir la sécurité d’une application ou d’une infrastructure.

- La confidentialité. C'est l'assurance que les personnes non autorisées n'accèdent pas à des informations sensibles.

- L'intégrité. Elle permet d'être sûr que les données sont fiables et n'ont pas été modifiées par des personnes non autorisées.

- La disponibilité. C'est l’assurance qu'il n'y a pas de perturbation d'un service ou de l'accessibilité aux données.

La sécurité de l'information repose sur l'équilibre entre ces trois principes.

## RGPD

En 2018, le règlement général sur la protection des données (RGPD) est entré en vigueur. Il modifie la manière dont les données personnelles sont stockées et utilisées et la façon dont les entreprises les traitent. Il permet aux résidents de l'Union européenne de contrôler leurs informations personnelles, comme leur nom, leur âge, leur affiliation politique et leur orientation sexuelle, par exemple.

Les entreprises ne respectant pas le RGPD sont passibles d'une amende. Bien qu'il soit basé sur la législation de l'Union européenne, il concerne tous les pays car les applications web sont disponibles dans le monde entier. Les entreprises en dehors de l’UE qui font du business avec des entreprises européennes devront respecter le RGPD pour leurs applications web à destination du marché européen.

### Comment puis-je être sûr que mon application web répond à ces normes ?

Un des éléments primordial et de veiller à garantir la sécurité des données personnelles stockées et échangées via l’application web. Les données collectées doivent aussi répondre à un usage spécifique.

De plus, il est nécessaire d’avoir la possibilité de supprimer les données personnelles à la demande du client. Par exemple, si un utilisateur veut se désabonner d'une newsletter, il faut s’assurer qu'il existe une option permettant le désabonnement. Une fois qu’une personne se désabonne, l'adresse e-mail doit être automatiquement supprimée de la base de données.

## PCI DSS

La norme Payment Card Industry Data Security Standard (PCI DSS) est une norme établie pour toutes les entreprises qui traitent des données bancaires. La sécurisation des données bancaires met l'accent sur la sécurité lors de la transmission, du traitement et du stockage des données.

De plus en plus de plateformes web et de solutions de stockage gèrent les applications pour les entreprises, il est essentiel que le fournisseur soit également conforme à la norme PCI DSS.

Si vous créez une application web qui traite des données bancaires, comme une boutique en ligne ou un site web par abonnement, vous devez chiffrer les transmissions pour garantir la sécurité des données en transit. Les données bancaires transmises en texte clair constituent une violation de la norme PCI DSS, ce qui peut faire l’objet d’une amende.

## Appréhendez la réglementation du traitement des données de santé

Les données de santé sont des données à caractère personnel particulières car considérées comme sensibles. Elles font à ce titre l’objet d’une protection spécifique inscrite dans de nombreux textes comme le règlement européen sur la protection des données personnelles, la loi Informatique et Libertés, le Code de la santé publique, etc., afin de garantir le respect de la vie privée des personnes. (voir CNIL Commission Nationale Information et Liberté)

## Découvrez l'OWASP

L’Open Web Application Security Project (OWASP) est un organisme impartial, mondial et sans but lucratif. Il évalue les dix principaux risques pour la sécurité des applications web et préconise un développement logiciel sécurisé.

L'OWASP organise des rencontres et des conférences ouvertes à tous à travers le monde. Il est donc possible de rencontrer et d’échanger avec la communauté pour effectuer une veille constante.

### OWASP TOP TEN

Open Web Application Security Project. recence les dix principales vulnérabilités web

1. L’injection : elle permet d’injecter du code arbitraire pour effectuer des actions qui seront interprétées par l’application. Pour bloquer ce genre d’attaque, il est possible d’utiliser des fonctions sécurisées ou encore de valider les entrées utilisateurs.

2. Le piratage de session : il se produit lorsque le système d’authentification a été contourné, par exemple en utilisant la technique de force brute. Pour se protéger contre ce type d’attaque, il faudra non seulement forcer les utilisateurs à utiliser des mots de passe forts, mais également sécuriser l’utilisation des cookies de session, par exemple.

3. L'exposition de données sensibles : elle se produit en cas de fuite de données, par exemple. Pour se protéger contre ce type d’attaque, il faudra utiliser des solutions de chiffrement pour sécuriser les données en transit et celles stockées sur l’application.

4. Les entités externes XML (XXE) : les vulnérabilités XXE peuvent être utilisées pour accéder à des données internes de l’application normalement non accessibles. Pour éviter ce type d’attaque, il est possible de désactiver les entités externes.

5. Le contournement des contrôles d'accès : les contrôles d’accès permettent d’empêcher un utilisateur d’accéder aux données d’un autre utilisateur. Pour éviter qu’un attaquant puisse exploiter cette vulnérabilité, assurez-vous que toutes les pages de votre application ont un contrôle d'authentification.

6. Les mauvaises configurations de sécurité : elles peuvent être à l’origine de nombreuses attaques. Assurez-vous de garder à jour les composants de votre application pour éviter qu’une vulnérabilité ne soit exploitée.

7. Les scripts XSS (cross-site scripting) : les failles XSS permettent à un attaquant d’injecter du code JavaScript. Utilisez la validation et la transformation des entrées utilisateurs pour les éviter.

8. La désérialisation non sécurisée : cette vulnérabilité peut permettre à un attaquant de mener une attaque d’élévation de privilège, de replay ou encore d’injection. Pour éviter ce type d’attaque, il est possible d’implémenter des contrôles sur l’état du code.

9. L'utilisation de composants contenant des vulnérabilités connues : une application est basée sur de nombreux composants. Pour éviter l’exploitation d’une vulnérabilité, il faudra maintenir à jour et identifier les éléments de votre application.

10. Le manque de monitoring et de surveillance : le monitoring et la surveillance permettront de détecter une intrusion ou un comportement suspicieux au plus tôt. Vérifiez régulièrement vos logs et mettez en place des reportings.

Motif Signification
^ Début de ligne ou de chaîne
$ Fin de ligne ou de chaîne
. N'importe quel caractère
x|y Caractère x ou y
[abc] Groupe de caractères : n'importe lequel de ceux entre crochets
[a-z] Groupe de caractères : n'importe lequel de a à z
[^0-9] Groupe de caractères : tous sauf ceux entre crochets
(x) Expression parenthésée (mémorisée)
asterisque Caractère précédent de 0 à X fois
plus Caractère précédent de 1 à X fois
? Caractère précédent de 0 à 1 fois
{n} Caractère précédent exactement n fois
{n,} Caractère précédent au moins n fois
{n,m} Caractère précédent entre n et m fois
\ N'est pas un caractère, sert de caractère d'échappement
\\ Caractère \
 \d Chiffres (équivalent à [0-9])
\D Sauf chiffres (équivalent à [^0-9])
\b Frontière de mot (espace, alinéa, ...)
\s Caractère d'espacement (espace, tabulation, saut de page, ...) équivalent à [ \f\n\r\t\v]
\S Un seul caractère sauf un espacement
\w N'importe quel caractère alphanumérique, y compris undescore (_) équivalent à [A-Za-z0-9_]
\W Tout sauf un caractère alphanumérique équivalent à [^a-za-z0-9_]

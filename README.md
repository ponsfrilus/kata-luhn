# Kata Luhn

<!-- start:apropos -->
> **À propos**
>
> ⓘ Ceci est la donnée d'un [kata], un _exercice de programmation_ qui se
> déroule généralement dans le cadre d'un [coding dojo]. Il est proposé aux
> membres du dojo de l'[EPFL] et fait partie d'une collection de différents
> katas identifiés par le tag **[epfl-dojo-kata]** sur GitHub.  
> Vous êtes plus que bienvenu·e d'essayer de le réaliser dans le langage de
> programmation de votre choix. Lorsque c'est terminé, ajoutez-vous à la liste
> de ceux qui l'ont fait dans ce document en proposant une [Pull Request]. Vous
> pouvez également partager votre intérêt pour ce dépôt en
> le «[stargazant]», c'est à dire en lui ajoutant une ⭐.  
> Bonne lecture et bon code !

[kata]: https://fr.wikipedia.org/wiki/Coding_dojo#Kata
[coding dojo]: https://fr.wikipedia.org/wiki/Coding_dojo
[EPFL]: https://www.epfl.ch
[epfl-dojo-kata]: https://github.com/topics/epfl-dojo-kata
[Pull Request]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests
[stargazant]: https://docs.github.com/en/get-started/exploring-projects-on-github/saving-repositories-with-stars
<!-- end:apropos -->

## But

Le but de ce kata est d'implémenter la [formule de Luhn] afin de vérifier des numéros de cartes bancaires.

[formule de Luhn]: https://fr.wikipedia.org/wiki/Formule_de_Luhn


## Réalisation

En utilisant la définition de la page
[wikipedia](https://fr.wikipedia.org/wiki/Formule_de_Luhn), valider les 50
numéros dans le paragraphe [Données](#donnees) ci-dessous et répondre à ces deux
questions :

  * Combien des numéros de la liste ci-dessous sont invalides ?
  * Combien des numéros de la liste ci-dessous sont valides ?


### Information pour valider la solution

La mise en commun XY des résultats du nombre de numéros invalides (X) avec
le le nombre de numéros valides (Y) donne un nombre de 4 chiffres bien connu
de la communauté informatique.

Si vous valider votre solution, partagez là 
avec la communauté en vous ajoutant dans le paragraphe "Je l'ai fait" de
ce document.


### Données

```
79927398713,      298436474791021,  340416824146788,  346490891474963,
347919863014364,  348019853012394,  371198739202953,  371296150127897,
374556300913588,  374807313008003,  374907403001005,  377314291861078,
379181838481191,  4012001037141112, 4024007110654372, 4026127332213316,
4236861588423130, 4248578382994095, 4485881577681603, 4508609531198239,
4532521961601386, 4730486223832238, 4778298110965112, 4844340293799856,
4913513675593925, 4916744251019012, 5018607603546046, 5025138323823829,
5049770300000098, 5101191446972568, 5253515018700310, 5297286779934575,
5327288979931979, 5383811929022693, 5396956282672082, 5411702458200089,
5474081634053090, 5476768164904704, 5696768174934712, 6011037963967845,
6011042733880033, 6011142692551330, 6011364398481345, 6011443340276910,
6385798718131320, 6393198983274823, 6405703781134112, 6703111122223334,
6761484799549417, 6791424796547413
```


## Je l'ai fait 💪

* La version de [@octocat](https://github.com/octocat) a été faite en `langage` et est disponible [ici](https://#).
* La version de [@D4rkHeart](https://github.com/D4rkHeart) a été faite en `JavaScript` et est disponible [ici](https://github.com/D4rkHeart/Kata-Luhn).

## Pour aller plus loin

* Comment identifier l'émetteur de carte ?
* La formule de Luhn est-elle utilisée pour d'autres cas d'emploi ?
* Quelles sont les principales différence avec l'[ISBN] ou l'[EAN_13] ?
* Comprenez-vous l'[implémentation faite](https://github.com/bendrucker/fast-luhn/blob/master/index.js) pour le package NPM [fast-luhn](https://www.npmjs.com/package/fast-luhn) ?

[ISBN]: https://fr.wikipedia.org/wiki/International_Standard_Book_Number#Structure_de_l'ISBN-13
[EAN_13]: https://fr.wikipedia.org/wiki/EAN_13

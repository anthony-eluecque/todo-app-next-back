# todo-app-next-back

Todo App 

## Authors

- [@anthony-eluecque](https://github.com/anthony-eluecque)
- [@BuathierTom](https://github.com/BuathierTom)


## Features

- [Les Commits](#les-commits)
   - [Conventionnal Commit](#conventionnal-commit) 
   - [Husky pour le système de gestion de version](#husky) 
- [Système de versionnning](#versionning)
- [Tests Unitaires](#tests-unitaires)
- [Issues Github](#issues-github)
- [Conteneurisation Docker](#container-docker)
- [CI/CD avec dagger.io](#cicd)
- [MakeFile](#makefile)
- [Documentation](#documentation)
    - [Wiki Github](#wiki-github)
    - [Documentation Technique](#documentation-technique)
- [Conclusion](#conclusion)

## Les Commits

### Conventionnal Commit

Dans ce projet, nous avons continué de suivre l'approche des commits conventionnels que nous connaissions en dehors de ce projet, cette
méthodologie de gestion de version nous permet de maintenir une cohérence dans nos messages et d'améliorer à la fois la lisibilité et la traçabilité des commits.

```
<type>(<scope>): <description>
```

- **Type** : Indique la nature du commit (Feat, Fix, Refactor, ...)
- **Scope** : Précise la portée de la modification (Module, Composant, Fichier, ...)
- **Description** : Résumé brièvement la modification 


Bien que la méthodologie des commits conventionnels ne soit pas nouvelle pour nous, nous sommes néanmoins satisfait d'avoir pu la mettre en place dans ce projet. En effet, c'est la première fois que nous avons eu l'occasion de travailler ensemble sur un projet de l'appliquer de manière cohérente, et de prouver nos respects des conventions.

### Husky

Avant de commencer ce projet, bien que nous ayons déjà entendu parler de husky, nous n'avions jamais eu l'occasion de l'implémenter dans nos projets précédents. Husky nous semblait être un outil potenciellement utile, mais nous n'avions pas encore expérimenté les avantages et les potencielles inconvénients qu'il peut apporter.
C'est pourquoi lors du premier rendu, nous avions décidé de l'intégrer à ce projet de test.

Cependant, lors de l'initialisation de Husky, nous avons rencontré des problèmes de compatibilité avec Git Kraken, un outil que nous utilisons au quotidien depuis le début de BUT 3. Les commits ne semblaient pas être reconnus et détecté par Husky, ce qui a entrainé des erreurs lors des exécutions de nos customs hooks. 

Pour résoudre ce problème, nous avons dû effectuer des tests en utilisant directement des commandes Git en ligne de commande. La validation des commits s'est mise à fonctionner correctement sans rencontrer les mêmes problèmes de compatibilité.

Malgrès des débuts laborieux avec Husky, son intégration s'est révélé bénéfique dans notre processus de développement et nous continurons de l'intégrer dans notre projet.

## Versionning

Nous avons également décidé d'intégrer un système de versionning dans le cadre de ce projet. 

Avant cela, nous n'avions jamais implémenté ce système formel de versionning dans nos projets. Cependant, en observant au fil du temps de plus en plus de projets github dans nos recherches (BUT1-BUT3) nous avons réalisé que la gestion efficace des versions dans un projet était une pratique standard dans le développement d'une application.

Pour comprendre les différentes conventions et les meilleurs pratiques associé au versionning, nous avons consulté plusieurs ressources en ligne, notamment des documentations complète et détaillé sur comment fonctionne le versionning sémantique.

Ce format est décomposé en trois parties:  le numéro majeur, mineur et le patch, séparés par des points.

- Numéro Majeur : Incrémenté lors d'ajouts de modifications majeurs, telle que des changements incompatibles. Une incrémentation du numéro majeur indique une évolution majeur du logiciel.

- Numéro Mineur : Incrémenté lors de l'ajout de nouvelles fonctionnalités ou des modifications qui sont compatibles avec les versions précédentes. En résumé, il n'y a pas une rupture majeur dans le fonctionnement de l'application.

- Numéro Patch : Incrémenté pour les corrections de bugs ou les petites améliorations qui ne modifient pas le comportement externe du logiciel de manière significative.

L'introduction de ce système nous a permis de fournir des releases à notre projet structurées et bien documentées. 

En conclusion, bien que nous avons commencé ce projet sans expérience sur ce système, nous avons en parallèle de cette matière appliqué ce système dans des nouveaux projets, en voici un exemple : https://github.com/anthony-eluecque/reseARch-educative-app/releases/tag/v1.1.0

## Tests Unitaires

Nous avons continué dans les bonnes pratiques de développement en intégrant des tests unitaires à notre projet pour garantir la fiabilité et la qualité de notre code. 

Pour cela, nous avons utilisé une base de données en mémoire pour les tests unitaires. Cette approche présente l'avantage et la rapidité d'exécutions des tests, ainsi que leur isolation. Pour Tom, cela représentait une nouvelle expérience, car il n'avait jamais utilisé de base de données en mémoire.

Une autre pratique que nous avons mis en place en adéquation avec les tests unitaires c'est la couverture de code. Contrairement à notre expérience sur les 3 années à l'IUT, où cet aspect n'a pas été mis en avant, nous avons découvert que dans le développement en entreprise, il est souvent recommandé d'avoir un niveau de couverture de code d'au moins 80%.

Pour faire une apparté sur la partie avec [Husky](#husky) , nous avons intégré ce processus de coverage et de test dans un custom hook.

## Issues Github

Dans le cadre du projet, nous avons exploré plus en détail l'utilisation des issues sur GitHub, une pratique que nous avons utilisé de manière limitée dans le cadre de nos études.

Au début, nous avions une vision assez restreinte de l'intérêt des issues dans un projet à deux personnes, surtout sans la contribution de développeurs externes.
Cependant, au fil du développement de notre API, nous avons découvert l'importance et les potencielles avantages de cette fonctionnalité qui encore une fois, n'a pas été mise en avant dans notre formation.


Ainsi, bien que nous ayons initialement sous-estimé l'utilité des issues, nous avons maintenant une meilleure compréhension de leur importance. Même dans un contexte restreint, les issues nous ont servis comme reminder, ou bien pour communiquer.

Cette expérience nous a apporté une vrai valeur ajotué sur les bonnes pratiques de développement.

## Container Docker

## CI/CD

La mise en place d'un système de CI/CD a été le concept le plus difficile à aborder. La complexité de cette tâche résidait dans la nécessité de comprendre et de définir précisement ce que l'on souhaitait dès le départ.

Initialement, nous avons sous-estimé la complexité de la CI/CD et nous avons été confrontés à des défis significatifs lors de la recherche et la sélection d'une solution adapté à nos besoins.

Lors d'un cours, vous nous avez parlé de dagger.io, l'intégration bien que prometteuse au départ, s'est rélevé problématique avec des soucis de compatibilité avec nos ordinateurs et de la conception radicalement différente par rapport à nos connaissances actuelles

Cependant, nous pensons que nous reviendrons sur ça dans les prochaines années de nos études, et que ce n'est que partie remise.

En dépit des difficultés, nous avons persévéré dans notre démarche et nous avons finalement réussi à mettre en place un système de CI/CD fonctionnel avec les GitHub Actions, ainsi qu'avec l'intégration Docker pour la conteuneurisation de notre API.

Cette expérience nous a permis de mieux comprendre l'importance de la CI/CD dans le développement et de renforcer nos acquis dans ce domaine.



## Makefile

Nous avons décidé d'implémenter un fichier Makefile, une pratique que nous avons abordée lors du premier cours de déploiement.

L'idée derrière cette décision, c'était de pouvoir mettre en pratique les concepts que nous avions appris dans le cours et d'autre part, nous voulions assurer la compabilité multiplateforme.

## Documentation

### Wiki Github

### Documentation Technique


## Conclusion

En conclusion, ce projet nous a offert une opportunité précieuse d'explorer et d'appliquer de nombreux concepts et de bonnes pratiques de développement. De la gestion des commits à la CI/CD, chaque étape nous a semblé importante et nous avons appris des connaissances qui sont de vraies must have

Ce projet a été une expérience enrichissante qui nous a permis de développer nos compétences techniques, d'explorer de nouvelles pratiques, et surtout, de renforcer notre passion pour le développement web.

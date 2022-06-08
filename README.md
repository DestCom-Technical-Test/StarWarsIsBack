# Star Wars IS BACK

Ce repository contient l'intégralité du code.
Il comporte 3 branches :

- master : la version de base (avec le support de webpack et toute les consignes)
- noWebpack : la version racine (le minimum, seulement les consignes principales)
- webpack : la version avec webpack (avec le support de webpack et toute les consignes)

## Explications

L'intégration a été faite en se basant sur la taille des maquettes :

- Desktop : 1024px en largeur et 768px en hauteur
- Mobile : Iphone 6 donc 375px en largeur et 667px en hauteur

La parallaxe a été décidé arbitrairement étant donné que il n'y avait pas d'indications.

Il est possible d'appliquer l'effet de parralaxe sur un element en lui attribuant l'attribut `data-effety="value"` pour gérer le décalage vertical et `data-effetx="value"` pour gérer le décalage horizontal.

## Installation

### Lancer un serveur de développement

```bash
npm install
npm start
```

Lancera un serveur avec serve qui montrera le site avec un webpack et du code non minifié.

### Lancer un build de développement

```bash
npm install
npm run dev
```

Lancera le build de webpack sans code minifié.

### Lancer un build de production

```bash
npm install
npm run build
```

Lancera le build de webpack avec code minifié.

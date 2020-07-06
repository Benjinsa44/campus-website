(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{436:function(e,t,s){"use strict";s.r(t);var a=s(27),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"guide-pour-les-associations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#guide-pour-les-associations"}},[e._v("#")]),e._v(" Guide pour les associations")]),e._v(" "),s("p",[e._v("L'objectif de ce guide est de vous montrer et expliquer vous pouvez "),s("strong",[e._v("ajouter")]),e._v(" ou "),s("strong",[e._v("modifier")]),e._v(" du "),s("strong",[e._v("contenu")]),e._v(", "),s("em",[e._v("comme le bureau de votre association par exemple.")])]),e._v(" "),s("h2",{attrs:{id:"ce-qu-il-faut-savoir-avant-de-commencer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ce-qu-il-faut-savoir-avant-de-commencer"}},[e._v("#")]),e._v(" Ce qu'il faut savoir avant de commencer")]),e._v(" "),s("p",[e._v("Tout d'abord, l'ensemble du code source du website est disponible "),s("a",{attrs:{href:"https://github.com/Campus-INSA-CVL/campus-website",target:"_blank",rel:"noopener noreferrer"}},[e._v("ici"),s("OutboundLink")],1),e._v(". Ainsi, pour les plus connaisseurs de GitHub, vous pouvez simplement soumettre une Pull Request afin de modifier les sources du website. Pour les autres, nous allons voir ensemble comment soumettre vos modifications.")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("N'oubliez pas")]),e._v(" "),s("p",[e._v("Pensez à prévenir le respo info ou le respo asso des changements que vous allez réaliser afin de s'assurer que les changements sont bien voulus et qu'ils puissent être accepter.")])]),e._v(" "),s("h2",{attrs:{id:"fonctionnement"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fonctionnement"}},[e._v("#")]),e._v(" Fonctionnement")]),e._v(" "),s("p",[e._v("Afin de simplifier le process de création et de maintien du site, les pages créées ont pour objectif de "),s("strong",[e._v("récupérer le contenu de fichiers textes")]),e._v(" afin de les affichers sur l'écran de l'utilisateur. Ainsi, vous n'aurez qu'à "),s("strong",[e._v("modifier")]),e._v(" de "),s("strong",[e._v("petits fichiers textes")]),e._v(". Rien de plus simple ! Cela permet aussi de s'affranchir des notions de droits utilisateurs et donc de facilier les passations. Aussi, le président, le secrétaire et plus généralement n'importe qui, sous réserve d'acception des modifications par le respo info ou respo asso, sera en mesure de mettre à jour le contenu du site !")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("En savoir plus")]),e._v(" "),s("p",[e._v("Vous pouvez aller lire le "),s("RouterLink",{attrs:{to:"/guide-dev.html"}},[e._v("Guide pour les développeur")])],1)]),e._v(" "),s("h2",{attrs:{id:"localisation-du-contenu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#localisation-du-contenu"}},[e._v("#")]),e._v(" Localisation du contenu")]),e._v(" "),s("p",[e._v("Afin de voir le fichier brut, il vous suffit de vous rendre dans le dossier "),s("code",[e._v("content")]),e._v(" trouvable sur "),s("a",{attrs:{href:"https://github.com/Campus-INSA-CVL/campus-website/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),s("OutboundLink")],1),e._v(". Ensuite, l'arboresence est assez facile à comprendre puisqu'il s'agit de la même que celle que l'on peut suivre sur le website campus. Les fichiers qui nous interessent le plus sont les fichiers dont l'extension est "),s("code",[e._v("md")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"arborescence"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arborescence"}},[e._v("#")]),e._v(" Arborescence")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("content\n|---federation\n    |----fichiers et dossiers pour l'ensemblde des fédérations\n    index\n    |----fichier pour l'acceuil\n    olympiade\n    |----fichiers pour les olympiades\n    outils\n    |----fichiers pour présenter les outils\n    services\n    |----fichiers pour présenter les services\n    vie-etudiante\n    |----fichiers de présentation de l'INSA et des campus\n")])])]),s("h2",{attrs:{id:"modification-du-contenu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modification-du-contenu"}},[e._v("#")]),e._v(" Modification du contenu")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Création de nouvelles routes")]),e._v(" "),s("p",[e._v("Pour la création d'une nouvelle association, outil ou service (et onglet) ou une modification technique, nous vous invitons à prendre contact avec le BDE")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Expert")]),e._v(" "),s("p",[e._v("Pour les créateurs experts, vous pouvez explorer "),s("a",{attrs:{href:"https://content.nuxtjs.org/writing/",target:"_blank",rel:"noopener noreferrer"}},[e._v("cette partie"),s("OutboundLink")],1),e._v(" du module utilisé afin de compredre les possibilités offertes par le Markdown. Il notamment possible d'utiliser le front matter afin de stocker des données utilisables par les composants. Il est aussi possible d'utiliser des composants custom ou ceux de "),s("a",{attrs:{href:"https://vuetifyjs.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vuetify"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("p",[e._v("Il existe un point commun entre toutes ces modifications, elles reposent sur la modification d'un fichier Markdown. Il s'agit de fichier texte qui vont permettre de mettre en place de la sémentique sur votre texte, c'est à dire ce qui est le titre, les paragraphes, un tableau et pleins de choses encore. Vous n'avez pas à vous occuper du design.")]),e._v(" "),s("p",[e._v("Pour en "),s("strong",[e._v("savoir plus")]),e._v(" sur le Markdown: "),s("a",{attrs:{href:"https://www.markdownguide.org/getting-started/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting Started"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("Pour "),s("strong",[e._v("apprendre la synthaxe")]),e._v(" (très simple) du Markdown: "),s("a",{attrs:{href:"https://www.markdownguide.org/basic-syntax/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Basic Synctax"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("Pour "),s("strong",[e._v("écrire du markdown")]),e._v(": "),s("a",{attrs:{href:"https://dillinger.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dillinger"),s("OutboundLink")],1)]),e._v(" "),s("h3",{attrs:{id:"comment-modifier-le-contenu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#comment-modifier-le-contenu"}},[e._v("#")]),e._v(" Comment modifier le contenu ?")]),e._v(" "),s("ul",[s("li",[e._v("Demander au respo info de réaliser les modifications souhaitées")])]),e._v(" "),s("p",[s("strong",[e._v("ou")])]),e._v(" "),s("ul",[s("li",[e._v("Aller sur "),s("a",{attrs:{href:"https://github.com/Campus-INSA-CVL/campus-website/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("Parcourir l'arborescence pour trouver le fichier à modifier")]),e._v(" "),s("li",[e._v("Cliquer sur le crayon, en haut à droite du document")]),e._v(" "),s("li",[e._v("Modifier")]),e._v(" "),s("li",[e._v("Envoyer les changements en créant une nouvelle branche afin de générer une nouvelle pull request et en expliquant la motivation des changements dans la description")])]),e._v(" "),s("p",[s("strong",[e._v("ou")])]),e._v(" "),s("ul",[s("li",[e._v("Effectuer un fork du repo sur votre machine de travail")]),e._v(" "),s("li",[e._v("Effectuer les modifications en créant une nouvelle branche")]),e._v(" "),s("li",[e._v("Effectuer une pull request")])]),e._v(" "),s("h3",{attrs:{id:"modification-de-la-presentation-d-un-pole"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modification-de-la-presentation-d-un-pole"}},[e._v("#")]),e._v(" Modification de la présentation d'un pôle")]),e._v(" "),s("ul",[s("li",[e._v("Dans le dossier fédération, se rendre dans le dossier du pôle")]),e._v(" "),s("li",[e._v("Apporter les modifications au fichier "),s("code",[e._v("index.md")])])]),e._v(" "),s("p",[s("strong",[e._v("Exemple")])]),e._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hr punctuation"}},[e._v("---")]),e._v("\ntitle: pôle culturel "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- Sera utilisé pour le nom de la card sur la page fédération --\x3e")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token hr punctuation"}},[e._v("---")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("#")]),e._v(" hello")]),e._v("\n")])])]),s("h3",{attrs:{id:"modification-de-l-equipe-d-un-pole"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modification-de-l-equipe-d-un-pole"}},[e._v("#")]),e._v(" Modification de l'équipe d'un pôle")]),e._v(" "),s("ul",[s("li",[e._v("Dans le dossier fédération, se rendre dans le dossier du pôle")]),e._v(" "),s("li",[e._v("Apporter les modifications au fichier "),s("code",[e._v("equipe.md")])])]),e._v(" "),s("p",[s("strong",[e._v("Exemple")])]),e._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hr punctuation"}},[e._v("---")]),e._v("\ntitle: équipe du pôle culturel "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- utilsé pour changer le nom de l'onglet --\x3e")]),e._v("\ncolor: culturelColor\nteam: "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- données utilisées pour la création visuel de la team --\x3e")]),e._v("\n  bureau:\n    "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[e._v("-")]),e._v(" responsability: président\n      name: Jules Perrault\n      description: responsable de l'association\n    "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[e._v("-")]),e._v(" responsability: trésorier\n      name: Courtland Vaillancour\n      description: Phasellus et laoreet augue. Aliquam tristique nisi sed velit faucibus auctor. Nulla turpis diam, volutpat nec nisl vitae.\n      avatar: federation/culturel/tresorier.png\n  communication:\n    "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[e._v("-")]),e._v(" responsability: responsable communication\n      name: Charlotte Beaudoin\n      "),s("span",{pre:!0,attrs:{class:"token title important"}},[e._v("description: gère son équipe de communication afin d'augmenter la visibilité de l'association\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("---")])]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("#")]),e._v(" L'équipe")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("team")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v(":team")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("team"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v(":color")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("team")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),s("h3",{attrs:{id:"modification-d-une-association"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modification-d-une-association"}},[e._v("#")]),e._v(" Modification d'une association")]),e._v(" "),s("ul",[s("li",[e._v("Dans le dossier fédération, se rendre dans le dossier du pôle qui fédère son association")]),e._v(" "),s("li",[e._v("Chercher ensuite son association dans l'ensemble des dossiers (si elle n'est pas visible, demandez au respo info de la faire)")]),e._v(" "),s("li",[e._v("Modifier le fichier "),s("code",[e._v("index.md")])])]),e._v(" "),s("p",[s("strong",[e._v("Exemple")])]),e._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hr punctuation"}},[e._v("---")]),e._v("\ntitle: INSAction "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- utilsé pour changer le nom de l'onglet --\x3e")]),e._v("\ncolor: culturelColor\nteam: "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- données utilisées pour la création visuel de la team --\x3e")]),e._v("\n  bureau:\n    "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[e._v("-")]),e._v(" responsability: président\n      name: Michel Harquin\n      description: responsable de l'association\n    "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[e._v("-")]),e._v(" responsability: trésorier\n      name: Courtland Vaillancour\n      description: Phasellus et laoreet augue. Aliquam tristique nisi sed velit faucibus auctor. Nulla turpis diam, volutpat nec nisl vitae.\n      avatar: federation/culturel/tresorier.png\n  communication:\n    "),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[e._v("-")]),e._v(" responsability: responsable communication\n      name: Charlotte Beaudoin\n      "),s("span",{pre:!0,attrs:{class:"token title important"}},[e._v("description: gère son équipe de communication afin d'augmenter la visibilité de l'association\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("---")])]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("#")]),e._v(" Bienvenue dans INSAction !")]),e._v("\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("#")]),e._v(" L'équipe")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("team")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v(":team")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("team"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v(":color")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("color"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("team")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),s("h3",{attrs:{id:"modification-d-un-outil-ou-d-un-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modification-d-un-outil-ou-d-un-service"}},[e._v("#")]),e._v(" Modification d'un outil ou d'un service")]),e._v(" "),s("ul",[s("li",[e._v("Trouver le fichier dans le dossier correspondant")]),e._v(" "),s("li",[e._v("Procéder aux modifications")])]),e._v(" "),s("p",[s("strong",[e._v("Exemple")])]),e._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hr punctuation"}},[e._v("---")]),e._v("\ntitle: alumni "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- utilsé pour changer le nom de la card --\x3e")]),e._v("\ndescription: Lorem ipsum dolor sit amet, consectetur adipiscing elit. "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- utilsé pour changer la description présente sur la card --\x3e")]),e._v("\ncolor: alumniColor "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- utilsé pour changer la couleur présente de la card (en informer le respo info afin qu'il procède aux changements) --\x3e")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token hr punctuation"}},[e._v("---")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("#")]),e._v(" lorem upsum")]),e._v("\n\nQuisque luctus odio et est maximus posuere id nec quam.\n")])])]),s("h3",{attrs:{id:"modification-d-un-onglet-vie-etudiante-sports-representation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modification-d-un-onglet-vie-etudiante-sports-representation"}},[e._v("#")]),e._v(" Modification d'un onglet, Vie Étudiante / Sports / Représentation")]),e._v(" "),s("ul",[s("li",[e._v("Trouver le fichier dans le dossier correspondant")]),e._v(" "),s("li",[e._v("Procéder aux modifications")])]),e._v(" "),s("p",[s("strong",[e._v("Exemple")])]),e._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[s("span",{pre:!0,attrs:{class:"token hr punctuation"}},[e._v("---")]),e._v("\ntitle: blois "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- utilsé pour changer le nom de l'onglet --\x3e")]),e._v("\norder: 2 "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- utilsé pour ranger les onglets --\x3e")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token hr punctuation"}},[e._v("---")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token title important"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("#")]),e._v(" Lorem ipsum dolor sit")]),e._v("\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\n")])])]),s("h2",{attrs:{id:"les-blogs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#les-blogs"}},[e._v("#")]),e._v(" Les blogs")]),e._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[e._v("Soon")]),e._v(" "),s("p",[e._v("Cette fonction n'est pas encore disponible")])])])}),[],!1,null,null,null);t.default=n.exports}}]);
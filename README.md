# Orange-Cameroun-test
Ce projet est une mini-application web front-end permettant de gérer un annuaire interne simplifié des employés d'un service Orange. Il respecte les contraintes d'utilisation de technologies natives (HTML, CSS, JavaScript) sans aucune bibliothèque externe ni backend.

### Informations sur le Candidat

* **Nom et Prénom:** [KALDJOB CECILE] [ESTHER DORIS]
* **Langages utilisés:** HTML, CSS, JavaScript (Vanilla)
* **Temps réellement passé:** Environ 3.5 - 4 heures (incluant la planification, le développement et la documentation).

---

### Instructions pour ouvrir le projet

1.  **Téléchargez** ou **clones** ce dépôt sur votre machine locale.
2.  **Dézippez** le fichier si nécessaire.
3.  Ouvrez le dossier `NomDuProjet/`.
4.  **Double-cliquez** sur le fichier `index.html` dans votre navigateur web (Chrome, Firefox, Edge, etc.).

---

### Fonctionnalités développées

1.  **Formulaire d'ajout d'un employé:**
    * Champs requis : Nom, Prénom, Email, Poste/Fonction.
    * Un bouton "Ajouter" pour valider le formulaire.
    * Validation des champs : email valide, champs non vides avec messages d'erreur temporaires.

2.  **Affichage dynamique de la liste des employés:**
    * Lorsqu'un employé est ajouté, il apparaît directement dans une liste affichée sur la même page.
    * Chaque ligne (carte d'employé) affiche : Le nom complet (nom + prénom), l'email, la fonction.

3.  **Suppression d'un employé:**
    * Un bouton "Supprimer" est présent pour chaque employé.
    * En cliquant sur "Supprimer", l'employé est retiré de la liste sans rechargement de la page.

4.  **Persistance locale avec localStorage:**
    * Les données des employés sont conservées même après un rechargement de la page grâce à l'utilisation du `localStorage` du navigateur.

5.  **Interface utilisateur simple et propre:**
    * L'application est **responsive**, assurant un affichage correct sur mobile ou écran réduit.
    * Utilisation de **CSS personnalisé** pour améliorer la lisibilité et l'esthétique sans frameworks.

---

### Bonus réalisés (facultatif)

* **Messages de validation/succès/erreur temporaires** pour le formulaire.
* **Design responsive** pour une meilleure expérience utilisateur sur différentes tailles d'écran.
* **Message "Aucun employé enregistré"** lorsque la liste est vide.

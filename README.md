## PROJET GAMINGIFY-ACTU :

### CE PROJET UTILISE :

**React-Bootstrap** framework pour l'interface front,
**NodeJS/Express** pour l'API et **PostgreSQL** pour la base de données

### **Lien repo du projet :**

**FRONT :** **`https://github.com/TimotheSymbolIt/gamingify_actu_front`**

**BACK :** **`https://github.com/TimotheSymbolIt/gamingify_actu_back`**

**BDD :** l'API est déjà connecté à la database en ligne PostgreSQL

### FRONT-END

### IMPORTER SUR VISUAL STUDIO CODE

Pour importer le projet dans **Visual Studio Code**, ouvrez le dossier à la racine.

Avant de le démarrer, installer toutes les dépendances -> New Terminal, et appliquez la commande : **`npm install`**

### Pour démarrer

Pour lancer le projet, allez dans le Terminal -> New Terminal, et appliquez la commande : **`npm run dev`**.

Par défaut, le serveur front démarre sur le port 5173

### BACK-END

### IMPORTER SUR VISUAL STUDIO CODE

Pour importer le projet dans **Visual Studio Code**, ouvrez le dossier à la racine.

Avant de le démarrer, installer toutes les dépendances -> New Terminal, et appliquez la commande : **`npm install`**

### Pour démarrer

Pour lancer le projet, allez dans le Terminal -> New Terminal, et appliquez la commande : **`npm run dev`**.

Par défaut, le serveur front démarre sur le port 5000

---

## Front :

### Setup le front

- Initialiser un projet React "client" avec vite
- Installation de Bootstrap
- Initialiser un package json

- Installer les librairies : axios, bootstrap, jodit-react, react, react-bootstrap, react-dom, react-icons, react-router-dom, react-toastify

- Reset du template Vite + React
- Créer un dossier "pages" avec `AddArticle.jsx`, `Authentificate.jsx`, `ContentArticle.jsx`, `Dashboard.jsx`, `DeleteArticle.jsx`, `EditArticle`, `ErrorPage.jsx`, `Home.jsx`, `index.jsx`, `Login.jsx`, `ModifyArticles.jsx`, `News.jsx`, `Register.jsx`, `SharedLayout.jsx`

- Créer un dossier "layouts" avec `DashboardLayout.jsx`,
- Créer un dossier "components" `AuthOverlay.jsx`,`Commentaries.jsx`,`CommentaryForm.jsx`,`Footer.jsx`,`FormRow.jsx`,`Navbar.jsx`, `PageBtnContainer.jsx`, `SingleCard.jsx`, `SingleCommentary.jsx`, `Title.jsx`

- Setup React Router dans `App.jsx`

## Back :

- Créer la BDD
- Créer un ENUM pour le rôle users :

```sql
CREATE TYPE user_role AS ENUM ('admin', 'user');
```

- Créer les tables : users, articles, commentary

```sql
-- colonne role dans la table users
role user_role NOT NULL DEFAULT 'user'
```

### Setup le serveur

- Initialiser package.json

- Installer les librairies : bcryptjs, cloudinary, cors, dotenv, express, express-async-errors, express-validator, http-status-codes, jsonwebtoken, multer, nodemon, pg

- Faire les scripts
- Créer un .env
- .gitignore
- Initialiser le serveur

- Créer le dossier db
- Créer bdd.sql

- Middlewares: notFound, errorHandler, authentificationMiddleware, multerMiddleware, validationMiddleware

- Errors: BadRequestError, UnauthenticatedError, NotFoundError, UnauthorizedError

#### Controllers

- authController : register, login

- articlesController : createArticle, getAllArticles, getSingleArticle, updateArticle, deleteArticle

- userController : getUser

- commentaryController : createCommentary, getAllCommentaryArticles

#### Routes :

- authRoutes /api/v1/auth

- articlesRoutes /api/v1/articles

- commentaryRoutes : /api/v1/commentary

- userRoutes /api/v1/current-user

### Thunder Client/Postman

- Créer une collection "Grocery Bud" dans Thunder Client/Postman

  - Créer un dossier Auth
  - Créer un dossier Articles
  - Créer un dossier Commentary

### Inscription de l'utilisateur

- Récupérer les inputs envoyées
- "Valider" les inputs
- Vérifier que l'email n'existe pas dans la BDD
- Hasher le mot de passe avec bcryptjs
- Insérer l'utilisateur dans la BDD
- Créer un token avec JWT
- Envoyer le token dans la réponse

### Connexion de l'utilisateur

- Récupérer les inputs envoyées
- "Valider" les inputs
- Vérifier si l'utilisateur existe dans la BDD
- Comparer les mots passes avec bcryptjs
- Créer un token avec JWT
- Envoyer le token dans la réponse

### Middleware authenticateUser

- Faire un middleware authenticateUser qui authentifie l'utilisateur (en utilisant JWT) et attache le token décodé à `req.user`

### Contrôleurs et routes pour les articles

- Faire les routes et les contrôleurs pour articles :

  - createArticle
  - getArticle
  - updateArticle
  - deleteArticle

- Faire les routes et les contrôleurs pour commentary :

  - createCommentary
  - getAllCommentaryArticles

- Appeler authenticateUser avant les routes pour les protéger

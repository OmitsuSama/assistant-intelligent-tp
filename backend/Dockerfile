# Utiliser une image Node.js officielle
FROM node:14

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier package.json et installer les dépendances
COPY package.json ./
RUN npm install

# Copier tout le reste du code dans le conteneur
COPY . .

# Exposer le port utilisé par le serveur Express (par défaut 5000)
EXPOSE 5000

# Démarrer l'application
CMD ["npm", "start"]

# TO_DO_APP Spring-React

Ce projet est une application To-Do List composée d’un backend Spring Boot, d’un frontend React, et d’une base de données MySQL, tous containerisés avec Docker.

---

## Structure du projet

- `/API_TO_DO_APP` : backend Spring Boot
- `/to_do_app_frontend` : frontend React
- `docker-compose.yml` : orchestration Docker des services backend, frontend et base de données

---

## Prérequis

- Docker et Docker Compose installés
- Java (pour le développement backend local)
- Node.js et npm (pour le développement frontend local)

---

## Lancer l’application avec Docker

docker compose up --build

text

Accéder ensuite à :  
- Frontend React : [http://localhost:5173](http://localhost:5173)  
- Backend API : [http://localhost:9000](http://localhost:9000)

---

## Développement

### Backend

- Dossier : `/API_TO_DO_APP`
- Commandes Maven/Gradle habituelles
- Port exposé : 9000

### Frontend

- Dossier : `/to_do_app_frontend`
- Commandes npm/yarn habituelles
- Port exposé : 5173

---

## Nettoyage

Pour arrêter et supprimer les conteneurs, réseaux et volumes :

docker compose down -v

text

---

## Contribution

N’hésitez pas à proposer des améliorations via pull requests.

---

## Licence


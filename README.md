# TO_DO_APP Spring-React

Ce projet est une application To-Do List composée d’un backend Spring Boot, d’un frontend React, et d’une base de données MySQL, tous containerisés avec Docker.

---
## Table des matières

-[TO_DO_APP Spring-React](#to_do_app-spring-react)
    -[Table des matieres](#table-des-matières)
    -[Structure du projet](#structure-du-projet)
    -[Préréquis](#prérequis)
    -[Lancer l'application avec Docker](#lancer-lapplication-avec-docker)
    -[Développement](#développement)
        -[Backend](#backend)
        -[Frontend](#frontend)
    -[Nettoyage](#nettoyage)
    -[Distribution](#distribution)
    -[Contribution](#contribution)
    -[Contact](#contact)
    -[Licence](#licence)




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

## Distribution

# Partager des images Docker (backend & frontend) via une clé USB

Ce guide explique comment exporter, transférer et importer des images Docker (par exemple backend et frontend) d’une machine à une autre sans utiliser de registre distant, en utilisant une clé USB.

---

## 1. Exporter les images Docker en fichiers `.tar`

Utilise la commande `docker save` pour chaque image afin de créer un fichier exportable :

### Backend

docker save -o backend_image.tar to_do_app_spring-react-main-backend

text

### Frontend

docker save -o frontend_image.tar to_do_app_spring-react-main-frontend

text

Ces commandes créent deux fichiers (`backend_image.tar` et `frontend_image.tar`) contenant les images Docker à transférer[2][4][5][6].

---

## 2. Copier les fichiers sur la clé USB

- Monte ta clé USB sur ta machine.
- Copie les fichiers `.tar` dessus :

cp backend_image.tar /media/usb
cp frontend_image.tar /media/usb

text

> Remplace `/media/usb` par le chemin réel de ta clé USB.

---

## 3. Importer les images sur une autre machine

Sur la machine cible :

- Copie les fichiers `.tar` depuis la clé USB vers un dossier local.
- Charge les images dans Docker :

docker load -i backend_image.tar
docker load -i frontend_image.tar

text

Les images seront alors disponibles localement pour lancer des conteneurs[2][3][5][6].

---

## 4. Lancer les conteneurs sur la machine cible

Utilise soit des commandes `docker run`, soit un fichier `docker-compose.yml` adapté pour démarrer les conteneurs à partir des images importées.

---

## Résumé des commandes

| Étape                | Commande exemple                                      |
|----------------------|------------------------------------------------------|
| Exporter backend     | `docker save -o backend_image.tar <image-backend>`   |
| Exporter frontend    | `docker save -o frontend_image.tar <image-frontend>` |
| Copier sur clé USB   | `cp backend_image.tar /media/usb`                    |
| Importer backend     | `docker load -i backend_image.tar`                   |
| Importer frontend    | `docker load -i frontend_image.tar`                  |

---

**Références** :  
[Docker Labs][2] | [PhoenixNAP][4] | [Baeldung][7]

## Contribution

N’hésitez pas à proposer des améliorations via pull requests.

---
## Contact

*   **WhatsApp :** +237657450314
*   **Email :** azangueleonel9@gmail.com
*   **LinkedIn :** [leonel-azangue](https://www.linkedin.com/in/leonel-azangue)


## Licence


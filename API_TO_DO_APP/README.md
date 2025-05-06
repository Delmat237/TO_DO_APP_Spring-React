# Backend TO_DO_APP - Spring Boot

## Description

Backend REST API développé avec Spring Boot, connecté à une base MySQL.

---

## Prérequis

- Java 17+
- Maven ou Gradle
- Base MySQL (configurable dans `application.properties`)

---

## Lancement local



./mvnw spring-boot:run

text

ou

./gradlew bootRun

text

L’API sera disponible sur :  
`http://localhost:9000`

---

## Configuration Docker

L’image Docker est construite via le `Dockerfile` présent dans ce dossier.  
Le port 9000 est exposé.

---

## Variables d’environnement importantes

- `SPRING_DATASOURCE_URL`
- `SPRING_DATASOURCE_USERNAME`
- `SPRING_DATASOURCE_PASSWORD`
- `SERVER_PORT`

---

## Tests

Pour lancer les tests unitaires :

./mvnw test

text

---

## Contribution

Merci de respecter les bonnes pratiques Spring et REST.
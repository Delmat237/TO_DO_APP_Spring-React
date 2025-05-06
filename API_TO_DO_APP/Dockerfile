# Utilise OpenJDK  21 comme image de base
FROM openjdk:21-jdk-slim


WORKDIR /app

# Copie le JAR généré dans le conteneur
COPY target/*.jar app.jar

EXPOSE 9000

# Démarre l'application Spring Boot
ENTRYPOINT ["java", "-jar", "app.jar"]

-- Base de données pour l'application web
CREATE DATABASE IF NOT EXISTS webapp;
USE webapp;

-- Table des messages
CREATE TABLE IF NOT EXISTS messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertion d'un message par défaut
INSERT INTO messages (content) VALUES 
('Bienvenue sur l'application web de l'architecture 3-Tiers!'),
('Déploiement réussi via GitOps sur OpenShift Virtualization');

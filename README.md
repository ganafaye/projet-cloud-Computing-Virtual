# Projet Cloud Computing - Architecture 3-Tiers sur OpenShift

## 📋 Description
Déploiement automatisé d'une infrastructure 3-Tiers sur OpenShift Virtualization avec approche GitOps.

## 🏗️ Architecture

| Composant | Type | IP / Service | Rôle |
|-----------|------|--------------|------|
| **VM-GW** | Virtual Machine | 192.168.100.1 (DMZ) / 192.168.10.1 (LAN) | Passerelle / Firewall (iptables) |
| **VM-WEB** | Virtual Machine | 192.168.100.10 (DMZ) | Serveur Web (Nginx + Node.js) |
| **MySQL** | Pod | mysql-service:3306 | Base de données |
| **Node.js App** | Pod | nodejs-service:3000 | Application web |

## 🌐 Accès à l'Application

L'application est accessible publiquement via HTTPS :

```
https://app-projet-cloud-virtual-gana-ganafaye-dev.apps.rm2.thpm.p1.openshiftapps.com
```

### Fonctionnalités
- ✅ Affichage des messages stockés en base de données
- ✅ Ajout de nouveaux messages en temps réel
- ✅ Interface web moderne et responsive
- ✅ Disponible 24h/24, 7j/7

## 🔧 Technologies Utilisées

| Technologie | Version | Usage |
|-------------|---------|-------|
| OpenShift | 4.12+ | Plateforme de conteneurs |
| KubeVirt | 1.7.1 | Virtualisation |
| Ubuntu | 22.04 LTS | OS des VMs |
| iptables | - | Firewall sur VM-GW |
| Node.js | 18 | Application web |
| MySQL | 8 | Base de données |
| GitHub Actions | - | CI/CD |

## 📂 Structure du Projet


<img width="339" height="678" alt="Capture d’écran du 2026-03-27 18-17-42" src="https://github.com/user-attachments/assets/9736fb74-1e93-47f9-8839-8246edcaf4fc" />


## 🚀 Déploiement Automatisé

Le déploiement est entièrement automatisé via GitHub Actions.

### Secrets GitHub requis

| Secret | Description |
|--------|-------------|
| `OPENSHIFT_SERVER` | URL du cluster OpenShift |
| `OPENSHIFT_TOKEN` | Token d'authentification |

### Workflow de déploiement

1. **Push** sur la branche `main`
2. **Installation** d'oc et virtctl
3. **Connexion** à OpenShift
4. **Déploiement** des VMs et pods
5. **Démarrage** des VMs
6. **Vérification** de l'état

## 📊 Adresses IP Configurées

| VM | Interface | IP | Zone |
|----|-----------|-----|------|
| VM-GW | lo:1 | 192.168.100.1 | DMZ (Passerelle) |
| VM-GW | lo:2 | 192.168.10.1 | LAN (Passerelle) |
| VM-WEB | lo:1 | 192.168.100.10 | DMZ |

## 🔒 Règles Firewall (iptables) sur VM-GW

```bash
# Activation du routage
sysctl -w net.ipv4.ip_forward=1

# NAT pour l'accès Internet
iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE

# Règles de filtrage
iptables -A INPUT -p tcp --dport 22 -j ACCEPT
iptables -A FORWARD -s 192.168.100.0/24 -d 192.168.10.0/24 -p tcp --dport 3306 -j ACCEPT
iptables -A FORWARD -i eth0 -d 192.168.100.0/24 -p tcp --dport 80 -j ACCEPT
iptables -A FORWARD -i eth0 -d 192.168.100.0/24 -p tcp --dport 443 -j ACCEPT
```

## 🐬 Base de Données MySQL

### Structure de la table `messages`

```sql
CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Messages par défaut

| ID | Content |
|----|---------|
| 1 | Bienvenue sur l'architecture 3-Tiers! |
| 2 | Application Node.js + MySQL fonctionnelle |
| 3 | Déploiement réussi sur OpenShift Virtualization |
| 4 | VM-GW: 192.168.100.1 (DMZ) et 192.168.10.1 (LAN) |
| 5 | VM-WEB: 192.168.100.10 |

## 🖥️ Commandes Utiles

### Vérifier les VMs
```bash
oc get vmi -n ganafaye-dev
```

### Vérifier les pods
```bash
oc get pods -n ganafaye-dev
```

### Voir les IPs dans VM-GW
```bash
virtctl console vm-gw -n ganafaye-dev
# ubuntu / ubuntu
ip addr show | grep 192.168
```



### Tester MySQL
```bash
oc exec -it $(oc get pods -n ganafaye-dev -l app=mysql -o name) -- mysql -u webapp -ppassword -e "SELECT * FROM webapp.messages;"
```

## 📸 Captures d'écran

### Workflow GitHub Actions
<img width="1762" height="751" alt="image" src="https://github.com/user-attachments/assets/06203e80-8245-44ea-8897-dce498d80e98" />


### Application Web
<img width="1920" height="1048" alt="Capture d’écran du 2026-03-27 17-51-25" src="https://github.com/user-attachments/assets/20937865-331c-449e-9a9a-9ca3a842b79c" />


### VMs en cours d'exécution
<img width="1920" height="1048" alt="image" src="https://github.com/user-attachments/assets/027e10f3-7138-42c1-8645-acf159f8b552" />


## 👨‍💻 Auteur

**Gana FAYE** - Master SI, UADB  
Prof: **Dr. BABOU**

## 📅 Date

Mars 2026

---

## 🌟 Fonctionnalités

- ✅ Architecture 3-Tiers complète
- ✅ Automatisation GitOps (GitHub Actions)
- ✅ Accès public via HTTPS
- ✅ Disponibilité 24h/24
- ✅ Interface web avec CRUD
- ✅ Documentation complète

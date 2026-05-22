# claudia-landing

Site vitrine pour **Claudia**, prothésiste ongulaire à Pertuis.

- **Stack** : HTML / CSS / JS statique
- **Hébergement** : nginx (Docker) sur VPS, derrière Traefik
- **Domaine** : https://claudia.51.77.223.61.nip.io
- **CI/CD** : GitHub Actions → ghcr.io → SSH deploy

## Dev local

Ouvre `index.html` dans un navigateur, ou :

```bash
python3 -m http.server 8000
```

## Déploiement

Push sur `main` → build Docker → push registry → pull & restart sur le VPS.

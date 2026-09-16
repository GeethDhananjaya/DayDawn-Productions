# Production Hosting & Server Deployment Guide

This guide outlines deployment onto a Linux VPS (Ubuntu 22.04 / 24.04 LTS) or Cloud Instance (AWS EC2, DigitalOcean Droplet, GCP Compute Engine).

---

## 1. Server Directory Hierarchy
Standard production directory arrangement on the target server:

```
/var/www/daydawn/
├── frontend/
│   └── dist/
├── backend/
│   ├── src/
│   ├── package.json
│   └── .env
└── logs/
    ├── nginx/
    └── backend/
```

---

## 2. Setting Up Nginx & SSL
1. Install Nginx and Certbot:
   ```bash
   sudo apt update && sudo apt install -y nginx certbot python3-certbot-nginx
   ```
2. Copy configuration:
   ```bash
   sudo cp nginx/daydawn.conf /etc/nginx/sites-available/daydawn.conf
   sudo ln -s /etc/nginx/sites-available/daydawn.conf /etc/nginx/sites-enabled/
   sudo rm -f /etc/nginx/sites-enabled/default
   sudo nginx -t
   sudo systemctl restart nginx
   ```
3. Request SSL certificate:
   ```bash
   sudo certbot --nginx -d daydawnproductions.com -d www.daydawnproductions.com
   ```

---

## 3. Managing Backend with PM2 / Systemd
Install PM2 globally:
```bash
sudo npm install -g pm2
cd /var/www/daydawn/backend
pm2 start src/app.js --name "daydawn-api" -i max
pm2 startup
pm2 save
```

---

## 4. Deploying via Docker Compose
For containerized deployments, clone the repository and run:
```bash
docker-compose up -d --build
```

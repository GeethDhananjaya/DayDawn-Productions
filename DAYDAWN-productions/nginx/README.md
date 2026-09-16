# DAYDAWN Productions - Nginx Reverse Proxy

Production Nginx server block configuration for reverse-proxying requests, serving static client files, terminating SSL, and rate limiting.

---

## 1. Features
- **SPA Fallback**: Directs all HTML5 client navigation to `index.html`.
- **Static File Caching**: 1-year cache headers on Vite hashed assets (`/assets/`).
- **Gzip Compression**: Compresses HTML, CSS, JS, SVG, and JSON responses.
- **Security Headers**: HSTS, CSP, X-Frame-Options, X-Content-Type-Options.
- **API Proxy**: Proxies `/api/` traffic cleanly to backend Node.js upstream with real IP headers.
- **Rate Limiting**: Protects backend endpoints against brute force and DDoS.

---

## 2. Server Deployment (Ubuntu / Debian VPS)
```bash
sudo cp nginx/daydawn.conf /etc/nginx/sites-available/daydawn.conf
sudo ln -s /etc/nginx/sites-available/daydawn.conf /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### SSL Certificate via Let's Encrypt Certbot
```bash
sudo certbot --nginx -d daydawnproductions.com -d www.daydawnproductions.com
```

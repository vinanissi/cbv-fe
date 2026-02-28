# Cloudflare Application Template

This is a template for creating Cloudflare Workers or Pages applications managed by IDP Universal Workspace Manager.

## Structure

```
.
├── src/                    # Source code (Worker entry point)
├── package.json           # Dependencies and scripts
├── wrangler.toml          # Cloudflare/Wrangler configuration
├── .idp-environments.json # Environment configuration (DEV/STAGING/PROD)
├── .devcore.json          # DevCore project metadata
├── .idp.config.json       # IDP project metadata
├── .gitignore
└── README.md
```

## Prerequisites

1. Install Wrangler CLI globally:
   ```bash
   npm install -g wrangler
   ```

2. Authenticate with Cloudflare:
   ```bash
   wrangler login
   ```

3. Configure your Cloudflare Account ID in `wrangler.toml` (or set `CLOUDFLARE_ACCOUNT_ID` environment variable)

## Environments

This project supports multi-environment configuration:
- **DEV**: Development environment
- **STAGING**: Staging environment  
- **PROD**: Production environment

Environment configuration is stored in `.idp-environments.json` and `wrangler.toml`.

## Commands

- `npm run dev` - Run development server locally
- `npm run build` - Build the project
- `npm run deploy` - Deploy to current environment
- `npm run deploy:dev` - Deploy to DEV environment
- `npm run deploy:staging` - Deploy to STAGING environment
- `npm run deploy:prod` - Deploy to PROD environment

## Deployment

### Local Deployment

Use IDP Universal Workspace Manager:
1. Select your CF_APP project
2. Choose environment (DEV/STAGING/PROD)
3. Click "☁️ Deploy to Cloudflare"

### CI/CD Deployment

The project includes a GitHub Actions workflow (`.github/workflows/deploy-cloudflare.yml`) that automatically deploys on push to:
- `main` branch → PROD environment
- `staging` branch → STAGING environment
- `dev` branch → DEV environment

**Required GitHub Secrets:**
- `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare Account ID
- `CLOUDFLARE_API_TOKEN` - Your Cloudflare API Token

## IDP Integration

This project is managed by IDP Universal Workspace Manager. Use IDP to:
- Switch between environments
- Deploy to Cloudflare
- Manage Git and CI/CD
- View deployment logs

## Customization

1. Update `wrangler.toml` with your routes, zones, and Cloudflare resources (KV, Durable Objects, etc.)
2. Modify `src/index.js` with your Worker logic
3. Add environment variables in `wrangler.toml` or via Cloudflare Dashboard
4. Customize build scripts in `package.json` if needed

## Resources

- [Wrangler Documentation](https://developers.cloudflare.com/workers/wrangler/)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)


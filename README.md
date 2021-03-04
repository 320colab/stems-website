# STEMS Website

Website for the STEMS music produciton competition. 
Hosted at https://stems.320colab.com.
Based on bootstrap 4.0.0-alpha.6.


# Deploying a new version

1. make nice changes 
2. Push changes to `main` on github, 
   then Github Actions will publish it.

### Manually

`ipfs-deploy public -p pinata -d cloudflare -O -C`  
or `npm run deploy-site`

***Prerequisites***

Enter the api keys for Cloudflare and Pinate in `.env` 


# Run it locally

No fancy setup/building needed, use any web server to serve [./public](./public)    
`npx http-server ./public -o`  
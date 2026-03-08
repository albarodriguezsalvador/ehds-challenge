# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm install
```

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment


```bash
npm run serve
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
GIT_USER=albarodriguezsalvador npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Deploying via SSH

If you have multiple SSH keys, you can specify which key to use when pushing or deploying:

```bash
# Push changes using a specific SSH key
GIT_SSH_COMMAND="ssh -i ~/.ssh/id_ed25519_github -o IdentitiesOnly=yes" git push

# Deploy your Docusaurus site using the same key
GIT_SSH_COMMAND="ssh -i ~/.ssh/id_ed25519_github -o IdentitiesOnly=yes" npm run deploy
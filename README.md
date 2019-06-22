# Simple Logger

# Tools

- https://github.com/google/clasp

# Develop

## Start with a new script

```sh
$ clasp create --type sheets --title "simple-logger"
$ clasp setting rootDir ./src
$ clasp setting fileExtension ts
```

The above command will create `.clasp.json` (DO NOT COMMIT).

## Start with an existing script

```sh
# You can get SCRIPT_ID from `https://script.google.com/d/<SCRIPT_ID>/edit`
$ clasp setting scriptId SCRIPT_ID
$ clasp setting rootDir ./src
$ clasp setting fileExtension ts
```

The above command will create `.clasp.json` (DO NOT COMMIT).

# Deploy

```sh
$ clasp push
$ clasp deploy
```

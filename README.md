# Injective Getting Started scripts

## How to start:

1. close this project using git:

```
git clone 
```

2. install dependencies (open a terminal within the folder)

```
npm i
```

## Scripts:

1. Get tx hash info using:

```
node transaction.mjs
```

2. Make simple transaction using:

- replace this in simple-tx.mjs:
```
const privateKey = 'VOTRE_PRIVATE_KEY'
const injectiveAddress = 'VOTRE_WALLET_ADDRESS'
```

- then do the following command:
```
node simple-tx.mjs
```
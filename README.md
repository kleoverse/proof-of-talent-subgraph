# Proof Of Talent Protocol - Subgraph

This subgraph is used to index the Proof Of Talent Protocol on the Polygon blockchain.

## Setup

1. Install dependencies

```bash
yarn
```
2. Generate the types for the subgraph

```bash
yarn codegen
```

3. Build the subgraph

```bash
yarn build
```

4. Deploy the subgraph

- Authenticate with cli

```bash
graph auth --product hosted-service <ACCESS_TOKEN>
```

- Deploy the subgraph

- Deploy to Goerli network instance

```bash
graph deploy --product hosted-service kleoverse-github/kleoverse-pot-testnet --network goerli
```

- Deploy to Polygon Mainnet network instance
```bash
graph deploy --product hosted-service kleoverse-github/kleoverse-pot --network matic
```

## Development

- For in-depth documentation on Graph Node, see the [Graph Node documentation](https://thegraph.com/docs).
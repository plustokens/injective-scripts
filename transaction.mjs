import { IndexerGrpcExplorerApi } from '@injectivelabs/sdk-ts'
import { getNetworkEndpoints, Network } from '@injectivelabs/networks'

const endpoints = getNetworkEndpoints(Network.Mainnet)
const indexerGrpcExplorerApi = new IndexerGrpcExplorerApi(endpoints.explorer)

const txsHash = 'TRANSACTION_HASH_HERE'

const transaction = await indexerGrpcExplorerApi.fetchTxByHash(txsHash)

console.log(transaction)

import { MsgSend, MsgBroadcasterWithPk } from '@injectivelabs/sdk-ts'
import { BigNumberInBase } from '@injectivelabs/utils'
import { Network } from '@injectivelabs/networks'

const privateKey = 'VOTRE_PRIVATE_KEY'
const injectiveAddress = 'VOTRE_WALLET_ADDRESS'

const amount = {
  denom: 'inj',
  amount: new BigNumberInBase(0.0001).toWei().toFixed(),
}
const msg = MsgSend.fromJSON({
  amount,
  srcInjectiveAddress: injectiveAddress,
  dstInjectiveAddress: injectiveAddress,
})

const txHash = await new MsgBroadcasterWithPk({
  privateKey,
  network: Network.Mainnet
}).broadcast({
  msgs: msg,
  memo: 'Lets go baby',
  gas: {
    gas: 6400000 // better to compute the gas before sending tx.
  }
})

console.log(txHash)
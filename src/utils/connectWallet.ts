import { chainInfo } from '../config'
import { bech32 } from 'bech32'

type ConnectWalletParams = {
  chainId: string
}

export const connectWallet = async ({
  chainId,
}: ConnectWalletParams): Promise<{ address: string; name: string } | undefined> => {
  if (window.keplr) {
    const config = chainInfo.find((item) => item.chainId === chainId)
    if (config) {
      await window.keplr.experimentalSuggestChain(config)
      await window.keplr.enable(chainId)

      const offlineSigner = window.getOfflineSignerAuto
        ? await window.getOfflineSignerAuto(chainId)
        : undefined

      const key = await window.keplr.getKey(chainId)

      if (key && key.bech32Address && offlineSigner) {
        const prefix = bech32.decode(key.bech32Address).prefix
        return { address: key.bech32Address, name: `${key.name} ${prefix}` }
      }
    }
  } else if (!window.keplr) {
    throw new Error('Please install Keplr extension to view your account balance')
  }
}

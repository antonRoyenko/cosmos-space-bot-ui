import { Bech32Address } from '@keplr-wallet/cosmos'

export const desmosChain = {
  rpc: 'https://rpc.mainnet.desmos.network',
  rest: 'https://api.mainnet.desmos.network',
  chainId: 'desmos-mainnet',
  chainName: 'Desmos',
  stakeCurrency: {
    coinDenom: 'DSM',
    coinMinimalDenom: 'udsm',
    coinDecimals: 6,
    coinGeckoId: 'desmos',
  },
  bip44: {
    coinType: 852,
  },
  bech32Config: Bech32Address.defaultBech32Config('desmos'),
  currencies: [
    {
      coinDenom: 'DSM',
      coinMinimalDenom: 'udsm',
      coinDecimals: 6,
      coinGeckoId: 'desmos',
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'DSM',
      coinMinimalDenom: 'udsm',
      coinDecimals: 6,
      coinGeckoId: 'desmos',
    },
  ],
  features: ['ibc-transfer', 'ibc-go'],
  chainSymbolImageUrl: '',
}

import { Bech32Address } from '@keplr-wallet/cosmos'

export const comdexChain = {
  rpc: 'https://rpc.comdex.one',
  rest: 'https://rest.comdex.one',
  chainId: 'comdex-1',
  chainName: 'Comdex',
  stakeCurrency: {
    coinDenom: 'CMDX',
    coinMinimalDenom: 'ucmdx',
    coinDecimals: 6,
    coinGeckoId: 'comdex',
  },
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config('comdex'),
  currencies: [
    {
      coinDenom: 'CMDX',
      coinMinimalDenom: 'ucmdx',
      coinDecimals: 6,
      coinGeckoId: 'comdex',
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'CMDX',
      coinMinimalDenom: 'ucmdx',
      coinDecimals: 6,
      coinGeckoId: 'comdex',
    },
  ],
  features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx'],
  chainSymbolImageUrl: '',
}

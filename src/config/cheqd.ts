import { Bech32Address } from '@keplr-wallet/cosmos'

export const cheqdChain = {
  rpc: 'https://rpc.cheqd.net',
  rest: 'https://api.cheqd.net',
  chainId: 'cheqd-mainnet-1',
  chainName: 'Cheqd',
  stakeCurrency: {
    coinDenom: 'CHEQ',
    coinMinimalDenom: 'ncheq',
    coinDecimals: 9,
    coinGeckoId: 'cheqd-network',
  },
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config('cheqd'),
  currencies: [
    {
      coinDenom: 'CHEQ',
      coinMinimalDenom: 'ncheq',
      coinDecimals: 9,
      coinGeckoId: 'cheqd-network',
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'CHEQ',
      coinMinimalDenom: 'ncheq',
      coinDecimals: 9,
      coinGeckoId: 'cheqd-network',
    },
  ],
  features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx'],
  chainSymbolImageUrl: '',
}

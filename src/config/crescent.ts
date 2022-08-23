import { Bech32Address } from '@keplr-wallet/cosmos'

export const crescentChain = {
  rpc: 'https://mainnet.crescent.network:26657',
  rest: 'https://mainnet.crescent.network:1317',
  chainId: 'crescent-1',
  chainName: 'Crescent',
  stakeCurrency: {
    coinDenom: 'CRE',
    coinMinimalDenom: 'ucre',
    coinDecimals: 6,
    coinGeckoId: 'pool:ucre',
  },
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config('cre'),
  currencies: [
    {
      coinDenom: 'CRE',
      coinMinimalDenom: 'ucre',
      coinDecimals: 6,
      coinGeckoId: 'pool:ucre',
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'CRE',
      coinMinimalDenom: 'ucre',
      coinDecimals: 6,
      coinGeckoId: 'pool:ucre',
    },
  ],
  features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
  chainSymbolImageUrl: '',
}

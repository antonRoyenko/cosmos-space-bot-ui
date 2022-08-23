import { Bech32Address } from '@keplr-wallet/cosmos'

export const akashChain = {
  rpc: 'https://rpc-akash.keplr.app',
  rest: 'https://lcd-akash.keplr.app',
  chainId: 'akashnet-2',
  chainName: 'Akash',
  stakeCurrency: {
    coinDenom: 'AKT',
    coinMinimalDenom: 'uakt',
    coinDecimals: 6,
    coinGeckoId: 'akash-network',
  },
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config('akash'),
  currencies: [
    {
      coinDenom: 'AKT',
      coinMinimalDenom: 'uakt',
      coinDecimals: 6,
      coinGeckoId: 'akash-network',
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'AKT',
      coinMinimalDenom: 'uakt',
      coinDecimals: 6,
      coinGeckoId: 'akash-network',
    },
  ],
  features: ['ibc-transfer'],
  chainSymbolImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/akash.png',
}

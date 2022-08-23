import { Bech32Address } from '@keplr-wallet/cosmos'

export const emoneyChain = {
  rpc: 'https://rpc-emoney.keplr.app',
  rest: 'https://lcd-emoney.keplr.app',
  chainId: 'emoney-3',
  chainName: 'e-Money',
  stakeCurrency: {
    coinDenom: 'NGM',
    coinMinimalDenom: 'ungm',
    coinDecimals: 6,
    coinGeckoId: 'e-money',
    coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/ngm.png',
  },
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config('emoney'),
  currencies: [
    {
      coinDenom: 'NGM',
      coinMinimalDenom: 'ungm',
      coinDecimals: 6,
      coinGeckoId: 'e-money',
      coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/ngm.png',
    },
    {
      coinDenom: 'EEUR',
      coinMinimalDenom: 'eeur',
      coinDecimals: 6,
      coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/ngm.png',
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'NGM',
      coinMinimalDenom: 'ungm',
      coinDecimals: 6,
      coinGeckoId: 'e-money',
      coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/ngm.png',
    },
  ],
  features: ['ibc-transfer'],
  chainSymbolImageUrl: '',
}

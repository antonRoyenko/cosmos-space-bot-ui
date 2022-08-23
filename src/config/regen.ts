import { Bech32Address } from '@keplr-wallet/cosmos'

export const regenChain = {
  rpc: 'https://rpc-regen.keplr.app',
  rest: 'https://lcd-regen.keplr.app',
  chainId: 'regen-1',
  chainName: 'Regen',
  stakeCurrency: {
    coinDenom: 'REGEN',
    coinMinimalDenom: 'uregen',
    coinDecimals: 6,
    coinGeckoId: 'regen',
  },
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config('regen'),
  currencies: [
    {
      coinDenom: 'REGEN',
      coinMinimalDenom: 'uregen',
      coinDecimals: 6,
      coinGeckoId: 'regen',
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'REGEN',
      coinMinimalDenom: 'uregen',
      coinDecimals: 6,
      coinGeckoId: 'regen',
    },
  ],
  features: ['ibc-transfer', 'ibc-go'],
  chainSymbolImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/regen.png',
}

import { Bech32Address } from '@keplr-wallet/cosmos'

export const bandChain = {
  rpc: 'https://rpc.laozi3.bandchain.org',
  rest: 'https://laozi1.bandchain.org/api',
  chainId: 'laozi-mainnet',
  chainName: 'BandChain',
  stakeCurrency: {
    coinDenom: 'BAND',
    coinMinimalDenom: 'uband',
    coinDecimals: 6,
    coinGeckoId: 'band-protocol',
  },
  bip44: {
    coinType: 494,
  },
  bech32Config: Bech32Address.defaultBech32Config('band'),
  currencies: [
    {
      coinDenom: 'BAND',
      coinMinimalDenom: 'uband',
      coinDecimals: 6,
      coinGeckoId: 'band-protocol',
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'BAND',
      coinMinimalDenom: 'uband',
      coinDecimals: 6,
      coinGeckoId: 'band-protocol',
    },
  ],
  features: ['ibc-go'],
  chainSymbolImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/agoric.png',
}

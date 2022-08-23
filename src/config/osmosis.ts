import { Bech32Address } from '@keplr-wallet/cosmos'

export const osmosisChain = {
  rpc: 'https://rpc-osmosis.keplr.app',
  rest: 'https://lcd-osmosis.keplr.app',
  chainId: 'osmosis-1',
  chainName: 'Osmosis',
  stakeCurrency: {
    coinDenom: 'OSMO',
    coinMinimalDenom: 'uosmo',
    coinDecimals: 6,
    coinGeckoId: 'osmosis',
    coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/osmo.png',
  },
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config('like'),
  currencies: [
    {
      coinDenom: 'OSMO',
      coinMinimalDenom: 'uosmo',
      coinDecimals: 6,
      coinGeckoId: 'osmosis',
      coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/osmo.png',
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'OSMO',
      coinMinimalDenom: 'uosmo',
      coinDecimals: 6,
      coinGeckoId: 'osmosis',
      coinImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/osmo.png',
    },
  ],
  features: ['ibc-transfer', 'ibc-go', 'cosmwasm'],
  chainSymbolImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/osmo.png',
}

import { Bech32Address } from '@keplr-wallet/cosmos'

export const assetmantleChain = {
  rpc: 'https://rpc.assetmantle.one/',
  rest: 'https://rest.assetmantle.one/',
  chainId: 'mantle-1',
  chainName: 'AssetMantle',
  stakeCurrency: {
    coinDenom: 'MNTL',
    coinMinimalDenom: 'umntl',
    coinDecimals: 6,
    coinGeckoId: 'pool:umntl',
  },
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config('mantle'),
  currencies: [
    {
      coinDenom: 'MNTL',
      coinMinimalDenom: 'umntl',
      coinDecimals: 6,
      coinGeckoId: 'pool:umntl',
      coinImageUrl: '/tokens/mntl.png',
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'MNTL',
      coinMinimalDenom: 'umntl',
      coinDecimals: 6,
      coinGeckoId: 'pool:umntl',
      coinImageUrl: '/tokens/mntl.png',
    },
  ],
  features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
  chainSymbolImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/akash.png',
}

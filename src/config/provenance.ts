import { Bech32Address } from '@keplr-wallet/cosmos'

export const provenanceChain = {
  rpc: 'https://rpc.provenance.io/',
  rest: 'https://api.provenance.io',
  chainId: 'pio-mainnet-1',
  chainName: 'Provenance',
  stakeCurrency: {
    coinDenom: 'HASH',
    coinMinimalDenom: 'nhash',
    coinDecimals: 9,
    coinGeckoId: 'provenance-blockchain',
  },
  bip44: {
    coinType: 505,
  },
  bech32Config: Bech32Address.defaultBech32Config('pb'),
  currencies: [
    {
      coinDenom: 'HASH',
      coinMinimalDenom: 'nhash',
      coinDecimals: 9,
      coinGeckoId: 'provenance-blockchain',
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'HASH',
      coinMinimalDenom: 'nhash',
      coinDecimals: 9,
      coinGeckoId: 'provenance-blockchain',
    },
  ],
  features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
  chainSymbolImageUrl: '',
}

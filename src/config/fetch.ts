import { Bech32Address } from '@keplr-wallet/cosmos'

export const fetchChain = {
  rpc: 'https://rpc-fetchhub.fetch.ai:443',
  rest: 'https://rest-fetchhub.fetch.ai',
  chainId: 'fetchhub-4',
  chainName: 'Fetch.ai',
  stakeCurrency: {
    coinDenom: 'FET',
    coinMinimalDenom: 'afet',
    coinDecimals: 18,
    coinGeckoId: 'fetch-ai',
  },
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config('fetch'),
  currencies: [
    {
      coinDenom: 'FET',
      coinMinimalDenom: 'afet',
      coinDecimals: 18,
      coinGeckoId: 'fetch-ai',
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'FET',
      coinMinimalDenom: 'afet',
      coinDecimals: 18,
      coinGeckoId: 'fetch-ai',
    },
  ],
  features: ['ibc-transfer', 'ibc-go'],
  chainSymbolImageUrl: '',
}

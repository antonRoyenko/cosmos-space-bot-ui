import { Bech32Address } from '@keplr-wallet/cosmos'

export const likecoinChain = {
  rpc: 'https://mainnet-node.like.co/rpc',
  rest: 'https://mainnet-node.like.co',
  chainId: 'likecoin-mainnet-2',
  chainName: 'LikeCoin',
  stakeCurrency: {
    coinDenom: 'LIKE',
    coinMinimalDenom: 'nanolike',
    coinDecimals: 9,
    coinGeckoId: 'likecoin',
  },
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config('like'),
  currencies: [
    {
      coinDenom: 'LIKE',
      coinMinimalDenom: 'nanolike',
      coinDecimals: 9,
      coinGeckoId: 'likecoin',
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'LIKE',
      coinMinimalDenom: 'nanolike',
      coinDecimals: 9,
      coinGeckoId: 'likecoin',
    },
  ],
  features: ['ibc-transfer', 'ibc-go'],
  chainSymbolImageUrl: '',
}

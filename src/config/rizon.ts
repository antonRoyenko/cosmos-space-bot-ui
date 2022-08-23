import { Bech32Address } from '@keplr-wallet/cosmos'

export const rizonChain = {
  rpc: 'https://rpcapi.rizon.world/',
  rest: 'https://restapi.rizon.world/',
  chainId: 'titan-1',
  chainName: 'Rizon',
  stakeCurrency: {
    coinDenom: 'ATOLO',
    coinMinimalDenom: 'uatolo',
    coinDecimals: 6,
    coinGeckoId: 'rizon',
  },
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config('rizon'),
  currencies: [
    {
      coinDenom: 'ATOLO',
      coinMinimalDenom: 'uatolo',
      coinDecimals: 6,
      coinGeckoId: 'rizon',
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'ATOLO',
      coinMinimalDenom: 'uatolo',
      coinDecimals: 6,
      coinGeckoId: 'rizon',
    },
  ],
  features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
  chainSymbolImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/regen.png',
}

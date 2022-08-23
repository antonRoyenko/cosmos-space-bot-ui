import { Bech32Address } from '@keplr-wallet/cosmos'

export const cosmosChain = {
  rpc: 'https://rpc-cosmoshub.keplr.app',
  rest: 'https://lcd-cosmoshub.keplr.app',
  chainId: 'cosmoshub-4',
  chainName: 'Cosmos Hub',
  stakeCurrency: {
    coinDenom: 'CMDX',
    coinMinimalDenom: 'ucmdx',
    coinDecimals: 6,
    coinGeckoId: 'comdex',
  },
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config('cosmos'),
  currencies: [
    {
      coinDenom: 'ATOM',
      coinMinimalDenom: 'uatom',
      coinDecimals: 6,
      coinGeckoId: 'cosmos',
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'ATOM',
      coinMinimalDenom: 'uatom',
      coinDecimals: 6,
      coinGeckoId: 'cosmos',
    },
  ],
  features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
  chainSymbolImageUrl: '',
}

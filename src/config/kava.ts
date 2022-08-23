import { Bech32Address } from '@keplr-wallet/cosmos'

export const kavaChain = {
  rpc: 'https://rpc-kava.keplr.app',
  rest: 'https://lcd-kava.keplr.app',
  chainId: 'kava_2222-10',
  chainName: 'Kava',
  stakeCurrency: {
    coinDenom: 'KAVA',
    coinMinimalDenom: 'ukava',
    coinDecimals: 6,
    coinGeckoId: 'kava',
  },
  bip44: {
    coinType: 459,
  },
  bech32Config: Bech32Address.defaultBech32Config('kava'),
  currencies: [
    {
      coinDenom: 'KAVA',
      coinMinimalDenom: 'ukava',
      coinDecimals: 6,
      coinGeckoId: 'kava',
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'KAVA',
      coinMinimalDenom: 'ukava',
      coinDecimals: 6,
      coinGeckoId: 'kava',
    },
  ],
  features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
  chainSymbolImageUrl: '',
}

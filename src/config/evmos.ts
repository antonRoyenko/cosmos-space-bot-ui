import { Bech32Address } from '@keplr-wallet/cosmos'

export const evmosChain = {
  rpc: 'https://rpc-evmos.keplr.app/',
  rest: 'https://lcd-evmos.keplr.app/',
  chainId: 'evmos_9001-2',
  chainName: 'Evmos',
  stakeCurrency: {
    coinDenom: 'DSM',
    coinMinimalDenom: 'udsm',
    coinDecimals: 6,
    coinGeckoId: 'desmos',
  },
  bip44: {
    coinType: 60,
  },
  bech32Config: Bech32Address.defaultBech32Config('evmos'),
  currencies: [
    {
      coinDenom: 'EVMOS',
      coinMinimalDenom: 'aevmos',
      coinDecimals: 18,
      coinGeckoId: 'evmos',
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'DSM',
      coinMinimalDenom: 'udsm',
      coinDecimals: 6,
      coinGeckoId: 'desmos',
    },
  ],
  features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
  chainSymbolImageUrl: '',
}

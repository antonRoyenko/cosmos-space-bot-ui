import { Bech32Address } from '@keplr-wallet/cosmos'

export const agoricChain = {
  rpc: 'https://rpc-agoric.keplr.app',
  rest: 'https://lcd-agoric.keplr.app',
  chainId: 'agoric-3',
  chainName: 'Agoric',
  stakeCurrency: {
    coinDenom: 'BLD',
    coinMinimalDenom: 'ubld',
    coinDecimals: 6,
  },
  bip44: {
    coinType: 564,
  },
  bech32Config: Bech32Address.defaultBech32Config('agoric'),
  currencies: [
    {
      coinDenom: 'BLD',
      coinMinimalDenom: 'ubld',
      coinDecimals: 6,
    },
    {
      coinDenom: 'RUN',
      coinMinimalDenom: 'urun',
      coinDecimals: 6,
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'RUN',
      coinMinimalDenom: 'urun',
      coinDecimals: 6,
    },
  ],
  features: ['ibc-go'],
  chainSymbolImageUrl: 'https://dhj8dql1kzq2v.cloudfront.net/white/agoric.png',
}

import { Bech32Address } from '@keplr-wallet/cosmos'

export const sifchainChain = {
  rpc: 'https://rpc-sifchain.keplr.app',
  rest: 'https://lcd-sifchain.keplr.app/',
  chainId: 'sifchain-1',
  chainName: 'Sifchain',
  stakeCurrency: {
    coinDenom: 'ROWAN',
    coinMinimalDenom: 'rowan',
    coinDecimals: 18,
    coinGeckoId: 'sifchain',
  },
  bip44: {
    coinType: 118,
  },
  bech32Config: Bech32Address.defaultBech32Config('sif'),
  currencies: [
    {
      coinDenom: 'ROWAN',
      coinMinimalDenom: 'rowan',
      coinDecimals: 18,
      coinGeckoId: 'sifchain',
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'ROWAN',
      coinMinimalDenom: 'rowan',
      coinDecimals: 18,
      coinGeckoId: 'sifchain',
    },
  ],
  features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
  chainSymbolImageUrl: '',
}

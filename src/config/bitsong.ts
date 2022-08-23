import { Bech32Address } from '@keplr-wallet/cosmos'

export const bitsongChain = {
  rpc: 'https://rpc.explorebitsong.com',
  rest: 'https://lcd.explorebitsong.com',
  chainId: 'bitsong-2b',
  chainName: 'BitSong',
  stakeCurrency: {
    coinDenom: 'BTSG',
    coinMinimalDenom: 'ubtsg',
    coinDecimals: 6,
  },
  bip44: {
    coinType: 639,
  },
  bech32Config: Bech32Address.defaultBech32Config('bitsong'),
  currencies: [
    {
      coinDenom: 'BTSG',
      coinMinimalDenom: 'ubtsg',
      coinDecimals: 6,
      coinGeckoId: 'pool:ubtsg',
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'BTSG',
      coinMinimalDenom: 'ubtsg',
      coinDecimals: 6,
      coinGeckoId: 'pool:ubtsg',
    },
  ],
  features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
  chainSymbolImageUrl: '',
}

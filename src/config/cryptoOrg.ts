import { Bech32Address } from '@keplr-wallet/cosmos'

export const cryptoChain = {
  rpc: 'https://rpc-crypto-org.keplr.app',
  rest: 'https://lcd-crypto-org.keplr.app',
  chainId: 'crypto-org-chain-mainnet-1',
  chainName: 'Crypto.org',
  stakeCurrency: {
    coinDenom: 'CRO',
    coinMinimalDenom: 'basecro',
    coinDecimals: 8,
    coinGeckoId: 'crypto-com-chain',
  },
  bip44: {
    coinType: 394,
  },
  bech32Config: Bech32Address.defaultBech32Config('cro'),
  currencies: [
    {
      coinDenom: 'CRO',
      coinMinimalDenom: 'basecro',
      coinDecimals: 8,
      coinGeckoId: 'crypto-com-chain',
    },
  ],
  feeCurrencies: [
    {
      coinDenom: 'CRO',
      coinMinimalDenom: 'basecro',
      coinDecimals: 8,
      coinGeckoId: 'crypto-com-chain',
    },
  ],
  features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx'],
  chainSymbolImageUrl: '',
}

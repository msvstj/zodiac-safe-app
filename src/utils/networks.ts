export enum NETWORK {
  MAINNET = 1,
  RINKEBY = 4,
  GOERLI = 5,
  XDAI = 100,
  BSC = 56,
  POLYGON = 137,
  GOERLI = 5,
}

export interface Coin {
  symbol: string
  decimals: number
}

export const NATIVE_ASSET: Record<string, Coin> = {
  ETH: { symbol: "ETH", decimals: 18 },
  XDAI: { symbol: "xDai", decimals: 18 },
  MATIC: { symbol: "MATIC", decimals: 18 },
  BNB: { symbol: "BNB", decimals: 18 },
}

export const NETWORK_NATIVE_ASSET: Record<NETWORK, Coin> = {
  [NETWORK.MAINNET]: NATIVE_ASSET.ETH,
  [NETWORK.RINKEBY]: NATIVE_ASSET.ETH,
  [NETWORK.GOERLI]: NATIVE_ASSET.ETH,
  [NETWORK.XDAI]: NATIVE_ASSET.XDAI,
  [NETWORK.POLYGON]: NATIVE_ASSET.MATIC,
  [NETWORK.BSC]: NATIVE_ASSET.BNB,
  [NETWORK.GOERLI]: NATIVE_ASSET.ETH,
}

export function getNetworkNativeAsset(network: NETWORK) {
  return NETWORK_NATIVE_ASSET[network]
}

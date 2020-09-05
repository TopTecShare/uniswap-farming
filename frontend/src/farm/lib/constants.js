export const GITHUB = 'https://github.com/ltonetwork/uniswap-farming';

export const contractAddresses = {
  erc20: {
    42: '0x9C821fF00DBb2D3D2C908f39bB497766eac2d8c6',
    4: '0x7D08Dc5285A06c21aC5f4742C31B9D097607aaBc',
    1: '',
  },
  farm: {
    42: '0xbFd181cb0c8E23b65805Dded3863Dce6517402A7',
    4: '0xa8DB8de9a24aBd2915dB4b886c283CE2410562D8',
    1: '',
  },
  weth: {
    42: '0xf3a6679b266899042276804930b3bfbaf807f15b',
    4: '0x2fcc4dba284dcf665091718e4d0dab53a416dfe7',
    1: '0x9cd7403ac4856071581e1f5a298317d9a72a19cf',
  }
}

export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      42: '0x74414F027FDCda5DaacFa4d35F29C0d6c5020776',
      4: '0x7D721dDB45C1eaCceD8Dc4a3698a21b93eb7f9c3',
      1: '0x9cd7403ac4856071581e1f5a298317d9a72a19cf',
    },
    tokenAddresses: {
      42: '0xbFd181cb0c8E23b65805Dded3863Dce6517402A7',
      4: '0x7D08Dc5285A06c21aC5f4742C31B9D097607aaBc',
      1: '0x3DB6Ba6ab6F95efed1a6E794caD492fAAabF294D',
    },
    name: 'LTO-ETH',
    symbol: 'LTO-ETH UNI-V2 LP',
    tokenSymbol: 'LTO',
    icon: '',
    pool: '100%',
  }
]

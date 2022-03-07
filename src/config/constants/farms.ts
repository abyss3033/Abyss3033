import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
   {
    pid: 0,
    lpSymbol: 'LUCKY',
    lpAddresses: {
      96: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0xAA4cC41A0EfCdC14FC50eFb546aa6b334B1286E5',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'LUCKY-BNB LP',
    lpAddresses: {
      96: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0xD1963E2b51Ba89d23A7615b6C487FF4348CB6A53',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      96: '',
      56: '0x8f383AC3CC14bE2A1d7f53f445edf52F7fF47f60',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  
  /**
   * 
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  
  
  
]

export default farms

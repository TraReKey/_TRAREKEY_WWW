interface Ethereum {
    isMetaMask?: boolean;
    request?: (...args: any[]) => Promise<any>;
    // ... add other properties and methods you want to use from ethereum
  }
  
  interface Window {
    ethereum: Ethereum;
  }
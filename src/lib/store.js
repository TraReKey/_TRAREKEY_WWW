//store.js
import { writable, readable} from 'svelte/store'
import { persisted } from 'svelte-local-storage-store'


export const ETH_USDT = writable('0xB264fec117E1b8D63813B0E43e00c051cd2B98ed'); 
export const ETH_USDC = writable('0xa23EC1689AF0d2B9CF0DAC67C4894Ecd1A3A9185'); 
export const BASE_USDC = writable('0xb4e25FCa9D90b5D16c52bbe3d64909185aA3ec77'); 
export const BNB_USDT = writable('0xdc1FAFE24dd24151a64e72A74B8bA1Bd6C775444'); 
export const BNB_USDC = writable('0xb4e25FCa9D90b5D16c52bbe3d64909185aA3ec77'); 


export const blockchain = writable('Ethereum'); 
export const blockchain_img = writable(''); 
export const tiker = writable('ETH'); 
export const support = writable(false); 


//////////////////////////////////////////////

export const lang_selected = persisted('lang_selected', String('en') ) ; 
export const apiURL = writable('https://api.etherscan.io'); // ETH API URL


// nav
export const select_main_nav = persisted('select_main_nav', '/' ) 



export const telegramIcon = readable('Trarekey')

export const brand = readable('Trarekey') 
export const github = readable('https://github.com/bulblit/Unlock-Key-Generator') 
export const siteApp = readable('Trarekey.org/') 
export const siteURL = readable('https://www.Trarekey.org') 




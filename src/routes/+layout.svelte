
<script lang="ts">

	import '../app.postcss';

	import { fade } from "svelte/transition";
  import { onMount } from "svelte";





</script>
<svelte:head>

  <meta name="description" content="Trarekey - Freezing and Recovery USDT/USDC tokens" />
  <meta name="keywords" content="dApp, DeFi, crypto, smart contract, USDT, USDC" />
  <meta property="og:title" content="Trarekey Online Generator" />
  <meta property="og:description" content="Generate cryptographic HEXkey to freezing and recovery USDT, USDC tokens safely. Trarekey is a unique identifier generated using a hash function derived from the user's seed phrase. It serves as a secure means of verifying authorization for operations in a smart contract. " />
  <meta property="og:url" content="https://trarekey.org" />
  <meta property="og:type" content="website" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>







<center class="mx-auto  w-full  bg-surface-100 !m-0 !p-0  !scrollbar-thin !scrollbar-thumb-surface-200 !scrollbar-track-surface-500"
  transition:fade={{ delay: 150, duration: 400 }} >


          <slot />
        



</center>



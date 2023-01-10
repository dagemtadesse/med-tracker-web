import Input from "../components/form/Input";
import Select from "../components/form/Select";

const EditProfile = () => {
	return (
		<div className=" py-8 px-12 w-full">
			<div className="bg-white rounded-3xl w-full min-h-full shadow-sm text-textDark p-6 overflow-auto">
				<div>
					<h1 className="text-2xl font-medium ">Edit: My Profile</h1>
				</div>
				<div className="flex min-h-full gap-16 mt-4">
					<div className="basis-[33.333%]">
						<div>
							<h2 className="text-xl font-medium">Personal Info</h2>
							<p className="text-sm text-lightGrey mt-2">
								Please fill your personal information to create an account you
								can change them later
							</p>
						</div>
						<div className="flex flex-col gap-4 mt-4">
							<Input label="First Name" lg={false} />
							<Input label="Last Name" lg={false} />
							<Input label="Phone number" lg={false} />
							<div className="flex gap-2">
								<div className="basis-[60%]">
									<Input label="Date of Birth" lg={false} />
								</div>
								<div className="basis-[40%]">
									<Select placeholder="Gender" options={["male", "female"]} />
								</div>
							</div>
							<Input label="CPR number" lg={false} />
							<Select options={[]} placeholder="select nationality" />
							<div>
								<p className="text-base mb-1">
									Would you like to be an organ donor?
								</p>
								<Select options={[]} placeholder="Answer" />
								<p className="text-sm text-lightGrey mt-2">
									Healthcare professionals will be required to ask family to
									confirm your decision
								</p>
							</div>
						</div>
					</div>
					<div className="basis-[33.333%]">
						<div>
							<h2 className="text-xl font-medium">Postal address</h2>
							<p className="text-sm text-lightGrey mt-2">
								Fill the address you want us to send the card to. The address
								will not appear on the emergency card.
							</p>
						</div>
						<div className="flex flex-col gap-4 mt-4">
							<Input label="First Name" lg={false} />
							<Input label="Last Name" lg={false} />
							<Input label="Phone number" lg={false} />
						</div>

						<div>
							<h2 className="text-xl font-medium mt-8 mb-3">Insurance</h2>
							<p className="text-sm text-lightGrey mt-2">
								Add insurance information for reference.
							</p>
						</div>

						<div className="flex flex-col gap-4 mt-4">
							<Input label="Insurance Type" lg={false} />
							<Input label="Insurance company" lg={false} />
							<Input label="Policy number (optional)" lg={false} />
							<Input label="Emergency telephone (optional)" lg={false} />
						</div>
					</div>
					<div className="basis-[33.333%]">
						<div>
							<h2 className="text-xl font-medium">
								Contact persons in case of emergency
							</h2>
							<p className="text-sm text-lightGrey mt-2">
								Add contacts that you trust in case of an emergency.
							</p>
						</div>
						<div className="flex flex-col gap-4 mt-4">
							<Input label="Name" lg={false} />
							<div className="flex gap-2">
								<Input label="Phone number" lg={false} />
								<Input label="Relationship" lg={false} />
							</div>
							<div className="mt-1"></div>
							<Input label="Name" lg={false} />
							<div className="flex gap-2">
								<Input label="Phone number" lg={false} />
								<Input label="Relationship" lg={false} />
							</div>
						</div>

						<div>
							<h2 className="text-xl font-medium mt-8 mb-3">Other</h2>
						</div>

						<Input label="Other" lg />
					</div>
				</div>
				<div className="flex justify-end gap-10 text-sm pt-8">
					<button className="rounded-full text-center border border-solidBlue hover:bg-solidBlue hover:bg-opacity-10 px-10 py-2 text-solidBlue w-[200px]">
						Cancel
					</button>
					<button className="rounded-full text-center shadow-md hover:shadow-lg px-10 py-1 text-white bg-solidBlue w-[200px]">
						Save
					</button>
				</div>
			</div>
		</div>
	);
};

export default EditProfile;

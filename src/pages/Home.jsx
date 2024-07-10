import React, { useState } from "react";

const Home = () => {
	const [maxMarks, setMaxMarks] = useState(0);
	const [math, setMath] = useState(0);
	const [phy, setPhy] = useState(0);
	const [chem, setChem] = useState(0);
	const [cutoff, setCutoff] = useState(null);
	let str = '';

	const change = (event, inp) => {
		switch (inp) {
			case "maxMarks":
				setMaxMarks(Number(event.target.value));
				break;
			case "math":
				setMath(Number(event.target.value));
				break;
			case "phy":
				setPhy(Number(event.target.value));
				break;
			case "chem":
				setChem(Number(event.target.value));
				break;
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		calc();
	};

	const calc = () => {
		let CO = 0.5 * (math + 0.5 * (phy + chem));
		if (maxMarks === 100) {
			CO *= 2;
			const max = maxMarks * 2;
		} else if (maxMarks !== 200) {
			str = "Give either 100 (CBSE) or 200(State)";
		}
		setCutoff(CO);
	};

	return (
		<div>
			<header className="header py-2 px-9">
				<h1 className="text-5xl">Cutoff Calculator</h1>
			</header>
			<div className="h-3/5 flex flex-col items-center">
				<div className="flex justify-between w-2/5">
					<label htmlFor="maxMarks" className="text-xl font-medium">
						Maximum marks for a subject
					</label>
					<input
						type="number"
						id="maxMarks"
						className="border rounded-xl"
						defaultValue={maxMarks}
						onChange={(e) => change(e, "maxMarks")}
					/>
				</div>
				<form className="flex flex-col w-2/6 justify-center " onSubmit={handleSubmit}>
					<p className="text-2xl my-3">Enter your marks below</p>
					<div className="flex justify-between my-1">
						<label htmlFor="math" className="text-xl">
							Mathematics
						</label>
						<input
							type="number"
							id="math"
							className="border rounded-xl"
							defaultValue={math}
							onChange={(e) => change(e, "math")}
						/>
					</div>
					<div className="flex justify-between my-1">
						<label htmlFor="phy" className="text-xl">
							Physics
						</label>
						<input
							type="number"
							id="phy"
							className="border rounded-xl"
							defaultValue={phy}
							onChange={(e) => change(e, "phy")}
						/>
					</div>
					<div className="flex justify-between my-1">
						<label htmlFor="chem" className="text-xl">
							Chemistry
						</label>
						<input
							type="number"
							id="chem"
							className="border rounded-xl"
							defaultValue={chem}
							onChange={(e) => change(e, "chem")}
						/>
					</div>
					<button type="submit" id="calculate" className="text-xl">
						Calculate
					</button>
				</form>
				<div>
					{cutoff && (
						<p className="text-3xl"> Your Cutoff: {cutoff} / 200</p>
					)}
					{str!='' && <p>{cutoff} string</p>}
				</div>
			</div>
			<footer className="absolute bottom-0 text-center w-screen">
				This site is developed and maintained by
			</footer>
		</div>
	);
};

export default Home;

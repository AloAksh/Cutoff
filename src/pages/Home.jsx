import React from 'react'

const Home = () => {
  return (
      <div className="h-screen w-screen">
			<header className="header my-3 mx-9">
				<h1 className="text-5xl">Cutoff Calculator</h1>
			</header>
			<div className="h-3/5 flex flex-col justify-around items-center">
				<div className="flex justify-between w-2/5">
					<label htmlFor="maxMarks" className="text-xl">Maximum marks for a subject</label>
					<input type="number" id="maxMarks" className="border" />
				</div>
				<form className='flex flex-col w-2/6'>
					<p className='text-2xl my-3'>Enter your marks below</p>
					<div className='flex justify-between my-1'>
						<label htmlFor="math" className="text-xl">Mathematics</label>
						<input type="number" id="math" className="border" />
					</div>
					<div className='flex justify-between my-1'>
						<label htmlFor="phy" className="text-xl">Physics</label>
						<input type="number" id="phy" className="border" />
					</div>
					<div className='flex justify-between my-1'>
						<label htmlFor="chem" className="text-xl">Chemistry</label>
						<input type="number" id="chem" className='border' />
					</div>
                    <button type="submit" id="calculate" className='text-xl'>Calculate</button>
				</form>
			</div>
			<footer className="absolute bottom-0 text-center w-screen">This site is developed and maintained by</footer>
		</div>
  )
}

export default Home

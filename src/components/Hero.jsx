import HeroImage from '../images/Group.png';

function Hero() {
  return (
    <>
      <section className="bg-white w-full flex flex-col space-y-8 p-[1.25rem]">
        <img src={HeroImage} alt="Group photo" className='self-center max-w-4/5' />
        <div className="flex flex-col  space-y-3">
          <h1 className="text-4xl font-semibold capitalize">online experiences</h1>
          <p className='text-[#222] font-light text-normal max-w-4/5'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
          </p>
        </div>
      </section>
    </>
  )
}

export default Hero
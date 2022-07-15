import logo from '../images/airbnb.png';

function NavBar() {
  return (
    <>
      <nav className="w-full relative bg-white h-[4.375rem] flex py-5 px-7 drop-shadow-md">
        <a href="#home">
          <img src={logo} alt="logo" className='max-w-[100px]' />
        </a>
      </nav>
    </>
  )
}

export default NavBar
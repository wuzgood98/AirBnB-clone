import MountainBike from '../images/mountain-bike.png'
import WeddingPhoto from '../images/wedding-photography.png'
import Katie from '../images/katie-zaferes.png'
import Star from '../images/Star.png'
import Data from '../Data'


function Card(props) {

  const {
    coverImg,
    location,
    stats,
    price,
    title,
    openSpots
  } = props

  let badgeText;
  if (openSpots === 0) {
    badgeText = "sold out"
  } else if (location === "online") {
    badgeText = "online"
  }
  return (
    <section className="relative shrink-0 grow-0 flex flex-col space-y-2 w-[176px]">
      <div className="relative">
        {badgeText && <div className="absolute z-20 top-2 left-2 w-[3.8rem] h-[1.3rem] grid place-content-center bg-white rounded">
          <h1 className="uppercase font-bold text-[10.24px]">{badgeText}</h1>
        </div>}
        <img src={`./src/images/${coverImg}`} alt="Product image" className="w-full rounded" />
      </div>
      <div className="flex flex-col space-y-3">
        <div className="flex space-x-1 items-center">
          <img src={Star} alt="star" className='h-3.5 w-3.5' />
          <span className='text-xs'>{stats.rating}</span>
          <span className="text-xs text-gray">({stats.reviewCount})</span>
          <i className="fa-solid fa-circle text-[4px] text-gray"></i>
          <span className="text-xs text-gray uppercase">{location}</span>
        </div>
        <p className="text-xs text-dark font-light">{title}</p>
        <div className='flex space-x-1'>
          <p className="text-xs font-bold capitalize text-dark">from <span>${price}</span> </p>
          <p className="font-light text-xs text-dark">/ person</p>
        </div>
      </div>
    </section>
  )
}


function Cards() {
  const storeData = Data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <div id='cards' className="flex space-x-5 overflow-x-auto p-[1.25rem]">
      {storeData}
    </div>
  )
}

export default Cards

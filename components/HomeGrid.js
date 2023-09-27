import { HomeCard } from "./HomeCard"

const HomeGrid = ({ products }) => {
  return(
    <>
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
        {products.map(el => { 
          return (
            <>
            <HomeCard title={el.title} categories={el.categories} img={el.img}/>
            </>
          )
        })}
    </div>
    </>
  )
}
export { HomeGrid }
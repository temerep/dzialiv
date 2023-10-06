import { Card } from "./Card"

const Grid = ({ children }) => {
  return(
    <>
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 p-5">
        {children}
    </div>
    </>
  )
}
export { Grid }
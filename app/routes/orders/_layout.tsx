import {Outlet} from '@remix-run/react'

const layout = () => {
  return (
    <div>layout
        <Outlet/>
    </div>
  )
}

export default layout
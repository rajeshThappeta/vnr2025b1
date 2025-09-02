
import Navigationbar from './Navigationbar'
import {Outlet} from 'react-router'

function RootLayout() {
  return (
    <div>
        {/* navigationbar */}
        <Navigationbar />
        {/* placeholder for selected component */}
        <div className="container">
            <Outlet />
        </div>
    </div>
  )
}

export default RootLayout
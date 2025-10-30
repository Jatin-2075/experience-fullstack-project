import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Booking from './pages/booking'
import Home from './pages/home'
import Slots from './pages/Slots'

function App () {
    const router = createBrowserRouter([
        {
            path : '/',
            element : <> <Home/> </>
        },
        {
            path : '/booking',
            element : <> <Booking/> </>
        },
        {
            path : '/slots',
            element : <> <Slots/> </>
        }
    ])

    return <RouterProvider router={router} />
}

export default App;
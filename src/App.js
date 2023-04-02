import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Events, { loader as eventsLoader } from './pages/Events';
import EventDetail, { loader as eventDetailLoader, action as deleteEventAction } from './pages/EventDetail';
import NewEvent from './pages/NewEvent';
import EditEvent from './pages/EditEvent';
import Rout from './pages/Rout';
import Error from './pages/Error';
import EventsRootLayout from './components/EventsRout';
import {action as manipulateEventAction} from './components/EventForm';
import NewsletterPage,{action as newsletterAction} from './pages/Newsletter';

const router = createBrowserRouter([
  {

    path: '/',
    element: <Rout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          { index: true, element: <Events />, loader: eventsLoader },
          { path: 'new', element: <NewEvent />, action: manipulateEventAction },
          {
            path: ":id",
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              { index: true, element: <EventDetail />,action:deleteEventAction, loader: eventDetailLoader },
              { path: 'edit', element: <EditEvent />, action: manipulateEventAction },
            ]
          },
          {
            path: 'newsletter',
            element: <NewsletterPage/>,
            action: newsletterAction
          }
        ]
      }
    ]

  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

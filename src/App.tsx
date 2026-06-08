import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'services/:slug', element: <ServiceDetail /> },
      { path: 'projects', element: <Projects /> },
      { path: 'projects/:slug', element: <ProjectDetail /> },
      { path: 'testimonials', element: <Testimonials /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

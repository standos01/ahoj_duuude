
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
import Contact from './Contact';
import NoPage from './NoPage';
import Blogs from './Blogs';




export default function App() {

return(
<BrowserRouter>
<Routes>
  <Route path='/'  element={<Layout />}>
   <Route index element={<Home />} />
   <Route path="Contact"  element={<Contact />} />
   <Route path="*" index element={<NoPage />} />
   <Route path="blogs" index element={<Blogs />} />


  </Route>
</Routes>
</BrowserRouter>
);

}

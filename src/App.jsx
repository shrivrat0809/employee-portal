import Employees from "./pages/Employees";
import Navbar from "./Components/Navbar"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Customer from "./pages/Customer";
import Dictionary from "./pages/Dictionary";
import Definition from "./pages/Definition";
import NotFound from "./pages/NotFound";

function App() {
   return (
     <BrowserRouter>
       <Navbar>
         <Routes>
           <Route path="/employees" element={<Employees />} />
           <Route path="/customer" element={<Customer />} />
           <Route path="/dictionary" element={<Dictionary />} />
           <Route path="/definition/:search" element={<Definition />} />
           <Route path="/404" element={<NotFound />} />
           <Route path="*" element={<NotFound />} />
         </Routes>
       </Navbar>
     </BrowserRouter>
   );
}

export default App;

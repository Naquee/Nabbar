
import Navbar from './components/Navbar';
import AllRoutes from './components/AllRoutes';
import Footer from './components/Footer';
import {Box} from "@chakra-ui/react"
import Carasole from './components/Carasole';

function App() {
  return (
    <div>
    <Navbar/>
    <br />
    <br />
    <Carasole/>
   <Box mt="4rem">
   <AllRoutes/>
   </Box>
    <Footer/>
    </div>
  );
}

export default App;

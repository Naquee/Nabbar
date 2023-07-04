
import Navbar from './components/Navbar';
import AllRoutes from './components/AllRoutes';
import Footer from './components/Footer';
import {Box} from "@chakra-ui/react"

function App() {
  return (
    <div>
    <Navbar/>
   <Box mt="4rem">
   <AllRoutes/>
   </Box>
    <Footer/>
    </div>
  );
}

export default App;

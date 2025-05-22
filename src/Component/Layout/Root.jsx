
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    
return (

      
               <div >
                <Header></Header>
  
            <Outlet>  </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
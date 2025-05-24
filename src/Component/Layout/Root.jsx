
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import { SiV } from 'react-icons/si';

const Root = () => {
    
return (

      <div>
        
            <Header></Header>
  
            <Outlet>  </Outlet>
            <Footer></Footer>
      </div>
     
    );
};

export default Root;
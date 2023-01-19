import '../App.css'
import '../components/React-typical'
import Berjalan from '../components/React-typical';
import img1 from '../assets/img/ava.gif'
import Button from 'react-bootstrap/Button';



const Indexs = () => {
    return(
        <div className="container awal">
            
     <div className="container ">
        <div className="img1">
    
    <img src={img1} alt="" />
  
    </div>
    </div>
    <h1>Mohamad Hasyim Ridwan</h1>
    <Berjalan/>
    
   <p>A product designer who loves to code. I can help everyone build their <br /> business. It's such a happiness for me. so, let me help you!</p>     
 
    <div className="btn">
   <Button variant="primary" size="lg" active>
        Contact Me
      </Button>{' '}
      </div>

        

        




        </div>


        
    )
}

export default Indexs;
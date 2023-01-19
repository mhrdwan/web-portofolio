
import Typical from 'react-typical'
 
const Berjalan = () =>

  {
    return (
      <Typical
        steps={['Hello', 1000, 'Hello Guest!', 1000]}
        
        loop={Infinity}
        wrapper="p"
      />
    )
  }


export default Berjalan;
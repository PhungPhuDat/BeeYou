import logo from './logo.svg';
import './App.css';
import'./commonets/hearder/header';
import Head from './commonets/hearder/header';
import Card_product from './commonets/card-product/Cardproduct';
import Footer  from './commonets/footer/footer';
export const App=() =>{
  return(
      <div className='desktop'>
        <div className='div'>
         <Head/>
         <Card_product/>
         <Footer/>
        </div>

      </div>

  )

}


export default App;

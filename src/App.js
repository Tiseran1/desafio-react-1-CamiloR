import './App.css';
import Header from './component/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './component/Footer';
import Card from './component/Card';

function App() {
  return (
    <>
      <Header titulo = "Galería de Ilustraciones Digitales con React"/>
      <hr/>
      <Card 
      ruta="https://i.pinimg.com/564x/fb/39/ea/fb39ea48d4bc3870f17d748364fcd396.jpg" 
      titulo="Ballena" 
      descripcion="Dibujo digital, ballena espectral un mar de nubes"/>

      <Card 
      ruta="https://i.pinimg.com/564x/43/86/ff/4386ff6c8e2804b00fc6d77905c12736.jpg" 
      titulo="Totoro" 
      descripcion="Dibujo digital, Totoro en una copa de un arbol bajo un cielo estrellado"/> 

      <Card 
      ruta="https://i.pinimg.com/564x/16/a8/9c/16a89cb5809256775e90f2e4f520002f.jpg" 
      titulo="Crisosto" 
      descripcion="Dibujo digital, Crisosto el gato mudo"/> 
      <hr/>

      <Footer/>
      
    </>
  );
}

export default App;

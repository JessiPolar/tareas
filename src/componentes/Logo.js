import check from '../imagenes/check.png';
import '../hojas-de-estilo/Logo.css';

function Logo() {
    return (
        <div className='logo-contenedor'>
            <header>
                <img
                src={check}
                className='logo' alt='Logo' />
            </header>
          
        </div>
    );
}

export default Logo;
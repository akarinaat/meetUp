/*With useState, we register different states which we want to support in the react appplications and react will react to those changes */
import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(name) {
    /*Use state is called directly in the component function*/ 
    /*React hook*/
    /*Aquí le pusimos el estado false al useState para que react sepa que el modal debe empezar acabado, no prendido y mostrado it should not be open*/
    /*useState SIEMPRE regresa un array de dos elementos, asì funciona. Y los podemos storear en un array con dos elementos*/
    // useState(false);
    // Ya usando el array para guardar los valores de useState:
    // Son como los getters y setters que me explicó Alan
    // el primero es el current value y el segundo a lo que lo queremos cambiar(functions that allows you to change the state, assign a new value)
    const [modalIsOpen, setModalIsOpen] = useState(false);





    function deleteHandler(){
        console.log('Le hice click')
        setModalIsOpen(true);
    }
    /** jsx code es còdigo html en js */
    return (
        <div className='card'>
            <h3>{name.title}</h3>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {modalIsOpen ? <Modal/> : null}
            {modalIsOpen && <Backdrop/>}


        </div>
        
    );
}
// if modal is open is true    then     Render Modal     else     don't output anything
//{modalIsOpen                   ?      <Modal/>          :              null}

export default Todo;
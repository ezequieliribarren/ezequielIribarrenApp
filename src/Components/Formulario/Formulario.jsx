import React from 'react'

const Formulario = () => {
    return (
        <section id='formulario'>
            <h2>Trabajemos en tu proyecto</h2>
            <form className="formulario">
                <div classNameName='form-part'>
                    <div className="form-group">
                        <label for="nombre">Nombre</label>
                        <input type="text" id="nombre" name="nombre" required />
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                </div>

                <div className="form-group">
                    <label for="mensaje">Mensaje</label>
                    <textarea id="mensaje" name="mensaje" required></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}

export default Formulario
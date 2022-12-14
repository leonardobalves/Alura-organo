import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    const labelModificada = `${props.label}:`;

    return (
        <div className='lista-suspensa'>
            <label>{labelModificada}</label>
                <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                    {props.itens.map(item => <option key={item}>{item}</option>)}
                </select>
        </div>
    )
}

export default ListaSuspensa;
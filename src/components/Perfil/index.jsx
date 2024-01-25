import './perfil.css'

// eslint-disable-next-line react/prop-types
const Perfil = ({endereco, nome}) => {
    return (
        <div>
            <img className='profile-avatar'  src={endereco}/>
            <h3 className='profile-title'>{nome}</h3>
        </div>
    )
}

export default Perfil;
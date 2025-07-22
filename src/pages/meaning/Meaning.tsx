import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Meaning.css';

const Meaning = () => {
    const navigate = useNavigate();
    const [meaning] = useLocalStorage('meaning');

    return(
        <div className='meaning-wrapper'>
            <h4 className='meaning-text'>{meaning}</h4>
            <button onClick={() => navigate('/')} className='btn btn-dark'>Back</button>
        </div>
    )
}

export default Meaning;

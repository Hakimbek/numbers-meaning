import { NUMBER_TYPES } from '../../const/const.ts';
import { requestNumberMeaning } from '../../util/requestNumberMeaning.ts';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Random.css';

const Random = () => {
    const navigate = useNavigate();
    const [_, setMeaning] = useLocalStorage('meaning', '');

    const handleClick = async (type: string) => {
        const meaning = await requestNumberMeaning('random', type);
        setMeaning(meaning)
        navigate('/meaning');
    }

    return (
        <div className='random-wrapper'>
            <label className='form-label'>Click to generate random number</label>
            {
                NUMBER_TYPES.map((option) => (
                    <button key={option} className='btn btn-dark' onClick={() => handleClick(option)}>{option}</button>
                ))
            }
        </div>
    )
}

export default Random;

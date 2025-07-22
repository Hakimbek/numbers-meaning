import Form from '../../components/form/Form.tsx';
import Random from '../../components/random/Random.tsx';
import './Home.css';

const Home = () => {
    return (
        <div className='home-wrapper'>
            <h4>Enter a number and type to get meaning</h4>
            <Form />
            <h4>Or get meaning of random number</h4>
            <Random />
        </div>
    )
}

export default Home;

import Input from './Input';
import './Inputs.css';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';
import serchIcon from '../assets/images/icon-search.svg'
import locationIcon from '../assets/images/icon-location.svg';
import iconFilter from '../assets/images/icon-filter.svg'

export default function Inputs() {
    return (
        <div className="container inputs-wrapper">
            <Input image={serchIcon} placeholder='Filter by title…'/>
            <Input image={locationIcon} placeholder='Filter by location…'/>
            <div className='filter'>
                <div className='checkbox'>
                    <Checkbox />
                    <p>Full Time Only</p>
                </div>
                <Button primary>Search</Button>
                <Button><img src={serchIcon}/></Button>
            </div>
        </div>
    )
}
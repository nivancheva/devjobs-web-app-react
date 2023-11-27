import Input from './Input';
import './Inputs.css';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';
import serchIcon from '../assets/images/icon-search.svg'
import locationIcon from '../assets/images/icon-location.svg';
import iconFilter from '../assets/images/icon-filter.svg'
import { useState } from 'react';

export default function Inputs({ onSearch }) {
    const [modalVisible, setModalVisible] = useState(false)

    function showFilterBox() {
        setModalVisible(true);
    }

    function onSearchButtonClick() {
        setModalVisible(false);
        onSearch();
    }

    return (
        <div className="container">
            <div className='inputs-wrapper-desktop'>
                <Input image={serchIcon} placeholder='Filter by title…'/>
                <Input image={locationIcon} placeholder='Filter by location…'/>
                <div className='filter'>
                    <div className='checkbox'>
                        <Checkbox />
                        <p>Full Time Only</p>
                    </div>
                    <Button primary>Search</Button>
                </div>
            </div>

            <div className='inputs-wrapper-mobile'>
                <div className='inputs-mobile'>
                    <Input reverse image={iconFilter} placeholder='Filter by title…'/>   
                    <button className='icon-search-button' onClick={showFilterBox}><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="#FFFFFF" fillRule="nonzero"/></svg></button>
                </div>
            
                {modalVisible && 
                    <div className='overlay'>
                        <div className='filter-box'>
                            <Input image={locationIcon} placeholder='Filter by location…'/>
                            <div className='checkbox-mobile'>
                                <Checkbox />
                                <p>Full Time Only</p>
                            
                                <Button onClick={onSearchButtonClick} primary>Search</Button>
                            </div>
                        </div>
                    </div>
                }
                
            </div>
        </div>
    )
}
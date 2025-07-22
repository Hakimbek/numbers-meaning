import { useState, useEffect, useRef } from 'react';
import './Select.css';

interface SelectProps {
    options: string[];
    onChange: (value: string) => void;
    selectedValue: string;
    label: string;
}

const Select = ({ options, selectedValue, onChange, label }: SelectProps) => {
    const selectWrapperRef = useRef<HTMLDivElement>(null);
    const [isOptionsVisible, setIsOptionsVisible] = useState(false);

    const toggleOptionsVisibility = () => setIsOptionsVisible(!isOptionsVisible);

    const handleSelect = (value: string) => {
        onChange(value);
        toggleOptionsVisibility();
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectWrapperRef.current && !selectWrapperRef.current.contains(event.target as Node)) {
                toggleOptionsVisibility();
            }
        };

        if (isOptionsVisible) document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOptionsVisible]);

    return (
        <div className='select-wrapper' ref={selectWrapperRef}>
            <label className='form-label'>{label}</label>
            <div className='selected-value' onClick={toggleOptionsVisibility}>
                {selectedValue}
                <i className={`bi bi-caret-${isOptionsVisible ? 'up' : 'down'}-fill`}></i>
            </div>
            <div className={`options-wrapper ${isOptionsVisible && 'options-visible'}`}>
                {options.map(option => (
                    <div className='option' key={option} onClick={() => handleSelect(option)}>
                        {option}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Select;

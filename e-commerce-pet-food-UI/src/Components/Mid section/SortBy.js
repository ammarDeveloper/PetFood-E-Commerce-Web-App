import React, { useState } from 'react';
import '../../CSS/Mid Section/SortBy.css';
import { MdArrowUpward, MdFilterAlt } from 'react-icons/md';

const SortBy = () => {
    const [selectedAge, setSelectedAge] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState([]);
    const [selectedSize, setSelectedSize] = useState([]);
    const [ageDropdownOpen, setAgeDropdownOpen] = useState(false);
    const [breedDropdownOpen, setBreedDropdownOpen] = useState(false);
    const [sizeDropdownOpen, setSizeDropdownOpen] = useState(false);


    const handleAgeChange = (value) => {
        if (selectedAge.includes(value)) {
            setSelectedAge(selectedAge.filter((age) => age !== value));
        } else {
            setSelectedAge([...selectedAge, value]);
        }
    };

    const handleBreedChange = (value) => {
        if (selectedBreed.includes(value)) {
            setSelectedBreed(selectedBreed.filter((breed) => breed !== value));
        } else {
            setSelectedBreed([...selectedBreed, value]);
        }
    };

    const handleSizeChange = (value) => {
        if (selectedSize.includes(value)) {
            setSelectedSize(selectedSize.filter((size) => size !== value));
        } else {
            setSelectedSize([...selectedSize, value]);
        }
    };

    const toggleAgeDropdown = () => {
        setAgeDropdownOpen(!ageDropdownOpen);
    };

    const toggleBreedDropdown = () => {
        setBreedDropdownOpen(!breedDropdownOpen);
    };

    const toggleSizeDropdown = () => {
        setSizeDropdownOpen(!sizeDropdownOpen);
    };

    return (
        <div style={{position: 'sticky',
            top: '0', width: ' 25vw' }}>
            <div className='sort-by-option-head'>
                <h3 style={{ textAlign: 'start', marginLeft: '2px' }}><MdFilterAlt size={'1.19em'} color='rgb(102, 102, 102)' />Filters</h3>
            </div>
            <div className="sort-by-container">
                <div className="sort-by-option">
                    <div className="dropdown">
                        <div className="dropdown-btn" onClick={toggleAgeDropdown}><h3>By Age</h3><span><MdArrowUpward /></span></div>
                        <div className={`dropdown-content ${ageDropdownOpen ? 'show' : ''}`}>
                            <div className="checkbox-option">
                                <input
                                    type="checkbox"
                                    id="puppy"
                                    value="puppy"
                                    checked={selectedAge.includes('puppy')}
                                    onChange={() => handleAgeChange('puppy')}
                                />
                                <label htmlFor="puppy">Puppy (up to 2 months)</label>
                            </div>
                            <div className="checkbox-option">
                                <input
                                    type="checkbox"
                                    id="adult"
                                    value="adult"
                                    checked={selectedAge.includes('adult')}
                                    onChange={() => handleAgeChange('adult')}
                                />
                                <label htmlFor="adult">Adult</label>
                            </div>
                            <div className="checkbox-option">
                                <input
                                    type="checkbox"
                                    id="senior"
                                    value="senior"
                                    checked={selectedAge.includes('senior')}
                                    onChange={() => handleAgeChange('senior')}
                                />
                                <label htmlFor="senior">Senior</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sort-by-option">
                    <div className="dropdown">
                        <div className="dropdown-btn" onClick={toggleBreedDropdown}><h3>By Breed</h3><span><MdArrowUpward /></span></div>
                        <div className={`dropdown-content ${breedDropdownOpen ? 'show' : ''}`}>
                            <div className="checkbox-option">
                                <input
                                    type="checkbox"
                                    id="labrador"
                                    value="labrador"
                                    checked={selectedBreed.includes('labrador')}
                                    onChange={() => handleBreedChange('labrador')}
                                />
                                <label htmlFor="labrador">Labrador Retriever</label>
                            </div>
                            <div className="checkbox-option">
                                <input
                                    type="checkbox"
                                    id="poodle"
                                    value="poodle"
                                    checked={selectedBreed.includes('poodle')}
                                    onChange={() => handleBreedChange('poodle')}
                                />
                                <label htmlFor="poodle">Poodle</label>
                            </div>
                            <div className="checkbox-option">
                                <input
                                    type="checkbox"
                                    id="bulldog"
                                    value="bulldog"
                                    checked={selectedBreed.includes('bulldog')}
                                    onChange={() => handleBreedChange('bulldog')}
                                />
                                <label htmlFor="bulldog">Bulldog</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sort-by-option">
                    <div className="dropdown">
                        <div className="dropdown-btn" onClick={toggleSizeDropdown}><h3>By size</h3><span><MdArrowUpward /></span></div>
                        <div className={`dropdown-content ${sizeDropdownOpen ? 'show' : ''}`}>
                            <div className="checkbox-option">
                                <input
                                    type="checkbox"
                                    id="small"
                                    value="small"
                                    checked={selectedSize.includes('small')}
                                    onChange={() => handleSizeChange('small')}
                                />
                                <label htmlFor="small">Small</label>
                            </div>
                            <div className="checkbox-option">
                                <input
                                    type="checkbox"
                                    id="medium"
                                    value="medium"
                                    checked={selectedSize.includes('medium')}
                                    onChange={() => handleSizeChange('medium')}
                                />
                                <label htmlFor="medium">Medium</label>
                            </div>
                            <div className="checkbox-option">
                                <input
                                    type="checkbox"
                                    id="large"
                                    value="large"
                                    checked={selectedSize.includes('large')}
                                    onChange={() => handleSizeChange('large')}
                                />
                                <label htmlFor="large">Large</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SortBy;
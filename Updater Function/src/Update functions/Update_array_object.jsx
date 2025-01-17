import React, { useState } from 'react';
import '../Update function CSS/Update_array_object.css';

const UpdateArrayObject = () => {

    const [cars, setCar] = useState([]);
    const [carYear, setYear] = useState(new Date().getFullYear());
    const [carMake, setMake] = useState("");
    const [carModel, setModel] = useState("");

    function addCar() {
        const newCar = { year: carYear, make: carMake, model: carModel };
        setCar(c => [...c, newCar]);
        setYear(new Date().getFullYear());
        setMake("");
        setModel("");
    }

    function removeCar(index) {
        setCar(c => c.filter((_, i) => i !== index));
    }

    function carYearChange(e) {
        setYear(e.target.value);
    }

    function carMakeChange(e) {
        setMake(e.target.value);
    }

    function carModelChange(e) {
        setModel(e.target.value);
    }

    return (
        <div className='Update_array_object-container'>
            <h2>Update Array Objects</h2>
            <ul>
                {cars.map((car, index) =>
                    <li className='list' key={index} onClick={() => removeCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>)}
            </ul>
            <input className='Year' type="Number" value={carYear} id='CarInput' onChange={carYearChange} /><br />
            <input className='Make' type="text" value={carMake} id='CarInput' placeholder='Enter Car Make' onChange={carMakeChange} /><br />
            <input className='Model' type="text" value={carModel} id='CarInput' placeholder='Enter Car Model' onChange={carModelChange} /><br />
            <button className='button' onClick={addCar}>Add Car</button>
        </div>
    );
};

export default UpdateArrayObject;
import React, { useState } from 'react';

const Select = () => {
    // State to store the selected option
    const [selectedCity, setSelectedCity] = useState('');



    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", marginBlockStart: "50px" }}>
                <select onChange={(e) => setSelectedCity(e.target.value)} style={{ width: "10%", height: "50px" }}>
                    <option value="Surat">Surat</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Rajkot">Rajkot</option>
                    <option value="Vadodara">Vadodara</option>
                    <option value="Junagadh">Junagadh</option>
                    <option value="Amreli">Amreli</option>
                    <option value="Gandhinagar">Gandhinagar</option>


                </select>
            </div>
            <div style={{ marginBlockStart: "20px", display: "flex", justifyContent: "center" }}>
                {selectedCity}
            </div>
        </>
    );
}

export default Select;

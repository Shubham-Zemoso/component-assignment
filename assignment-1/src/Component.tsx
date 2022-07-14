
import React, { useState } from 'react';
import { female, male, one, three, two } from './constants';
import Image from './Image';

const Component = () => {

    const [hide,setHide] = useState<boolean>(false)
    const [icon, setIcon] = useState<string>(male)
    const [image, setImage] = useState<string>("")


    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
      if (e.currentTarget.value === "") {
        setHide(false);
      } else {
        setHide(true);
      }
    };

    const handleAgeChange = (e: React.FormEvent<HTMLInputElement>) => {
      const age = Number(e.currentTarget.value);
      
      if (age >= 0 && age <= 10) {
        setImage(three);
      } else if (age > 10 && age <= 20) {
        setImage(one);
      } else {
        setImage(two);
      }
    };

    const handleGenderChange = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      if (event.target.value === "female") {
        setIcon(female);
      } else {
        setIcon(male);
      }
    };
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <table>
          <tr>
            <td>Name: </td>
            <td>
              <input type="text" onChange={handleChange} />
            </td>
            <td></td>
          </tr>
          <br />
          {hide && (
            <tr>
              <td>Age: </td>
              <td>
                <input type="number" onChange={handleAgeChange}/>
              </td>
              <td></td>
            </tr>
          )}
          <br />
          {hide && (
            <tr>
              <td>Gender: </td>
              <td>
                <select onChange={handleGenderChange} style={{width:"100%"}}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </td>
              <td>
                <Image src={icon} alt="gender" height="25px" width="25px" />
              </td>
            </tr>
          )}
        </table>
        <Image src={image} height="200px" width="200px" />
      </div>
    );
}

export default Component;
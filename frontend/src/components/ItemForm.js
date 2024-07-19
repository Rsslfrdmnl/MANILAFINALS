import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    middle_name: '',
    last_name: '',
    address: '',
    email: '',
    phone: '',
    birthday: '',
    birthplace: '',
    age: '',
    gender: '',
    nationality: '',
    civil_status: '',
    religion: '',
    height_CM: '',
    weight_KG: '',
    mother_first_name: '',
    mother_middle_name: '',
    mother_last_name: '',
    mother_occupation: '',
    father_first_name: '',
    father_middle_name: '',
    father_last_name: '',
    father_occupation: '',
    primary: '',
    secondary: '',
    tertiary: ''
  });

  useEffect(() => {
    if (item) {
      setFormData(item);
    } else {
      setFormData({
        first_name: '',
        middle_name: '',
        last_name: '',
        address: '',
        email: '',
        phone: '',
        birthday: '',
        birthplace: '',
        age: '',
        gender: '',
        nationality: '',
        civil_status: '',
        religion: '',
        height_CM: '',
        weight_KG: '',
        mother_first_name: '',
        mother_middle_name: '',
        mother_last_name: '',
        mother_occupation: '',
        father_first_name: '',
        father_middle_name: '',
        father_last_name: '',
        father_occupation: '',
        primary: '',
        secondary: '',
        tertiary: ''
      });
    }
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (item) {
        await axios.put(`http://localhost:8000/api/items/${item.id}/`, formData);
      } else {
        await axios.post('http://localhost:8000/api/items/', formData);
      }
      onSuccess();
    } catch (error) {
      console.error('There was an error submitting the form!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
      </div>
      <div>
        <label>Middle Name:</label>
        <input type="text" name="middle_name" value={formData.middle_name} onChange={handleChange} />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
      </div>
      <div>
        <label>Contact No.:</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Birthday:</label>
        <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} />
      </div>
      <div>
        <label>Place of Birth:</label>
        <input type="text" name="birthplace" value={formData.birthplace} onChange={handleChange} />
      </div>
      <div>
        <label>Age:</label>
        <input type="text" name="age" value={formData.age} onChange={handleChange} />
      </div>
      <div>
        <label>Gender:</label>
        <input type="text" name="gender" value={formData.gender} onChange={handleChange} />
      </div>
      <div>
        <label>Nationality:</label>
        <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} />
      </div>
      <div>
        <label>Civil Status:</label>
        <input type="text" name="civil_status" value={formData.civil_status} onChange={handleChange} />
      </div>
      <div>
        <label>Religion:</label>
        <input type="text" name="religion" value={formData.religion} onChange={handleChange} />
      </div>
      <div>
        <label>Height:</label>
        <input type="text" name="height_CM" value={formData.height_CM} onChange={handleChange} />
      </div>
      <div>
        <label>Weight:</label>
        <input type="text" name="weight_KG" value={formData.weight_KG} onChange={handleChange} />
      </div>
      <div>
        <label>Mother's First Name:</label>
        <input type="text" name="mother_first_name" value={formData.mother_first_name} onChange={handleChange} />
      </div>
      <div>
        <label>Mother's Middle Name:</label>
        <input type="text" name="mother_middle_name" value={formData.mother_middle_name} onChange={handleChange} />
      </div>
      <div>
        <label>Mother's Last Name:</label>
        <input type="text" name="mother_last_name" value={formData.mother_last_name} onChange={handleChange} />
      </div>
      <div>
        <label>Mother's Occupation:</label>
        <input type="text" name="mother_occupation" value={formData.mother_occupation} onChange={handleChange} />
      </div>
      <div>
        <label>Father's First Name:</label>
        <input type="text" name="father_first_name" value={formData.father_first_name} onChange={handleChange} />
      </div>
      <div>
        <label>Father's Middle Name:</label>
        <input type="text" name="father_middle_name" value={formData.father_middle_name} onChange={handleChange} />
      </div>
      <div>
        <label>Father's Last Name:</label>
        <input type="text" name="father_last_name" value={formData.father_last_name} onChange={handleChange} />
      </div>
      <div>
        <label>Father's Occupation:</label>
        <input type="text" name="father_occupation" value={formData.father_occupation} onChange={handleChange} />
      </div>
      <div>
        <label>Primary Level:</label>
        <input type="text" name="primary" value={formData.primary} onChange={handleChange} />
      </div>
      <div>
        <label>Secondary Level:</label>
        <input type="text" name="secondary" value={formData.secondary} onChange={handleChange} />
      </div>
      <div>
        <label>Tertiary Level:</label>
        <input type="text" name="tertiary" value={formData.tertiary} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ItemForm;

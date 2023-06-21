import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { enqueueSnackbar } from 'notistack';
import './index.css';
import Input from '../../components/Input/Input';
import Dropdown from '../../components/Dropdown/Dropdown';
import Images from '../../components/Images/Images';
import FormErrors from '../../components/ui/FormErrors';
import { addCar, resetErrors } from '../../redux/car/carSlice';

const addCar = () => {
  const YEARS = (start = 2015, stop = new Date().getFullYear()) => Array.from(
    { length: (stop - start + 1) }, (_, i) => start + i,
  );
  const TYPES = ['Sport', 'Pickup', 'Super', 'Coupe', 'Limousine', 'Convertible', 'Micro'];
  const formInfoState = {
    name: '',
    description: '',
    color: '',
    year: '2015',
    price: '',
    car_type: 'Sport',
    images: [],
    validations: {
      nameValid: null,
      descriptionValid: null,
      priceValid: null,
      isValid: null,
      formErrors: {
        name: '', description: '', price: '',
      },
    },
  };
  const [formInfo, setFormInfo] = useState(formInfoState);
  const dispatch = useDispatch();
  const { response } = useSelector((state) => state.car);

  useEffect(() => {
    if (response?.car_id) {
      enqueueSnackbar('Car added successfully', {
        variant: 'success',
        TransitionProps: { direction: 'down' },
        anchorOrigin: { vertical: 'top', horizontal: 'right' },
      });
    }

    return () => dispatch(resetErrors());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const validateField = (fieldName, fieldValue) => {
    const { formErrors } = formInfo.validations;
    let { nameValid, descriptionValid, priceValid } = formInfo.validations;

    switch (fieldName) {
      case 'name':
        nameValid = fieldValue.length >= 3;
        formErrors.name = nameValid ? '' : ' should contain atleast 3 characters ';
        break;
      case 'description':
        descriptionValid = fieldValue.length < 1000;
        formErrors.description = descriptionValid ? '' : ' should have less than 1000 characters';
        break;
      case 'price':
        priceValid = !Number.isNaN(fieldValue) && fieldValue > 0;
        formErrors.price = priceValid ? '' : ' should be a number greater than 0';
        break;
      default:
        break;
    }

    setFormInfo({
      ...formInfo,
      [fieldName]: fieldValue,
      validations: {
        formErrors,
        nameValid,
        descriptionValid,
        priceValid,
        isValid: nameValid && descriptionValid && priceValid,
      },
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formInfo.validations.isValid) {
      return;
    }
    const newCar = { ...formInfo };
    delete newCar.validations;
    dispatch(addCar(newCar));
    setFormInfo(
      formInfoState,
    );
  };

  const addImage = () => {
    const newImages = [...formInfo.images, ''];
    setFormInfo({ ...formInfo, images: newImages });
  };

  const deleteImage = (i) => {
    const newImages = [...formInfo.images];
    newImages.splice(i, 1);
    setFormInfo({ ...formInfo, images: newImages });
  };

  const handleImage = (e, index) => {
    const newImages = [...formInfo.images];
    newImages[index] = e.target.value;
    setFormInfo({ ...formInfo, images: newImages });
  };

  // Car form
  const carForm = () => (
    <>
      <FormErrors
        formErrors={formInfo.validations.formErrors}
      />
      <form onSubmit={handleSubmit}>
        <Input name="name" type="text" onInput={handleInput} value={formInfo.name} isValid={formInfo.validations.nameValid} />
        <Input name="description" type="textarea" onInput={handleInput} value={formInfo.description} isValid={formInfo.validations.descriptionValid} />
        <Input name="color" type="text" onInput={handleInput} value={formInfo.color} />
        <Dropdown name="year" options={YEARS()} onDrop={handleInput} value={formInfo.year} />
        <Input name="price" type="number" onInput={handleInput} value={formInfo.price} isValid={formInfo.validations.priceValid} />
        <Dropdown name="type" options={TYPES} onDrop={handleInput} value={formInfo.type} />
        <Images
          form={formInfo}
          onAdd={addImage}
          onChange={handleImage}
          onDelete={deleteImage}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );

  return (
    <section id="add_car">
      <div className="form__container">
        {carForm()}
      </div>
    </section>
  );
};

export default addCar;
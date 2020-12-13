import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './FeedBack.css'
import {useDispatch} from "react-redux";
import {addFeedBack} from "./store/FeedBackSlice";

function FeedBack () {
  const dispatch = useDispatch();
  const initialValues = {
    firstName: '',
    lastName: '',
    description: '',
    email: '',
    inlineRadioOptions: {
      1 : 'comments',
      2 : 'suggestions',
      3 : 'question'
    }
  }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submitForm = () => {
  const data = {
    firstName : formValues.firstName,
    lastName : formValues.lastName,
    description : formValues.description,
    email : formValues.email,
    inlineRadioOptions : formValues.inlineRadioOptions
  }

    dispatch(addFeedBack(data))
    console.log("data::::::::::",data)
    console.log(formValues)
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmitting(true)
  }

  const validate = (values) => {
    let errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if (!values.email) {
      errors.email = 'Enter your email'
    } else if (!regex.test(values.email)) {
      errors.email = 'Invalid email format'
    }
    if (!values.firstName) {
      errors.firstName = 'Please enter your firstName'
    }
    if (!values.lastName) {
      errors.lastName = 'Please enter your lastName'
    }
    if (!values.description) {
      errors.description = 'Please enter your feedback'
    }
    if (!values.inlineRadioOptions) {
      errors.inlineRadioOptions = 'Please select any feedback type'
    }
    return errors
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submitForm()
    }
  }, [formErrors])

  return (
    <section>
      <div className="box">


      <div className='main'>
        <h2 style={{justifyContent: 'center', display: 'flex', color:'white'}}>Feedback Form</h2>
        <p style={{justifyContent: 'center', display: 'flex' , color:'white'}}>We Would to hear your thoughts ,suggestions, concerns or
          problems with anything so we can improve!</p>
      </div>
      <hr/>
      {Object.keys(formErrors).length === 0 && isSubmitting && (
        <span style={{justifyContent: 'center', display: 'flex', color: 'green', fontFamily: 'cursive'}}
              className="success-msg">Thank You for Your FeedBack</span>
      )}
      <br/>
      <form onSubmit={handleSubmit} noValidate>
        <div className="container-fluid">
          <div className="row feedback_type">
            <h6 style={{marginBottom: '10px'}}>Feedback Type :</h6>
            <div style={{marginLeft: '15px'}} className="form-check col form-check-inline">
              <input
                className="form-check-input bg-transparent"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value={formValues.inlineRadioOptions["1"]}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="inlineRadio1">Comments</label>
            </div>
            <div className="form-check col form-check-inline">
              <input
                className="form-check-input bg-transparent"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value={formValues.inlineRadioOptions["2"]}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="inlineRadio2">Suggestions</label>
            </div>
            <div className="form-check col form-check-inline">
              <input
                className="form-check-input bg-transparent"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                onChange={handleChange}
                value={formValues.inlineRadioOptions["3"]}
              />
              <label className="form-check-label" htmlFor="inlineRadio3">Questions</label>
            </div>
            {formErrors.inlineRadioOptions && (
              <div style={{color: 'red'}} className="error">{formErrors.inlineRadioOptions}</div>
            )}
          </div>


          <div className="row feedback_type">

            <h6 className="mb-3">Describe Your Feedback</h6>
            <div className="col">
                <textarea
                  className="form-control bg-white"
                  id="exampleFormControlTextarea4"
                  placeholder="Type here..."
                  rows="5"
                  style={{color: 'light'}}
                  onChange={handleChange}
                  name="description"
                  value={formValues.description}
                />
              {formErrors.description && (
                <div style={{color: 'red'}} className="error">{formErrors.description}</div>
              )}
            </div>
          </div>

          <div className="row feedback_type ">
            <h6 className="mb-3">Name</h6>
            <div className="col-6">
              <input
                type="text"
                className="form-control bg-white"
                name="firstName"
                placeholder="First name"
                style={{color: 'black'}}
                onChange={handleChange}
                value={formValues.firstName}
                autoComplete="off"
              />
              {formErrors.firstName && (
                <div style={{color: 'red'}} className="error">{formErrors.firstName}</div>
              )}
            </div>

            <div className="col-6">
              <input type="text"
                     className="form-control bg-white"
                     placeholder="Last name"
                     name="lastName"
                     style={{color: 'black'}}
                     value={formValues.lastName}
                     onChange={handleChange}
                     autoComplete="off"
              />
              {formErrors.lastName && (
                <div style={{color: 'red'}} className="error">{formErrors.lastName}</div>
              )}
            </div>
          </div>

          <div className="row feedback_type ">
            <div className="col-6">
              <input
                type="email"
                className="form-control bg-white"
                placeholder="Email"
                style={{color: 'black'}}
                onChange={handleChange}
                value={formValues.email}
                name="email"
                autoComplete="off"
              />
              {formErrors.email && (
                <div style={{color: 'red'}} className="error">{formErrors.email}</div>
              )}
            </div>
          </div>
          <div className="justify-content-center align-item-center align-self-center d-flex">
            <button type="submit">Submit Feedback</button>
          </div>
        </div>
      </form>
      </div>
    </section>
  )
}

export default FeedBack

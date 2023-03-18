import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contactus.css'
import { GrLocation } from 'react-icons/gr'
import {MdOutlineMailOutline, MdPhone} from 'react-icons/md'




function ContactUs() {
  return (

    <div className='ContactUs' id='contactUs'>
      <div className='container'>
        <div className='quote'>
          <h2> Contact Us</h2>
          <span className='line'></span>
          <Form>
            <div class="form-row">
              <div class="col">
                <input type="text" class="form-control" placeholder="Email" />
              </div>
              <div class="col">
                <input type="text" class="form-control" placeholder="Full name" col-xs-offset-2 />
              </div>
            </div>
            <Form.Group className="mb-8" controlId="formBasicCheckbox">
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </Form.Group>
            <Button variant="primary" type="submit">
              Send message
            </Button>
          </Form>
        </div>
        <div className='ContactDetails'>
          <h4><GrLocation /> Palm Ridge, Alberton, Gauteng </h4>
          <h4><MdPhone/> 064 815 7318 | 063 467 2344 </h4>
          <h4><MdOutlineMailOutline/> enlightmadlala@gmail.com </h4>
   
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
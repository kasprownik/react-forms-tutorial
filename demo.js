// demo.js
import React from 'react';
import ReactDOM from 'react-dom';
import Form, {Text, SubmitButton} from './src/index';

ReactDOM.render((
  <Form onSubmit={data => console.log(data)}>
    <Text
      name="name"
      validate={['required']}
      placeholder="Type your name here"
      label="Your name"/>
    <Text
      name="email"
      validate={['required', 'email']}
      placeholder="Type your email here"
      label="E-mail"/>
    <Text
      name="website"
      validate={['url']}
      placeholder="Type your website url here"
      label="Website"/>

    <SubmitButton/>
  </Form>
), document.getElementById('container'));

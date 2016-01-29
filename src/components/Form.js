// src/components/Form.js
import React, {PropTypes} from 'react';
import without from 'lodash.without';
import assign from 'lodash.assign';

const noop = () => undefined;

export default React.createClass({
  displayName: 'Form',

  propTypes: {
    children: PropTypes.node,
    values: PropTypes.object,
    update: PropTypes.func,
    reset: PropTypes.func,
    onSubmit: PropTypes.func
  },

  childContextTypes: {
    update: PropTypes.func,
    reset: PropTypes.func,
    submit: PropTypes.func,
    values: PropTypes.object,
    registerValidation: PropTypes.func,
    isFormValid: PropTypes.func,
  },

  getDefaultProps() {
    return {
      onSubmit: noop
    };
  },

  validations: [],

  registerValidation(isValidFunc) {
    this.validations = [...this.validations, isValidFunc];
    return this.removeValidation.bind(null, isValidFunc);
  },

  removeValidation(ref) {
    this.validations = without(this.validations, ref);
  },

  isFormValid(showErrors) {
    return this.validations.reduce((memo, isValidFunc) => 
      isValidFunc(showErrors) && memo, true);
  },

  submit(){
    if (this.isFormValid(true)) {
      this.props.onSubmit(assign({}, this.props.values));
      this.props.reset();
    }
  },

  getChildContext() {
    return {
      update: this.props.update,
      reset: this.props.reset,
      submit: this.submit,
      values: this.props.values,
      registerValidation: this.registerValidation,
      isFormValid: this.isFormValid
    };
  },

  render() {
    return (
      <form>
        {this.props.children}
      </form>
    );
  }
});

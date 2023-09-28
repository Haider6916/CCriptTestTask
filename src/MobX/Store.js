import { observable, action } from 'mobx';

const textInputStore = observable({
  lbs: '',
  ft:'',
  inch:'',
  setlbs: action(function (value) {
    this.lbs = value;
  }),
  setft: action(function (value) {
    this.ft = value;
  }),
  setinch: action(function (value) {
    this.inch = value;
  }),
});

export default textInputStore;

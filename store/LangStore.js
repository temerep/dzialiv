import { makeAutoObservable } from "mobx";

export default class LangStore {
  constructor() {
    this._locale = {};
    makeAutoObservable(this);
  }

  setLocale(string) {
    this._locale = string;
  }
  
  get locale() {
    return this._locale;
  }
}

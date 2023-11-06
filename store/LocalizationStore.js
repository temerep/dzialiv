import { makeAutoObservable } from 'mobx';

export default class LocalizationStore {
  constructor() {
    this._currentLocale;
    makeAutoObservable(this);
    if (typeof window !== 'undefined') {
      const storedLocale = localStorage?.getItem("locale");
      if (storedLocale) {
        this._currentLocale = storedLocale;
      } else {
        this._currentLocale = 'uk';
        this._updateLocalStorage();
      }
    }
  }

  _updateLocalStorage() {
    if (this._currentLocale !== null && typeof window !== 'undefined') {
      localStorage.setItem("locale", this._currentLocale);
    }
  }

  setLocale(locale) {
    this._currentLocale = locale;
  }

  get current() { 
    return this._currentLocale;
  }
}
import { makeAutoObservable } from "mobx";

class DataStore {
  products = null;
  services = null;
  subcategories = null;
  slider = null;

  constructor() {
    makeAutoObservable(this);
  }

  setProducts(products) {
    this.products = products;
  }

  setServices(services) {
    this.services = services;
  }

  setSubcategories(subcategories) {
    this.subcategories = subcategories;
  }

  setSlider(slider) { 
    this.slider = slider;
  }
}

const dataStore = new DataStore();

export default dataStore;
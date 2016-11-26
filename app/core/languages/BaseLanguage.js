export default class BaseLanguage {

  constructor() {
    throw new TypeError("Language class is not supposed to be instantiated");
  }

  static getName() {
    throw new TypeError("Method 'getName' has to be implemented!");
  }

  static getLID(){
    throw new TypeError("Method 'getLID' has to be implemented!");
  }

};

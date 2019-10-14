class Validation {
  constructor(startDate, endDate, minCount, maxCount) {
    this.startDate = startDate;
    this.endDate = endDate;
    this.minCount = minCount;
    this.maxCount = maxCount;
  }

  checkValidation() {
    var isValid = true;

    Object.getOwnPropertyNames(this).forEach(property => {
      
      if (this[property] === null || this[property] === "" || typeof this[property] === "undefined") {
         isValid = false; 
      }
    });
    return isValid ;
  }
}
module.exports = Validation;

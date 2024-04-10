const captalizeText = (text) => {
   return text.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
   }).replace(/([A-Z])/g, ' $1').trim();
}



export { captalizeText }
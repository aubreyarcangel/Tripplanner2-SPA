const fetchAttractions = () =>
fetch('/api')
  .then(result => result.json())
  .then(data => {
console.log(data)
  .catch(err => console.error(err));

module.exports = {
fetchAttractions
};

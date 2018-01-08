class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors)
    };
  }

  // map an array into an object
  mapIntoObject = (arr) => {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  // look up an author by author ID
  lookupAuthor = (authorId) => {
    return this.data.authors[authorId];
  }

  // get the object containing all articles and authors
  getState = () => {
    return this.data;
  }
}

export default StateApi;
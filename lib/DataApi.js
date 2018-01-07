class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }

  // map an array into an object
  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  // get an article object
  getArticles() {
    return this.mapIntoObject(this.rawData.articles);
  }

  // get an author object
  getAuthors() {
    return this.mapIntoObject(this.rawData.authors);
  }
}

export default DataApi;
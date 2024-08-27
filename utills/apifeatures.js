class ApiFeatures {
  constructor(mongoosequery, queryString) {
    this.mongoosequery = mongoosequery;
    this.queryString = queryString;
  }
  filter() {
    const queryStringObj = { ...this.queryString };
    const excludesfields = ["page", "sort", "limit", "fields"];
    excludesfields.forEach((ele) => delete queryStringObj[ele]);

    let queryStr = JSON.stringify(queryStringObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    this.mongoosequery = this.mongoosequery.find(JSON.parse(queryStr));
    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.mongoosequery = this.mongoosequery.sort(sortBy);
    } else {
      this.mongoosequery = this.mongoosequery.sort("-createdAt");
    }
    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const Fields = this.queryString.fields.split(",").join(" ");
      this.mongoosequery = this.mongoosequery.select(Fields);
    } else {
      this.mongoosequery = this.mongoosequery.select("-__v");
    }
    return this;
  }
  paginate() {
    const page = this.queryString.page || 1;
    const limit = this.queryString.limit || 50;
    const skip = (page - 1) * limit;

    const pagination = {};
    pagination.page = page;
    pagination.limit = limit;

    this.mongoosequery = this.mongoosequery.limit(limit).skip(skip);
    this.paginationresult = pagination;
    return this;
  }
}

module.exports = ApiFeatures;

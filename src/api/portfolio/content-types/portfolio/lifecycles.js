const slugify = require("slugify");

module.exports = {
  beforeCreate(event) {
    const { data } = event.params;
    if (data.projectName) {
      data.slug = slugify(data.projectName, { lower: true, strict: true });
    }
  },
  beforeUpdate(event) {
    const { data } = event.params;
    if (data.projectName) {
      data.slug = slugify(data.projectName, { lower: true, strict: true });
    }
  },
};

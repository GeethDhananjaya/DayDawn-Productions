/**
 * Production Project Entity Model
 */
class Production {
  constructor({
    id,
    title,
    category,
    year,
    director,
    client = null,
    synopsis,
    format = '4K Digital',
    coverImage = null,
    gallery = [],
    isFeatured = false,
  }) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.year = year;
    this.director = director;
    this.client = client;
    this.synopsis = synopsis;
    this.format = format;
    this.coverImage = coverImage;
    this.gallery = gallery;
    this.isFeatured = isFeatured;
  }
}

module.exports = Production;

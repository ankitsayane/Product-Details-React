//this is Product class
class Products {
  constructor() {
    this.prdarr = [
      { id: 1, name: "Chair", qty: 12, price: 2199 },
      { id: 2, name: "Fan", qty: 10, price: 1899 },
      { id: 3, name: "Sofa", qty: 1, price: 45000 },
      { id: 4, name: "Mixer", qty: 5, price: 3500 },
      { id: 5, name: "Table", qty: 25, price: 1300 },
    ];
  }

  //return all products in arr
  getAllProducts() {
    return this.prdarr;
  }

  //return specific product
  getById(id) {
    var pos = this.prdarr.findIndex((o) => o.id === id);
    return this.prdarr[pos];
  }

  //add new product
  addProduct(p) {
    this.prdarr.push(p);
  }

  //update product
  updateProduct(p) {
    var pos = this.prdarr.findIndex((o) => o.id === p.id);
    this.prdarr.splice(pos, 1, { ...p });
  }

  //delete product
  deleteProduct(p) {
    var pos = this.prdarr.findIndex((pro) => pro.id === p);
    this.prdarr.splice(pos, 1);
  }
}

export default new Products();

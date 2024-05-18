const card = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }
    const newProduct = { ...product, quantity: 1 };

    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;
    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];
      if (productName === name) {
        items.splice(i, 1);
        console.log(productName);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    const { items } = this;
    let total = 0;
    for (const { price, quantity } of items) {
      total += price * quantity;
    }
    return total;
  },
  increaseQuantity(productName) {
      for (const item of this.items) {
          if (item.name === productName) {
              item.quantity += 1; 
              return;
        }
        
    }
    
  },
  decreaseQuantity(productName) {
    
  },
};
console.log(card.getItems());
card.add({ name: '🍎', price: 50 });
card.add({ name: '🍎', price: 50 });
card.add({ name: '🍋', price: 60 });
card.add({ name: '🍋', price: 60 });
card.add({ name: '🍉', price: 80 });
card.add({ name: '🥝', price: 100 });
card.add({ name: '🍅', price: 60 });
card.add({ name: '🥝', price: 100 });
// card.remove('🍎');
console.log('total----', card.countTotalPrice());
console.log(card.increaseQuantity('🍉'));
console.log(card.increaseQuantity('🍅'));


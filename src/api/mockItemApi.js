const items = [
  {
    id: 1,
    name: "The Caramba Villa",
  },
  {
    id: 2,
    name: "Olive Garden",
  },
  {
    id: 3,
    name: 'Dubai'
  },
  {
    id: 4,
    name: "Hongkong"
  },
  {
    id: 5,
    name: "Goa"
  }
];

class ItemApi {
  static getAllItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], items));
      }, 1000);
    });
  }

  static addItem(item) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minItemTitleLength = 1;
        if (item.title.length < 1) {
          reject(`Title must be at least 1 characters.`);
        }

        if (item.id) {
          const existingItemIndex = items.findIndex(a => a.id == item.id);
          items.splice(existingItemIndex, 1, item);
        } else {
          item.id = generateId(item);
          items.push(item);
        }

        resolve(Object.assign({}, item));
      }, 1000);
    });
  }

  static deleteItem(itemId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfItemToDelete = items.findIndex(item => {
          item.itemId == itemId;
        });
        items.splice(indexOfItemToDelete, 1);
        resolve();
      }, 1000);
    });
  }
}

export default ItemApi;

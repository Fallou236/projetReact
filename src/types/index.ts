export interface Plant {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem extends Plant {
  quantity: number;
}
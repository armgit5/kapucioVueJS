
import ProductList from '@/components/product/ProductList'
import Queue from '@/components/queue/Queue'
import Cart from '@/components/cart/Cart'

export const routes = [
  { path: '',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/queue',
    name: 'Queue',
    component: Queue
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

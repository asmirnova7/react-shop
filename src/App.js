import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'chair-grey.jpg',
          desc: 'Какое-то описание',
          category: 'chairs',
          price: '2000.00'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.jpg',
          desc: 'Какое-то описание',
          category: 'tables',
          price: '3000.00'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa.jpg',
          desc: 'Какое-то описание',
          category: 'lounge',
          price: '30000.00'
        },
        {
          id: 4,
          title: 'Стул белый',
          img: 'chair-white.jpg',
          desc: 'Какое-то описание',
          category: 'chairs',
          price: '2100.00'
        },
        {
          id: 5,
          title: 'Кровать',
          img: 'bed.jpg',
          desc: 'Какое-то описание',
          category: 'lounge',
          price: '25000.00'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }

    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  
  render() {
  return (
    <div className="wrapper">
      <Header orders = {this.state.orders} onDelete={this.deleteOrder} />
      <Categories chooseCategory={this.chooseCategory} />
      <Items items={this.state.currentItems} onAdd={this.addToOrder} onShowItem={this.onShowItem} />
      {this.state.showFullItem && 
        <ShowFullItem item={this.state.fullItem} onAdd={this.addToOrder} onShowItem={this.onShowItem}  />}
      <Footer />
    </div>
  );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
    }
    else {
      this.setState({
        currentItems: this.state.items.filter(el => el.category === category)
      })
    }
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true
      }
    })
    
    !isInArray && this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;

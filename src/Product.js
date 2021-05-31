import "./App.scss";
import React from "react";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data22: [],
      data44:[]
    };
  }

  addToStore = () => {
    let i = 0;
    {this.state.data44.length === 0 ? i=0 : i= this.state.data44[this.state.data44.length -1].id}
    if(i === 8 && this.state.data44.length) {
      alert('No Another Data')
    } else {
      this.setState({
        ...this.state,
        data44: [
          ...this.state.data44,
          this.state.data22[i]
        ],
      })
      
    }
  };

  findItem = (e, w) => {
    const data33 = this.state;
    const item = data33.data44.find((t) => t.id === w);
    item.price = e.target.value;
    this.setState((prev) => (prev = data33));
  };

  findQuantity = (e, w) => {
    const data33 = this.state;
    const item = data33.data44.find((t) => t.id === w);
    item.quantity = e.target.value;
    this.setState((prev) => (prev = data33));
  };

  remove = (w) => {
    const data33 = this.state;
    const jadid = data33.data44.filter((t) => t.id !== w);
    data33.data44 = jadid;
    this.setState((prev) => (prev = data33));
    console.log(this.state.data44);
  };

  componentDidMount() {
    fetch('http://localhost:8000/myproducts')
      .then(res => res.json())
      .then(data => this.setState({...this.state, data22: data}))
      .catch(error => console.log(error))
      console.log('hasan roohani')
  }

  render() {
    let totall = 0;
    return (
      <div className="App">
        <button onClick={this.addToStore}>Add Product</button>
        {this.state.data44.map((product) => {
          totall += product.price * product.quantity;

          return (
            <div className="head">
              <p>{product.title}</p>
              <div>
                <label>Price: &nbsp;&nbsp;</label>
                <input
                  type="number"
                  value={product.price}
                  onChange={(e) => this.findItem(e, product.id)}
                />
              </div>
              <div>
                <label>Quantity:&nbsp;&nbsp;</label>
                <input
                  type="number"
                  value={product.quantity}
                  onChange={(e) => this.findQuantity(e, product.id)}
                />
              </div>
              <div>Amount: {product.price * product.quantity}</div>
              <span id="del" onClick={() => this.remove(product.id)}>
                remove
              </span>
            </div>
          );
        })}

        <div className="all-products">
          <p>Subtotal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{totall}</p>
          <p>
            <span>Tax(5%)&nbsp;&nbsp;&nbsp;&nbsp;{(totall * 0.05).toFixed(2)}</span>
          </p>
          <p>Total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {(totall + totall * 0.05).toFixed(2)}</p>
          <p>
            <span>Balance Due &nbsp;&nbsp;&nbsp;&nbsp; {(totall + totall * 0.05).toFixed(2)}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Products;

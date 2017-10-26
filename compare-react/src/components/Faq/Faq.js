import React, { Component } from 'react';
import "./Faq.css";
import axios from 'axios';

class Faq extends Component {

  constructor(props){
    super(props);

    this.state = {
      faqs: []
    };
  }

  componentDidMount(){
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(res => {
        const faqs = res.data.slice(0,12);
        this.setState({faqs});
      })
  }

  render() {
    return (
      <div>
        <div class='faq'>
          <div class='container'>
            <section class='section pd-top-bot-only'>
              <h1 class='title'>FAQ</h1>
              <h2 class='subtitle is-4'>Lorem isum dolor sit amet and all of that jazz</h2>
              <div class='columns'>
                {this.state.faqs.map(faq =>
                  <div class='column is-one-third'>
                    <div class='card'>
                      <div class='card-content'>
                        <p class='title'>{ faq.title }</p>
                        <p class='answer'>{ faq.body }</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;

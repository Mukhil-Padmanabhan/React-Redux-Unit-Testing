import React from 'react';
import Header from './components/header/index'
import HeadLine from './components/headline/index'
import SharedButton from  './components/button/'
import ListItem from  './components/listItem/'
import { connect } from 'react-redux'
import { fetchPosts } from './actions'
import './app.scss';

const tempArr = [{
  fName: 'Joe',
  lName:'Bloggs',
  email: 'joebloggs@gmail.com',
  age:24,
  onlineStatus: 1

}]

const initialState = {
  hideBtn: false
}


class App extends React.Component {
  constructor(props){
    super(props);
    this.state =  {
      ...initialState
    }
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
    this.exampleMethod_updateState();
    this.exampleMethod_returnsValue();
  }

  exampleMethod_updateState() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn
    })
  }

  exampleMethod_returnsValue(number) {
    return number + 1
  }

  dispatch() {
    console.log('dummy')
  }

  render() {
    const { posts } = this.props;
    const { hideBtn } = this.state;
    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch
    }

    return (
      <div className="App" data-test="appComponent">
        <Header/>
        <section className="main">
          <HeadLine header="Posts" desc="Click the button" tempArr={tempArr} dispatch={this.dispatch.bind(this)}/>
          {!hideBtn && <SharedButton {...configButton} />}
          {
            posts.length > 0 && 
            <div>
              {
                posts.map((post, index) => {
                  const { title, body } = post;
                  const configListItem = {
                    title,
                    desc: body
                  };
                  return (
                    <ListItem key={index} {...configListItem} />
                  )
                })
              }
            </div>
          }
        </section>
      </div>
    );
  }
 
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(App);

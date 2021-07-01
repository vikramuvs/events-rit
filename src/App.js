import React, { Component } from 'react';
import styles from './App.module.css';
import Event from './components/Events/Event';
import axios from 'axios';
import './firebaseConfig';
class App extends Component {
  state = {
    eventThumb: '',
    eventTitle: '',
    eventDesc: '',
    slideshowExists: false,
    videoExists: false,
    brochureLink: ''
  }
  
  componentDidMount() {
    axios.get('https://events-rit-563e9-default-rtdb.firebaseio.com/')
    .then(
      this.setState({
        ...this.state,
        eventThumb: 
      })
    )
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <div className={styles.EventEntries}>
          <Event
            thumb="src-folder"
            title='Header title'
            description='Here goes the multi line event description given at the time of the uploading the event. This can be updated by going to the backend after the event is uploaded too!'
            viewSlideshow={true}
            viewVideo={true}
            brochure={this.state.brochureLink}
          />
          <Event
            thumb="src-folder"
            title='Header title'
            description='Here goes the multi line event description given at the time of the uploading the event. This can be updated by going to the backend after the event is uploaded too!'
            viewSlideshow={true}
            viewVideo={true}
            brochure={this.state.brochureLink}
          />
          <Event
            thumb="src-folder"
            title='Header title'
            description='Here goes the multi line event description given at the time of the uploading the event. This can be updated by going to the backend after the event is uploaded too!'
            viewSlideshow={true}
            viewVideo={true}
            brochure={this.state.brochureLink}
          />
          <Event
            thumb="src-folder"
            title='Header title'
            description='Here goes the multi line event description given at the time of the uploading the event. This can be updated by going to the backend after the event is uploaded too!'
            viewSlideshow={true}
            viewVideo={true}
            brochure={this.state.brochureLink}
          />

          <Event
            thumb="src-folder"
            title='Header title'
            description='Here goes the multi line event description given at the time of the uploading the event. This can be updated by going to the backend after the event is uploaded too!'
            viewSlideshow={true}
            viewVideo={true}
            brochure={this.state.brochureLink}
          />

          <Event
            thumb="src-folder"
            title='Header title'
            description='Here goes the multi line event description given at the time of the uploading the event. This can be updated by going to the backend after the event is uploaded too!'
            viewSlideshow={true}
            viewVideo={true}
            brochure={this.state.brochureLink}
          />
        </div>
      </div>
    );
  }
}

export default App;

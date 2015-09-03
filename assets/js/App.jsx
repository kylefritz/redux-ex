import React from 'react'
import Note from './Note'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {entries: []}
  }

  componentDidMount(){
    let _this = this
    fetch('/entries').then(function(d){return d.json()}).then(function (data) {
      _this.setState({entries: data.entries})
    })
  }
  render() {
    console.log(this.state.entries)
    return (
      <div>
        {this.state.entries.map(function(entry){return <Note key={entry.name} {...entry}/> })}
      </div>
    );
  }
}

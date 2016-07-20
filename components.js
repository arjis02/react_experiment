class StoryBox extends React.Component {
  render() {
    return(
      <div>
        <h3>Story Box</h3>
        <TimeDisplay data={ this.props.data }/>
        <ListNames />
      </div>
    );
  }
}

class TimeDisplay extends React.Component {
  render() {
    const time = new Date();
    const dataList = data;

    return (
      <div>
        <p className="time-format">Current time: { time.toTimeString() }</p>
        <ul>
          { dataList.map( data => <li key={data}>{data}</li> ) }
        </ul>
      </div>
    );
  }
}

class ListNames extends React.Component {
  render() {
    const phonesList = ['iPhone', 'Android', 'Windows'];

    return (
      <div>
        <ul>
          { phonesList.map( phone => <li key={phone}>{phone}</li> ) }
        </ul>
      </div>
    );
  }
}

var data = [1,2,3];

ReactDOM.render(<StoryBox data={data} />, document.getElementById('story-box'));

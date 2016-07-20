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

var CommentBox = React.createClass({
  getInitialState: function() {
    return { editing: false }
  },

  edit: function() {
    console.log("Now editing");
    this.setState({ editing: true });
  },

  save: function() {
    console.log("Saved");
    this.props.updateCommentText(this.refs.newText.value, this.props.indexOf);
    this.setState({ editing: false });
  },

  delete: function() {
    console.log("Deleted");
    this.props.deleteFromBoard(this.props.indexOf);
  },

  renderNormal: function() {
    return (
      <div className="comment-container">
        <h3>{this.props.children}</h3>
        <button onClick={this.edit} className="btn-primary">Edit</button>
        <button onClick={this.delete} className="btn-danger">Delete</button>
      </div>
    );
  },

  renderEdit: function() {
    return (
      <div className="comment-container">
        <textarea ref="newText" defaultValue={this.props.children}></textarea>
        <button onClick={this.save} className="btn-primary">Save</button>
        <button onClick={this.delete} className="btn-danger">Delete</button>
      </div>
    );
  },

  render: function() {
    if(!this.state.editing) {
      return this.renderNormal();
    }else{
      return this.renderEdit();
    }
  }
});

var Board = React.createClass({
  getInitialState: function() {
    return {
      comments: ['I am the man!', 'This is it!', 'What is good?']
    }
  },

  removeComment: function(i) {
    console.log('Removing comment: ', i);
    var arr = this.state.comments;
    arr.splice(i, 1);
    this.setState({ comments: arr});
  },

  updateComment: function(newText, i) {
    console.log('Updating comment: ', i);
    var arr = this.state.comments;
    arr[i] = newText;
    this.setState({ comments: arr});
  },

  render: function() {
    return (
      <div>
        {this.state.comments.map( (comment, i) => 
          <CommentBox key={i} indexOf={i} updateCommentText={this.updateComment} deleteFromBoard={this.removeComment}>
            {comment}
          </CommentBox> )}
      </div>
    );
  }
});

ReactDOM.render(
  <div>
    <Board />
  </div>
  , document.getElementById('board')
);





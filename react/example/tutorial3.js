var data = [
	{id : 1, author : "Pete Hunt", text : "this is one comment"},
	{id : 2, author : "Jordan Walke", text : "this is another comment"}
];

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
  }
});

var CommentList = React.createClass({
	render : function(){
		var commentNodes = this.props.data.map(function(comment){
			return (
				<Comment author={comment.author} key={comment.id}>
					{comment.text}
				</Comment>
			);
		});
		return (
			<div className = "commentList">
				{commentNodes}
			</div>
		);
		
	}
});

var CommentBox = React.createClass({
	render : function(){
		return (
			<div>
				<h1 className = "commentBox"></h1>
				<CommentList data = {this.props.data}/>
			</div>
		);
	}
});

ReactDOM.render(
	<CommentBox data = {data} /> ,
	document.getElementById('content')
);
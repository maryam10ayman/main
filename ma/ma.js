let likeCount = 0;
let commentList = [];

function incrementLikes() {
	likeCount++;
	document.getElementById("like-count").innerHTML = likeCount;
}

function addComment() {
	let commentInput = document.getElementById("comment-input");
	let commentText = commentInput.value;
	if (commentText.length > 0) {
		commentList.push(commentText);
		commentInput.value = "";
		displayComments();
	}
}

function displayComments() {
	let commentListHtml = "";
	for (let i = 0; i < commentList.length; i++) {
		commentListHtml += "<p>" + commentList[i] + "</p>";
	}
	document.getElementById("comment-list").innerHTML = commentListHtml;
}
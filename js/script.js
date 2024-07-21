const tweetForm = document.querySelector("form");
const tweetList = document.querySelector(".tweets-list");

tweetForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("submitted");

  let username = document.querySelector("form").elements.username;
  let tweet = document.querySelector("form").elements.tweet;

  createTweetListItem(username.value, tweet.value);
  username.value = "";
  tweet.value = "";
});

createTweetListItem = (username, tweet) => {
  let tweetItem = document.createElement("li");
  tweetItem.classList.add("list-group-item");
  tweetItem.classList.add("tweet-list-item");
  tweetItem.innerText = `${username} --> ${tweet}`;

  tweetList.append(tweetItem);
  return tweetItem;
};

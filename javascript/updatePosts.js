var profil = {
	name : 'Radmila',
	surname: 'Kulundžić',
	username: 'rkulundzic',
	description: 'architect into making clothes',//'Wonder woman / programer / architect / designer',
	profilPhoto: 'assets/img/profile.jpg',
	posts: [
		{postImg: 'assets/img/1.jpg', postInput: "Moram naći gde sam zagubila ovaj stomak. Hitno. <br> #skiathos2009", postLocation: "Skiathos Island"},
		{postImg: 'assets/img/2.jpg', postInput: "Word", postLocation: "Novi Sad"},
		{postImg: 'assets/img/3.jpg', postInput: "Luna park i Zoo vrt nedeljom", postLocation: "Zoološki Vrt"},
		{postImg: 'assets/img/4.jpg', postInput: "When your clothes are way more older than you <br> #levis501", postLocation: " "},
		{postImg: 'assets/img/5.jpg', postInput: "Crna višnja i karamela <br> #gellato #cinqueterre", postLocation: "Vernazza, Cinque Terre, Italy"},
		{postImg: 'assets/img/6.jpg', postInput: "Druženja sa Nini uz priče iz prvog reda <br> @nina.cabilovski mnogo te volim!", postLocation: "Novi Sad"},
		{postImg: 'assets/img/7.jpg', postInput: "Leto zauvek <br> #malta #bluelagoon", postLocation: "Malta Island"},
		{postImg: 'assets/img/8.jpg', postInput: "Fasade Lisabona <br> #lisboawalls", postLocation: "Lisbon, Portugal"},
		{postImg: 'assets/img/9.jpg', postInput: "Went to Louvre just to meet her <br> #nikesasamotrake #wingedvictoryofsamotrace", postLocation: "Musee du Louvre, Paris"},
		{postImg: 'assets/img/10.jpg', postInput: "Pa da obeležimo prvi vikend bez svadbi sa jednom slikm od poslednjeg veselja <br> #silkwrapdress", postLocation: "Novi Sad"},
		{postImg: 'assets/img/11.jpg', postInput: "Super Hero off duty <br> #superhero #nasljokice", postLocation: "Malta Island"},
		{postImg: 'assets/img/12.jpg', postInput: "All the bright colors <br> #allblackeverything", postLocation: "Novi Sad"},
		{postImg: 'assets/img/13.jpg', postInput: "Lisboa days <br> #belem", postLocation: "Belem, Lisboa"},
		{postImg: 'assets/img/14.jpg', postInput: "Calm is a superpower", postLocation: ""}
	]
};

var allPosts = document.getElementById('img-posts');
var postBtn = document.getElementById('post-btn');
var postUpdate = document.getElementById('new-post');

// postBtn.addEventListener("click", checkLink);

var postCount = document.getElementById('posts-count');
postCount.innerHTML = "<strong>" + allPosts.children.length + "</strong>" + " posts";

postBtn.onclick = function imgPosting(e) {
	
	if (postUpdate.value.trim() == ""){

		alert('Upload field is empty!')

	}

	else if (postUpdate.value.indexOf("http") !== 0) {

		alert('Invalid input!');

		postUpdate.value = "";
	}

	else {

		var newArticle = document.createElement("article");
		var newImg = document.createElement("img");
		var imgText = document.createElement("div");
		var userImg = document.createElement("img");
		var userNamePost = document.createElement("p");
		var imgLocation = document.createElement("p");
		var userText = document.createElement("p");

		newArticle.appendChild(newImg);
		newArticle.appendChild(imgText);

		newImg.src = postUpdate.value;
		// newImg.id = "img"+[i+1];
		newImg.addEventListener("click", modalFunction);

		imgText.appendChild(userImg);
		imgText.appendChild(userNamePost);
		imgText.appendChild(imgLocation);
		imgText.appendChild(userText);

		userImg.src = profil.profilPhoto;
		userNamePost.innerHTML = profil.username;

		newArticle.classList.add('post-container');
		newImg.classList.add('post-img');
		imgText.classList.add('post-text');
		userImg.classList.add('user-img');
		userNamePost.classList.add('post-username');
		userText.classList.add('post-text-input');

		allPosts.insertBefore(newArticle, allPosts.firstChild);

		postCount.innerHTML = "<strong>" + document.getElementsByClassName('post-container').length + "</strong>" + " posts";
	
		postUpdate.value = "";
	}
	
};

document.getElementById("new-post")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("post-btn").click();
    }
});



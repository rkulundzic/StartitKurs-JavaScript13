var profil = {
	name : 'Radmila',
	surname: 'Kulundžić',
	username: 'rkulundzic',
	description: 'Wonder woman / programer / architect / designer',
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
		{postImg: 'assets/img/14.jpg', postInput: "Calm is a superpower", postLocation: "Novi Sad"},
		{postImg: 'assets/img/15.jpg', postInput: "Jedna zima sa Milenom <br> #milenagosevski #decembar", postLocation: ""}
	]
};

var profilImg = document.getElementById('profil-img');
profilImg.src = profil.profilPhoto;
profilImg.style.height = "152px";
profilImg.style.borderRadius = "50%";

var userName = document.getElementById('username');
userName.innerHTML = profil.username;

var fullName = document.getElementById('full-name');
fullName.innerHTML = profil.name + " " + profil.surname;

var userBio = document.getElementById('user-bio');
userBio.innerHTML = profil.description;

var postPlaceholder = document.getElementById('new-post');
postPlaceholder.placeholder = "Upload an image";

var allPosts = document.getElementById('img-posts');

for (var i = profil.posts.length - 1; i >= 0; i--) {

	var newArticle = document.createElement("article");
	var newImg = document.createElement("img");
	var imgText = document.createElement("div");
	var userImg = document.createElement("img");
	var userNamePost = document.createElement("p");
	var imgLocation = document.createElement("p");
	var userText = document.createElement("p");
	var like = document.createElement("label");
	var comments = document.createElement("textarea");
	var addComent = document.createElement("button");

	newArticle.appendChild(newImg);
	newArticle.appendChild(imgText);

	newImg.src = profil.posts[i].postImg;
	newImg.id = "img-id"+[i+1];
	newImg.setAttribute('data-text', profil.posts[i]['postInput']);
	newImg.setAttribute('data-loc', profil.posts[i]['postLocation']);
	newImg.addEventListener("click", modalFunction);

	imgText.appendChild(userImg);
	imgText.appendChild(userNamePost);
	imgText.appendChild(imgLocation);
	imgText.appendChild(userText);
	imgText.appendChild(comments);
	imgText.appendChild(addComent);

	imgText.id = "text-id" + [i+1];

	userImg.src = profil.profilPhoto;
	userNamePost.innerHTML = profil.username;
	imgLocation.innerHTML = profil.posts[i].postLocation;

	//userText.innerHTML = profil.posts[i].postInput; //"<strong>" + profil.username + "</strong>" + " " + 

	comments.placeholder = "Add a comment..."
	addComent.innerHTML = "..."
	comments.addEventListener("keyup", enterComment);

	newArticle.classList.add('post-container');
	// newArticle.id = ('modal-mask');
	newImg.classList.add('post-img');
	imgText.classList.add('post-text');
	userImg.classList.add('user-img');
	userNamePost.classList.add('post-username');
	userText.classList.add('post-text-input');
	imgLocation.classList.add('post-location');
	comments.classList.add('comment-field');
	addComent.classList.add('comment-submit');


	allPosts.appendChild(newArticle);

};

function modalFunction(event){

	var imgModal = event.currentTarget;
	var articleModal = imgModal.parentNode;
	imgModal.classList.add('modal-img');
	userText.innerHTML = "<strong>" + profil.username + "</strong>" + " " + imgModal.getAttribute('data-text');
	imgLocation.innerHTML = imgModal.getAttribute('data-loc');
	imgText.className = "modal-text";
	articleModal.classList.add('modal');

	window.onclick = function(event) {
	if (event.target == articleModal){
		articleModal.className = "post-container";
		imgModal.className = "post-img";
		imgText.className = "post-text";
	}
};

};


addComent.onclick = function commenting(e){
	
	if (comments.value.trim() == ""){

		alert('Textfield is empty!')

	}

	else {

		var newP = document.createElement("p");

		newP.innerHTML = "<strong>petar_np</strong> " + comments.value;

		userText.appendChild(newP);

		comments.value = "";
	}
};


function enterComment (event){
	event.preventDefault();
	if (event.keyCode === 13) {
		addComent.click();
	}
}




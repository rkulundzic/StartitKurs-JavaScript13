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
		{postImg: 'assets/img/14.jpg', postInput: "Calm is a superpower", postLocation: "Novi Sad"}
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

	newArticle.appendChild(newImg);
	newArticle.appendChild(imgText);

	newImg.src = profil.posts[i].postImg;
	newImg.id = "img"+[i+1];
	newImg.onclick = modalFunction();

	imgText.appendChild(userImg);
	imgText.appendChild(userNamePost);
	imgText.appendChild(imgLocation);
	imgText.appendChild(userText);

	imgText.id = "text"+[i+1];

	userImg.src = profil.profilPhoto;
	userNamePost.innerHTML = profil.username;
	imgLocation.innerHTML = profil.posts[i].postLocation;

	userText.innerHTML = "<strong>" + profil.username + "</strong>" + " " + profil.posts[i].postInput;

	newArticle.classList.add('post-container');
	newArticle.id = ('modal-mask');
	newImg.classList.add('post-img');
	imgText.classList.add('post-text');
	userImg.classList.add('user-img');
	userNamePost.classList.add('post-username');
	userText.classList.add('post-text-input');
	imgLocation.classList.add('post-location');

	allPosts.appendChild(newArticle);

};

function modalFunction(){
	console.log("Cao");
};
// var modalImg = document.getElementById('img14');
// var modalContainer = document.getElementById('modal-mask');
// var modalText = document.getElementById('text14');
// modalImg.onclick = function(){
// 	modalContainer.classList.add('modal');
// 	modalImg.src = this.src;
// 	modalImg.classList.add('modal-img');
// 	modalText.className = "modal-text";
// }


// window.onclick = function(event) {
// 	if (event.target == modalContainer){
// 		modalContainer.className = "post-container";
// 		modalImg.className = "post-img";
// 		modalText.className = "post-text";
// 	}
// }


<template>
	<div id="app">
		<div class="vertical-nav" id="sidebar">
			<div class="header">
				<div class="media">
					<!-- <img src="./assets/Wassili favicon.png" alt="..." width="65" class="mr-3 rounded-circle img-thumbnail shadow-sm"> -->
					<div class="media-body" v-on:click="closeNav()">
						<router-link to="/" class="link">
							<h4 class="title">Gisela Debatin</h4>
							<p class="media-subtitle">Kunst und Literatur</p>
						</router-link>
					</div>
				</div>
			</div>

			<p class="nav-header" v-on:click="closeNav()">
				<router-link to="/Literatur" class="link">
					<div class="nav-header-item text-uppercase">Literatur</div>
				</router-link>
			</p>

			<ul class="nav">
				<li class="nav-item" v-on:click="closeNav()">
					<router-link to="/Literatur" class="nav-link">Kater Wassili und Peter der Große</router-link>
				</li>
			</ul>

			<p class="nav-header" v-on:click="closeNav()">
				<router-link to="/Kunst" class="link">
					<div class="nav-header-item text-uppercase">Kunst</div>
				</router-link>
			</p>

			<ul class="nav" v-scroll-spy-active v-scroll-spy-link>
				<li class="nav-item" v-on:click="closeNav()">
					<router-link to="/Kunst" v-scroll-to="'#oil'" class="nav-link">Ölbilder</router-link>
				</li>
				<li class="nav-item" v-on:click="closeNav()">
					<router-link to="/Kunst" v-scroll-to="'#keramik'" class="nav-link">Keramiken</router-link>
				</li>
				<li class="nav-item" v-on:click="closeNav()">
					<router-link to="/Kunst" v-scroll-to="'#glas'" class="nav-link">Hinterglasbilder</router-link>
				</li>
				<li class="nav-item" v-on:click="closeNav()">
					<router-link to="/Kunst" v-scroll-to="'#ausstellungen'" class="nav-link">Ausstellungen</router-link>
				</li>
			</ul>

			<p class="nav-header bottom-item" v-on:click="closeNav()">
				<router-link to="/Kontakt" class="link">
					<div class="nav-header-item text-uppercase">Kontakt</div>
				</router-link>
			</p>
		</div>

		<div class="page-content" id="content">
			<div class="hamburger" v-on:click="toggleNav()">
				<img id="menu" src="./assets//hamburger.svg" alt="Menu">
				<img id="close" class="d-none" src="./assets//close.svg" alt="Menu">
			</div>
    		<router-view />
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		toggleNav : function() {
			var sidebar = document.getElementById('sidebar');
			var menu = document.getElementById('menu');
			var close = document.getElementById('close');
			sidebar.classList.toggle('active-nav');
			menu.classList.toggle('d-none');
			close.classList.toggle('d-none');
		},
		closeNav: function() {
			var sidebar = document.getElementById('sidebar');
			var menu = document.getElementById('menu');
			var close = document.getElementById('close');
			sidebar.classList.remove('active-nav');
			menu.classList.remove('d-none');
			close.classList.add('d-none');
		}
	},
}
</script>

<style lang="scss">

.vertical-nav {
  min-width: 17rem;
  width: 17rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.4s;
  background-color: #f8f8f8;
  z-index: 2;
}

.page-content {
  width: calc(100% - 17rem);
  margin-left: 17rem;
  transition: all 0.4s;
}

/* for toggle behavior */

#sidebar.active-nav {
  margin-left: 0px;
}

#content.active-nav {
  width: 100%;
  margin: 0;
}

@media (max-width: 768px) {
  #sidebar {
    margin-left: -17rem;
  }
  #content {
    width: 100%;
    margin: 0;
  }
  #content.active {
    margin-left: 17rem;
    width: calc(100% - 17rem);
  }
}

@media (max-width: 991px) {
	#content {
		width: 100%;
		margin: 0;
	}
	#sidebar {
    margin-left: -17rem;
  }
}
@media (max-width: 576px) {
	#sidebar {
		width: 100vw;
	}
	#sidebar {
    	margin-left: -100vw;
	}
}
@media (min-width: 991px) {
	.hamburger {
		display: none;
	}
}
.nav {
	margin-bottom: 0px;
	display: flex;
	flex-direction: column;
}
.nav-link, .link {
	color: #343a40;
}
.nav-link:hover, .link:hover {
	text-decoration: none;
	color: #343a40;
}
.bottom-item {
	position: absolute;
	bottom: 0px;
}

.title {
	font-family: 'Playfair Display';
	font-weight: 700;
}
.nav-item {
	padding-left: 5px;
}
.nav-item:hover {
	background-color: #EEEEEE;
}
.nav-header {
	padding: 0.5rem 0px;
	margin-bottom: 0px;
	width:100%;
}
.nav-header-item {
	font-weight: 800;
	font-size: 80%;
	padding: 1rem 1rem;
}
.nav-header-item:hover {
	background-color: #EEEEEE;	
}
.header {
	background-color: #EEEEEE;
	padding: 1.5rem 1rem 1.5rem 1rem;
}
.media {
	display: flex;
	align-items: center;
}
.media-subtitle {
	font-weight: 300;
	margin-bottom: 0px;
	color: #6c757d
}
.active {
	// background-color: #EEEEEE;
}

.hamburger {
	position: fixed;
	z-index: 3;
	height: 1.5rem;
	width: 1.5rem;
	top: 0px;
	right: 0px;
	margin: 24px;
}
.hamburger > img {
	height: 100%;
	width: 100%;
}

.navbar-toggler-icon {
	color: black;
}
// General Styling

h1 {
	font-family: 'Playfair Display', Serif;
	padding-top: 10px;
	padding-bottom: 20px;
}
p,li {
	color: #616161;
    font-family: 'Open Sans';
}

button {
    width: 100%;
    margin: 0px 5px;
    font-weight: 600;
    color: #494949 !important;
    border-radius: 0px;
    text-transform: uppercase;
    text-decoration: none;
    background: #ffffff;
    padding: 15px;
    border: 3px solid #494949 !important;
    display: inline-block;
    transition: all 0.4s ease 0s;
}
button:hover {
    color: #ffffff !important;
    background: #212121;
    border-color: #212121 !important;
    transition: all 0.4s ease 0s;
}
button > a:hover {
	color: #ffffff !important;
}
button:hover > a {
	color: #ffffff !important;
}

</style>

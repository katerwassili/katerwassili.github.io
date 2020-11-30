<template>
	<div id="app">
		<div class="vertical-nav" id="sidebar">
			<div class="header">
    			<div class="media">
					<!-- <img src="./assets/Wassili favicon.png" alt="..." width="65" class="mr-3 rounded-circle img-thumbnail shadow-sm"> -->
      				<div class="media-body">
        				<router-link to="/" class="link"><h4 class="title">Gisela Debatin</h4></router-link>
						<p class="media-subtitle">Kunst und Literatur</p>
      				</div>
    			</div>
  			</div>

			<p class="nav-header">
				<router-link to="/Literatur" class="link">
					<div class="nav-header-item text-uppercase">Literatur</div>
				</router-link>
			</p>

			<ul class="nav">
				<li class="nav-item">
					<router-link to="/Literatur" class="nav-link">Kater Wassili und Peter der Große</router-link>
				</li>
			</ul>

			<p class="nav-header">
				<router-link to="/Kunst" class="link">
					<div class="nav-header-item text-uppercase">Kunst</div>
				</router-link>
			</p>

			<ul class="nav">
				<li class="nav-item">
					<router-link to="/Kunst" v-scroll-to="'#oil'" class="nav-link">Ölbilder</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/Kunst" v-scroll-to="'#keramik'" class="nav-link">Keramiken</router-link>
				</li>
				<li class="nav-item">
					<router-link to="/Kunst" v-scroll-to="'#glas'" class="nav-link">Hinterglasbilder</router-link>
				</li>
			</ul>

			<p class="nav-header bottom-item">
				<router-link to="/Kontakt" class="link">
					<div class="nav-header-item text-uppercase">Kontakt und Impressum</div>
				</router-link>
			</p>

			<!-- <p class="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0 ">
				<router-link to="/" class="link nav-header"></router-link>
			</p> -->
		</div>

		<div class="page-content" id="content">
    		<router-view />
		</div>
	</div>
</template>

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
}

.page-content {
  width: calc(100% - 17rem);
  margin-left: 17rem;
  transition: all 0.4s;
}

/* for toggle behavior */

#sidebar.active {
  margin-left: -17rem;
}

#content.active {
  width: 100%;
  margin: 0;
}

@media (max-width: 768px) {
  #sidebar {
    margin-left: -17rem;
  }
  #sidebar.active {
    margin-left: 0;
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
	// px-3 small py-4 mb-0
	padding: 1.5rem 1rem 1.5rem 1rem;
	margin-bottom: 0px;
}
.nav-header-item {
	font-weight: 800;
	font-size: 80%;
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

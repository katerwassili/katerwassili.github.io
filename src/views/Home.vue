<template>
	<div class="home">
		<div class="col-10 offset-1 col-xl-8 offset-xl-2">
			<h1>Gisela Debatin</h1>
			<p>
				Gisela Debatin liebt Katzen, Kunst und Literatur. Im Juni 2020 erschien
				im Verlag BoD ihr Buch "Kater Wassili und Peter der Große". Aus Sicht
				eines Katers wird auf unterhaltsame Weise die Zeit Peters des Großen und
				die Entstehung der Stadt St. Petersburg beschrieben.
			</p>
			<div class="book">
				<div class="img-container">
					<img src="../assets//Wassilli Cover.jpg">
				</div>
				<div class="offset-sm-1 book-summary">
					<h3>HISTORISCHER ROMAN</h3>
					<h2>Kater Wassili und Peter der Große</h2>
					<button><router-link class="link" to="/Literatur">Mehr erfahren</router-link></button>
				</div>
			</div>
			<p>
				Nach dem Studium für das Lehramt in Stuttgart unterrichtete Gisela
				Debatin an verschiedenen Schulen in Baden-Württemberg und Hessen.
			</p>
			<p>
				Für die Schulbuchabteilung des Klett-Verlags Stuttgart arbeitete sie als
				Autorin. Nach der Zeit im Schuldienst wandte sie sich der Kunst
				zu. Es entstanden Gemälde auf Leinwand, Keramikfiguren und
				Hinterglasbilder mit Motiven aus der Tierwelt.
			</p>
		</div>
	</div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.home {
	margin-top: 3rem;	
}
h1 {
	text-align: center;
	font-weight: 600;
}
h2 {
	font-family: 'Playfair Display';
	margin-bottom: 15px;
}
img {
	height: 250px;
}
.book {
	display: flex;
	padding: 30px 20px;
	border-top: 1px solid rgba(0,0,0,0.1);
	border-bottom: 1px solid rgba(0,0,0,0.1);
	margin-top: 2rem;
	margin-bottom: 3rem;
}

.book-summary {
	padding: 20px;
}

button {
	padding: 8px 30px;
	width: 50%;
	margin-top: 10px;
}

h3 {
	font-size: 1rem;
	font-weight: 600;
	color: #757575;
	margin-bottom: 15px;
}
.home {
	margin-bottom: 3rem;
}
.link:hover {
	color: white !important;
}
img {
	box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.6);
}

@media (max-width: 1200px) {
	button {
		width: 100%;
	}
}
@media (max-width: 576px) {
	.book {
		flex-direction: column;
	}
	img {
		width: 80%;
		height: auto;
	}
	.img-container {
		display: flex;
		justify-content: center;
	}
	.book-summary {
		text-align: center;
		margin-top: 1rem;
	}
}
</style>
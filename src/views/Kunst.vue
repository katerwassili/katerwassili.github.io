<template>
  <div class="kunst col-8 offset-2">
		<div class="gallery" v-for="elem in this.art" v-bind:key='elem.title'>
			<div class="container" :id="elem.id">
				<h1>{{elem.title}}</h1>
				<div class="row justify-content-center">
					<div v-for="image in elem.images" v-bind:key="image.src" class="col-6">
						<div class="art">
							<router-link :to="{name: 'Bild', params: image}" >
								<img v-bind:src="image.src">
							</router-link>
							<div class="text">
								<span class="description">{{image.description}}</span>
								<span class="size">{{image.size}}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="ausstellungen" id="ausstellungen">
			<h1>
				Vergangene Ausstellungen
			</h1>
			<ul class="austellungen-liste">
				<li>Parktheater Bensheim</li>
				<li>Galerie Weng Mannheim/Deidesheim</li>
				<li>Galerie No. 48, Mainz</li>
				<li>Galerie Walpenreute, Stuttgart</li>
				<li>Zentrum Pfungstadt</li>
				<li>Altes Rathaus Jugenheim</li>
				<li>Galerie Eichenhof, Bermatingen/Bodensee</li>
				<li>Galerie Sonne, Jugenheim</li>
				<li>Altes Rathaus Schifferstadt</li>
				<li>Museum der Porzellanmanufaktur Fürstenberg</li>
				<li>Prinz Reuss, Wiesbaden</li>
				<li>Galerie Weiß, Starnberg</li>
				<li>Atelier-Galerie Tourette-sur-Loup (Alpes-Maritimes), Frankreich</li>
				<li>Galerie Hell, München</li>
			</ul>
			Spendausstellungen zugunsten <i>Bund der Katzenfreunde, München</i> und <i>Pro Animale, Schweinfurt</i>
		</div>
  </div>

</template>

<script>

export default {
	name: 'Kunst',
	data : function() {
		return {
			art : [
				{
					title : 'Ölbilder',
					id: 'oil',
					images : [
						{
							src : require('../assets/Eulen.jpg'),
							description : 'Uhus entdecken ein Schloss',
							size : '70 x 70 cm'
						},
						{
							src : require('../assets/Fledermaus.jpg'),
							description : 'Fledermäuse in der Abtei',
							size : '70 x 70 cm'
						},
						{
							src : require('../assets/Eichhörnchen.jpg'),
							description : 'Text 3',
							size : '0 cm'
						},
						{
							src : require('../assets/Katze.jpg'),
							description : 'Text 4',
							size : '0 cm'
						}
					]
				},
				{
					title : 'Keramiken',
					id: 'keramik',
					images : [
						{
							src : require('../assets/Keramik Kater.jpg'),
							description : 'Herzog von Orléans',
							size : '37 cm'
						},
						{
							src : require('../assets/Keramik Maus.jpg'),
							description : 'Katzenjäger',
							size : '35 cm'
						},
						{
							src : require('../assets/Keramik Nashorn.jpg'),
							description : 'Samsara',
							size : '33 cm'
						},
						{
							src : require('../assets/Keramik Pfau.jpg'),
							description : 'Domingo',
							size : '36 cm'
						}
					]
				},
				{
					title : 'Hinterglasbilder',
					id: 'glas',
					images : [
						{
							src : require('../assets/HGB-Flora.jpg'),
							description : 'Flora weckt ihre Kinder',
							size : '30 x 40 cm'
						},
						{
							src : require('../assets/HGB-Intercity.jpg'),
							description : 'Begegnung im Intercity',
							size : '30 x 40 cm'
						},
						{
							src : require('../assets/HGB-Schwan.jpg'),
							description : 'Schwan von Fürstenberg',
							size : '30 x 40 cm'
						},
						{
							src : require('../assets/HGB-Stier.jpg'),
							description : 'Stier vor dem Rosentempel',
							size : '30 x 40 cm'
						}
					]
				},
			]
		};
	}
  
}
</script>

<style scoped>
h1 {
  padding-top: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-family: 'Playfair Display';
  font-weight: 600;
}
img {
   max-width: 100%;
    height: auto;
	box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.1);
}
.text {
	display: flex;
    flex-direction: column;
    justify-content: center;
	padding: 10px 0px 35px 5px;
	font-family: 'Open Sans';
	font-size: 0.9rem;
}
.size {
	color: gray;
}
.gallery {
	border-bottom: 1px solid rgba(0,0,0,0.1);
	margin-bottom: 3rem;
}

ul {
	list-style-type: none;
}
li {
	padding-bottom: 3px;
}
.ausstellungen {
	margin-bottom: 3rem;
	text-align: center;
}

.kunst {
	margin-top: 0.5rem;
}
</style>
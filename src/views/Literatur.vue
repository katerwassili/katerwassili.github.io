<template>
    <div class="literatur">
        <div class="page col-12">
            <div class="row p-0">
                <div class="book-title-mobile">
                        <h3 class="subtitle">HISTORISCHER ROMAN</h3>
                        <h1>Kater Wassili und Peter der Große</h1>
                    </div>
                <div class="left-side col-sm-5 col-12">
                    <div class="cover">
                        <img src="../assets//Wassilli Cover.jpg" />
                    </div>
                    <div class="isbn">
                        <p>
                            <span class="isbn-title">ISBN-13: </span>
                            <span>9783751951425</span>
                        </p>
                        <p>172 Taschenbuchseiten</p>
                    </div>
                </div>
                <div class="description col-sm-7 col-12">
                    <div class="book-title">
                        <h3 class="subtitle">HISTORISCHER ROMAN</h3>
                        <h1>Kater Wassili und Peter der Große</h1>
                    </div>
                    <div class="blurb">
                        <p>
                            Der Legende nach brachte Peter der Große den
                            Kater Wassili von Westeuropa nach Russland mit.
                            Der Kater erzählt aus dem Leben Peters in
                            Holland, England, Österreich und Russland in der
                            Zeit von 1697 bis 1718.
                        </p>
                        <p>
                            Als junger Kater lebt er mit Peter und seinen
                            Freunden in einem einfachen Holzhaus in Zaandam.
                            Wassili begleitet den Zar auf die Werft nach
                            Amsterdam und segelt als Schiffskater mit ihm
                            nach England. Sie verbringen eine für beide
                            wichtige Zeit auf einem herrschaftlichen Anwesen
                            in London. Wassili lernt dort die Katze Wanda
                            kennen.
                        </p>
                        <p>
                            Wassili und Wanda segeln mit Peters Freund in
                            die Hafenstadt Archangelsk im nördlichen
                            Russland, während Peter mit seinem Gefolge nach
                            Wien reist.
                        </p>
                        <p>
                            Als Zar Peter nach Russland zurückkehrt trifft
                            er Wassili und Wanda wieder. Von nun an
                            begleitet Wassili den Zaren auf vielen Reisen
                            durch das große russische Reich bis ans Schwarze
                            Meer.
                        </p>
                        <p>
                            Während des Krieges zwischen Russland und
                            Schweden wird Wassili auf ein schwedisches Boot
                            verschleppt. Zusammen mit dem Matrosen Gunnar
                            gerät er in russische Gefangenschaft und
                            begegnet in Moskau dem Zaren wieder.
                        </p>
                        <p>
                            Er reist mit Zar Peter zu den eroberten Gebieten
                            an der Ostsee und erlebt die Entstehung der
                            Stadt St. Petersburg. Auf den Segelschiffen des
                            Zaren dient er lange als Schiffskater. Später
                            erhält er die Aufgabe, die Kunstsammlungen
                            Peters vor Mäusen, Ratten und Dieben zu
                            schützen.
                        </p>
                    </div>
                    <p class="available">
                        Das Buch ist als Taschenbuch und als E-Book erhältlich und
                        kann in allen Buchhandlungen und online bestellt werden.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Literatur",
};
</script>

<style scoped>
.row {
    padding-top: 30px;
}
.cover {
    display: flex;
    justify-content: center;
    padding-top: 30px;
}
img {
    height: calc(100vh - 100px - 2rem);
    width: auto;
    max-width: 100%;
    box-shadow: 0px 35px 70px -35px rgba(0, 0, 0, 0.6);
}
.subtitle {
    color: #343a40;
    font-size: 1.2rem;
	font-weight: 600;
}
p {
    margin-bottom: 8px;
    font-family: "Roboto";
    color: #343a40;
    font-size: 0.9rem;
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
.buttons {
    margin-bottom: 3rem;
}
.left-side {
    height: 100vh;
}
.description {
    padding: 30px 40px;
    height: 100vh;
    overflow: scroll;
}
h1 {
    font-family: "Playfair Display", serif;
    font-weight: 800;
    font-size: 2.5rem;
    padding: 10px 0px 20px 5px;
}
.available {
    margin-top: 15px;
    color: black;
    font-weight: 600;
    margin-bottom: 2rem;
}
p {
    color: #616161;
    font-family: "Open Sans";
}
.isbn-title {
    /* color: #343a40; */
	font-weight: 700;
	color: #757575;
}
.isbn {
    margin-top: 1.5rem;
    justify-items: center;
}
.book-title-mobile {
    display: none;
    padding: 2.5rem 2.5rem 0rem 2.5rem;
}
.book-title {
    display: block;
}
@media (max-width: 576px) {
    .description  {
        height: auto;
    }
    .book-title-mobile {
        display: block;
    }
    .book-title {
        display: none;
    }
    .left-side {
        height: auto;
        padding: 0px 30px;
    }
    .cover {
        padding-top: 0px;
    }
    .cover > img {
        width: 100%;
        height: auto;
    }
}

</style>
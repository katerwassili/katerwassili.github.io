<template>
  <div class="bild col-10 offset-1">
        <div class="content">
            <div class="image">
                <img class="img" :src="src">
            </div>
            <div class="text">
                <span class="description">{{description}}</span>
                <span class="size">{{size}}</span>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: "Bild",
    props: {
        description: String,
        size: String,
        src: String
    },
    params: true
};
</script>

<style scoped>
.bild {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.img {
    height: calc(100vh - 3rem - 55px - 60px);
    margin-top: 50px;
    margin-bottom: 10px;
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.1);
}
.text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 0px 35px 5px;
	font-family: 'Open Sans';
}
.size {
    color: gray;
    font-size: 1rem;
}
@media (max-width: 576px) {
	.img {
        width: 100%;
        height: auto;
    }
}
</style>
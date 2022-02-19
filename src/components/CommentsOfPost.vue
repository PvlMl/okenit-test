<template>
<div class="deck-wrap">
    <div class="deck">
        <div class="card">
            <div class="cardHeader">{{ header }}</div>
            <div class="cardBody">
                <p>{{ text }}</p>
            </div>
            <div class="cardFooter">{{ email }}</div>        
        </div>
    </div>
</div>
</template>
<script>
export default {
 props: {
     header: String,
     text: String,
     email: String
 }
}
</script>

<style scoped>
.deck-wrap {
    overflow: hidden;
}    
.deck {
    position: relative;
    max-width: 500px;
    width: 100%;
    margin: 40px auto;
}
.card {
    position: relative;
    background-color: #ffbfbf;
    padding: 10px;
    z-index: 5;
    border-radius: 12px;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.4);
    transition: 200ms ease-in-out;
    transform: scale(0.95);
}
.card:hover {
    z-index: 7;
    transform: scale(1);
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.5);
}


.cardHeader {
    font-size: 26px;
    color: #173a58;
    text-transform: uppercase;
    padding: 8px 10px;
    font-family: 'Roboto Condensed', sans-serif;
}
.cardBody {
    padding: 0 10px;
}
.cardBody p {
    color: #000;
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
    margin-bottom: 10px;
    font-family: Verdana, sans-serif;   
}
.cardFooter {
    font-family: Verdana, sans-serif; 
    font-size: 16px;
    text-align: right;
    line-height: 1.5;
    margin-bottom: 10px;
    color: #337AB7;  
    padding: 0 10px;
}
@media (max-width: 767px) {
    .card {
        transform: scale(1);
    }
    .card:nth-of-type(even) {
        margin-left: 40px;
        margin-right: -40px;
        margin-top: 20px;
    } 
    .card:nth-of-type(odd) {
        margin-left: -40px;
        margin-right: 40px;
        margin-top: 20px;
    }  
}
@media (max-width: 620px) {
    .card:nth-of-type(even),
    .card:nth-of-type(odd){
        margin: 20px;
    } 
}
</style>
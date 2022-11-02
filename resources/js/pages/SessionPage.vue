<template>
    <div class="body">
        <div class="container">
            <div class="header row">
                <div class="col">
                    Spotify - Session
                </div>
                <div class="col">
                    <ul>
                        <li><router-link :to="{ name: 'cookie'}">Cookie</router-link></li>
                        <li>|</li>
                        <li><router-link :to="{ name: 'session'}">Session</router-link></li>
                    </ul>
                 </div>
             </div>
            <div class="row">
                <div class="col">
                    <h1>Passa a Premium gratis per 1 mese</h1>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>Al termine dell'offerta, solo $ 9.99 al mese. Annulla in qualsiasi momento.</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <button type="button" class="btn my_btn btn-dark">VEDI I PIANI</button>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p class="small_txt">Si applicano Termini e condizioni. L'offerta di 1 mese gratis non è disponibile per gli utenti che hanno già approvato Spotify Premium.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    name: "SessionPage"
}

</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}
.body{
    background-color: rgb(68, 131, 227);
    height: 100vh;
    color: white;
    padding: 30px 
}
a{
    color: white
}
.container{
    height: 100%;
    width: 85%;
    margin: 0 auto
}
.row{
    margin-bottom: 40px;
}
.header{
    justify-content: space-between;  
    position: relative; 
}
ul{
    list-style-type: none;
    display: flex;
    position: absolute;
    top:0;
    right:0
}
li{
    margin: 0 6px;
}
h1{
    font-size: 60px;
}
p{
    font-size: 20px;
}
.my_btn{
    border-radius: 25px;
    padding: 10px;
    background-color: black;
}
.small_txt{
    font-size:10px
}
</style>

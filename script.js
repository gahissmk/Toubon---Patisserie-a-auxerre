fetch('patisserie.json')
    .then(res => res.json())
    .then(data => {

        // toute ma donnée : 
        console.log(data)
        console.log(data.nomCommercial)
        afficherHero(data)
        afficherProduits(data.produits)
        afficherServices(data.services)
        afficherTemoignages(data.temoignages)
        afficherAvantagesClients(tabClients)
    })


// role : Afficher la donnée dans le hero (H1, p et un a)
// paramtere : la donnée
// return : rien car affiche 

function afficherHero(donee) {

    document.getElementById("divHero").innerHTML +=
        `

    <h1 class="textcolor216" > ${donee.nomCommercial} </h1>
    <p class="padding-30 textcolor216">${donee.phraseAccroche}</p>

     <a href="" class="textcolor btn">${donee.texteAppelAction}</a>
    
    `
}

function afficherProduits(produits) {

    produits.forEach(produit => {

        document.getElementById("sectionProduits").innerHTML +=

            `



            

                <div class="card w-33 align-center">
                    <img class="w-75 margin-left100 border-radius11" src="${produit.imageUrl}" alt="">
                    <h3>${produit.nom}</h3>
                    <p>${produit.description}</p>

                </div>

                
        
       `

    });

}








function afficherServices(services) {



    document.getElementById("divServices").innerHTML +=
        `
        <div class="flex-inline">

                <div>
                    <div class="cardrond">

                    </div>
                    <h4>${services[0].nom}</h4>
                    <p>${services[0].description}</p>
                </div>

                <div>
                    <div class="cardrond2">

                    </div>
                    <h4>${services[1].nom}</h4>
                    <p>${services[1].description}</p>
                </div>

                <div>
                    <div class="cardrond3">

                    </div>
                    <h4>${services[2].nom}</h4>
                    <p>${services[2].description}</p>
                </div>

        </div>`




}


function afficherTemoignages(temoignages) {

    temoignages.forEach(temoignage => {

        document.getElementById("divTemoignages").innerHTML +=

            `

                <div class="card33 w-22">
                    <h5>${temoignage.prenom}</h5>
                    <h5>${temoignage.typeExperience}</h5>
                    <h5>${temoignage.note} <i class="ph-fill ph-star"></i>
                        <i class="ph-fill ph-star"></i>
                        <i class="ph-fill ph-star"></i>
                        <i class="ph-fill ph-star"></i>
                        <i class="ph-fill ph-star"></i>
                    </h5>
                    
                    <p>${temoignage.commentaire}</p>


                </div>

                

            `



    });

}



function afficherAvantagesClients(tabClients) {

    tabClients.forEach(client => {

        document.getElementById("divClients").innerHTML +=

            `<div class="flex space-around">
                <div>
                    <h5><i class="ph ph-basket"></i></h5>

                    <p>${tabClients.afficherAvantagesClients}</p>

                </div>

                <div>
                    <h5><i class="ph ph-cherries"></i></h5>
                    <p>${tabClients.afficherAvantagesClients}</p>

                </div>

                <div>
                    <h5><i class="ph ph-heart"></i></h5>
                    <p>${tabClients.afficherAvantagesClients}</p>

                </div>

                </div>`

    }
    )
}

let header = document.querySelector("header")
let hero = document.querySelector(".bg-hero")

document.addEventListener("scroll", () => {
    if (window.scrollY > hero.clientHeight) {
        header.classList.add("bg-header")
    } else {
        header.classList.remove('bg-header')
    }
})
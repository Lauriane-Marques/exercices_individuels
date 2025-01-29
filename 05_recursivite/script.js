import { grosDossierPrincipal } from "./otherFile.js"

const dossierPrincipal = {
    nom: '🗂️ Ada',
    contenu: [{
        nom: '🗂️ Projets collectifs Ada',
        contenu: [{
            nom: '🗂️ Pico8',
            contenu: [{
              nom: '📑 mariokart.p8'
            }]
          },
          {
            nom: '🗂️ Dataviz',
            contenu: [{
                nom: '📑 index.html'
              },
              {
                nom: '📑 script.js'
              }
            ]
          }
        ]
      },
      {nom: '📑 CV.pdf'},
      {
        nom: '🗂️ Projets persos',
        contenu: [{
          nom: '🗂️ Portfolio',
          contenu: [{
              nom: '📑 index.html'
            },
            {
              nom: '📑 script.js'
            }
          ]
        }]
      },
    ],
  }


function afficherDossier(dossier){
  console.log(dossier.nom)
}

//afficherDossier(dossierPrincipal)

//ETAPE 2

function afficherDossierIteratif(dossier){
  console.log(dossier.nom)
  for(const item of dossier.contenu){
    console.log(item.nom)
  }
}

//afficherDossierIteratif(dossierPrincipal)

function afficherDossierRecursif(dossier){
  if(dossier.contenu === undefined){
    return
  }
  console.log(dossier.nom)
  for(const item of dossier.contenu){
    console.log(item.nom)
    afficherDossierRecursif(item.nom)
  }
}

//afficherDossierRecursif(dossierPrincipal)

//ETAPE 3

function afficherDossierRecursifBis(dossier){
  if(dossier.contenu === undefined){
    return
}
  //console.log(dossier.nom)
  for(const item of dossier.contenu){
    console.log(item.nom)
    afficherDossierRecursifBis(item)
  }
}

afficherDossierRecursifBis(grosDossierPrincipal)

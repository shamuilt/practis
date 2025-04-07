// const btn = document.querySelector('.btn')


// const data = [{
//         name: 'Jonh',
//         city: 'Berlin',
//         number: 23
//     },
//     {
//         name: 'Jonh',
//         city: 'Berlin',
//         number: 54
//     },
//     {
//         name: 'Jonh',
//         city: 'Berlin',
//         number: 78
//     },
//     {
//         name: 'Jonh',
//         city: 'Berlin',
//         number: 18
//     },
//     {
//         name: 'Jonh',
//         city: 'Berlin',
//         number: 69
//     },
//     {
//         name: 'Jonh',
//         city: 'Berlin',
//         number: 20
//     }
// ]

// function getData() {
//     const cards = document.querySelector('.cards')

//     let text = ''
//     data.forEach((item) => {
//         text += `


//     <div class='card'>

//     <h1>${item.name}</h1>
//     <p>${item.city}</p>
//     <span>${item.number}</span>
//     </div>
//     `
//     })

//     cards.innerHTML = text
// }


// getData()

// btn.addEventListener('click', () => {
//     data.sort(sortCards)

//     function sortCards(a, b) {
//         return a.number - b.number
//     }

//     getData()

// })

///////////////////////////////////////////////////

// const btn = document.querySelector('.btn')
// const cards = [{
//         name: '"Shamil"',
//         city: ''Baku'',
//         number: 25
//     },
//     {
//         name: '"Shamil"',
//         city: ''Baku'',
//         number: 29
//     },
//     {
//         name: '"Shamil"',
//         city: ''Baku'',
//         number: 24
//     },
//     {
//         name: '"Shamil"',
//         city: ''Baku'',
//         number: 30
//     },
//     {
//         name: '"Shamil"',
//         city: ''Baku'',
//         number: 20
//     },
// ]

// function getDemo() {
//     const demo = document.querySelector('.cards') // bu html fileni catmaq ucundu

//     let text = '';
//     cards.forEach(function (items) { // bu her bir arr yazdirmaq ucundu 

//         text += `

//         <div class= "card">
//             <h1>${items.name}</h1>
//             <p>${items.city}</p>
//             <span>${items.number}</span>
//         </div>

//     `
//     })

//     demo.innerHTML = text

// }

// getDemo()

// btn.addEventListener('click', () => {
//     cards.sort(sortCards)

//     function sortCards(a, b) {
//         return a.number - b.number
//     }
//     getDemo()
// })

const btn = document.querySelector('.btn')

const data = [{
        name: "Shamil",
        city: 'Baku',
        number: 25
    },
    {
        name: "Shamil",
        city: 'Baku',
        number: 18
    },
    {
        name: "Shamil",
        city: 'Baku',
        number: 35
    },
    {
        name: "Shamil",
        city: 'Baku',
        number: 17
    },
    {
        name: "Shamil",
        city: 'Baku',
        number: 30
    },
]

function getData() {

    const cards = document.querySelector('.cards')

    let text = ''

    data.forEach((items) => {

        text += `
    
        <div class="card">
        <h1>${items.name}</h1>
        <p>${items.city}</p>
        <span>${items.number}</span>
        </div>
    
    `
    })
    cards.innerHTML = text
    console.log(text);

}

getData()


btn.addEventListener('click', () => {
    data.sort(sortCards)

    function sortCards(a, b) {
        return 0.5 - Math.random()
    }

    getData()

})
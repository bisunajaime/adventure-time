const parentList = document.getElementById('dropzone')
var sortable = new Sortable(parentList, {
    animation: 150
})
document.addEventListener('DOMContentLoaded', () => {
    const usersObj = [{
            id: 1,
            name: 'Jake the Dog',
            quote: '"You got to focus on what\'s real, man"',
            image: "images/jake.png",
        },
        {
            id: 6,
            name: 'Jake the Dog',
            quote: '"What\'s good Finn?"',
            image: "images/jake.png",
        },
        {
            id: 2,
            name: 'BMO',
            quote: '"Sometimes life is scary and dark"',
            image: "images/bmo.png",
        },
        {
            id: 3,
            name: 'Finn',
            quote: '"Is that where creativity comes from? From sad and biz?"',
            image: "images/finn.png",
        },
        {
            id: 4,
            name: 'PB',
            quote: '"Responsibility demands sacrifice."',
            image: "images/PB.png",
        },
        {
            id: 5,
            name: 'Ice King',
            quote: '"My Priceeeesss!!!"',
            image: "images/iceking.png",
        }
    ]

    function onDragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id)
        console.log({
            e
        })
        console.log("IM running")
    }

    const content = document.querySelector(".content")
    const obj = usersObj.map(x => {
        let parentNode = document.createElement("div")
        parentNode.classList.add("draggable")
        let profilePic = document.createElement("div")
        profilePic.classList.add("profile-pic")
        let profilePicTxt = document.createTextNode("(Image goes here)")
        profilePic.appendChild(profilePicTxt)
        let details = document.createElement("div")
        details.classList.add("details")
        let p = document.createElement("p")
        let pText = document.createTextNode(x.quote)
        p.appendChild(pText)
        let subDetails = document.createElement("div")
        subDetails.classList.add("sub-details")
        let subDetailId = document.createElement("h2")
        let idTxt = document.createTextNode(`(id: ${x.id.toString()})`);
        let authorNode = document.createElement("h2")
        let authorTxt = document.createTextNode(x.name)
        let imgNode = document.createElement("img")
        imgNode.classList.add("profile-img")
        imgNode.src = x.image


        authorNode.appendChild(authorTxt)
        subDetailId.appendChild(idTxt)
        subDetails.appendChild(subDetailId)
        subDetails.appendChild(authorNode)
        details.appendChild(p)
        details.appendChild(subDetails)
        parentNode.appendChild(imgNode)
        parentNode.appendChild(details)
        content.appendChild(parentNode)
        parentNode.draggable = true
        parentNode.setAttribute("id", `draggable${x.id}`)
    })
})
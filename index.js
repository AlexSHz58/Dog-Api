const getDogBtn = document.createElement("button")
getDogBtn.innerText = "Get Your Dog XD"
getDogBtn.addEventListener("click",()=> {
    async function getDog() {
        return  await fetch("https://dog.ceo/api/breeds/image/random")
             .then((res)=> {return  res.json() })
             .then((data) => {
                console.log(data)
                const img = document.createElement("img")
                img.src = data.message
                document.body.append(img)
             
            
    })
             
    }
    getDog()
})
document.body.append(getDogBtn)
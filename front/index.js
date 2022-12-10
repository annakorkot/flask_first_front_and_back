function displayData(result) {
    getElement = document.getElementById("data")

    getElement.innerHTML=result.data.map(p=>`<div>${p.name}</div>`).join("")
}

const loadData = async ()=> {
    await axios.get("http://127.0.0.1:5000/users")
    .then(res => displayData(res))
    .catch(err => console.log(err));

}
loadData()


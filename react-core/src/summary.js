fetch("placeholder.typicode.com/users")
.then(res => res.json())
.then(data => console.log(data))


const loadData = async() => {
    const res = await fetch("placeholder.typicode.com/users")
    const data = await res.json();
    return data
}



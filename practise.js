async function fetchData () {
    const res = await fetch('https://dummyjson.com/products/29');
    const data = await res.json();
    console.log(data);
}

// fetchData();


fetch('https://dummyjson.com/products/1')
    .then(res => res.json())
    .then(data => console.log(data));
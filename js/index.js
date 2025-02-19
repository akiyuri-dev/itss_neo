function tvGet(){
    let jname = document.getElementById('j-name').value;
    console.log(jname)
    var resultarea = document.getElementById('result');
    const url =
        "https://script.google.com/macros/s/AKfycbwb2SS8YewgaMBf3RbJTFqkZZKzwyCPqe5HzsoCQ5WlNJ6l5vDTfWbfe2pLwEIbdVYWzQ/exec?sheetName=tvs&cell=" + jname;
    const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
    };
    //const data = await fetchData(url, options);
    async function fetchData() {
        const data = await fetch(url, options);
        const res = await data.json();
        resultarea.style.visibility = "visible";
        resultarea.innerHTML = res;
      }
      fetchData();
}
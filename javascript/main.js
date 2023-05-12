
async function populate() {

    const requestURL = 'https://raw.githubusercontent.com/ehcrae/smiski_collection/main/resources/figures.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const data = await response.json();

    addText(data);
}

function addText(obj) {
    const section = document.querySelector('section');
    const series1 = obj.series1;
    console.log(series1[0].name);
}

populate();
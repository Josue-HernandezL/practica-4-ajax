const d = document;
const $bodyTable =d.getElementById("table-body");
const $iconEdit = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
<path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
<path d="M16 5l3 3" />
</svg>`;
async function recoveryData () {
    const response = await fetch("https://fi.jcaguilar.dev/v1/persona"); 

    const data = await response.json();
    console.log(data);

    if ($bodyTable) {
    data.forEach(Element => {
        
        $bodyTable.innerHTML += /*html*/` 
    <tr>
        <td>${Element.id}</td>
        <td>${Element.nombre}</td>
        <td>${Element.apellidoPaterno}</td>
        <td>${Element.apellidoMaterno}</td>
        <td>${Element.sexo}</td>
        <td><a class="btn" id="action-id" href="form.html?id=${Element.id}">${$iconEdit}</a></td>
    </tr>
    `;
    });
}

}
recoveryData();
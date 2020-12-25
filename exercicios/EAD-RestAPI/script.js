let getPrograms = (data) => {
  $("table").empty();
  $("table").append(`
  <thead>
    <tr>
      <td><b>Nome</b></td>
      <td><b>Tipo de programação</b></td>
      <td><b>Idioma</b></td>
    </tr>
  </thead>
  <tbody></tbody>
  `)
  for (i in data) {
    $("tbody").append(`
    <tr>
      <td>${data[i].show.name}</td>
      <td>${data[i].show.type}</td>
      <td>${data[i].show.language}</td>
      <td>
        <button idEpisodies=${data[i].show.id} id="buttonEpisodies" class="btn btn-dark">Buscar</button>
      </td>
    </tr>
  `)
  }
}

let getEpisodies = (data) => {
  $("table").empty();
  $("table").append(`
  <thead>
    <tr>
      <td><b>Capítulo</b></td>
      <td><b>Temporada</b></td>
      <td><b>Data de exibição</b</td>
    </tr>
  </thead>
  <tbody></tbody>
  `)
  for (i in data) {
    $("tbody").append(`
      <tr>
        <td>${data[i].number}</td>
        <td>${data[i].season}</td>
        <td>${data[i].airdate}</td>
      </tr>
    `)
  }
}


$(document).on("click", "#searchButton", (event) => {
  event.preventDefault();

  let programSearch = $("#programa").val()

  $.ajax({
    url: `http://api.tvmaze.com/search/shows?q=${programSearch}`,
    type: "GET",
    success: function (data) {
      if (data.length === 0) {
        alert("Nenhum programa encontrado!")
      }
      getPrograms(data)
    }
  })
})

$(document).on("click", "#buttonEpisodies", function () {

  let idEpisodies = $(this).attr('idEpisodies')

  $.ajax({
    url: `http://api.tvmaze.com/shows/${idEpisodies}/episodes`,
    type: "GET",
    success: function (data) {
      getEpisodies(data)
    }
  })
})
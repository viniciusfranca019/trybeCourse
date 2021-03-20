let estadosDoBrasil = ['bahia', 'minas gerais', 'sergipe', 'espirito santo'];
let seletor = document.getElementById('estado');
for (let i = 0; i < estadosDoBrasil.length; i += 1) {
  let estado = document.createElement('option');
  estado.value = estadosDoBrasil[i];
  estado.name = estadosDoBrasil[i];
  estado.text = estadosDoBrasil[i];
  seletor.options.add(estado, i + 1);
}

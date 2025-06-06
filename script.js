//const {
//display,
//} = require("html2canvas/dist/types/css/property-descriptors/display");

let cli = document.getElementById("cli");
let end = document.getElementById("end");
let bai = document.getElementById("bai");
let cida = document.getElementById("cida");
let fone = document.getElementById("fone");
let data = document.getElementById("data");

function adicionar() {
  const cliente = document.getElementById("input-nome-cliente").value;
  const endereco = document.getElementById("input-endereco").value;
  const bairro = document.getElementById("input-bairro").value;
  const cidade = document.getElementById("input-cidade").value;
  const telefone = document.getElementById("input-telefone").value;
  let date = new Date()

  cli.innerHTML = "Cliente:" + cliente;
  end.innerHTML = "Endereço:" + endereco;
  bai.innerHTML = "Bairro:" + bairro;
  cida.innerHTML = "Cidade:" + cidade;
  fone.innerHTML = "Telefone:" + telefone;
  data.innerHTML = "Data:" + date.toLocaleDateString();

  if (
    document.getElementById("input-nome-cliente").value == "" ||
    document.getElementById("input-endereco").value == "" ||
    document.getElementById("input-bairro").value == "" ||
    document.getElementById("input-cidade").value == "" ||
    document.getElementById("input-telefone").value == "" ||
    document.querySelector("#input-quant").value == "" ||
    document.querySelector("#input-descri").value == "" ||
    document.querySelector("#input-unid").value == ""
  ) {
    alert("Preencha os campos!");
  } else {
    let quant = document.querySelector("#input-quant").value;
    let descri = document.querySelector("#input-descri").value;
    let unid = document.querySelector("#input-unid").value;

    let quantLi = document.createElement("li");
    let descriLi = document.createElement("li");
    let unidLi = document.createElement("li");
    let totalLi = document.createElement("li");
    let totalQuantUnid = quant * unid;

    quantLi.innerHTML = quant;
    descriLi.innerHTML = descri;
    unidLi.innerHTML = unid;
    totalLi.innerHTML = totalQuantUnid.toFixed(2);

    document.querySelector("#ulq").appendChild(quantLi);
    document.querySelector("#uldes").appendChild(descriLi);
    document.querySelector("#uluni").appendChild(unidLi);
    document.querySelector("#ultot").appendChild(totalLi);

    //codigo para somar as li

    const ultot = document.querySelector("#ultot").getElementsByTagName("li");
    let soma = 0;

    for (let i = 0; i < ultot.length; i++) {
      // Obtém o valor do li
      const valor = parseFloat(ultot[i].innerText, 20);

      // Adiciona o valor à soma
      soma += valor;
    }
    document.querySelector("#valor-total2").innerText = soma.toFixed(2);
    //document.querySelector("#input-quant").value = "";
    //document.querySelector("#input-descri").value = "";
    //document.querySelector("#input-unid").value = "";
  }
}

function deletar() {
  let ultota = document.querySelector("#ultot");
  let uluni = document.querySelector("#uluni");
  let uldes = document.querySelector("#uldes");
  let ulqu = document.querySelector("#ulq");

  const lis = ultota.lastChild;
  const lis2 = uluni.lastChild;
  const lis3 = uldes.lastChild;
  const lis4 = ulqu.lastChild;

  if (lis && lis.tagName === "LI") {
    ultota.removeChild(lis);
  }

  if (lis2 && lis2.tagName === "LI") {
    uluni.removeChild(lis2);
  }

  if (lis3 && lis3.tagName === "LI") {
    uldes.removeChild(lis3);
  }

  if (lis4 && lis4.tagName === "LI") {
    ulqu.removeChild(lis4);
  }

  const ultot = document.querySelector("#ultot").getElementsByTagName("li");
  let soma = 0;

  for (let i = 0; i < ultot.length; i++) {
    // Obtém o valor do li
    const valor = parseFloat(ultot[i].innerText, 20);

    // Adiciona o valor à soma
    soma += valor;
  }
  document.querySelector("#valor-total2").innerText = soma;
}

// codigo para criar pdf

/*function criarpdf() {
  const botaoo = window.document.getElementById("botao");
  let conteudo = window.document.getElementById("pdf").innerHTML;

  let estilo = "<style>";
  estilo += "#pdf {width: 100%; font: 25px sans-serif;}";
  estilo +=
    "#pdf {border: solid 2px #888; padding: 4px 8px; text-align: center;}";
  estilo += "</style>";

  const win = window.open("", "", "height=700,width=700");

  win.document.write("<html><head>");
  win.document.write("<title>valdemir araujo pdfs</title>");
  win.document.write(estilo);
  win.document.write("</head><body>");
  win.document.write(conteudo);
  win.document.write("</body></html>");

  win.print();
}*/

function criarpdf() {
  document.getElementById("preenchemento-dados").style.display = "none";

  window.print();
  window.location.reload();
}

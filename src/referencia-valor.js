const pessoa = {
  nome: "luiz",
  idade: 24,
};

// pessoa.nome =
// const meuArray = [] -> meuArray.push

// referencia -> {} , []
// valor -> number, boolean, string

const logaNomeDaPessoa = (param) => {
  param.nome = "luiz fernando";
  console.log(param.nome);
};

logaNomeDaPessoa(pessoa);
console.log(pessoa);

const hojeEhTerca = true;

const logaSeHojeEhTerca = (param) => {
  param = false;
  console.log(param);
};

logaSeHojeEhTerca(hojeEhTerca);
console.log(hojeEhTerca);

const luiz = () => {
  return {
    nome: "luiz",
  };
};

// referencia na memoria -> a12321xfasfmoadq
const luiz1 = (luiz().nome = "luiz fernando");

// referencia na memoria -> dasodu19837987da
const luiz2 = (luiz().nome = "luizzz");

console.log(luiz1);
console.log(luiz2);

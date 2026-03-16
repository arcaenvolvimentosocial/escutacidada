// Tipos para os dados dos métodos
export interface Metodo {
  id: string;
  nome: string;
  familia: string;
  tipologia: string;
  descricao: string;
  objetivo: string;
  quandoUsar: string;
  quandoNaoUsar: string;
  publicoAdequado: string;
  vantagens: string;
  riscos: string;
  nivelEsforco: string;
  equipeNecessaria: string;
  tamanhoGrupo: string;
  entregaveis: string;
  duracao: string;
  modalidade: string;
  url?: string;
  anexo?: string;
}

export interface PassoMetodo {
  id: string;
  metodoId: string;
  passo: string;
  nomePasso: string;
  descricao: string;
  resultado: string;
}

// Parse dos dados do CSV
export const parseMetodo = (row: any): Metodo => {
  return {
    id: row['ID do Método'] || '',
    nome: row['Nome do Método'] || '',
    familia: row['Etapa Design (IDEO)'] || '',
    tipologia: row['Tipologia (OCDE)'] || '',
    descricao: row['Descrição Curta'] || '',
    objetivo: row['Objetivo'] || '',
    quandoUsar: row['Quando usar'] || '',
    quandoNaoUsar: row['Quando Não Usar'] || '',
    publicoAdequado: row['Público Adequado'] || '',
    vantagens: row['Vantagens'] || '',
    riscos: row['Riscos e Limitações'] || '',
    nivelEsforco: row['Nível de Esforço'] || '',
    equipeNecessaria: row['Habiliades Necessárias'] || '',
    tamanhoGrupo: row['Tamanho do Grupo'] || '',
    entregaveis: row['Entregáveis'] || '',
    duracao: row['Duração'] || '',
    modalidade: row['Formato'] || '',
    url: row['URL'] || '',
    anexo: row['Anexo'] || '',
  };
};

export const parsePasso = (row: any): PassoMetodo => {
  return {
    id: row['ID'] || '',
    metodoId: row['Método'] || '',
    passo: row['Passos'] || '',
    nomePasso: row['Nome do Passo'] || '',
    descricao: row['Descrição'] || '',
    resultado: row['Resultado'] || '',
  };
};

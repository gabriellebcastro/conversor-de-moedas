export interface Convert {
  data: Date;
  valor: number;
  moedaOrigem: string;
  resultado: number;
  moedaDestino: string;
  taxa: number;
  valorDolar?: number;
}

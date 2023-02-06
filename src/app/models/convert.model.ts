export interface Convert {

}

export interface ConvertConstructor{
  new (moedaDe?: string,
    moedaPara?: string,
    valor?: number): Convert;
  clone(): Convert;
}

export var Convert: ConvertConstructor;

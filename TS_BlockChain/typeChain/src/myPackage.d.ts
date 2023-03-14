interface Config {
  url: string;
}
declare module "myPackage" {
  //타입에 대한 설명
  function init(config: Config): boolean;
  function exit(code: number): number;
  
}
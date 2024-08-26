Anotações de estudos

URL (Uniform Resource Locator): https://pokeapi.co/api/v2/pokemon/1/
Composição da URL: ${IP(endereço)/Path(caminho do recurso)}

https://pokeapi.co = IP adress, que é convertido em um ID numérico por um DNS
api/v2/pokemon/1/ = Path, caminho que indica o recurso desejado na requisição

Pesquisar um site no navegador é, por padrão, uma requisição com método GET

Métodos: GET | POST | PUT | DELETE | PATCH


PASSAGEM DE PARÂMETRO PARA API
https://pokeapi.co/api/v2/pokemon/1/ => Através do próprio Path

https://pokeapi.co/api/v2/pokemon?offset=2&limit=2 => Através de query string
? => Indica o início de um query string
offset=2 => Chave e valor passados para filtragem
& => Indica união chaves para fazer mais filtragens (associação lógica E)

HEADERS
Request Headers => Apresenta as configurações da requisição da API
Ex: 
accept-language:
pt-BR,
pt;q=0.9,
en-US;q=0.8,
en;q=0.7

Essa configuração indica as linguagens aceitas pela requisição em ordem de prioridade: pt-BR em primeiro, pt com prioridade 0.9 etc

Response Headers => Apresenta as configurações da resposta da API
Ex:


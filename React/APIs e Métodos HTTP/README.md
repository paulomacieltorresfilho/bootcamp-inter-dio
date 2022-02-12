# O que é API
- Application Program Interface
- Pense em API como a camada que esconde as regras e possibilita uma comunicação externa
- Facilita muito a integração
- Existem várias metodologias (ou arquiteturas),
como por exemplo: SOA, Rest, uso por meio de SDK

## Rest X Restful
- Rest: Metodologia
- Restful: API que se utiliza da metodologia Rest

### HTTP Methods
- Get: Sempre obtém os dados
- Post: Cria um novo registro ou Recurso
- Put: Atualiza um registro existente
- Delete: Remove um registro existente

### Status Codes

Geralmente:
- 2x.... = Sucesso
- 4x.... = Erro no cliente
- 5x.... = Erro server side

**Status Comuns:**
- 200 = OK
- 401 = Unauthorized
- 403 = Forbiden
- 404 = Not found
- 500 = Interal Server Error
- 504 = Gateway Timeout
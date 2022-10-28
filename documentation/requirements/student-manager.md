# Student Manager


## Parâmetros
+ student_data_file (XLSX)


## TODO

1. [ ] Receber uma requisição do tipo **GET** na rota **/api/manager/check-file/{file_name}**;
2. [ ] Receber uma requisição do tipo **POST** na rota **/api/manager/file-processor/{file}**;


## Exceções

1. [ ] Retorna error **404** se não existir a API;
2. [ ] Retorna error **400** se não for enviado o parâmetro;
3. [ ]  Retorna error **400** se o cep enviado for inválido;
4. [ ]  Retorna error **404** se não existir o **recurso** no arquivo;
5. [ ]  Retorna error **500** se não for possível acessar o arquivo;   

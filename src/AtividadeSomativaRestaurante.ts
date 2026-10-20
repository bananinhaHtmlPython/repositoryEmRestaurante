//- Neste restaurante existem diversos pratos. Cada prato tem um nome, uma data de validade e uma nacionalidade.
//- No restaurante trabalham funcionários contratados e freelancers
//- O sistema precisa ter informações sobre  o nome, o sexo, data de contratação, CPF e RG de todos os funcionários
//- Freelancers trabalham por contrato temporário, ou seja, possuem uma data limite de contrato.
//- Funcionários contratados possuem salario fixo enquanto freelancers possuem salario hora
//- O sistema precisa emitir um relatório de todos os funcionários trabalhando
//- O sistema deve mostrar relatórios de pratos, funcionários e entregas.
//- A partir do numero de horas trabalhadas o sistema deve emitir um relatório com o salario de cada funcionário
//- Será necessário emitir um relatório com data e hora de saída da entrega, o numero do pedido e o endereço de entrega.
//- Para um determinado funcionário freelancer é preciso saber se o contrato do mesmo está ativo ou não assim como saber
//  quanto tempo falta para o contrato do funcionário finalizar

/* Camada repositories */

class pratoRepository {

    private pratos:Prato[] = [];

    //adiciona o livro no banco de dados(array pratos)
    salvar(prato:Prato):void{
        // adicionar no array
        this.pratos.push(
            {
                nome: prato.nome,
                dataValidade: prato.dataValidade,
                nacionalidade: prato.nacionalidade,
            }
        )
    };

    //obter todos os pratos que foram salvos
    mostrarRelatorioPrato():void{
        console.log(this.pratos)
    }
}

class entregaRepository {

    private entregas:Entrega[] = [];

    //adiciona o livro no banco de dados(array entregas)
    salvar(entrega:Entrega):void{
        // adicionar no array
        this.entregas.push(
            {
                dataSaida: entrega.dataSaida,
                horaSaida: entrega.horaSaida,
                numeroPedido: entrega.numeroPedido,
                endereco: entrega.endereco,
            }
        )
    };

    //obter todos os entregas que foram salvos
    mostrarRelatorioPrato():void{
        console.log(this.entregas)
    }
}

class funcionarioRepository {

    private funcionarios:Funcionario[] = [];

    //adiciona o livro no banco de dados(array pratos)
    salvar(funcionario:Funcionario):void{
        // adicionar no array
        this.funcionarios.push(
            {
                nome: funcionario.nome,
                sexo: funcionario.sexo,
                dataContratacao: funcionario.dataContratacao,
                cpf: funcionario.cpf,
                rg: funcionario.rg,
            }
        )
    };

    //obter todos os funcionarios que foram salvos
    mostrarRelatorioFuncionario():void{
        console.log(this.funcionarios)
    }
}

class contratadoRepository {

    private contratados:Contratado[] = [];

    //adiciona o livro no banco de dados(array contratados)
    salvar(contratado:Contratado):void{
        // adicionar no array
        this.contratados.push(
            {
                salario: contratado.salario,
                dataValidade: contratado.dataValidade,
                nacionalidade: contratado.nacionalidade,
            }
        )
    };

    //obter todos os contratados que foram salvos
    mostrarRelatorio():void{
        console.log(this.contratados)
    }

    calcularSalario(){

    }
}

class freelancerRepository {

    private freelancers:Freelancer[] = [];

    //adiciona o livro no banco de dados(array freelancers)
    salvar(freelancer:Freelancer):void{
        // adicionar no array
        this.freelancers.push(
            {
                salarioHora: freelancer.salarioHora,
                dataLimiteContrato: freelancer.dataLimiteContrato,
                nacionalidade: freelancer.nacionalidade,
            }
        )
    };

    //obter todos os freelancers que foram salvos
    mostrarRelatorio():void{
        console.log(this.freelancers)
    }

    calcularSalarioHora(){

    }
    
    calcularVencimentoContrato(){

    }

    mostrarTempoRestanteContrato(){

    }
}






//========================
/*     Camada models    */
//========================
class Prato{
    nome: string;
    dataValidade: string;
    nacionalidade: string;

    constructor(nome: string, dataValidade: string, nacionalidade: string){
        this.nome = nome;
        this.dataValidade = dataValidade;
        this.nacionalidade = nacionalidade;
    }
}

class Entrega{
    dataSaida: string;
    horaSaida: string;
    numeroPedido: number;
    endereco: string;

    constructor(dataSaida: string, horaSaida: string, numeroPedido: number, endereco: string,){
        this.dataSaida = dataSaida;
        this.horaSaida = horaSaida;
        this.numeroPedido = numeroPedido;
        this.endereco = endereco
    }
}

class Funcionario{
    nome: string;
    sexo:string;
    dataContratacao: string;
    cpf: string;
    rg: string;

    constructor(nome: string, sexo:string, dataContratacao: string, cpf: string, rg: string){
        this.nome = nome;
        this.sexo = sexo;
        this.dataContratacao = dataContratacao;
        this.cpf = cpf;
        this.rg = rg
    }
}

class Contratado extends Funcionario{
    salario: number;
    
    constructor(nome: string, sexo:string, dataContratacao: string, cpf: string, rg: string, salario: number){
        //super(nome: string; sexo:string; dataContratacao: string; cpf: string; rg: string);

    }
}

class Freelancer{
    
    salarioHora: number;
    dataLimiteContrato: string;

    constructor(nome: string, sexo:string, dataContratacao: string, cpf: string, rg: string, salarioHora: number, dataLimiteContrato: string){
        //super(nome: string; sexo:string; dataContratacao: string; cpf: string; rg: string);
        this.nome = nome;
        this.sexo = sexo;
        this.dataContratacao = dataContratacao;
        this.cpf = cpf;
        this.rg = rg
    }
}
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

//========================================================================
/*                           Camada repositories                        */
//========================================================================

class pratoRepository {

    private pratos:Prato[] = [];

    //adiciona o livro no banco de dados(array pratos)
    cadastrar(prato:Prato):void{
        // adicionar no array
        this.pratos.push(
            {
                nome: prato.nome,
                dataValidade: prato.dataValidade,
                nacionalidade: prato.nacionalidade,
                numeroPedido: prato.numeroPedido
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
    emitirRelatorioEntrega():void{
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
                nome: contratado.nome,
                sexo: contratado.sexo,
                dataContratacao: contratado.dataContratacao,
                cpf: contratado.cpf,
                rg: contratado.rg,
                salario: contratado.salario,
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
                nome: freelancer.nome,
                sexo: freelancer.sexo,
                dataContratacao: freelancer.dataContratacao,
                cpf: freelancer.cpf,
                rg: freelancer.rg,
                salarioHora: freelancer.salarioHora,
                dataLimiteContrato: freelancer.dataLimiteContrato,
                horasTrabalhadas: freelancer.horasTrabalhadas
            }
        )
    };

    //obter todos os freelancers que foram salvos
    mostrarRelatorio():void{
        console.log(this.freelancers)
    }

    calcularSalarioHora(salarioHora:number, horasTrabalhadas: number): number{
        return salarioHora * horasTrabalhadas
    }
    
    mostrarSalario():void{
        this.calcularSalarioHora
    }

    calcularVencimentoContrato(dataContratacao:number, dataLimiteContrato: number): number{
        return dataContratacao - dataLimiteContrato
    }

    mostrarTempoRestanteContrato(tempoRestanteContrato:string): string{
        return tempoRestanteContrato = '26 dias'
    }
}

//========================================================================
/*                               Camada models                          */
//========================================================================
class Prato{
    nome: string;
    dataValidade: string;
    nacionalidade: string;
    numeroPedido: number;

    constructor(nome: string, dataValidade: string, nacionalidade: string, numeroPedido: number){
        this.nome = nome;
        this.dataValidade = dataValidade;
        this.nacionalidade = nacionalidade;
        this.numeroPedido = numeroPedido;
    }
}

class Entrega{
    dataSaida: string;
    horaSaida: number;
    numeroPedido: number;
    endereco: string;

    constructor(dataSaida: string, horaSaida: number, numeroPedido: number, endereco: string,){
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
        super(nome, sexo, dataContratacao, cpf, rg);
        this.salario = salario
    }
}

class Freelancer extends Funcionario{
    salarioHora: number;
    dataLimiteContrato: string;
    horasTrabalhadas: number;
    constructor(nome: string, sexo:string, dataContratacao: string, cpf: string, rg: string, salarioHora: number, dataLimiteContrato: string, horasTrabalhadas: number){
        super(nome, sexo, dataContratacao, cpf, rg);
        this.salarioHora = salarioHora;
        this.dataLimiteContrato = dataLimiteContrato;
        this.horasTrabalhadas = horasTrabalhadas
    }
}

/* ============== Teste ================ */

const espaguete = new Prato(
    'Espaquete',
    '22/10/2026',
    'Italiana'
);

const cookies = new Prato(
    'Cookies com gotas de chocolate',
    '30/10/2026',
    'Estadunidense'
);

const boloFrances = new Prato(
    'Fraisier',
    '23/10/2026',
    'Francesa'
);

const boloJapones = new Prato(
    'Ichigo Shortcake',
    '23/10/2026',
    'Japonesa'
);

const banana = new Prato(
    'Banana nanica',
    '24/10/2026',
    'Brasileira'
);

const Ramen = new Prato(
    'Shoyu Ramen (醤油ラーメン)',
    '24/10/2026',
    'Japonesa'
);

const parmegiana = new Prato(
    'Parmegiana de frango, carne ou tilápia',
    '22/10/2026',
    'Italiana'
);

const ensopadoPerpetuo = new Prato(
    'pot-au-feu de perpignan',
    '20/10/2526',
    'Francesa'
);

const sopaDiv = new Prato(
    'Sopa de D, I e Vs',
    '22/10/2026',
    'Inglesa'
);

const pizzaAranha = new Prato(
    'Pizza do Homem Aranha',
    '23/10/2026',
    'Estados Unidos'
);

// objeto que representa a tabela livros
const tabelapratos = new pratoRepository()


//salva e consulta todos os livros cadastrados
tabelapratos.cadastrar(espaguete)
tabelapratos.mostrarRelatorioPrato()

tabelapratos.cadastrar(cookies)
tabelapratos.mostrarRelatorioPrato()

tabelapratos.cadastrar(boloFrances)
tabelapratos.mostrarRelatorioPrato()

tabelapratos.cadastrar(boloJapones)
tabelapratos.mostrarRelatorioPrato()

tabelapratos.cadastrar(banana)
tabelapratos.mostrarRelatorioPrato()

tabelapratos.cadastrar(Ramen)
tabelapratos.mostrarRelatorioPrato()

tabelapratos.cadastrar(parmegiana)
tabelapratos.mostrarRelatorioPrato()

tabelapratos.cadastrar(ensopadoPerpetuo)
tabelapratos.mostrarRelatorioPrato()

tabelapratos.cadastrar(sopaDiv)
tabelapratos.mostrarRelatorioPrato()

tabelapratos.cadastrar(pizzaAranha)
tabelapratos.mostrarRelatorioPrato()
//=========================================================================

const entregaAranha = new Entrega(
    '20/10/2026',
    22,
    10,
    'nova iorque, maranhão'
)

const tabelaEntrega = new entregaRepository()
tabelaEntrega.salvar(entregaAranha)
tabelaEntrega.emitirRelatorioEntrega()

//=========================================================================

const Claudinei = new Freelancer(
    'Claudinei Vincius De Almeida',
    'Macho',
    '20/10/2026',
    '22.222.222-2',
    '222.222.222-22',
    30,
    '25/10/2026',
    180,
);


const tabelaFreelancers = new freelancerRepository()
tabelaFreelancers.salvar(Claudinei)
tabelaFreelancers.calcularSalarioHora(Claudinei.salarioHora,Claudinei.horasTrabalhadas)
//tabelaFreelancers.calcularVencimentoContrato(Claudinei.dataContratacao, Claudinei.dataLimiteContrato)
//tabelaFreelancers.mostrarRelatorio(Claudinei)
tabelaFreelancers.mostrarSalario()
//tabelaFreelancers.mostrarTempoRestanteContrato(Claudinei)

//============================================================================

const Boolean = new Contratado(
    'Bianca "Boolean" de Orleans',
    'Femea',
    '20/04/1987',
    '010.101.110-11',
    '11.011.101-01',
    2000
)

const homemAranha = new Contratado(
    'Pedro Parker dos Santos Silva',
    'Homem',
    '20/04/1930',
    '444.444.444-44',
    '12.400.836-32',
    1000
)

const tabelaContratados = new contratadoRepository()

tabelaContratados.salvar(Boolean)
tabelaContratados.mostrarRelatorio()

tabelaContratados.salvar(homemAranha)
tabelaContratados.mostrarRelatorio()
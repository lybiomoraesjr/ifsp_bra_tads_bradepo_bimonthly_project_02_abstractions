# Component Interface Pattern

[![npm version](https://badge.fury.io/js/%40lybioit%2Fcomponent-interface-pattern.svg)](https://badge.fury.io/js/%40lybioit%2Fcomponent-interface-pattern)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Padrão de Interface de Componente - Abstrações para desenvolvimento de componentes reutilizáveis. Projeto da disciplina **BRADEPO** (Desenvolvimento de Componentes) do curso de Tecnologia em Análise e Desenvolvimento de Sistemas do **IFSP-BRA**.

## 📋 Sobre o Projeto

Este pacote implementa o **Padrão de Interface de Componente** seguindo a metodologia **Beyond** para desenvolvimento de software orientado a componentes. É parte do projeto bimestral da disciplina BRADEPO, onde cada aluno desenvolve componentes individuais que posteriormente serão acoplados em um projeto final.

### 🎯 Objetivos

- Implementar o Padrão de Interface de Componente como modelo de projeto
- Aplicar os Princípios SOLID na implementação dos elementos internos
- Criar componentes reutilizáveis com TypeScript
- Publicar componentes em repositório npm para uso em outros projetos

## 🚀 Instalação

```bash
npm install @lybioit/component-interface-pattern
```

## 📦 Estrutura do Pacote

```
src/
├── provided/           # Interfaces Fornecidas
│   ├── ComponentInterface.ts    # Interface principal do componente
│   └── InterfacePort.ts         # Porto de interface
└── required/           # Interfaces Requeridas
    ├── PortOutbox.ts            # Caixa de saída base
    ├── StandardPortOutbox.ts    # Caixa de saída padrão
    ├── BroadcastPortOutbox.ts   # Caixa de saída broadcast
    └── NonComponentPortOutbox.ts # Caixa de saída não-componente
```

## 🔧 Como Usar

### 1. Importando as Abstrações

```typescript
import { 
  ComponentInterface, 
  InterfacePort, 
  PortOutbox,
  StandardPortOutbox,
  BroadcastPortOutbox,
  NonComponentPortOutbox 
} from '@lybioit/component-interface-pattern';
```

### 2. Criando um Componente

```typescript
import { ComponentInterface, InterfacePort } from '@lybioit/component-interface-pattern';

// Implementando um porto específico
class MyInterfacePort extends InterfacePort {
  public initialize(): void {
    this.id = 'my-port';
    // Configuração específica do porto
  }
}

// Implementando um componente
class MyComponent extends ComponentInterface {
  private myPort: MyInterfacePort;

  constructor() {
    super();
    this.myPort = new MyInterfacePort();
    this.ports.push(this.myPort);
  }

  public initialize(): void {
    this.id = 'my-component';
    this.myPort.initialize();
  }
}
```

### 3. Conectando Componentes

```typescript
// Criando componentes
const componentA = new MyComponent();
const componentB = new MyComponent();

// Inicializando
componentA.initialize();
componentB.initialize();

// Conectando através de portos
componentA.connectToPort(componentB.getPort('my-port'), 'my-port');
```

### 4. Usando Diferentes Tipos de Outbox

```typescript
import { StandardPortOutbox, BroadcastPortOutbox } from '@lybioit/component-interface-pattern';

// Outbox padrão - conecta a um único componente
const standardOutbox = new StandardPortOutbox();

// Outbox broadcast - conecta a múltiplos componentes
const broadcastOutbox = new BroadcastPortOutbox();
```

## 🏗️ Arquitetura

### Padrão de Interface de Componente

O pacote implementa o padrão que consiste em:

1. **ComponentInterface**: Classe abstrata que representa a interface principal do componente
2. **InterfacePort**: Classe abstrata para portos de interface que gerenciam conexões
3. **PortOutbox**: Classe abstrata para caixas de saída que invocam operações externas

### Princípios SOLID Aplicados

- **S** - Single Responsibility: Cada classe tem uma responsabilidade específica
- **O** - Open/Closed: Classes abertas para extensão, fechadas para modificação
- **L** - Liskov Substitution: Subclasses podem substituir suas classes base
- **I** - Interface Segregation: Interfaces específicas para cada tipo de funcionalidade
- **D** - Dependency Inversion: Dependências de abstrações, não de implementações

## 📚 Exemplos de Uso

### Exemplo 1: Sistema de Notificações

```typescript
import { ComponentInterface, InterfacePort } from '@lybioit/component-interface-pattern';

class NotificationPort extends InterfacePort {
  public initialize(): void {
    this.id = 'notification-port';
  }

  public sendNotification(message: string): void {
    console.log(`Notificação: ${message}`);
  }
}

class NotificationComponent extends ComponentInterface {
  private notificationPort: NotificationPort;

  constructor() {
    super();
    this.notificationPort = new NotificationPort();
    this.ports.push(this.notificationPort);
  }

  public initialize(): void {
    this.id = 'notification-component';
    this.notificationPort.initialize();
  }

  public notify(message: string): void {
    const port = this.getPort('notification-port') as NotificationPort;
    if (port) {
      port.sendNotification(message);
    }
  }
}
```

### Exemplo 2: Sistema de Logging

```typescript
import { ComponentInterface, InterfacePort } from '@lybioit/component-interface-pattern';

class LoggingPort extends InterfacePort {
  public initialize(): void {
    this.id = 'logging-port';
  }

  public log(level: string, message: string): void {
    console.log(`[${level}] ${message}`);
  }
}

class LoggingComponent extends ComponentInterface {
  private loggingPort: LoggingPort;

  constructor() {
    super();
    this.loggingPort = new LoggingPort();
    this.ports.push(this.loggingPort);
  }

  public initialize(): void {
    this.id = 'logging-component';
    this.loggingPort.initialize();
  }

  public logInfo(message: string): void {
    const port = this.getPort('logging-port') as LoggingPort;
    if (port) {
      port.log('INFO', message);
    }
  }
}
```

## 🧪 Testando

Para testar o pacote em seu projeto:

```typescript
// Teste básico de importação
import { ComponentInterface } from '@lybioit/component-interface-pattern';

// Verificar se a classe está disponível
console.log(typeof ComponentInterface); // 'function'
```

## 📖 Documentação da API

### ComponentInterface

Classe abstrata base para todos os componentes.

#### Métodos Principais:
- `initialize(): void` - Inicializa o componente
- `getId(): string` - Retorna o ID do componente
- `getPort(id: string): InterfacePort | undefined` - Recupera um porto específico
- `connectToPort(externalPort: InterfacePort, portId: string): void` - Conecta a um porto externo
- `disconnectPort(portId: string): void` - Desconecta um porto

### InterfacePort

Classe abstrata para portos de interface.

#### Métodos Principais:
- `initialize(): void` - Inicializa o porto
- `getId(): string` - Retorna o ID do porto
- `connect(externalPort: InterfacePort): void` - Conecta a um porto externo
- `disconnect(): void` - Desconecta o porto

### PortOutbox

Classe abstrata para caixas de saída.

#### Métodos:
- `disconnect(): void` - Desconecta a caixa de saída

## 🔄 Versionamento

Este projeto segue [Semantic Versioning](http://semver.org/). Para versões disponíveis, veja as [tags neste repositório](https://github.com/lybiomoraesjr/ifsp_bra_tads_bradepo_bimonthly_project_02_abstractions/tags).

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍🎓 Autor

**Lybio Moraes Junior**
- Email: j.lybio@aluno.ifsp.edu.br
- GitHub: [@lybiomoraesjr](https://github.com/lybiomoraesjr)

## 🏫 Instituição

**IFSP - Instituto Federal de São Paulo**
- Campus: Bragança Paulista
- Curso: Tecnologia em Análise e Desenvolvimento de Sistemas
- Disciplina: BRADEPO - Desenvolvimento de Componentes
- Semestre: 2025/1

## 🤝 Contribuindo

Este é um projeto acadêmico desenvolvido como parte da disciplina BRADEPO. Contribuições são bem-vindas através de issues e pull requests.

## 📞 Suporte

Para dúvidas ou problemas, abra uma [issue](https://github.com/lybiomoraesjr/ifsp_bra_tads_bradepo_bimonthly_project_02_abstractions/issues) no GitHub.

---

**Desenvolvido com ❤️ para a disciplina BRADEPO do IFSP-BRA** 
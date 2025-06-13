import { InterfacePort } from './InterfacePort';

/**
 * ComponentInterface (Interface de Componente)
 * 
 * Implementação abstrata do elemento da estrutura que agrega os elementos 
 * do subsistema de interface de componente.
 * 
 * Esta classe serve como ponto central para gerenciar múltiplos portos
 * de interface, permitindo que um componente se comunique com diversos
 * outros componentes através de diferentes portos.
 * 
 * @abstract Esta classe deve ser estendida para implementar comportamentos específicos
 */
export abstract class ComponentInterface {
    /** Identificador único do componente */
    protected id: string = '';
    
    /** Lista de portos de interface associados ao componente */
    protected ports: InterfacePort[] = [];

    /**
     * Construtor da interface de componente.
     * 
     * Inicializa a lista de portos vazia.
     */
    constructor() {
        this.ports = [];
    }

    /**
     * Inicializa a interface de componente.
     * 
     * Este método deve ser implementado pelas classes filhas para configurar
     * o estado inicial do componente e seus portos.
     * 
     * @abstract
     */
    public abstract initialize(): void;
    
    /**
     * Retorna o identificador único do componente.
     * 
     * @returns O ID do componente
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Recupera um porto específico pelo seu identificador.
     * 
     * Busca na lista de portos um porto que corresponda ao ID fornecido.
     * 
     * @param id - O identificador do porto a ser recuperado
     * @returns O porto encontrado ou undefined se não existir
     */
    public getPort(id: string): InterfacePort | undefined {
        return this.ports.find(port => port.getId() === id);
    }

    /**
     * Conecta um porto externo a um porto específico do componente.
     * 
     * Estabelece uma conexão entre um porto externo e um porto interno
     * identificado pelo portId.
     * 
     * @param externalPort - O porto externo ao qual se conectar
     * @param portId - O identificador do porto interno
     */
    public connectToPort(externalPort: InterfacePort, portId: string): void {
        const selectedPort = this.getPort(portId);
        if (selectedPort) {
            selectedPort.connect(externalPort);
        }
    }

    /**
     * Conecta um porto externo ao componente.
     * 
     * Método geral para estabelecer conexões com portos externos.
     * 
     * @param externalPort - O porto externo ao qual se conectar
     */
    public connect(externalPort: InterfacePort): void {
        // Método geral de conexão
    }

    /**
     * Conecta uma referência não-componente a um porto específico.
     * 
     * Permite conexões com objetos que não são portos de interface,
     * como funções, objetos ou outras referências externas.
     * 
     * @param externalReference - A referência externa não-componente
     * @param portId - O identificador do porto interno
     * @throws Error quando o método não está implementado
     */
    public connectNonComponent(externalReference: any, portId: string): void {
        // TODO Método auto-gerado
        throw new Error("Método 'connectNonComponent' não implementado");
    }

    /**
     * Desconecta um porto externo de um porto específico do componente.
     * 
     * Remove a conexão entre um porto externo e um porto interno
     * identificado pelo portId.
     * 
     * @param externalPort - O porto externo do qual se desconectar
     * @param portId - O identificador do porto interno
     * @throws Error quando o método não está implementado
     */
    public disconnectFromPort(externalPort: InterfacePort, portId: string): void {
        // TODO Método auto-gerado
        throw new Error("Método 'disconnect' não implementado");
    }

    /**
     * Desconecta um porto específico do componente.
     * 
     * Remove todas as conexões de um porto interno identificado pelo portId.
     * 
     * @param portId - O identificador do porto interno a ser desconectado
     */
    public disconnectPort(portId: string): void {
        const selectedPort = this.getPort(portId);
        if (selectedPort) {
            selectedPort.disconnect();
        }
    }
}
import { PortOutbox } from '../required/PortOutbox';
import { StandardPortOutbox } from '../required/StandardPortOutbox';

/**
 * InterfacePort (Porto de Interface)
 * 
 * Implementação abstrata de um porto de interface que é o elemento da estrutura 
 * responsável por receber as invocações das operações fornecidas pelo componente.
 * 
 * Um porto de interface atua como ponto de entrada para comunicação com outros
 * componentes, gerenciando conexões através de sua caixa de saída (outbox).
 * 
 * @abstract Esta classe deve ser estendida para implementar comportamentos específicos
 */
export abstract class InterfacePort {
    /** Identificador único do porto */
    protected id: string = '';
    
    /** Caixa de saída associada ao porto para gerenciar conexões externas */
    protected outbox: PortOutbox | null = null;

    /**
     * Inicializa o porto de interface.
     * 
     * Este método deve ser implementado pelas classes filhas para configurar
     * o estado inicial do porto e suas dependências.
     * 
     * @abstract
     */
    public abstract initialize(): void;
    
    /**
     * Retorna o identificador único do porto.
     * 
     * @returns O ID do porto
     */
    public getId(): string {
        return this.id;
    }

    /**
     * Retorna a caixa de saída associada ao porto.
     * 
     * @returns A caixa de saída ou null se não houver uma associada
     */
    public getOutbox(): PortOutbox | null {
        return this.outbox;
    }

    /**
     * Conecta este porto a um porto externo.
     * 
     * Estabelece uma conexão com outro porto de interface através da caixa
     * de saída, se ela for do tipo StandardPortOutbox.
     * 
     * @param externalPort - O porto externo ao qual se conectar
     */
    public connect(externalPort: InterfacePort): void {
        if (this.outbox instanceof StandardPortOutbox) {
            this.outbox.connect(externalPort);
        }
    }

    /**
     * Conecta este porto a uma referência não-componente.
     * 
     * Permite conexões com objetos que não são portos de interface,
     * como funções, objetos ou outras referências externas.
     * 
     * @param externalReference - A referência externa não-componente
     */
    public connectNonComponent(externalReference: any): void {
        // Implementação para conexões não-componente
    }

    /**
     * Desconecta este porto de um porto externo específico.
     * 
     * Remove a conexão com um porto externo específico, mantendo
     * outras conexões ativas.
     * 
     * @param externalPort - O porto externo do qual se desconectar
     */
    public disconnectFrom(externalPort: InterfacePort): void {
        // Implementação para desconectar porto externo específico
    }

    /**
     * Desconecta completamente o porto.
     * 
     * Remove todas as conexões externas e limpa a referência à caixa
     * de saída, efetivamente isolando o porto.
     */
    public disconnect(): void {
        // Remove a referência ao outbox que acessa componente externo
        this.outbox = null;
    }
}
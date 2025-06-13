import { PortOutbox } from './PortOutbox';

/**
 * NonComponentPortOutbox (Caixa de Saída de Porto Não-Componente)
 * 
 * Especialização abstrata de PortOutbox voltada ao envio de invocação de 
 * operações requeridas a referências que não são componentes tradicionais.
 * 
 * Esta implementação permite conexões com objetos, funções, ou outras
 * referências externas que não seguem o padrão de InterfacePort.
 * 
 * @abstract Esta classe deve ser estendida para implementar comportamentos específicos
 */
export abstract class NonComponentPortOutbox extends PortOutbox {
    /** Referência externa não-componente à qual esta caixa de saída está conectada */
    protected externalPort: any;

    /**
     * Conecta esta caixa de saída a uma referência externa não-componente.
     * 
     * Estabelece uma conexão com objetos que não são portos de interface,
     * como funções, objetos, ou outras referências externas.
     * 
     * @param externalReference - A referência externa não-componente ao qual se conectar
     */
    public connect(externalReference: any): void {
        // Implementação para conectar a referência não-componente
    }
    
    /**
     * Desconecta esta caixa de saída da referência externa.
     * 
     * Remove a conexão com a referência externa não-componente,
     * efetivamente isolando esta caixa de saída.
     */
    public disconnect(): void {
        // Implementação para desconectar
    }
}
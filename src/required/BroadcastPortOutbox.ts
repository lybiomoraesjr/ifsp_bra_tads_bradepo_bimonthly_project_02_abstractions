import { InterfacePort } from '../provided/InterfacePort';
import { PortOutbox } from './PortOutbox';

/**
 * BroadcastPortOutbox (Caixa de Saída de Transmissão de Porto)
 * 
 * Especialização abstrata de PortOutbox voltada ao envio de invocação de 
 * operações requeridas a múltiplos componentes simultaneamente.
 * 
 * Esta implementação permite comunicação broadcast, onde uma única caixa
 * de saída pode se conectar a múltiplos portos externos e enviar mensagens
 * para todos eles simultaneamente.
 * 
 * @abstract Esta classe deve ser estendida para implementar comportamentos específicos
 */
export abstract class BroadcastPortOutbox extends PortOutbox {
    /** Lista de portas externas às quais esta caixa de saída está conectada */
    protected externalPorts: InterfacePort[] = [];
    
    /**
     * Conecta esta caixa de saída a um porto externo.
     * 
     * Adiciona um novo porto à lista de conexões, permitindo que esta
     * caixa de saída envie mensagens para múltiplos destinos.
     * 
     * @param externalPort - O porto externo ao qual se conectar
     */
    public connect(externalPort: InterfacePort): void {
        // Implementação para conectar ao porto de transmissão
    }

    /**
     * Desconecta esta caixa de saída de um porto externo específico.
     * 
     * Remove um porto específico da lista de conexões, mantendo
     * as outras conexões ativas.
     * 
     * @param externalPort - O porto externo do qual se desconectar
     */
    public disconnectFrom(externalPort: InterfacePort): void {
        // Implementação para desconectar porto externo específico
    }
    
    /**
     * Desconecta esta caixa de saída de todos os portos externos.
     * 
     * Remove todas as conexões externas, efetivamente isolando
     * esta caixa de saída de qualquer comunicação externa.
     */
    public disconnect(): void {
        // Implementação para desconectar todos os portos
    }
}